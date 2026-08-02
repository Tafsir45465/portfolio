import Link from "next/link";
import { profile } from "@/data/content";

const links = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-bg/70 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between">
        <Link href="/" className="font-heading font-semibold">
          {profile.name}
        </Link>
        <nav className="hidden gap-8 text-sm text-muted sm:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition duration-300 hover:text-text">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-bg transition duration-300 hover:opacity-90 hover:shadow-[0_0_20px_-5px_rgba(91,140,255,0.6)] active:scale-95"
        >
          Hire Me
        </a>
      </div>
    </header>
  );
}
