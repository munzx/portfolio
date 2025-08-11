# API Security Implementation

## 🔒 **Security Features Implemented**

Your contact form API is now protected with multiple layers of security:

### 1. **Rate Limiting**
- **Limit**: 3 submissions per 15 minutes per IP address
- **Storage**: In-memory (use Redis in production)
- **Response**: 429 status with retry-after header
- **Cleanup**: Automatic cleanup of expired rate limit entries

### 2. **Origin/Referer Validation**
- **Development**: Disabled for testing
- **Production**: Only allows requests from your specified domains
- **Configure**: Update `allowedOrigins` array in the API code
- **Protection**: Prevents cross-site request attacks

### 3. **Bot Detection**
- **Blocked User Agents**: curl, wget, python, bot, crawler, spider, scraper
- **Response**: 403 Forbidden for suspicious bots
- **Logging**: All suspicious requests are logged

### 4. **Spam Content Detection**
- **Patterns Blocked**:
  - Spam keywords (viagra, casino, lottery, etc.)
  - Multiple URLs (more than 2)
  - Repeated characters (10+ in a row)
  - Excessive caps (10+ consecutive uppercase letters)
- **Response**: 400 Bad Request for spam content

### 5. **Enhanced Input Validation**
- **Required Fields**: name, email, message
- **Length Limits**:
  - Name: 100 characters
  - Email: 200 characters  
  - Message: 2000 characters
- **Email Format**: RFC-compliant email validation
- **Disposable Emails**: Blocks common temporary email services

### 6. **Comprehensive Logging**
- **Request Details**: IP, User-Agent, Origin, Referer
- **Form Data**: Sanitized submission content
- **Security Events**: Rate limits, spam detection, bot attempts
- **Email Status**: Success/failure of email sending

## 🛡️ **Protection Against:**

- **Spam Submissions**: Content filtering and pattern detection
- **Bot Attacks**: User-agent and behavioral analysis
- **Rate Limiting**: Prevents API abuse and flooding
- **Cross-Site Attacks**: Origin validation
- **Email Exhaustion**: Rate limiting prevents quota abuse
- **Data Injection**: Input validation and sanitization

## ⚙️ **Configuration for Production**

### Update Allowed Origins
In `src/routes/api/contact/+server.ts`, update line ~110:

```typescript
const allowedOrigins = [
    'https://yourdomain.com',
    'https://www.yourdomain.com',
    // Add your actual domain here
];
```

### Rate Limiting Recommendations
For production, consider:
- **Redis**: Replace in-memory storage with Redis
- **Database**: Store rate limit data in your database
- **CDN**: Use Cloudflare or similar for additional protection

### Monitoring
- Check server logs for security events
- Monitor rate limit violations
- Track spam detection patterns
- Set up alerts for unusual activity

## 🚨 **Security Headers**

The API now returns:
- `X-RateLimit-Remaining`: Shows remaining requests
- `Retry-After`: For rate-limited requests

## 📊 **Security Events Logged**

1. **Rate Limit Exceeded**: IP and timestamp
2. **Invalid Origin**: Origin/referer and IP
3. **Bot Detection**: User-agent and IP
4. **Spam Content**: Truncated content and IP
5. **All Submissions**: Sanitized audit trail

## 🔄 **Rate Limit Response Example**

```json
{
  "success": false,
  "error": "Too many requests. Please try again later."
}
```

Headers: `Retry-After: 900` (15 minutes)

## ✅ **Testing Security**

1. **Rate Limiting**: Submit 4+ forms quickly
2. **Spam Detection**: Try submitting with spam keywords
3. **Bot Detection**: Use curl to test endpoint
4. **Length Validation**: Submit very long messages

Your contact form is now significantly more secure and resistant to abuse while maintaining a smooth user experience for legitimate submissions.
