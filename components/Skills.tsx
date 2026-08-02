import { skills } from "@/data/content";

export default function Skills() {
  return (
    <section id="skills" className="border-t border-white/5 py-24">
      <div className="container-page">
        <p className="font-heading text-sm uppercase tracking-[0.2em] text-accent">Skills</p>
        <h2 className="mt-3 font-heading text-3xl font-semibold">What I work with</h2>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="rounded-xl border border-white/10 bg-surface p-5"
            >
              <h3 className="font-heading text-sm font-medium text-muted">{category}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {items.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-white/10 bg-bg px-3 py-1 text-sm"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
