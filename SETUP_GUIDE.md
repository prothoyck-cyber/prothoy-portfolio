# 🚀 Prothoy Portfolio — Setup Guide

## Quick Start (3 steps)

```bash
npm install       # Install dependencies
npm run dev       # Start at http://localhost:3000
npm run build     # Build for production → /dist
```

---

## 📁 Project Structure (Every file has one job)

```
prothoy-portfolio/
│
├── src/
│   │
│   ├── data/                          ← ✏️  EDIT CONTENT HERE
│   │   ├── siteData.js                ← All text, names, links, services, etc.
│   │   └── socialIcons.jsx            ← Social media SVG icons
│   │
│   ├── styles/
│   │   └── GlobalCSS.jsx              ← All CSS (colors, animations, responsive)
│   │
│   ├── hooks/
│   │   └── useLocalStorage.js         ← Persistent state hook
│   │
│   ├── components/                    ← Reusable UI pieces
│   │   ├── Navbar.jsx                 ← Floating navigation bar
│   │   ├── Toast.jsx                  ← Notification popups
│   │   ├── ScrollProgress.jsx         ← Top scroll progress bar
│   │   └── SharedPrimitives.jsx       ← Toggle switch, spinner
│   │
│   ├── sections/                      ← Website page sections
│   │   ├── Hero.jsx                   ← Landing / hero area
│   │   ├── Marquee.jsx                ← Scrolling skills banner
│   │   ├── Stats.jsx                  ← Animated counters
│   │   ├── Services.jsx               ← Services grid
│   │   ├── Portfolio.jsx              ← Projects gallery
│   │   ├── Reviews.jsx                ← Client testimonials
│   │   ├── About.jsx                  ← About me + skills
│   │   └── Contact.jsx               ← Contact form + social links
│   │
│   ├── admin/                         ← Admin panel pages
│   │   ├── AdminLogin.jsx             ← Login screen
│   │   ├── AdminSidebar.jsx           ← Side navigation
│   │   ├── AdminDashboard.jsx         ← Overview stats
│   │   ├── AdminSearch.jsx            ← Global search
│   │   ├── AdminHeroPage.jsx          ← Edit hero content
│   │   ├── AdminMarqueePage.jsx       ← Edit marquee tags
│   │   ├── AdminStatsPage.jsx         ← Edit stat numbers
│   │   ├── AdminServicesPage.jsx      ← Manage services
│   │   ├── AdminPortfolioPage.jsx     ← Manage projects
│   │   ├── AdminReviewsPage.jsx       ← Manage reviews
│   │   ├── AdminAboutPage.jsx         ← Edit about + skills
│   │   ├── AdminContactPage.jsx       ← Edit contact info
│   │   ├── AdminSocialPage.jsx        ← Manage social links
│   │   ├── AdminSectionsPage.jsx      ← Reorder sections
│   │   ├── AdminMessagesPage.jsx      ← View inbox messages
│   │   └── AdminSettingsPage.jsx      ← App settings
│   │
│   ├── App.jsx                        ← Root — connects everything
│   └── main.jsx                       ← React entry point
│
├── public/
│   ├── favicon.svg                    ← Site icon (P logo)
│   └── robots.txt
│
├── .env.example                       ← Environment variable template
├── .gitignore
├── index.html                         ← HTML shell with meta tags
├── netlify.toml                       ← One-click Netlify deploy
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── SETUP_GUIDE.md                     ← This file
```

---

## ✏️ How to Edit Content

Open **`src/data/siteData.js`** — all your content is there:

| Constant | What it controls |
|---|---|
| `D_HERO` | Hero badge, title, subtitle, button text |
| `D_SERVICES` | Service cards (icon, title, description) |
| `D_PORTFOLIO` | Portfolio projects |
| `D_REVIEWS` | Client testimonials |
| `D_ABOUT` | Your name, bio, experience |
| `D_CONTACT` | Email, phone, location |
| `D_SOCIAL` | Social media URLs |
| `D_SKILLS` | Skill bars with levels |
| `D_STATS` | Counter numbers |
| `D_MARQUEE` | Scrolling text tags |

---

## 🔧 How to Fix a Specific Problem

If something breaks, you only need to touch **one file**:

| Problem | Fix this file |
|---|---|
| Services section wrong | `src/sections/Services.jsx` |
| Admin login not working | `src/admin/AdminLogin.jsx` |
| Portfolio filter broken | `src/sections/Portfolio.jsx` |
| Navbar not showing | `src/components/Navbar.jsx` |
| Colors/styling wrong | `src/styles/GlobalCSS.jsx` |
| Contact form broken | `src/sections/Contact.jsx` |
| Admin messages inbox | `src/admin/AdminMessagesPage.jsx` |
| Stats numbers wrong | `src/data/siteData.js` (D_STATS) |

---

## 🌐 Deploy to Netlify (Free)

1. Push to GitHub
2. Go to netlify.com → "Add new site" → Import from GitHub
3. Build command: `npm run build` | Publish: `dist`
4. Click Deploy ✅

---

## 🔑 Admin Panel

- URL: `yoursite.com/#admin`
- Default password: `prothoy96@#`
- Change it in `src/admin/AdminLogin.jsx` (line: `ADMIN_PASS`)

---

## 👨‍💻 Developer

**Prothoy Chakraborty** — Raozan, Chittagong
📧 prothoycbsm@gmail.com
