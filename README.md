# Portfolio

Next.js 14 (App Router) + TypeScript + Tailwind + Framer Motion.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Edit content

Everything visible on the site lives in `data/content.ts` — name, tagline,
projects, pricing plans, socials. No component code touched.

## Contact form — finish the wiring

`components/Contact.tsx` calls EmailJS but needs your real credentials.
In `components/Contact.tsx`, replace:

```
YOUR_SERVICE_ID
YOUR_TEMPLATE_ID
YOUR_PUBLIC_KEY
```

Get these free at emailjs.com: create a service (Gmail), a template with
`from_name` / `from_email` / `message` fields, and copy the public key from
Account → API Keys. Until these are filled in, the form will show the error
state on submit — that's expected, not a bug.

## This pass

- Name → **TAFSIR**, tagline → "Crafting Fast, Scalable & Beautiful Digital
  Products"
- Code box rebuilt: syntax-colored typing, glowing cursor, floating motion,
  rotating gradient border, glass background
- New **Portfolio** section: 6 projects in a 3x2 grid, browser-window
  preview, hover zoom/glow, live + GitHub + case-study links
- New **Services** section: 4 pricing cards ($500 / $1000 / $2000 / custom),
  glass + gradient-border style, middle plan highlighted
- **Footer**: email, Instagram, LinkedIn icons with glow hover
- Contact form wired to EmailJS with loading/success/error states (needs
  your credentials — see above)
- Hover/active/loading micro-animations added to every button

## Heads up — 4 of the 6 portfolio projects are placeholders

Only your two real projects (Hospital Patient Serial System, LeadFinder)
have real content. The other four are labeled "Your Next Project" in
`data/content.ts` with no live link — swap them for real work before
sending this to a client or recruiter. Shipping placeholder projects to a
technical reviewer usually reads worse than showing fewer real ones.

## Still not built (unchanged from last pass)

MDX blog, resume PDF generation, live GitHub stats, testimonials, FAQ,
command palette, custom cursor, light-mode toggle, GSAP/Lenis (this build
uses Framer Motion + native scroll — swapping in Lenis/GSAP is a bigger,
separate pass since it touches global scroll behavior).

`components/About.tsx`, `Skills.tsx`, `Timeline.tsx`, and the old
`Services.tsx` still exist but aren't on the homepage — say if you want any
back in, or moved to a separate `/about` page.
