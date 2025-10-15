# Netlify Deployment Fix Guide

## Issues Resolved

### 1. Multiple Lock Files Conflict
**Problem**: The project had multiple package manager lock files (`package-lock.json`, `pnpm-lock.yaml`, `bun.lockb`), causing Netlify to be confused about which package manager to use.

**Solution**: 
- Updated `.gitignore` to exclude `pnpm-lock.yaml` and `bun.lockb`
- Kept only `package-lock.json` for npm (Netlify's default)

### 2. Prisma Client Generation
**Problem**: Prisma requires client generation after installation, which wasn't configured for CI/CD.

**Solution**:
- Added `postinstall` script to `package.json` that automatically generates Prisma client
- Added `PRISMA_SKIP_POSTINSTALL_GENERATE` environment variable in `netlify.toml` to prevent duplicate generations

### 3. Missing Netlify Configuration
**Problem**: No `netlify.toml` file to specify build settings and redirects.

**Solution**: Created `netlify.toml` with:
- Build command and output directory
- Node version specification
- SPA routing redirects
- Security headers
- Asset caching rules

## Steps to Deploy on Netlify

### Step 1: Clean Up Lock Files (Local)
```bash
# Remove conflicting lock files
rm pnpm-lock.yaml bun.lockb

# Ensure package-lock.json is up to date
npm install
```

### Step 2: Commit Changes
```bash
git add .
git commit -m "Fix: Netlify deployment configuration"
git push
```

### Step 3: Configure Netlify Dashboard

#### Build Settings:
- **Base directory**: (leave empty or set to root)
- **Build command**: `npm run build`
- **Publish directory**: `dist`
- **Node version**: `18.17.0` (or add to netlify.toml)

#### Environment Variables (if needed):
Add these in Netlify Dashboard → Site Settings → Environment Variables:
- `NODE_VERSION`: `18.17.0`
- `DATABASE_URL`: `file:./dev.db` (for SQLite, or your production DB URL)
- `VITE_API_URL`: Your API endpoint (if using external backend)

### Step 4: Deploy
- Trigger a new deploy from Netlify Dashboard
- Or push to your main branch to auto-deploy

## Important Notes

### Backend Considerations
⚠️ **Important**: This project includes an Express server (`server/index.js`) and uses Prisma with SQLite. 

**Current Setup**: Frontend-only deployment (static site)
- The backend server will NOT run on Netlify's static hosting
- API routes in the app will fail unless you:
  1. Deploy backend separately (Render, Railway, Heroku, etc.)
  2. Or convert to Netlify Functions (requires refactoring)

### Option A: Separate Backend Deployment (Recommended)
Deploy your backend to a service like:
- **Render**: Free tier, supports Node.js + SQLite
- **Railway**: Good for full-stack apps
- **Heroku**: Classic choice
- **Fly.io**: Modern alternative

Then update your frontend environment variables:
```env
VITE_API_URL=https://your-backend-url.com
```

### Option B: Convert to Netlify Functions
Refactor `server/` code into Netlify Functions:
1. Create `netlify/functions/` directory
2. Convert Express routes to individual function files
3. Update API calls in frontend

### Option C: Frontend-Only Deployment
If you don't need the backend:
1. Remove server dependencies from `package.json`
2. Remove API calls from frontend
3. Use static data or external APIs

## Verifying the Build

### Local Build Test
Before deploying, test the build locally:
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install

# Test build
npm run build

# Preview built site
npm run preview
```

### Common Build Errors and Fixes

#### Error: "Cannot find module '@prisma/client'"
**Fix**: Ensure postinstall script runs:
```bash
npm run prisma:generate
npm run build
```

#### Error: "Multiple lockfiles found"
**Fix**: Remove all lock files except `package-lock.json`:
```bash
rm pnpm-lock.yaml bun.lockb yarn.lock
npm install
```

#### Error: TypeScript compilation errors
**Fix**: Check `tsconfig.json` and fix type errors:
```bash
npm run lint
npx tsc --noEmit
```

## Post-Deployment Checklist

- [ ] Site loads correctly at Netlify URL
- [ ] All routes work (SPA routing)
- [ ] Images and assets load
- [ ] Navigation menu works
- [ ] Forms submit (if using Netlify Forms)
- [ ] No console errors in browser
- [ ] Mobile responsive
- [ ] SEO meta tags present

## Troubleshooting

### Build fails with dependency errors
1. Check `package.json` for correct versions
2. Clear cache in Netlify: Deploy settings → Clear cache and retry deploy
3. Review build logs for specific missing packages

### Site deploys but shows blank page
1. Check browser console for errors
2. Verify `dist/` directory is being created
3. Check that `index.html` exists in `dist/`
4. Verify asset paths are correct (should be relative)

### Routes return 404
1. Verify `netlify.toml` redirects are configured
2. Check SPA fallback redirect is in place
3. Ensure `react-router-dom` uses `BrowserRouter` not `HashRouter`

## Additional Resources

- [Netlify Documentation](https://docs.netlify.com/)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [Prisma in Production](https://www.prisma.io/docs/guides/deployment)

## Support

If deployment still fails:
1. Check Netlify build logs (full output)
2. Compare with this guide
3. Verify all environment variables are set
4. Test build locally first
5. Check for any custom configurations that might conflict
