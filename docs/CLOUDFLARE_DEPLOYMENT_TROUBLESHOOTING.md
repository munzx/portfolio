# Cloudflare Deployment Troubleshooting

## Node.js Modules Error Fix

If you encounter errors about `fs`, `path`, or `node:async_hooks` modules during Cloudflare deployment:

### Solution 1: Enable nodejs_compat in Cloudflare Pages Dashboard

1. Go to your Cloudflare Pages dashboard
2. Select your project
3. Go to **Settings** → **Functions**
4. Scroll to **Compatibility flags**
5. Add `nodejs_compat` to the list
6. Save changes
7. Redeploy your project

### Solution 2: Using Wrangler CLI

If deploying with Wrangler CLI, ensure your `wrangler.toml` includes:

```toml
compatibility_flags = ["nodejs_compat"]
```

### Solution 3: Environment Variables Setup

Make sure to set these environment variables in Cloudflare Pages:

1. Go to **Settings** → **Environment variables**
2. Add:
   - `SENDGRID_API_KEY`: Your SendGrid API key
   - `SENDGRID_FROM_EMAIL`: Your sender email
   - `SENDGRID_TO_EMAIL`: Your business email

### Current Configuration Status

✅ SvelteKit adapter configured for Cloudflare
✅ Vite config optimized for Node.js modules
✅ wrangler.toml includes nodejs_compat flag
✅ Local build successful

### Deployment Commands

```bash
# Build locally first to test
npm run build

# Deploy with Wrangler (if using CLI)
npx wrangler pages deploy .svelte-kit/output/client

# Or connect your GitHub repo to Cloudflare Pages for automatic deployments
```

### If Issues Persist

Try building with explicit external modules configuration by updating `vite.config.ts`:

```typescript
export default defineConfig({
  // ... existing config
  build: {
    rollupOptions: {
      external: ['fs', 'path', 'crypto', 'stream']
    }
  }
});
```

The current configuration should work with the nodejs_compat flag enabled in Cloudflare.
