# Terminal Commands Reference

All commands you'll need for your portfolio project.

---

## 🚀 Development Commands

### Start Development Server
```bash
npm run dev
```
Opens at: http://localhost:5173

### Start on Different Port
```bash
npm run dev -- --port 3000
```

### Stop Development Server
Press `Ctrl + C` in terminal

---

## 🏗 Build Commands

### Build for Production
```bash
npm run build
```
Creates optimized build in `dist/` folder

### Preview Production Build
```bash
npm run preview
```
Test production build locally

### Clean Build
```bash
# Windows
rmdir /s /q dist
npm run build

# Mac/Linux
rm -rf dist
npm run build
```

---

## 📦 Package Management

### Install Dependencies
```bash
npm install
```

### Install Specific Package
```bash
npm install package-name
```

### Update Dependencies
```bash
npm update
```

### Check for Outdated Packages
```bash
npm outdated
```

### Clean Install (if issues)
```bash
# Windows
rmdir /s /q node_modules
del package-lock.json
npm install

# Mac/Linux
rm -rf node_modules package-lock.json
npm install
```

---

## 🔧 Git Commands

### Initialize Git
```bash
git init
```

### Check Status
```bash
git status
```

### Add All Files
```bash
git add .
```

### Commit Changes
```bash
git commit -m "Your commit message"
```

### Add Remote Repository
```bash
git remote add origin https://github.com/yourusername/portfolio.git
```

### Push to GitHub
```bash
git push -u origin main
```

### Push Updates
```bash
git add .
git commit -m "Update content"
git push
```

### Create New Branch
```bash
git checkout -b feature-name
```

### Switch Branch
```bash
git checkout main
```

### View Commit History
```bash
git log --oneline
```

---

## 🌐 Deployment Commands

### Deploy to Vercel (after setup)
```bash
# Vercel auto-deploys on git push
git push origin main
```

### Deploy to GitHub Pages
```bash
# First time setup
npm install --save-dev gh-pages

# Add to package.json scripts:
# "predeploy": "npm run build",
# "deploy": "gh-pages -d dist"

# Then deploy
npm run deploy
```

### Install Vercel CLI (optional)
```bash
npm install -g vercel

# Deploy from terminal
vercel

# Deploy to production
vercel --prod
```

---

## 🔍 Debugging Commands

### Check Node Version
```bash
node --version
```

### Check npm Version
```bash
npm --version
```

### Check Git Version
```bash
git --version
```

### Clear npm Cache
```bash
npm cache clean --force
```

### View Package Info
```bash
npm list
```

### View Specific Package Version
```bash
npm list react
```

---

## 📁 File Management Commands

### Windows Commands

```bash
# List files
dir

# Create directory
mkdir folder-name

# Remove directory
rmdir /s /q folder-name

# Remove file
del file-name

# Copy file
copy source.txt destination.txt

# Move file
move source.txt destination.txt

# View file content
type file.txt
```

### Mac/Linux Commands

```bash
# List files
ls -la

# Create directory
mkdir folder-name

# Remove directory
rm -rf folder-name

# Remove file
rm file-name

# Copy file
cp source.txt destination.txt

# Move file
mv source.txt destination.txt

# View file content
cat file.txt
```

---

## 🧪 Testing Commands

### Check for Errors
```bash
npm run build
```
If build succeeds, no syntax errors

### Run Lighthouse Audit
```bash
# Install Lighthouse CLI
npm install -g lighthouse

# Run audit
lighthouse http://localhost:5173 --view
```

---

## 🔄 Update Commands

### Update npm
```bash
npm install -g npm@latest
```

### Update Specific Package
```bash
npm install react@latest
npm install vite@latest
```

### Update All Packages (careful!)
```bash
npm update
```

---

## 🆘 Troubleshooting Commands

### Port Already in Use
```bash
# Windows - Find process on port 5173
netstat -ano | findstr :5173

# Kill process (replace PID)
taskkill /PID <PID> /F

# Mac/Linux - Find process
lsof -i :5173

# Kill process
kill -9 <PID>
```

### Permission Errors
```bash
# Windows - Run as Administrator
# Right-click terminal → Run as Administrator

# Mac/Linux - Use sudo (careful!)
sudo npm install
```

### Reset Everything
```bash
# Windows
rmdir /s /q node_modules
rmdir /s /q dist
del package-lock.json
npm install

# Mac/Linux
rm -rf node_modules dist package-lock.json
npm install
```

---

## 📊 Useful Combinations

### Quick Update Workflow
```bash
# Make changes, then:
git add .
git commit -m "Update: description"
git push
```

### Fresh Start
```bash
# Clean everything and reinstall
rm -rf node_modules package-lock.json dist
npm install
npm run dev
```

### Build and Preview
```bash
npm run build && npm run preview
```

---

## 🎯 Daily Workflow

### Morning (Start Work)
```bash
git pull                # Get latest changes
npm run dev            # Start dev server
```

### During Work
```bash
# Just keep dev server running
# Save files and see changes automatically
```

### Evening (End Work)
```bash
git add .
git commit -m "Today's updates"
git push
# Press Ctrl+C to stop dev server
```

---

## 🚀 Deployment Workflow

### Before Deploying
```bash
npm run build          # Test build
npm run preview        # Preview build
git add .
git commit -m "Ready for deployment"
git push
```

### After Deploying
```bash
# Vercel auto-deploys
# Just wait 1-2 minutes
# Check your live site
```

---

## 💡 Pro Tips

1. **Always commit before major changes**
   ```bash
   git add .
   git commit -m "Before major changes"
   ```

2. **Use meaningful commit messages**
   ```bash
   git commit -m "Add new project to portfolio"
   git commit -m "Fix mobile navigation bug"
   git commit -m "Update resume and skills"
   ```

3. **Check status often**
   ```bash
   git status
   ```

4. **Test build before deploying**
   ```bash
   npm run build
   ```

---

## 📝 Command Cheat Sheet

| Task | Command |
|------|---------|
| Start dev | `npm run dev` |
| Build | `npm run build` |
| Install | `npm install` |
| Git add | `git add .` |
| Git commit | `git commit -m "message"` |
| Git push | `git push` |
| Check status | `git status` |
| Stop server | `Ctrl + C` |

---

## 🎓 Learning More

### npm Documentation
https://docs.npmjs.com/

### Git Documentation
https://git-scm.com/doc

### Vite Documentation
https://vitejs.dev/

### Vercel Documentation
https://vercel.com/docs

---

**Save this file for quick reference!** 📌

*You don't need to memorize these - just refer back when needed.*
