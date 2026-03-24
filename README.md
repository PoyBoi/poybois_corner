# POYBOI — Portfolio Website

A futuristic, cyberpunk-aesthetic portfolio for **Parv Sharma** (PoyBoi).

Built with **Next.js 14**, **TailwindCSS**, and **Framer Motion**.

## 🚀 Deploy on Vercel

The easiest way to deploy is via the [Vercel Platform](https://vercel.com):

1. Push this repo to GitHub
2. Import the repo on [vercel.com](https://vercel.com/new)
3. Vercel auto-detects Next.js — just click **Deploy**

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## 🏗️ Build

```bash
npm run build
npm run start
```

## 📁 Structure

```
src/
  app/
    globals.css       # Cyberpunk styles, animations, neon effects
    layout.tsx        # Root layout with fonts
    page.tsx          # Main page — wires all sections together
  components/
    Navbar.tsx        # Sticky nav with dark/light toggle
    Hero.tsx          # Glitch hero with typing animation & HUD
    About.tsx         # About section with system terminal card
    Projects.tsx      # Interactive project carousel (4 projects)
    Skills.tsx        # Dropdown skill accordions with animated bars
    Contact.tsx       # Contact section with social links
    Footer.tsx        # Footer
```

## ✨ Features

- 🌙 Dark / Light mode toggle (persisted in localStorage)
- 📱 Fully responsive (mobile, tablet, desktop)
- 🎯 Project carousel with swipe/drag support
- ⚡ Skill dropdowns with animated progress bars
- 🎨 Cyberpunk neon aesthetic with glitch effects
- 🖥️ HUD-style terminal UI components
- 🌐 SEO meta tags configured
- 🚀 Vercel-ready deployment

## 🎨 Customization

- Edit project data in `src/components/Projects.tsx`
- Edit skill groups in `src/components/Skills.tsx`
- Update colors in `tailwind.config.js` and `globals.css`
