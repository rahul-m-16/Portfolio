# Setup Instructions

Follow these steps to get your portfolio up and running.

## Prerequisites

Make sure you have installed:
- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- **Git** - [Download here](https://git-scm.com/)

Check versions:
```bash
node --version
npm --version
git --version
```

---

## Step 1: Install Dependencies

Navigate to the portfolio folder and install all required packages:

```bash
cd portfolio
npm install
```

This will install:
- React 18
- Vite
- Tailwind CSS
- Framer Motion
- All other dependencies

---

## Step 2: Customize Your Content

### Update Personal Information

Edit `src/utils/constants.js`:

```javascript
export const PERSONAL_INFO = {
  name: 'Your Name',              // ← Change this
  role: 'Frontend Developer',     // ← Change this
  tagline: 'Building modern...',  // ← Change this
  email: 'your.email@example.com', // ← Change this
  github: 'https://github.com/yourusername',   // ← Change this
  linkedin: 'https://linkedin.com/in/yourusername', // ← Change this
  resume: '/resume.pdf'
}
```

### Update About Section

In the same file, edit `ABOUT_TEXT`:

```javascript
export const ABOUT_TEXT = `Your professional summary here...`
```

### Update Education

In the same file, edit `EDUCATION`:

```javascript
export const EDUCATION = {
  degree: 'Your Degree',
  institution: 'Your University',
  year: '2022 - 2026',
  coursework: ['Course 1', 'Course 2', ...]
}
```

### Add Your Projects

Edit `src/data/projects.js`:

```javascript
export const projects = [
  {
    id: 1,
    title: 'Your Project Name',
    description: 'Brief description',
    problem: 'What problem did it solve?',
    techStack: ['React', 'Node.js', ...],
    liveLink: 'https://your-project.com',
    githubLink: 'https://github.com/you/project',
    impact: 'What was the impact?',
    category: 'frontend' // or 'fullstack', 'backend'
  },
  // Add more projects...
]
```

### Update Skills

Edit `src/data/skills.js`:

```javascript
export const skills = {
  frontend: ['React', 'JavaScript', ...],
  backend: ['Node.js', 'Express', ...],
  tools: ['Git', 'VS Code', ...]
}
```

### Update Experience

Edit `src/data/experience.js`:

```javascript
export const experience = [
  {
    id: 1,
    company: 'Company Name',
    role: 'Your Role',
    duration: 'Jan 2025 - Present',
    achievements: [
      'Achievement 1',
      'Achievement 2',
      ...
    ]
  },
  // Add more experiences...
]
```

---

## Step 3: Add Your Assets

Place these files in the `public` folder:

1. **favicon.ico** - Your website icon (16x16 or 32x32 pixels)
2. **profile.png** - Your profile picture (recommended: 400x400px)
3. **resume.pdf** - Your resume/CV file

You can create a simple favicon at [favicon.io](https://favicon.io/)

---

## Step 4: Update SEO Meta Tags

Edit `index.html`:

```html
<meta name="description" content="Your description here" />
<meta name="keywords" content="your, keywords, here" />
<meta name="author" content="Your Name" />
<meta property="og:title" content="Your Name - Portfolio" />
<title>Your Name - Portfolio</title>
```

---

## Step 5: Run Development Server

Start the development server:

```bash
npm run dev
```

Open your browser and go to: **http://localhost:5173**

You should see your portfolio running! 🎉

---

## Step 6: Test Everything

Check these items:

- [ ] All sections display correctly
- [ ] Dark/light mode toggle works
- [ ] All links work (projects, social media, resume)
- [ ] Smooth scrolling works
- [ ] Navigation highlights active section
- [ ] Mobile responsive (test on different screen sizes)
- [ ] All animations work smoothly
- [ ] Contact form opens email client

---

## Step 7: Build for Production

When you're ready to deploy:

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

Test the production build locally:

```bash
npm run preview
```

---

## Step 8: Deploy

Follow the instructions in `DEPLOYMENT.md` to deploy to:
- Vercel (recommended)
- GitHub Pages
- Netlify

---

## Customization Tips

### Change Color Scheme

Edit `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Change these values
    500: '#0ea5e9',
    600: '#0284c7',
    // ...
  }
}
```

### Add More Sections

1. Create a new component in `src/components/sections/`
2. Import and add it to `src/App.jsx`
3. Add navigation link in `src/utils/constants.js`

### Modify Animations

Edit animation settings in component files using Framer Motion:

```javascript
<motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
```

---

## Troubleshooting

### Port Already in Use

If port 5173 is busy:
```bash
npm run dev -- --port 3000
```

### Dependencies Not Installing

```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

### Tailwind Styles Not Working

Make sure `index.css` is imported in `main.jsx`:
```javascript
import './index.css'
```

### Dark Mode Not Working

Check if `dark` class is being added to `<html>` element in browser DevTools.

---

## Need Help?

- Check the README.md for general information
- Check DEPLOYMENT.md for deployment issues
- Open an issue on GitHub
- Review Vite documentation: https://vitejs.dev/
- Review React documentation: https://react.dev/

---

## Next Steps

After setup:

1. ✅ Customize all content
2. ✅ Add your real projects
3. ✅ Add your assets (images, resume)
4. ✅ Test thoroughly
5. ✅ Deploy to Vercel
6. ✅ Share with the world!

Good luck with your portfolio! 🚀
