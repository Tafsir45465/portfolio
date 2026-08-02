import { services } from "@/data/content";

export default function Services() {
  return (
    <section id="services" className="border-t border-white/5 py-24">
      <div className="container-page">
        <p className="font-heading text-sm uppercase tracking-[0.2em] text-accent">Services</p>
        <h2 className="mt-3 font-heading text-3xl font-semibold">What I can build for you</h2>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div key={s.title} className="rounded-xl border border-white/10 bg-surface p-5">
              <h3 className="font-heading font-medium">{s.title}</h3>
              <p className="mt-2 text-sm text-muted">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
