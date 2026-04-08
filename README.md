# Modern Portfolio Website

A lightweight, modern, and fully responsive portfolio website built with React, Vite, Tailwind CSS, and Framer Motion.

## Features

- ✅ Modern React 18 with Vite
- ✅ Tailwind CSS for styling
- ✅ Framer Motion for smooth animations
- ✅ Dark/Light mode toggle
- ✅ Fully responsive design
- ✅ SEO optimized
- ✅ Fast performance
- ✅ Easy to customize
- ✅ No backend required
- ✅ Static deployment ready

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project folder
2. Install dependencies:

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

The optimized build will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Customization

### Update Personal Information

Edit `src/utils/constants.js` to update:
- Name, role, tagline
- Email, GitHub, LinkedIn links
- Education details
- About text

### Update Projects

Edit `src/data/projects.js` to add/modify your projects.

### Update Skills

Edit `src/data/skills.js` to update your skills.

### Update Experience

Edit `src/data/experience.js` to add/modify work experience.

### Add Your Assets

Place your files in the `public` folder:
- `public/favicon.ico` - Your favicon
- `public/profile.png` - Your profile picture
- `public/resume.pdf` - Your resume

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your GitHub repository
4. Vercel will auto-detect Vite and deploy
5. Your site will be live with HTTPS enabled

### Deploy to GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to package.json:
```json
"homepage": "https://yourusername.github.io/portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Deploy:
```bash
npm run deploy
```

## Project Structure

```
portfolio/
├── public/              # Static assets
├── src/
│   ├── assets/         # Images, icons
│   ├── components/
│   │   ├── layout/     # Navbar, Footer
│   │   └── sections/   # Page sections
│   ├── data/           # Content data files
│   ├── hooks/          # Custom React hooks
│   ├── utils/          # Constants and utilities
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── index.html          # HTML template
├── tailwind.config.js  # Tailwind configuration
└── vite.config.js      # Vite configuration
```

## Technologies Used

- **React 18** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Modern JavaScript (ES6+)** - Language features

## Performance

- Lighthouse score: 90+
- Optimized bundle size
- Lazy loading
- Code splitting
- Fast page loads

## License

MIT License - feel free to use this for your own portfolio!

## Support

For issues or questions, please open an issue on GitHub.
