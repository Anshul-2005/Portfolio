# Deployment Guide
## Anshul Verma — Portfolio + All Projects

**Zero build step. Zero dependencies. Upload and it works.**

---

## 📋 Pre-Deployment: Personalize These

Before deploying, update these placeholder values with your real info:

| File | Find | Replace With |
|------|------|-------------|
| `index.html` (×6) | `vermaanshul0112@gmail.com` | Your real email |
| `index.html` (×3) | `https://github.com/anshul-2005` | Your real GitHub URL |
| `index.html` (×2) | `https://linkedin.com/in/anshul-verma-analyst` | Your real LinkedIn URL |
| `assets/` | `Anshul_Verma_Resume.pdf` | Your real resume PDF |

### Quick Find & Replace Command (Optional)

```bash
# macOS/Linux — replace email across all files
grep -rl "vermaanshul0112@gmail.com" . | xargs sed -i '' 's/vermaanshul0112@gmail.com/YOUR_EMAIL/g'

# Replace GitHub URL
grep -rl "github.com/anshul-2005" . | xargs sed -i '' 's|github.com/anshul-2005|github.com/YOUR_USERNAME|g'
```

---

## 🚀 Option 1: GitHub Pages (Recommended)

**Best for:** Free hosting, custom domain support, automatic HTTPS.

### Steps

```bash
# 1. Initialize git (if not already)
git init

# 2. Stage everything
git add .

# 3. Commit
git commit -m "Deploy portfolio"

# 4. Create main branch
git branch -M main

# 5. Add your remote
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# 6. Push
git push -u origin main
```

### Enable Pages

1. Go to your repo on GitHub
2. Click **Settings** → **Pages**
3. Under Source, select **main** branch, **/ (root)** folder
4. Click **Save**
5. Wait 2-3 minutes
6. Visit `https://YOUR_USERNAME.github.io/portfolio/`

### Custom Domain (Optional)

1. In Pages settings, add your custom domain
2. Add CNAME DNS record pointing to `YOUR_USERNAME.github.io`
3. Create a `CNAME` file in root with your domain name

---

## 🚀 Option 2: Netlify

**Best for:** Fastest setup, drag-and-drop deploy.

### Drag & Drop

1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag your entire project folder onto the page
3. Done. Netlify gives you a URL instantly.

### Git-Connected

