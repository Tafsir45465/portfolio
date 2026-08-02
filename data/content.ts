export const profile = {
  name: "Tas",
  title: "Full Stack Developer",
  tagline: "Crafting Fast, Scalable & Beautiful Digital Products",
  location: "Dhaka, Bangladesh",
  email: "m.iftakharulalam122@gmail.com",
  resumeUrl: "/resume.pdf",
  social: {
    github: "https://github.com/yourhandle",
    linkedin: "https://www.linkedin.com/in/m-iftakhar-ul-alam-b843462bb/",
    instagram: "https://www.instagram.com/amiftakhar/",
  },
};

export const about = {
  story: [
    "Started out breaking things in a browser console years before I understood what a DOM node was — the curiosity never left.",
    "Now I'm a CSE student who spends as much time shipping real interfaces as studying theory, because the two make each other sharper.",
    "My approach: understand the problem before touching a framework, keep components small and honest, and treat performance and accessibility as features — not afterthoughts.",
  ],
  philosophy:
    "Good software is invisible. If someone notices the UI, I probably over-engineered it.",
};

export const skills = {
  Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  Backend: ["Node.js", "Express", "REST APIs", "Python"],
  Database: ["PostgreSQL", "MongoDB", "SQLite"],
  Cloud: ["Vercel", "AWS S3"],
  Tools: ["Git", "Figma", "Postman"],
  DevOps: ["Docker (basics)", "GitHub Actions"],
};

export type Project = {
  slug: string;
  name: string;
  description: string;
  tech: string[];
  features: string[];
  github?: string;
  demo?: string;
  cover: string;
  problem: string;
  approach: string;
  challenges: string;
  lessons: string;
};

export const projects: Project[] = [
  {
    slug: "hospital-patient-serial-system",
    name: "Hospital Patient Serial Management System",
    description:
      "Desktop app that replaces paper token queues with a searchable digital serial system for outpatient departments.",
    tech: ["Python", "Tkinter", "SQLite"],
    features: [
      "Live queue with serial auto-increment",
      "Patient search and record lookup",
      "Daily reset and reporting",
    ],
    github: "https://github.com/yourhandle/hospital-serial-system",
    demo: "https://hospital-patient-serial-system.vercel.app/",
    cover: "/projects/hospital-serial.png",
    problem:
      "Outpatient desks were tracking patient order on paper, causing lost tokens and disputes over turn order.",
    approach:
      "Built a Tkinter desktop app backed by SQLite so the front desk needs no internet connection and no new hardware.",
    challenges:
      "Recovering the project after a local file-loss incident meant rebuilding state management carefully with more frequent commits.",
    lessons:
      "Commit early, commit often — and keep a local backup habit separate from git.",
  },
  {
    slug: "leadfinder",
    name: "LeadFinder",
    description:
      "Independent lead-scanning web app that surfaces prospects matching a set of business filters.",
    tech: ["FastAPI", "Python", "Vanilla JS"],
    features: [
      "Configurable scan filters",
      "Lightweight JSON API",
      "No-build vanilla JS front end for fast iteration",
    ],
    demo: "https://leadfinder-backend.vercel.app/",
    cover: "/projects/leadfinder.png",
    problem:
      "Manually searching for leads across scattered sources doesn't scale past a handful of prospects a day.",
    approach:
      "FastAPI backend does the scanning/scoring; a vanilla JS front end keeps the UI dependency-free and fast to iterate on.",
    challenges: "Balancing scan breadth against response time on a single backend process.",
    lessons: "Not every project needs a framework — vanilla JS was the right call here.",
  },
  {
    slug: "framelabs-foundry",
    name: "FrameLabs Foundry",
    description:
      "Business website for a video post-production studio — single-page marketing site with portfolio, pricing tiers, and lead-capture contact form.",
    tech: ["HTML", "CSS", "JavaScript"],
    features: [
      "Autoplay video showcase with a YouTube-embed portfolio grid",
      "Tiered pricing section (Starter / Growth / Pro / Custom)",
      "Testimonial carousel, animated stat counters, embedded map, contact form",
    ],
    demo: "https://framelabsfoundry.com/",
    cover: "/projects/framelabs-foundry.png",
    problem:
      "The studio needed a site that could show off editing work and convert visitors into paying clients through clear pricing.",
    approach:
      "Single-page structure so visitors move from portfolio to pricing to contact without extra navigation friction.",
    challenges:
      "Balancing a media-heavy portfolio grid (video thumbnails, autoplay preview) against page load speed.",
    lessons:
      "For a conversion-focused site, pricing clarity does more work than visual flourish.",
  },
  {
    slug: "synapse",
    name: "Synapse — AI Project Brain",
    description:
      "Dashboard that scans a codebase and builds structural memory, diagrams, and context an AI can use directly.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    features: [
      "Project scanner that builds structured memory of a codebase",
      "Architecture graph view and file explorer",
      "AI chat grounded in the scanned project, plus command palette (⌘K) navigation",
    ],
    demo: "https://synapse-neon-pi.vercel.app/",
    cover: "/projects/synapse.png",
    problem:
      "Handing an AI assistant a large codebase cold wastes time re-explaining structure every session.",
    approach:
      "Scan once, persist the structural memory, and expose it through a dashboard (graph, explorer, chat) instead of re-reading files each time.",
    challenges:
      "Representing an arbitrary codebase's structure in a way that's both visually readable and useful as AI context.",
    lessons:
      "A command palette turns a multi-page dashboard into something that feels fast even with many sections.",
  },
  {
    slug: "vibexen",
    name: "VibeXen — Vibe Coding Bangla",
    description:
      "Bangla-language AI coding education platform — course marketplace teaching AI-assisted web/app/design work.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    features: [
      "Course catalog, product pages, and cart/checkout flow",
      "Auth system for student accounts",
      "Bilingual content structure (Bangla instruction, English industry terms)",
    ],
    demo: "https://vibexen.com",
    cover: "/projects/vibexen.png",
    problem:
      "Most AI-coding education content is English-only, which is a real barrier for Bangla-speaking learners.",
    approach:
      "Built a course-marketplace structure (catalog → product page → cart → auth) so it works like a platform learners already understand, just entirely in Bangla.",
    challenges:
      "Structuring bilingual content — Bangla explanation with English technical terms — without it reading awkwardly.",
    lessons:
      "Localization is more than translation — the information architecture has to match what the audience already expects from a course platform.",
  },
  {
    slug: "himu-portfolio",
    name: "Himu — Graphic Designer Portfolio",
    description:
      "One-page portfolio for a FrameLabs Foundry teammate, built to showcase social media graphic design work.",
    tech: ["HTML", "CSS", "JavaScript"],
    features: [
      "Full-bleed image showcase for social media design work",
      "Marquee-style scrolling header",
      "Minimal single-page layout, deployed on GitHub Pages",
    ],
    demo: "https://himu-vai.github.io/himu-portfolio/",
    cover: "/projects/himu-portfolio.png",
    problem:
      "A graphic designer's work needs to be seen, not read — text-heavy portfolio templates undersell visual work.",
    approach:
      "Stripped the page down to almost nothing but the images themselves, in a single scroll, so the work does the talking.",
    challenges:
      "Keeping a large, image-heavy single page fast to load on GitHub Pages with no build pipeline.",
    lessons:
      "For a visual portfolio, restraint in layout is what makes the work stand out.",
  },
];

