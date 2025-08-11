# Cloudflare Pages Deployment Guide

## Setup Steps

### 1. Repository Configuration
✅ SvelteKit configured with @sveltejs/adapter-cloudflare
✅ Build output directory: `.svelte-kit/output/client`
✅ Local build successful

### 2. Cloudflare Pages Setup

#### Option A: GitHub Integration (Recommended)
1. Go to [Cloudflare Pages](https://pages.cloudflare.com/)
2. Click "Create a project"
3. Connect your GitHub account
4. Select your repository: `munzx/portfolio`
5. Configure build settings:
   - **Framework preset**: SvelteKit
   - **Build command**: `npm run build`
   - **Build output directory**: `.svelte-kit/output/client`

#### Option B: Direct Upload
1. Build locally: `npm run build`
2. Upload the `.svelte-kit/output/client` folder to Cloudflare Pages

### 3. Enable Node.js Compatibility

**Important**: After deployment, you must enable Node.js compatibility for SendGrid to work:

1. Go to your project in Cloudflare Pages dashboard
2. Navigate to **Settings** → **Functions**
3. Scroll to **Compatibility flags**
4. Add `nodejs_compat` to the list
5. Save changes
6. **Redeploy** your project (trigger a new deployment)

### 4. Environment Variables

Set these in Cloudflare Pages Dashboard:
1. Go to **Settings** → **Environment variables**
2. Add for Production:
   - `SENDGRID_API_KEY`: Your SendGrid API key
   - `SENDGRID_FROM_EMAIL`: Your verified sender email
   - `SENDGRID_TO_EMAIL`: Your business email

### 5. Deploy

Push to your main branch or manually trigger deployment.

## Troubleshooting

### Node.js Modules Error (fs, path, async_hooks)
- **Cause**: Missing `nodejs_compat` flag
- **Solution**: Add `nodejs_compat` to compatibility flags and redeploy

### SendGrid Errors
- **Cause**: Missing environment variables or API key
- **Solution**: Verify all environment variables are set correctly

### Build Errors
- **Cause**: Local vs. cloud environment differences
- **Solution**: Test locally with `npm run build` first

## Current Status
- ✅ Adapter configured for Cloudflare
- ✅ Build succeeds locally
- ✅ No wrangler.toml conflicts
- ⚠️ Need to set nodejs_compat flag after deployment
- ⚠️ Need to set environment variables