1. Connect your GitHub repo at [netlify.com](https://netlify.com)
2. Settings:
   - Build command: *(leave empty)*
   - Publish directory: `.`
3. Click **Deploy**

### Settings

| Setting | Value |
|---------|-------|
| Build command | *(none)* |
| Publish directory | `.` |
| Node version | Not needed |
| Functions | Not needed |

---

## 🚀 Option 3: Vercel

**Best for:** CLI deployment, preview URLs.

### CLI Deploy

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from project root
vercel

# Follow prompts:
# - Set up and deploy? Yes
# - Which scope? (your account)
# - Link to existing project? No
# - Project name? anshul-portfolio
# - Directory? ./
# - Override settings? No

# Deploy to production
vercel --prod
```

### Dashboard

1. Import repo at [vercel.com/new](https://vercel.com/new)
2. Framework: **Other**
3. Root directory: `.`
4. No build command
5. Deploy

---

## 🚀 Option 4: Local Testing

```bash
# Python
python -m http.server 8000

# Node.js
npx serve .

# PHP
php -S localhost:8000

# VS Code
# Install "Live Server" extension, right-click index.html → Open with Live Server
```

Then open `http://localhost:8000`

---

## ✅ Post-Deployment Verification Checklist

### Portfolio (index.html)

| Check | Test | Expected |
|-------|------|----------|
| ☐ | Open portfolio URL | Page loads with loader, then hero |
| ☐ | Click "View My Work" | Smooth scrolls to Projects section |
| ☐ | Click "View Project" (Noir Brew) | Opens coffee shop landing page |
| ☐ | Click "View Case Study" (Noir Brew) | Opens coffee shop case study |
| ☐ | Click "View Project" (Wanderlux) | Opens travel agency page |
| ☐ | Click "View Case Study" (Wanderlux) | Opens travel case study |
| ☐ | Click "View Case Study" (FinFlow) | Opens Figma case study page |
| ☐ | Click "Full Documentation" (FinFlow) | Opens markdown file |
| ☐ | Click "View Project" (TaskFlow) | Opens SaaS landing page |
| ☐ | Click "View Case Study" (TaskFlow) | Opens design system doc |
| ☐ | Click "Download Resume" | Downloads PDF file |
| ☐ | Click "GitHub" nav link | Opens GitHub in new tab |
| ☐ | Click "LinkedIn" contact link | Opens LinkedIn in new tab |
| ☐ | Click "Send Me a Message" | Opens email client |
| ☐ | Test mobile menu | Hamburger opens/closes |
| ☐ | Scroll through all sections | Reveal animations trigger |
| ☐ | Footer project links | All 4 links work |

### Project 1: Noir Brew Coffee Shop

| Check | Test | Expected |
|-------|------|----------|
| ☐ | Page loads | Loader → hero with parallax |
| ☐ | Menu tabs | Switch between Coffee/Specialty/Pastries/Cold |
| ☐ | Gallery click | Lightbox opens, Escape closes |
| ☐ | Testimonial carousel | Auto-plays, arrows work, dots work |
| ☐ | Reservation form | Validates required fields, shows success |
| ☐ | Mobile hamburger | Menu opens with animation |
| ☐ | "Anshul Verma" footer link | Goes back to portfolio |
| ☐ | Case study "Back" link | Goes to project page |

### Project 2: Wanderlux Travel Agency

| Check | Test | Expected |
|-------|------|----------|
| ☐ | Page loads | Loader → hero with parallax |
| ☐ | Search widget | Dropdowns work, date picker works |
| ☐ | Destination card hover | 3D tilt effect |
| ☐ | Gallery click | Lightbox opens |
| ☐ | Testimonial carousel | Auto-plays with swipe |
| ☐ | Countdown timer | Shows live countdown |
| ☐ | Booking form | Validates and shows success |
| ☐ | Newsletter form | Shows "Subscribed!" feedback |
| ☐ | Heart wishlist buttons | Toggle fill on click |
| ☐ | Counter animation | Numbers count up when scrolled |
| ☐ | "Anshul Verma" footer link | Goes back to portfolio |

### Project 3: FinFlow Case Study

| Check | Test | Expected |
|-------|------|----------|
| ☐ | Page loads | Case study content renders |
| ☐ | Persona cards | Display correctly |
| ☐ | Journey map | 5 phases display |
| ☐ | Color palette | Swatches visible |
| ☐ | "Back to Portfolio" link | Goes back to portfolio |

### Project 4: TaskFlow SaaS

| Check | Test | Expected |
|-------|------|----------|
| ☐ | Page loads | Loader → hero |
| ☐ | FAQ accordion | Click to expand/collapse |
| ☐ | Pricing cards hover | Lift animation |
| ☐ | Feature cards hover | Icon color changes |
| ☐ | Mobile hamburger | Menu opens |
| ☐ | Scroll animations | Cards fade in |
| ☐ | "Anshul Verma" footer link | Goes back to portfolio |

### Cross-Browser

| Check | Browser |
|-------|---------|
| ☐ | Chrome (latest) |
| ☐ | Firefox (latest) |
| ☐ | Safari (latest) |
| ☐ | Edge (latest) |
| ☐ | Chrome Mobile (Android) |
| ☐ | Safari Mobile (iOS) |

### Performance

| Check | Test |
|-------|------|
| ☐ | All images use lazy loading for below-fold content |
| ☐ | No render-blocking resources (JS at end of body) |
| ☐ | Images served via CDN (Pexels auto-compress) |
| ☐ | CSS variables used (no duplicate styles) |
| ☐ | Animations use transform/opacity (GPU accelerated) |

---

## 📊 File Size Summary

| Component | Files | Estimated Size |
|-----------|-------|----------------|
| Portfolio (root) | 3 files | ~65 KB |
| Noir Brew | 4 files | ~75 KB |
| Wanderlux | 4 files | ~110 KB |
| FinFlow | 2 files | ~35 KB |
| TaskFlow | 9 files | ~80 KB |
| **Total code** | **22 files** | **~365 KB** |

*Images load from Pexels CDN — not included in upload size.*

---

## 🔧 Troubleshooting

### Images not loading?
All images use Pexels CDN URLs. Check internet connection. No local images to upload.

### Fonts look wrong?
Google Fonts loads via CDN. Check if the domain has CSP headers blocking Google Fonts.

### Animations not working?
Check if the browser has "prefers-reduced-motion" enabled in OS settings. The site respects this accessibility setting.

### Resume download not working?
Replace `assets/Anshul_Verma_Resume.pdf` with your actual PDF file. The current file is a placeholder.

### Back to Portfolio links broken on standalone deploy?
When deploying a project standalone (not as part of portfolio), update `../../index.html` to your portfolio URL.

---

## 🎯 Final Notes

This project is designed for **zero-configuration deployment**:

1. No build tools needed
2. No npm/yarn/node required
3. No environment variables
4. No API keys
5. No database
6. No server-side code

Upload the folder. It works.

---

*Deployment guide by Anshul Verma · 2026*
