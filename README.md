# Gayatri Mantra Interiors Website

Premium, conversion-focused business website for Gayatri Mantra Interiors (Hyderabad), built with Next.js, Tailwind CSS, and Framer Motion.

## Stack

- Next.js (App Router)
- React + TypeScript
- Tailwind CSS v4
- Framer Motion
- API Route for lead capture (`/api/contact`)

## Included Pages

- Home (`/`)
- About (`/about`)
- Services (`/services`)
- Portfolio (`/portfolio`)
- Contact (`/contact`)

## Features

- Premium luxury-focused design language (beige, gold accents, warm neutral palette)
- Mobile-first responsive layout
- Sticky navbar with CTA
- Services cards and portfolio grid with filters
- Portfolio lightbox preview
- Testimonials slider
- Contact form with client-side validation + API route validation
- Floating WhatsApp action button
- SEO-ready metadata per page
- Production build validated

## Run Locally

1. Install dependencies:

~~~bash
npm install
~~~

2. Start development server:

~~~bash
npm run dev
~~~

3. Open in browser:

- http://localhost:3000

## Production Build

~~~bash
npm run build
npm run start
~~~

## Deploy to Vercel

### Option 1: Vercel Dashboard

1. Push this project to GitHub.
2. Go to https://vercel.com/new.
3. Import the repository.
4. Keep default Next.js settings.
5. Click Deploy.

### Option 2: Vercel CLI

1. Install CLI:

~~~bash
npm i -g vercel
~~~

2. Deploy:

~~~bash
vercel
~~~

3. For production deployment:

~~~bash
vercel --prod
~~~

## Notes Before Go-Live

- Replace placeholder contact details in UI and WhatsApp number.
- Connect `/api/contact` to your CRM, database, or email provider.
- Replace sample portfolio images with your completed project photos.
- Update site URL in metadata (`metadataBase`) after final domain is ready.
