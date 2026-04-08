# Deployment Guide

## Deploy to Vercel (Recommended)

Vercel offers the best experience for deploying Vite applications with zero configuration.

### Step 1: Push to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit"

# Create a new repository on GitHub, then:
git remote add origin https://github.com/yourusername/portfolio.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Vercel

1. Go to [https://vercel.com](https://vercel.com)
2. Sign up or log in with your GitHub account
3. Click "Add New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Vite settings:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. Click "Deploy"
7. Wait for deployment to complete (usually 1-2 minutes)
8. Your site is live with HTTPS enabled!

### Step 3: Custom Domain (Optional)

1. Go to your project settings in Vercel
2. Navigate to "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions
5. Vercel will automatically provision SSL certificate

### Auto Deployment

Every time you push to your main branch, Vercel will automatically:
- Build your project
- Deploy the new version
- Keep the old version as a backup

---

## Deploy to GitHub Pages

### Step 1: Install gh-pages

```bash
npm install --save-dev gh-pages
```

### Step 2: Update package.json

Add these lines to your `package.json`:

```json
{
  "homepage": "https://yourusername.github.io/portfolio",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

### Step 3: Update vite.config.js

Add base path:

```javascript
export default defineConfig({
  base: '/portfolio/',  // Replace with your repo name
  plugins: [react()],
  // ... rest of config
})
```

### Step 4: Deploy

```bash
npm run deploy
```

Your site will be live at: `https://yourusername.github.io/portfolio`

---

## Deploy to Netlify

### Step 1: Push to GitHub (same as Vercel)

### Step 2: Deploy to Netlify

1. Go to [https://netlify.com](https://netlify.com)
2. Sign up or log in
3. Click "Add new site" → "Import an existing project"
4. Connect to GitHub and select your repository
5. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"
7. Your site is live!

### Custom Domain on Netlify

1. Go to "Domain settings"
2. Add custom domain
3. Follow DNS instructions
4. SSL is automatically enabled

---

## Environment Variables (If Needed)

If you need to add API keys or environment variables:

### For Vercel:
1. Go to Project Settings → Environment Variables
2. Add your variables
3. Redeploy

### For Local Development:
Create a `.env` file in the root:

```
VITE_API_KEY=your_api_key_here
```

Access in code:
```javascript
const apiKey = import.meta.env.VITE_API_KEY
```

---

## Performance Optimization

Before deploying, ensure:

1. ✅ Images are optimized (use WebP format)
2. ✅ Remove console.logs from production code
3. ✅ Test on mobile devices
4. ✅ Run Lighthouse audit
5. ✅ Check all links work
6. ✅ Test dark/light mode toggle
7. ✅ Verify all sections scroll correctly

---

## Troubleshooting

### Build Fails

- Check Node.js version (should be 18+)
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again
- Try `npm run build` locally

### 404 on Refresh (SPA Issue)

For Vercel: Create `vercel.json`:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

For Netlify: Create `public/_redirects`:
```
/*    /index.html   200
```

### Slow Loading

- Optimize images
- Check bundle size: `npm run build` and check dist folder
- Use lazy loading for heavy components

---

## Monitoring

### Vercel Analytics

Enable in project settings for:
- Page views
- Performance metrics
- User insights

### Google Analytics (Optional)

Add to `index.html` before `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

---

## Maintenance

### Updating Content

1. Edit files in `src/data/` folder
2. Commit and push to GitHub
3. Vercel/Netlify will auto-deploy

### Updating Dependencies

```bash
# Check for updates
npm outdated

# Update all dependencies
npm update

# Or update specific package
npm install package-name@latest
```

---

## Cost

- **Vercel Free Tier**: Perfect for portfolios
  - Unlimited deployments
  - HTTPS included
  - 100GB bandwidth/month
  - Custom domain support

- **GitHub Pages**: Completely free
  - 1GB storage
  - 100GB bandwidth/month
  - Custom domain support

- **Netlify Free Tier**: Great alternative
  - 100GB bandwidth/month
  - HTTPS included
  - Custom domain support

All options are FREE for portfolio websites! 🎉
