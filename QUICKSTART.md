# Quick Start Guide

Get your portfolio running in 3 minutes! ⚡

## 1. Install Dependencies (1 minute)

```bash
cd portfolio
npm install
```

## 2. Start Development Server (30 seconds)

```bash
npm run dev
```

Open: **http://localhost:5173**

## 3. Customize Content (1 minute)

### Essential Files to Edit:

**`src/utils/constants.js`** - Your personal info
```javascript
name: 'Your Name'
email: 'your.email@example.com'
github: 'https://github.com/yourusername'
linkedin: 'https://linkedin.com/in/yourusername'
```

**`src/data/projects.js`** - Your projects

**`src/data/skills.js`** - Your skills

**`src/data/experience.js`** - Your work experience

### Add Your Files:

Place in `public/` folder:
- `favicon.ico` - Website icon
- `profile.png` - Your photo
- `resume.pdf` - Your resume

## 4. Deploy (2 minutes)

### Push to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/portfolio.git
git push -u origin main
```

### Deploy to Vercel:
1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repo
3. Click Deploy
4. Done! 🎉

---

## Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

---

## Need More Help?

- **Full Setup**: Read `SETUP.md`
- **Deployment**: Read `DEPLOYMENT.md`
- **General Info**: Read `README.md`

---

That's it! Your portfolio is ready to impress recruiters! 🚀
