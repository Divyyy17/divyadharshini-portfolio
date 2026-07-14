# Divyadharshini M — Portfolio

A premium, animated Next.js portfolio built from the resume content, using the
requested stack: Next.js (App Router) + React + TypeScript + Tailwind CSS +
Framer Motion + GSAP + Lenis + lucide-react.

## Design direction

Dark, glassmorphic theme (`#09090B` base) with an electric blue → purple →
cyan gradient (`#2E6FFF → #8B5CF6 → #22D3EE`). Display type is **Space
Grotesk**, body is **Inter**, and code/labels use **JetBrains Mono**.

The signature element is **"the Signal"** — a live gradient waveform that
runs across the top of the page as you scroll. It's a literal stand-in for
Divya's "Animation & UI Motion" specialty (GSAP / Framer Motion / AOS):
motion itself is the one thing that visibly threads through every section.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Project structure

```
app/                Next.js App Router pages, layout, global styles
components/         Section components (Hero, About, Skills, Experience,
                     Projects, Education, Contact, Footer) + Nav, cursor,
                     scroll progress, smooth scroll, loading screen, FAB
lib/data.ts          All resume content in one place — edit this file to
                     update copy without touching component code
public/resume/       Downloadable resume (docx + generated PDF)
```

## Notes / things to personalize before deploying

- **Contact form**: currently opens the visitor's email client via a
  `mailto:` link (no backend). Wire it to an API route or a form service
  (Formspree, Resend, etc.) when you're ready to receive submissions
  directly.
- **Project links**: the GitHub icon on each project card links to your
  GitHub profile (no individual repo/live-demo URLs were provided). Update
  `lib/data.ts` and `components/Projects.tsx` with real repo/demo links once
  you have them.
- **Domain**: `app/layout.tsx` uses a placeholder `https://divyadharshini.dev`
  for metadata/Open Graph — swap in your real domain once you deploy.
- **Profile image**: the hero currently shows a "DM" placeholder inside the
  glowing frame. Drop a real photo into `public/` and swap the placeholder
  `<span>` in `components/Hero.tsx` for a Next.js `<Image />`.

## Deploying

Works out of the box on [Vercel](https://vercel.com/new) — import the repo
and deploy, no config needed. Or run `npm run build && npm run start` on any
Node host.
