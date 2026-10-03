# Vision Landscapes — Landscape Construction in Dublin

> Marketing website for Vision Landscapes Limited, a landscape construction company based in Dublin, Ireland.

---

## Overview

The site presents the company, a portfolio of completed projects, and a contact form for project enquiries.

It is statically exported with Next.js and deployed on **Netlify**. Form submissions are handled by Netlify Forms, so no backend is required.

---

## Features

- **Pages** — Home, Portfolio and Contact, each a real Next.js route with its own metadata
- **Hero section** — Full-screen hero image with animated overlay
- **Story section** — Company background with links to the portfolio and contact pages
- **Gallery carousel** — Paginated photo grid with a full-screen image modal
- **Contact form** — Validated with Zod, submitted to Netlify Forms, with honeypot spam protection and a success modal
- **Responsive layout** — Mobile header with an animated menu
- **Security headers** — CSP, HSTS, X-Frame-Options and more, configured in `netlify.toml`
- **Pre-optimized images** — Photos are converted to right-sized WebP files ahead of time

---

## Services Covered

The contact form lets clients choose one or more of these services (defined in `app/components/sections/contact/constants.ts`):

- Resin Bound Driveways
- Bespoke Garden Room
- Planting Services
- Outdoor Kitchens
- Softscaping
- Hardscaping
- Pergolas
- Other

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router, static export) |
| Language | TypeScript 5.9 |
| UI Library | React 19 |
| Styling | Tailwind CSS v4 + tw-animate-css |
| Form Handling | react-hook-form v7 + Zod v4 (`@hookform/resolvers`) |
| Font | Playfair Display (`next/font/google`) |
| Deployment | Netlify |

---

## Project Structure

```
app/
├── layout.tsx                   # Root layout — font, default metadata, header and footer
├── page.tsx                     # Home route (/)
├── portfolio/page.tsx           # Portfolio route (/portfolio)
├── contact/page.tsx             # Contact route (/contact)
├── globals.css                  # Global styles
├── icon.svg                     # Favicon
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx           # Navigation header
│   │   ├── Footer.tsx           # Footer with social links
│   │   ├── MobileMenu.tsx       # Animated mobile navigation
│   │   └── constants.ts         # NAV_LINKS
│   │
│   ├── pages/
│   │   ├── HomePage.tsx         # Hero + story
│   │   ├── PortfolioPage.tsx    # Gallery carousel
│   │   └── ContactPage.tsx      # Contact form
│   │
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── StorySection.tsx
│   │   ├── GalleryCarousel.tsx
│   │   └── contact/
│   │       ├── FormSection.tsx          # Form markup
│   │       ├── schema.ts                # Zod schema + ContactFormValues type
│   │       ├── constants.ts             # SERVICE_OPTIONS, MAX_MESSAGE_LENGTH
│   │       ├── index.ts                 # Re-exports
│   │       ├── hooks/
│   │       │   └── useContactForm.ts    # Form state + Netlify submission
│   │       └── components/
│   │           ├── FormField.tsx        # Label + input + error wrapper
│   │           ├── ServiceSelector.tsx  # Service checkboxes
│   │           └── SuccessModal.tsx     # Post-submission modal
│   │
│   └── ui/
│       └── ImageModal.tsx       # Full-screen image viewer
│
└── data/
    ├── galleryImages.ts         # Portfolio photos
    └── heroImages.ts            # Hero photo

images-src/                      # Original photos (not deployed)
scripts/optimize-images.mjs      # Generates WebP files into public/images
public/
├── images/                      # Optimized images served by the site
└── form-detection.html          # Netlify Forms definition — see below
```

---

## Getting Started

Requires Node.js 20+.

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static export to /out
npm run lint
```

### Adding or replacing photos

1. Put the original photo in `images-src/gallery/`, with a descriptive file name (e.g. `resin-driveway-front-garden.jpg`)
2. Run `npm run optimize-images` to generate the WebP files in `public/images/gallery/`
3. Add an entry to `app/data/galleryImages.ts` with its alt text, service and, for portrait photos, the crop `focus`

To replace a photo with a higher-resolution version of the same shot, overwrite the file in `images-src/` with the same name and run step 2 again.

The homepage hero is generated from the photo in `images-src/hero/` and referenced in `app/data/heroImages.ts`.

When changing a photo for a different one, give it a **new file name**. Browsers cache images, and a file with the same name may keep showing the old photo.

---

## Deployment

Netlify builds the site with `npm run build` and publishes the `out` directory (see `netlify.toml`). Every push to the deployed branch triggers a new build.

### Netlify Forms

Netlify only keeps the form fields it detected in the deployed HTML, and silently drops any others.

- `public/form-detection.html` is the **only** definition of the `contact` form. Every field the form sends must be listed there.
- The React form in `FormSection.tsx` must **not** have `data-netlify`. If it does, Netlify uses its field list instead, and the service checkboxes (which have no `name` attribute) are dropped from submissions.
- `useContactForm.ts` posts the data to `/` as `application/x-www-form-urlencoded`, including `form-name` and the empty `bot-field` honeypot.

When adding a field to the form, add it to `form-detection.html` too. After deploying, check **Forms → contact** in the Netlify dashboard to confirm the new field appears.

Submissions are forwarded to the company's email through a Zapier automation.

---

## License

Developed for Vision Landscapes Limited, Dublin, Ireland. All rights reserved.
