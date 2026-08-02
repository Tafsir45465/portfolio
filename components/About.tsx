import { about } from "@/data/content";

export default function About() {
  return (
    <section id="about" className="border-t border-white/5 py-24">
      <div className="container-page grid gap-10 lg:grid-cols-[0.4fr_0.6fr]">
        <div>
          <p className="font-heading text-sm uppercase tracking-[0.2em] text-accent">About</p>
          <h2 className="mt-3 font-heading text-3xl font-semibold">How I think about the work</h2>
        </div>
        <div className="space-y-5 text-lg text-muted">
          {about.story.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <blockquote className="mt-6 border-l-2 border-primary pl-4 text-text">
            {about.philosophy}
          </blockquote>
        </div>
      </div>
    </section>
  );
}
