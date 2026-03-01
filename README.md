# Vision Landscapes — Landscape & Garden Design

> Award-winning landscape design studio based in Dublin, Ireland.
> Built as a professional marketing website showcasing services, portfolio, and a client contact form.

---

## Overview

**Vision Landscapes** is a full-stack marketing website developed for an Irish landscape company. It serves as the company's digital presence, presenting their portfolio of completed projects and allowing prospective clients to submit enquiries through a validated contact form.

The site is statically exported and deployed on **Netlify**, with form submissions handled natively via Netlify Forms — no backend required.

---

## Features

- **Multi-page SPA** — Home, Portfolio, and Contact pages rendered within a single layout with smooth page transitions
- **Hero section** — Full-screen image carousel with animated overlays
- **Story section** — Company background and values
- **Projects grid** — Showcase of completed landscape projects with imagery and descriptions
- **Gallery carousel** — Interactive photo gallery using Embla Carousel with a full-screen image modal
- **Contact form** — Validated form with Netlify Forms integration, honeypot spam protection, and a success modal
- **Responsive layout** — Mobile-first design with a dedicated animated mobile menu
- **Security headers** — Comprehensive HTTP headers configured in `netlify.toml` (CSP, HSTS, X-Frame-Options, etc.)
- **Analytics** — Vercel Analytics integrated for traffic insights

---

## Services Covered

The contact form allows clients to enquire about the following services:

| Service | Description |
|---|---|
| Bespoke Garden Room | Custom-designed outdoor garden rooms |
| Softscaping | Planting, lawn, and natural garden elements |
| Hardscaping | Patios, paths, walls, and structural features |
| Planting Services | Tree, shrub, and seasonal planting |
| Other | Any other landscaping requirements |

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5.9 |
| UI Library | React 19 |
| Styling | Tailwind CSS v4 |
| State Management | Zustand v5 |
| Form Handling | react-hook-form v7 + Zod v4 |
| Schema Validation | `@hookform/resolvers` v5 |
| UI Primitives | Radix UI |
| Carousel | Embla Carousel |
| Icons | Lucide React |
| Fonts | Playfair Display + Inter (Google Fonts) |
| Deployment | Netlify (static export) |
| Analytics | Vercel Analytics |

---

## Project Structure

```
app/
├── layout.tsx                   # Root layout — fonts, metadata, analytics
├── page.tsx                     # Entry point — page routing via state
├── types.ts                     # Shared Page type ("home" | "portfolio" | "contact")
├── globals.css                  # Global styles
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx           # Navigation header
│   │   ├── Footer.tsx           # Site footer
│   │   ├── MobileMenu.tsx       # Animated mobile navigation drawer
│   │   └── constants.ts         # NAV_LINKS shared array
│   │
│   ├── pages/
│   │   ├── HomePage.tsx         # Composes hero + story + projects + gallery
│   │   ├── PortfolioPage.tsx    # Portfolio showcase
│   │   └── ContactPage.tsx      # Contact form page
│   │
│   ├── sections/
│   │   ├── HeroSection.tsx      # Full-screen hero carousel
│   │   ├── StorySection.tsx     # Company story/about section
│   │   ├── ProjectsGrid.tsx     # Project cards grid
│   │   ├── GalleryCarousel.tsx  # Embla-powered photo carousel
│   │   └── contact/             # Contact form (modular)
│   │       ├── FormSection.tsx          # Thin orchestrator component
│   │       ├── schema.ts                # Zod schema + ContactFormValues type
│   │       ├── constants.ts             # SERVICE_OPTIONS, MAX_MESSAGE_LENGTH
│   │       ├── index.ts                 # Re-exports
│   │       ├── hooks/
│   │       │   └── useContactForm.ts    # react-hook-form + Netlify submission logic
│   │       └── components/
│   │           ├── FormField.tsx        # Reusable label + input + error wrapper
│   │           ├── ServiceSelector.tsx  # Checkbox group via Controller
│   │           └── SuccessModal.tsx     # Post-submission success modal
│   │
│   └── ui/
│       └── ImageModal.tsx       # Accessible full-screen image viewer
│
├── data/
│   ├── galleryImages.ts         # Gallery image data
│   ├── heroImages.ts            # Hero carousel image data
│   └── projects.ts              # Project card data
│
└── hooks/
    └── useNavigation.ts         # Zustand navigation store
```

---

## Getting Started

### Prerequisites

- Node.js 20+
- npm (or yarn / pnpm / bun)

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
npm run build
```

The site is configured for **static export** (`output: "export"`), so the build outputs to the `/out` directory, ready for Netlify deployment.

---

## Deployment

The site is deployed on **Netlify** using static export.

### Netlify configuration (`netlify.toml`)

- **Build command:** `npm run build`
- **Publish directory:** `out`
- **Security headers** applied to all routes:
  - `Content-Security-Policy` — restricts script, style, image, and form sources
  - `Strict-Transport-Security` — enforces HTTPS for 2 years
  - `X-Frame-Options: DENY` — prevents clickjacking
  - `X-Content-Type-Options: nosniff` — blocks MIME-sniffing
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - `Permissions-Policy` — disables camera, microphone, geolocation, payment

### Netlify Forms

The contact form uses Netlify's built-in form handling. No server or API route is required. Spam protection is provided via a honeypot hidden field (`bot-field`).

To enable form submissions, ensure the deployed site has the Netlify Forms feature active in the project dashboard.

---

## Key Conventions

- All interactive components are marked `"use client"`
- Styling is Tailwind-only — no CSS modules or external stylesheet libraries
- Navigation between pages is handled via prop-drilled `onNavigate` callbacks (no Next.js router)
- Form state uses `useForm<ContactFormValues, any, ContactFormValues>` to avoid type inference issues between Zod v4 and react-hook-form v7

---

## License

This project was developed for **Vision Landscapes**, a professional landscape and garden design company based in Dublin, Ireland. All rights reserved.
