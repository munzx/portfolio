import sgMail from '@sendgrid/mail';
import { SENDGRID_API_KEY, SENDGRID_FROM_EMAIL, SENDGRID_TO_EMAIL } from '$env/static/private';

// Initialize SendGrid
sgMail.setApiKey(SENDGRID_API_KEY);

export interface EmailData {
    name: string;
    email: string;
    company?: string;
    projectType?: string;
    budget?: string;
    timeline?: string;
    message: string;
    priority?: string;
}

export interface EmailResult {
    success: boolean;
    messageId?: string;
    error?: string;
}

// SendGrid email sending implementation for business notifications
export async function sendContactEmail(data: EmailData): Promise<EmailResult> {
    try {
        const htmlContent = formatContactEmailHtml(data);
        const textContent = formatContactEmailText(data);

        const msg = {
            to: SENDGRID_TO_EMAIL, // Your email where you want to receive contact form submissions
            from: SENDGRID_FROM_EMAIL, // Your verified sender email
            replyTo: data.email, // Set reply-to as the contact form submitter's email
            subject: `New Contact Form Submission from ${data.name}`,
            text: textContent,
            html: htmlContent,
        };

        const response = await sgMail.send(msg);

        return {
            success: true,
            messageId: response[0].headers['x-message-id'] || `sg_${Date.now()}`
        };
    } catch (error) {
        console.error('SendGrid Error:', error);

        let errorMessage = 'Unknown error occurred';
        if (error && typeof error === 'object' && 'message' in error) {
            errorMessage = (error as Error).message;
        } else if (error && typeof error === 'object' && 'response' in error) {
            const sgError = error as { response?: { body?: { errors?: Array<{ message?: string }> } } };
            errorMessage = sgError.response?.body?.errors?.[0]?.message || 'SendGrid API error';
        }

        return {
            success: false,
            error: errorMessage
        };
    }
}

// Send confirmation email to user
export async function sendConfirmationEmail(data: EmailData): Promise<EmailResult> {
    try {
        console.log('Attempting to send confirmation email to:', data.email);
        console.log('SendGrid FROM email:', SENDGRID_FROM_EMAIL);

        const htmlContent = formatConfirmationEmailHtml(data);
        const textContent = formatConfirmationEmailText(data);

        const msg = {
            to: data.email, // Send to the user who submitted the form
            from: SENDGRID_FROM_EMAIL, // Your verified sender email
            subject: `Thanks for reaching out! Your project inquiry is received 🚀`,
            text: textContent,
            html: htmlContent,
        };

        console.log('Sending email with config:', { to: msg.to, from: msg.from, subject: msg.subject });

        const response = await sgMail.send(msg);

        console.log('SendGrid response:', {
            statusCode: response[0].statusCode,
            headers: response[0].headers,
            body: response[0].body
        });

        return {
            success: true,
            messageId: response[0].headers['x-message-id'] || `confirmation_${Date.now()}`
        };
    } catch (error) {
        console.error('SendGrid Confirmation Email Error:', error);

        // More detailed error logging
        if (error && typeof error === 'object') {
            if ('response' in error) {
                const sgError = error as { code?: number; response?: { body?: unknown; headers?: unknown } };
                console.error('SendGrid API Error Details:', {
                    statusCode: sgError.code,
                    body: sgError.response?.body,
                    headers: sgError.response?.headers
                });
            }
        }

        let errorMessage = 'Unknown error occurred';
        if (error && typeof error === 'object' && 'message' in error) {
            errorMessage = (error as Error).message;
        } else if (error && typeof error === 'object' && 'response' in error) {
            const sgError = error as { response?: { body?: { errors?: Array<{ message?: string }> } } };
            errorMessage = sgError.response?.body?.errors?.[0]?.message || 'SendGrid API error';
        }

        return {
            success: false,
            error: errorMessage
        };
    }
}

