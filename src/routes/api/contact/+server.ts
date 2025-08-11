import { json, type RequestHandler } from '@sveltejs/kit';
import { sendContactEmail, sendConfirmationEmail, type EmailData } from '$lib/server/email';
import { dev } from '$app/environment';

interface ContactFormData {
    name: string;
    email: string;
    company?: string;
    projectType?: string;
    budget?: string;
    timeline?: string;
    message: string;
    priority?: string;
}

// Rate limiting - simple in-memory store (use Redis in production)
const rateLimit = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minutes
const RATE_LIMIT_MAX_REQUESTS = 3; // Max 3 submissions per 15 minutes per IP

// Spam detection patterns
const SPAM_PATTERNS = [
    /\b(viagra|casino|lottery|winner|congratulations|claim now|click here|free money|earn \$\d+)\b/i,
    /https?:\/\/[^\s]+/g, // Multiple URLs
    /(.)\1{10,}/, // Repeated characters
    /[A-Z]{10,}/, // Excessive caps
];

function isSpamContent(text: string): boolean {
    return SPAM_PATTERNS.some(pattern => {
        if (pattern.global) {
            const matches = text.match(pattern);
            return matches && matches.length > 2; // More than 2 URLs
        }
        return pattern.test(text);
    });
}

function getClientIP(request: Request): string {
    // Check various headers for real IP
    const forwarded = request.headers.get('x-forwarded-for');
    const realIP = request.headers.get('x-real-ip');
    const cfIP = request.headers.get('cf-connecting-ip');

    if (forwarded) {
        return forwarded.split(',')[0].trim();
    }
    return realIP || cfIP || 'unknown';
}

