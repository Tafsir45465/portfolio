"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/content";

export default function Portfolio() {
  return (
    <section id="work" className="border-t border-white/5 py-16">
      <div className="container-page">
        <div className="text-center">
          <p className="font-heading text-sm uppercase tracking-[0.2em] text-accent">Portfolio</p>
          <h2 className="mx-auto mt-3 max-w-md font-heading text-3xl font-semibold">Featured Projects</h2>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.article
              key={p.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-surface transition duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_20px_50px_-15px_rgba(91,140,255,0.35)]"
            >
              {/* browser-window preview */}
              <div className="border-b border-white/10">
                <div className="flex items-center gap-1.5 bg-bg/60 px-3 py-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
                </div>
                <div className="relative flex aspect-video items-center justify-center overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
                  <span className="font-heading text-sm text-muted">{p.name}</span>
                  {p.cover ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={p.cover}
                      alt={`${p.name} preview`}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-110"
                      onError={(e) => (e.currentTarget.style.display = "none")}
                    />
                  ) : null}
                  <div className="absolute inset-0 flex items-center justify-center bg-bg/0 opacity-0 transition duration-300 group-hover:bg-bg/70 group-hover:opacity-100">
                    <div className="flex gap-3">
                      {p.demo && (
                        <a
                          href={p.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs font-medium text-bg transition hover:scale-105"
                        >
                          <ExternalLink size={13} /> Live Demo
                        </a>
                      )}
                      {p.github && (
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-full border border-white/30 px-4 py-2 text-xs font-medium text-text transition hover:scale-105 hover:border-white/60"
                        >
                          <Github size={13} /> GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-heading text-lg font-medium">{p.name}</h3>
                <p className="mt-2 text-sm text-muted">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-muted">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex items-center gap-4 text-sm">
                  <Link href={`/projects/${p.slug}`} className="font-medium text-primary hover:underline">
                    Case study
                  </Link>
                  {p.demo && (
                    <a href={p.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-muted hover:text-text">
                      <ExternalLink size={14} /> Live
                    </a>
                  )}
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-muted hover:text-text">
                      <Github size={14} /> Code
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
