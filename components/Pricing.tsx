"use client";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { pricingPlans } from "@/data/content";

// One accent per card — hex values matched to glow/border/check colors below.
const ACCENTS = ["#5B8CFF", "#00D4AA", "#FF7B9C", "#FFD166"];

export default function Pricing() {
  return (
    <section id="services" className="border-t border-white/5 py-20">
      <div className="container-page">
        <div className="text-center">
          <p className="font-heading text-sm uppercase tracking-[0.2em] text-accent">Services</p>
          <h2 className="mt-3 font-heading text-3xl font-semibold">Services</h2>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-4">
          {pricingPlans.map((plan, i) => {
            const accent = ACCENTS[i % ACCENTS.length];
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                style={{ ["--accent" as string]: accent }}
                className="group relative flex flex-col rounded-2xl border border-white/10 bg-surface/70 p-6 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-[color:var(--accent)]/60 hover:shadow-[0_20px_50px_-15px_var(--accent)]"
              >
                {plan.highlight && (
                  <span
                    className="absolute -top-3 left-6 rounded-full px-3 py-1 text-xs font-medium text-bg"
                    style={{ background: accent }}
                  >
                    Most popular
                  </span>
                )}
                <h3 className="font-heading text-lg font-medium">{plan.name}</h3>
                <p className="mt-2 font-heading text-3xl font-semibold">
                  {plan.price ?? <span className="text-xl text-muted">Custom</span>}
                </p>

                <div className="mt-6">
                  <p className="text-xs font-medium uppercase tracking-wider" style={{ color: accent }}>
                    Perfect for
                  </p>
                  <ul className="mt-2 space-y-1.5 text-sm text-muted">
                    {plan.perfectFor.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5 flex-1">
                  <p className="text-xs font-medium uppercase tracking-wider" style={{ color: accent }}>
                    Includes
                  </p>
                  <ul className="mt-2 space-y-1.5 text-sm text-muted">
                    {plan.includes.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <Check size={14} className="mt-0.5 shrink-0" style={{ color: accent }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="#contact"
                  className="mt-8 inline-flex items-center justify-center rounded-full border px-5 py-3 text-sm font-medium text-text transition duration-300 hover:scale-[1.03] active:scale-95"
                  style={{ borderColor: `${accent}66` }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = accent;
                    e.currentTarget.style.color = "#09090B";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.color = "#F4F4F5";
                  }}
                >
                  {plan.price === null ? "Let's Talk" : plan.cta}
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
