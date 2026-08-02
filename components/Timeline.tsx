import { experience } from "@/data/content";

export default function Timeline() {
  return (
    <section id="experience" className="border-t border-white/5 py-24">
      <div className="container-page">
        <p className="font-heading text-sm uppercase tracking-[0.2em] text-accent">Experience</p>
        <h2 className="mt-3 font-heading text-3xl font-semibold">Timeline</h2>

        <ol className="mt-10 space-y-8 border-l border-white/10 pl-6">
          {experience.map((e, i) => (
            <li key={i} className="relative">
              <span className="absolute -left-[29px] top-1 h-3 w-3 rounded-full bg-primary" />
              <p className="text-sm text-muted">
                {e.period} · {e.type}
              </p>
              <p className="mt-1 font-heading text-lg font-medium">{e.title}</p>
              <p className="text-muted">{e.org}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