function checkRateLimit(ip: string): { allowed: boolean; remaining: number } {
    const now = Date.now();
    const key = ip;

    // Clean up expired entries
    for (const [k, v] of rateLimit.entries()) {
        if (v.resetTime <= now) {
            rateLimit.delete(k);
        }
    }

    const current = rateLimit.get(key);

    if (!current) {
        rateLimit.set(key, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
        return { allowed: true, remaining: RATE_LIMIT_MAX_REQUESTS - 1 };
    }

    if (current.resetTime <= now) {
        rateLimit.set(key, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
        return { allowed: true, remaining: RATE_LIMIT_MAX_REQUESTS - 1 };
    }

    if (current.count >= RATE_LIMIT_MAX_REQUESTS) {
        return { allowed: false, remaining: 0 };
    }

    current.count++;
    return { allowed: true, remaining: RATE_LIMIT_MAX_REQUESTS - current.count };
}

export const POST: RequestHandler = async ({ request }) => {
    try {
        // Security checks
        const clientIP = getClientIP(request);
        const userAgent = request.headers.get('user-agent') || '';
        const origin = request.headers.get('origin');
        const referer = request.headers.get('referer');

        console.log(`Contact form submission from IP: ${clientIP}, User-Agent: ${userAgent}`);

        // Check rate limiting
        const rateCheck = checkRateLimit(clientIP);
        if (!rateCheck.allowed) {
            console.warn(`Rate limit exceeded for IP: ${clientIP}`);
            return json(
                {
                    success: false,
                    error: 'Too many requests. Please try again later.'
                },
                {
                    status: 429,
                    headers: {
                        'Retry-After': '900' // 15 minutes
                    }
                }
            );
        }

        // Origin/Referer validation (in production)
        if (!dev) {
            const allowedOrigins = [
                'https://yourdomain.com',
                'https://www.yourdomain.com',
                // Add your actual domain here
            ];

            const isValidOrigin = origin && allowedOrigins.includes(origin);
            const isValidReferer = referer && allowedOrigins.some(domain => referer.startsWith(domain));

            if (!isValidOrigin && !isValidReferer) {
                console.warn(`Invalid origin/referer: ${origin || 'none'} / ${referer || 'none'} from IP: ${clientIP}`);
                return json(
                    {
                        success: false,
                        error: 'Invalid request origin.'
                    },
                    { status: 403 }
                );
            }
        }

        // Bot detection
        const suspiciousBots = [
            'curl', 'wget', 'python', 'bot', 'crawler', 'spider', 'scraper'
        ];

        if (suspiciousBots.some(bot => userAgent.toLowerCase().includes(bot))) {
            console.warn(`Suspicious user agent: ${userAgent} from IP: ${clientIP}`);
            return json(
                {
                    success: false,
                    error: 'Invalid request.'
                },
                { status: 403 }
            );
        }

        const data: ContactFormData = await request.json();

        // Enhanced validation
        if (!data.name || !data.email || !data.message) {
            return json(
                {
                    success: false,
                    error: 'Missing required fields: name, email, and message are required.'
                },
                { status: 400 }
            );
        }

        // Length validation
        if (data.name.length > 100 || data.email.length > 200 || data.message.length > 2000) {
            return json(
                {
                    success: false,
                    error: 'Input too long. Please keep your message under 2000 characters.'
                },
                { status: 400 }
            );
        }

        // Spam detection
        const combinedText = `${data.name} ${data.email} ${data.message} ${data.company || ''}`;
        if (isSpamContent(combinedText)) {
            console.warn(`Spam detected from IP: ${clientIP}, content: ${combinedText.substring(0, 100)}...`);
            return json(
                {
                    success: false,
                    error: 'Message appears to be spam. Please try again.'
                },
                { status: 400 }
            );
        }

        // Email validation (enhanced)
        const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        if (!emailRegex.test(data.email)) {
            return json(
                {
                    success: false,
                    error: 'Invalid email format.'
                },
                { status: 400 }
            );
        }

        // Disposable email detection (basic)
        const disposableEmailDomains = [
            '10minutemail.com', 'guerrillamail.com', 'mailinator.com',
            'tempmail.org', 'throwaway.email', 'temp-mail.org'
        ];

        const emailDomain = data.email.split('@')[1]?.toLowerCase();
        if (disposableEmailDomains.includes(emailDomain)) {
            return json(
                {
                    success: false,
                    error: 'Please use a permanent email address.'
                },
                { status: 400 }
            );
        }

        // Log the submission for audit trail
        console.log('Contact form submission received:', {
            name: data.name,
            email: data.email,
            company: data.company || 'Not specified',
            projectType: data.projectType || 'Not specified',
            budget: data.budget || 'Not specified',
            timeline: data.timeline || 'Not specified',
            priority: data.priority || 'medium',
            message: data.message.substring(0, 100) + (data.message.length > 100 ? '...' : ''),
            timestamp: new Date().toISOString(),
            ip: clientIP,
            userAgent: userAgent
        });

        // Prepare email data
        const emailData: EmailData = {
            name: data.name,
            email: data.email,
            company: data.company,
            projectType: data.projectType,
            budget: data.budget,
            timeline: data.timeline,
            message: data.message,
            priority: data.priority
        };

        // Send emails via SendGrid
        const [businessEmailResult, confirmationEmailResult] = await Promise.allSettled([
            sendContactEmail(emailData), // Email to business owner
            sendConfirmationEmail(emailData) // Confirmation email to user
        ]);

        // Handle business email result
        if (businessEmailResult.status === 'fulfilled' && businessEmailResult.value.success) {
            console.log('Business notification email sent successfully:', businessEmailResult.value.messageId);
        } else {
            console.error('Failed to send business notification email:',
                businessEmailResult.status === 'rejected' ? businessEmailResult.reason : businessEmailResult.value.error);
        }

        // Handle confirmation email result
        if (confirmationEmailResult.status === 'fulfilled' && confirmationEmailResult.value.success) {
            console.log('User confirmation email sent successfully:', confirmationEmailResult.value.messageId);
        } else {
            console.error('Failed to send user confirmation email:',
                confirmationEmailResult.status === 'rejected' ? confirmationEmailResult.reason : confirmationEmailResult.value.error);
        }

        return json(
            {
                success: true,
                message: 'Thank you for your inquiry! We will get back to you within 48 hours.',
                submissionId: `CONTACT_${Date.now()}`,
                rateLimit: {
                    remaining: rateCheck.remaining
                }
            },
            {
                status: 200,
                headers: {
                    'X-RateLimit-Remaining': rateCheck.remaining.toString()
                }
            }
        );

    } catch (error) {
        console.error('Error processing contact form:', error);

        return json(
            {
                success: false,
                error: 'Something went wrong. Please try again later.'
            },
            { status: 500 }
        );
    }
};
