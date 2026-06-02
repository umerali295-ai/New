# NEXUS OS — AI-Powered Growth Operating System

A highly-converting, production-ready AI-powered web application that instantly demonstrates marketing capabilities, generates trust through live interactive examples, creates emotional urgency, and converts visitors into paying clients.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Then open [http://localhost:3000](http://localhost:3000)

## 📁 Pages & Routes

| Route | Page | Description |
|-------|------|-------------|
| `/` | Landing Page | Hero, live AI demo, results showcase, services grid, content gallery, process visualization, booking/checkout |
| `/case-studies` | Case Studies | 5 interactive case studies across niches (E-commerce, Fitness, SaaS, Crypto, Restaurant) |
| `/tools` | AI Tools | 4 free tools: Hook Generator, Caption Generator, Ad Script Generator, Content Calendar Generator |
| `/packages` | Packages & Pricing | 3-tier pricing (Starter $299, Growth $799, Domination $2,500+) with add-ons and FAQ |
| `/dashboard` | Client Portal | Demo dashboard with content queue, analytics, calendar, and approval workflow |

## ✨ Features

- **Live AI Demo**: Users input niche → instantly see generated hooks, captions, UGC scripts, ad creatives
- **Interactive Content Gallery**: Filterable by niche, TikTok/Reels-native phone frame previews
- **Real-time Results Dashboard**: Animated analytics, before/after metrics, growth charts
- **AI Tools (Lead Capture)**: 4 free tools with email gate for lead generation
- **Conversion-Optimized**: Dual checkout (instant Stripe / application funnel), psychological urgency
- **Premium Motion Design**: Framer Motion animations, glassmorphism, gradient effects, parallax
- **Fully Responsive**: Mobile-first design, works perfectly on all devices

## 🛠 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Icons**: Lucide React

## 🚀 Deployment (One-Click)

### Vercel (Recommended)
1. Push to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import repository → Deploy
4. Custom domain → connect

### Netlify
1. Push to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Import repository → Deploy

## 🔌 Integration Points

When ready to connect real services, add:

| Service | Purpose | File to Update |
|---------|---------|----------------|
| **Stripe** | Payments | `packages/page.tsx` → add Stripe links to buttons |
| **Supabase** | Database/Auth | Add Supabase client, auth flow |
| **Clerk/Auth.js** | Authentication | Wrap app in auth provider |
| **OpenAI/Claude** | Real AI generation | Replace demo templates with API calls |
| **Cloudinary** | Media storage | Image/video upload for dashboard |
| **SendGrid/Resend** | Email automation | Connect to lead capture forms |
| **PostHog** | Analytics | Add tracking script to layout |
| **n8n/Make** | Automation | Connect webhook endpoints |

## 🎨 Design System

- **Background**: Deep space black (#030014)
- **Primary**: Purple gradient (#7c3aed → #a855f7)
- **Accent**: Cyan (#00f0ff), Pink (#ec4899), Green (#10b981)
- **Glass**: backdrop-blur with transparent whites
- **Typography**: Inter (body), JetBrains Mono (code)
- **Effects**: Neural backgrounds, floating particles, gradient borders

## 📊 Positioning

This is NOT an agency website. It's positioned as:
- **Attention Operating System**
- **AI-Powered Growth Infrastructure**  
- **Content Velocity Engine**
- **Automated Brand Visibility System**

---

Built for scale. Deploy instantly. Convert visitors into clients.