export type PricingPlan = {
  name: string;
  price: string | null;
  perfectFor: string[];
  includes: string[];
  cta: string;
  highlight?: boolean;
};

export const pricingPlans: PricingPlan[] = [
  {
    name: "Landing Page",
    price: "$499",
    perfectFor: [
      "Personal Portfolio",
      "Product Page",
      "Event Page",
      "Landing Campaign",
    ],
    includes: [
      "Modern Design",
      "Mobile Responsive",
      "Contact Form",
      "Basic SEO",
      "Fast Loading",
      "Social Media Links",
    ],
    cta: "Get started",
  },
  {
    name: "Business Website",
    price: "$999",
    perfectFor: [
      "Company Website",
      "Restaurant Website",
      "Clinic Website",
      "E-commerce Store",
    ],
    includes: [
      "Multiple Pages",
      "CMS Ready",
      "Admin Dashboard",
      "API Integration",
      "Bug Fixes",
    ],
    cta: "Get started",
    highlight: true,
  },
  {
    name: "Simple Web Application",
    price: "$2500",
    perfectFor: [
      "New Startups",
      "Online Businesses",
      "Team & Office Tools",
      "Membership Sites",
    ],
    includes: [
      "User Authentication",
      "Database Setup",
      "Admin Panel",
      "Custom Backend Development",
      "API Integration",
      "Deployment",
    ],
    cta: "Get started",
  },
  {
    name: "Custom Website",
    price: null,
    perfectFor: [
      "Booking Website",
      "School Website",
      "Hospital Website",
      "Any Custom Idea",
    ],
    includes: [
      "Custom Design",
      "Custom Features",
      "Database Integration",
      "User Login System",
      "API Integration",
      "Scalable Architecture",
    ],
    cta: "Contact me",
  },
];

export const experience = [
  {
    period: "Ongoing",
    title: "B.Sc. in Computer Science & Engineering",
    org: "Green University of Bangladesh",
    type: "Education",
  },
  {
    period: "Current",
    title: "Front-End Web Development Intern",
    org: "FrameLabs Foundry, Dhaka",
    type: "Internship",
  },
  {
    period: "Ongoing",
    title: "Independent Projects",
    org: "Self-directed",
    type: "Personal Projects",
  },
];

export const services = [
  { title: "Landing Pages", desc: "Fast, conversion-focused single pages." },
  { title: "Business Websites", desc: "Multi-page sites with CMS-ready content." },
  { title: "Admin Dashboards", desc: "Data-dense internal tools that stay usable." },
  { title: "Full Stack Applications", desc: "End-to-end apps, front end to database." },
  { title: "API Development", desc: "REST APIs designed for real client needs." },
  { title: "Authentication Systems", desc: "Secure login, sessions, role-based access." },
  { title: "Bug Fixing & Maintenance", desc: "Diagnose, fix, document, move on." },
  { title: "Performance Optimization", desc: "Lighthouse audits turned into real fixes." },
];

export const faqs = [
  {
    q: "What's your typical project timeline?",
    a: "Depends on scope — a landing page can ship in days; a full stack app takes weeks. I'll give a concrete estimate after a scoping call.",
  },
  {
    q: "Do you work with existing codebases?",
    a: "Yes — bug fixes, feature additions, and refactors on existing projects are welcome.",
  },
  {
    q: "How do we communicate during a project?",
    a: "Email or WhatsApp for updates, with a shared task board for anything multi-week.",
  },
];
