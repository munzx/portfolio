# Cloudflare Pages Deployment Guide

## 🚀 **Deployment Steps**

### 1. **Code Configuration** ✅ (Already Done)
- ✅ Switched to `@sveltejs/adapter-cloudflare` 
- ✅ Updated `svelte.config.js`
- ✅ Created `wrangler.toml` with Node.js compatibility

### 2. **Cloudflare Pages Setup**

#### A. **Connect Your Repository**
1. Go to [Cloudflare Pages](https://pages.cloudflare.com/)
2. Click "Create a project" → "Connect to Git"
3. Select your GitHub repository: `munzx/portfolio`
4. Click "Begin setup"

#### B. **Build Configuration**
Use these exact settings:

**Project name:** `demofyit` (or your preferred name)

**Production branch:** `main`

**Build settings:**
- **Framework preset:** `SvelteKit`
- **Build command:** `npm run build`
- **Build output directory:** `.svelte-kit/cloudflare`
- **Root directory:** `/` (leave empty)

**Environment variables:** (Add these in "Advanced" settings)
```
SENDGRID_API_KEY=your_sendgrid_api_key_here
SENDGRID_FROM_EMAIL=your_verified_sender_email@domain.com
SENDGRID_TO_EMAIL=your_email_where_you_want_to_receive_forms@domain.com
```

#### C. **Compatibility Flags** ⚠️ **IMPORTANT**
After deployment, you need to add the Node.js compatibility flag:

1. Go to your Pages project dashboard
2. Click "Settings" → "Functions"
3. Scroll to "Compatibility flags"
4. Add: `nodejs_compat`
5. Click "Save"

### 3. **Custom Domain (Optional)**
1. In your Pages project, go to "Custom domains"
2. Click "Set up a custom domain"
3. Enter your domain (e.g., `yourdomain.com`)
4. Follow DNS setup instructions

### 4. **Environment Variables Setup**
In your Cloudflare Pages dashboard:
1. Go to "Settings" → "Environment variables"
2. Add your SendGrid credentials:
   - `SENDGRID_API_KEY`
   - `SENDGRID_FROM_EMAIL` 
   - `SENDGRID_TO_EMAIL`

## 🔧 **Troubleshooting**

### Common Issues & Solutions:

#### 1. **"nodejs_compat" Flag Missing**
**Error:** `The package "path" wasn't found on the file system`
**Solution:** Add `nodejs_compat` compatibility flag (see step 2C above)

#### 2. **Build Fails**
**Check:**
- Build command is `npm run build`
- Output directory is `.svelte-kit/cloudflare`
- Node version is 18+ in build settings

#### 3. **Environment Variables Not Working**
**Check:**
- Variables are set in both "Production" and "Preview" environments
- Variable names match exactly (case-sensitive)
- No extra spaces in values

#### 4. **Email Not Sending**
**Check:**
- SendGrid API key has "Mail Send" permissions
- Sender email is verified in SendGrid
- Check Cloudflare Functions logs for errors

## 📋 **Deployment Checklist**

Before deploying:
- [ ] ✅ Adapter configured (`adapter-cloudflare`)
- [ ] ✅ Build succeeds locally
- [ ] Update domain in origin validation (line ~110 in contact API)
- [ ] Set environment variables in Cloudflare
- [ ] Add `nodejs_compat` compatibility flag
- [ ] Test contact form after deployment

## 🔄 **Updating Domain Validation**

After you get your Cloudflare Pages URL, update the allowed origins in your contact API:

1. Open `src/routes/api/contact/+server.ts`
2. Find line ~110 with `allowedOrigins`
3. Update with your actual domains:

```typescript
const allowedOrigins = [
    'https://demofyit.pages.dev', // Your Cloudflare Pages URL
    'https://yourdomain.com',     // Your custom domain
    'https://www.yourdomain.com', // WWW version
];
```

## 🚀 **Ready to Deploy!**

Your project is now configured for Cloudflare Pages. The key changes made:

1. **Cloudflare Adapter**: Configured for Cloudflare's runtime
2. **Node.js Compatibility**: Enabled for SendGrid and other Node modules
3. **Security**: All existing security features will work on Cloudflare
4. **Email Integration**: SendGrid will work with environment variables

After deployment, your contact form will be fully functional with:
- ✅ Dual email system (business + user confirmation)
- ✅ Rate limiting and security protection
- ✅ Professional email templates
- ✅ Cloudflare's global CDN performance
