"use client";
import { motion } from "framer-motion";
import { Clock, FolderCheck, Smartphone, Zap } from "lucide-react";

const ACCENTS = ["#5B8CFF", "#00D4AA", "#FF7B9C", "#FFD166"];

const STATS = [
  { icon: Clock, value: "3+", label: "Years Experience" },
  { icon: FolderCheck, value: "25+", label: "Projects Completed" },
  { icon: Smartphone, value: "100%", label: "Responsive Design" },
  { icon: Zap, value: "Fast", label: "Delivery & Ongoing Support" },
];

export default function Stats() {
  return (
    <section className="border-t border-white/5 py-10">
      <div className="container-page grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {STATS.map(({ icon: Icon, value, label }, i) => {
          const accent = ACCENTS[i % ACCENTS.length];
          return (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              style={{ ["--accent" as string]: accent }}
              className="group flex items-center gap-3 rounded-xl border border-white/10 bg-surface/70 px-4 py-4 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-[color:var(--accent)]/50 hover:shadow-[0_16px_40px_-15px_var(--accent)]"
            >
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition duration-300 group-hover:scale-110"
                style={{ borderColor: `${accent}55`, background: `${accent}14`, color: accent }}
              >
                <Icon size={17} />
              </div>
              <div>
                <p className="font-heading text-2xl font-semibold tracking-tight">{value}</p>
                <p className="text-xs text-muted">{label}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
