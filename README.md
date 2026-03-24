# PoyBoi's Corner — Portfolio

A modern, futuristic, slightly cyberpunk portfolio website for **Parv Sharma** (aka **PoyBoi**).

Built with **Next.js 15 · Tailwind CSS v4 · Framer Motion · next-themes**.

## Features

- 🌌 Cyberpunk aesthetic with grid background, glow effects, glassmorphism
- 🌙 Dark / light mode toggle (defaults dark)
- 🎠 Interactive project carousel with dot navigation
- 📂 Animated skill category dropdowns
- 📬 Contact section with social links
- 📱 Fully responsive (mobile / tablet / desktop)
- ♿ Accessibility-first (semantic HTML, ARIA labels, focus states)
- ⚡ Vercel-ready, zero-config deploy

## Getting Started

### Prerequisites

- Node.js ≥ 18
- npm ≥ 9

### Install & run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

### Lint

```bash
npm run lint
```

## Deploy to Vercel

1. Push this repo to GitHub (already done ✅).
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Leave all settings as default — Vercel auto-detects Next.js.
4. Click **Deploy**.

## Customisation

| File | What to change |
|------|----------------|
| `data/profile.ts` | Your name, bio, social links |
| `data/projects.ts` | Featured projects (title, description, stack, links) |
| `data/skills.ts` | Skill categories and individual skills |
| `app/globals.css` | Design tokens, colours, spacing |

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theme**: next-themes
- **Deployment**: Vercel
