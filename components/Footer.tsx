import { Mail, Instagram, Linkedin } from "lucide-react";
import { profile } from "@/data/content";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="container-page flex flex-col items-center justify-between gap-6 text-sm text-muted sm:flex-row">
        <p>© {new Date().getFullYear()} {profile.name}. Built with Next.js.</p>
        <div className="flex gap-4">
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="rounded-full border border-white/10 p-2.5 transition duration-300 hover:border-primary/50 hover:text-primary hover:shadow-[0_0_20px_-6px_rgba(91,140,255,0.6)]"
          >
            <Mail size={16} />
          </a>
          <a
            href={profile.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="rounded-full border border-white/10 p-2.5 transition duration-300 hover:border-accent/50 hover:text-accent hover:shadow-[0_0_20px_-6px_rgba(0,212,170,0.6)]"
          >
            <Instagram size={16} />
          </a>
          <a
            href={profile.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="rounded-full border border-white/10 p-2.5 transition duration-300 hover:border-primary/50 hover:text-primary hover:shadow-[0_0_20px_-6px_rgba(91,140,255,0.6)]"
          >
            <Linkedin size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