// Email template formatting
export function formatContactEmailHtml(data: EmailData): string {
    const priorityColor = data.priority === 'high' ? '#ef4444' : data.priority === 'low' ? '#10b981' : '#f59e0b';

    return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Form Submission</title>
        <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 20px; background-color: #f8fafc; }
            .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); overflow: hidden; }
            .header { background: linear-gradient(135deg, #3b82f6 0%, #10b981 100%); color: white; padding: 30px; text-align: center; }
            .content { padding: 30px; }
            .field { margin-bottom: 20px; padding: 15px; background: #f8fafc; border-radius: 6px; border-left: 4px solid #3b82f6; }
            .field-label { font-weight: 600; color: #374151; margin-bottom: 5px; }
            .field-value { color: #6b7280; }
            .message-field { background: #fffbeb; border-left-color: #f59e0b; }
            .priority { display: inline-block; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 600; text-transform: uppercase; }
            .footer { background: #f9fafb; padding: 20px; text-align: center; font-size: 14px; color: #6b7280; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1 style="margin: 0; font-size: 24px;">New Contact Form Submission</h1>
                <p style="margin: 10px 0 0; opacity: 0.9;">DemoFyIt Portfolio</p>
            </div>
            
            <div class="content">
                <div class="field">
                    <div class="field-label">Contact Information</div>
                    <div class="field-value">
                        <strong>${data.name}</strong><br>
                        <a href="mailto:${data.email}" style="color: #3b82f6; text-decoration: none;">${data.email}</a>
                        ${data.company ? `<br>Company: ${data.company}` : ''}
                    </div>
                </div>

                ${data.projectType ? `
                <div class="field">
                    <div class="field-label">Project Type</div>
                    <div class="field-value">${data.projectType}</div>
                </div>
                ` : ''}

                ${data.budget ? `
                <div class="field">
                    <div class="field-label">Budget Range</div>
                    <div class="field-value">${data.budget}</div>
                </div>
                ` : ''}

                ${data.timeline ? `
                <div class="field">
                    <div class="field-label">Timeline</div>
                    <div class="field-value">${data.timeline}</div>
                </div>
                ` : ''}

                ${data.priority ? `
                <div class="field">
                    <div class="field-label">Priority Level</div>
                    <div class="field-value">
                        <span class="priority" style="background-color: ${priorityColor}; color: white;">${data.priority}</span>
                    </div>
                </div>
                ` : ''}

                <div class="field message-field">
                    <div class="field-label">Message</div>
                    <div class="field-value" style="white-space: pre-wrap;">${data.message}</div>
                </div>
            </div>

            <div class="footer">
                <p>Submitted on ${new Date().toLocaleString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        timeZoneName: 'short'
    })}</p>
                <p style="margin-top: 10px;">
                    <a href="mailto:${data.email}?subject=Re: Your Project Inquiry" style="color: #3b82f6; text-decoration: none;">Reply to ${data.name}</a>
                </p>
            </div>
        </div>
    </body>
    </html>
    `;
}

export function formatContactEmailText(data: EmailData): string {
    return `
NEW CONTACT FORM SUBMISSION - DemoFyIt Portfolio
===============================================

CONTACT INFORMATION
-------------------
Name: ${data.name}
Email: ${data.email}${data.company ? `
Company: ${data.company}` : ''}

PROJECT DETAILS
---------------${data.projectType ? `
Project Type: ${data.projectType}` : ''}${data.budget ? `
Budget Range: ${data.budget}` : ''}${data.timeline ? `
Timeline: ${data.timeline}` : ''}${data.priority ? `
Priority Level: ${data.priority.toUpperCase()}` : ''}

MESSAGE
-------
${data.message}

===============================================
Submitted: ${new Date().toLocaleString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        timeZoneName: 'short'
    })}

Reply to: ${data.email}
	`.trim();
}

// Confirmation email templates for users
export function formatConfirmationEmailHtml(data: EmailData): string {
    return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Thank you for your inquiry!</title>
        <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 20px; background-color: #0a0a0a; }
            .container { max-width: 600px; margin: 0 auto; background: #1a1a1a; border-radius: 12px; overflow: hidden; border: 1px solid #333; }
            .header { background: linear-gradient(135deg, #3b82f6 0%, #10b981 100%); color: white; padding: 40px 30px; text-align: center; }
            .content { padding: 40px 30px; color: #e5e5e5; }
            .hero-text { font-size: 24px; font-weight: 700; color: #ffffff; margin-bottom: 16px; }
            .subtitle { font-size: 18px; color: #10b981; margin-bottom: 24px; }
            .section { margin-bottom: 30px; padding: 20px; background: #262626; border-radius: 8px; border-left: 4px solid #10b981; }
            .section-title { font-weight: 600; color: #10b981; margin-bottom: 12px; font-size: 16px; }
            .section-content { color: #d1d5db; }
            .cta-button { display: inline-block; background: linear-gradient(135deg, #3b82f6 0%, #10b981 100%); color: white; padding: 16px 32px; border-radius: 8px; text-decoration: none; font-weight: 600; margin: 20px 0; }
            .timeline { background: #1e293b; padding: 20px; border-radius: 8px; margin: 20px 0; }
            .timeline-item { display: flex; align-items: center; margin-bottom: 12px; }
            .timeline-dot { width: 12px; height: 12px; background: #10b981; border-radius: 50%; margin-right: 16px; }
            .footer { background: #111; padding: 30px; text-align: center; color: #9ca3af; font-size: 14px; }
            .brand { color: #10b981; font-weight: 700; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1 style="margin: 0; font-size: 28px;">Thanks for reaching out!</h1>
                <p style="margin: 12px 0 0; opacity: 0.9; font-size: 16px;">Your project inquiry is now in expert hands 🚀</p>
            </div>
            
            <div class="content">
                <div class="hero-text">Hi ${data.name}! 👋</div>
                <div class="subtitle">Your project just landed on my priority list</div>
                
                <p style="font-size: 16px; color: #d1d5db; margin-bottom: 24px;">
                    I've received your inquiry and I'm already excited about the potential of your ${data.projectType || 'project'}. 
                    Here's what happens next:
                </p>

                <div class="timeline">
                    <div class="timeline-item">
                        <div class="timeline-dot"></div>
                        <span style="color: #e5e5e5;"><strong>Within 24 hours:</strong> I'll review your requirements and research your industry</span>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-dot"></div>
                        <span style="color: #e5e5e5;"><strong>Within 48 hours:</strong> You'll receive a detailed project proposal with timeline and next steps</span>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-dot"></div>
                        <span style="color: #e5e5e5;"><strong>Free consultation:</strong> We'll schedule a 30-minute discovery call to dive deeper</span>
                    </div>
                </div>

                ${data.budget ? `
                <div class="section">
                    <div class="section-title">💰 Budget Range Noted</div>
                    <div class="section-content">I see you're working with a ${data.budget} budget. I'll tailor my proposal to maximize value within your range and suggest the best approach for your goals.</div>
                </div>
                ` : ''}

                ${data.timeline ? `
                <div class="section">
                    <div class="section-title">⏰ Timeline Acknowledged</div>
                    <div class="section-content">Your ${data.timeline} timeline is noted. I'll structure the project phases to meet your deadline while ensuring quality delivery.</div>
                </div>
                ` : ''}

                <div class="section">
                    <div class="section-title">🎯 What Makes This Different</div>
                    <div class="section-content">
                        Unlike other developers, I don't just code—I solve business problems. Your project will get a strategic approach 
                        focused on user experience, performance, and measurable results that drive real growth.
                    </div>
                </div>

                <p style="color: #d1d5db; margin: 30px 0;">
                    In the meantime, feel free to check out some of my recent work and client success stories on my portfolio. 
                    I'm confident we can create something amazing together!
                </p>

                <div style="text-align: center;">
                    <a href="#" class="cta-button">View My Portfolio</a>
                </div>
            </div>

            <div class="footer">
                <p style="margin: 0 0 16px;"><span class="brand">DemoFyIt</span> - Turning Ideas Into Digital Reality</p>
                <p style="margin: 0; font-size: 12px;">
                    Have questions? Just reply to this email - I personally read and respond to every message.
                </p>
            </div>
        </div>
    </body>
    </html>
    `;
}

export function formatConfirmationEmailText(data: EmailData): string {
    return `
Hi ${data.name}! 👋

Thanks for reaching out about your ${data.projectType || 'project'}!

Your project inquiry just landed on my priority list, and I'm already excited about the potential. Here's what happens next:

TIMELINE:
⏰ Within 24 hours: I'll review your requirements and research your industry
📋 Within 48 hours: You'll receive a detailed project proposal with timeline and next steps  
📞 Free consultation: We'll schedule a 30-minute discovery call to dive deeper

${data.budget ? `💰 BUDGET NOTED: ${data.budget}
I'll tailor my proposal to maximize value within your range and suggest the best approach for your goals.

` : ''}${data.timeline ? `⏰ TIMELINE ACKNOWLEDGED: ${data.timeline}
Your timeline is noted. I'll structure the project phases to meet your deadline while ensuring quality delivery.

` : ''}🎯 WHAT MAKES THIS DIFFERENT:
Unlike other developers, I don't just code—I solve business problems. Your project will get a strategic approach focused on user experience, performance, and measurable results that drive real growth.

In the meantime, feel free to check out some of my recent work and client success stories. I'm confident we can create something amazing together!

Have questions? Just reply to this email - I personally read and respond to every message.

Best regards,
DemoFyIt - Turning Ideas Into Digital Reality

---
This email was sent in response to your inquiry submitted on ${new Date().toLocaleDateString()}
	`.trim();
}
