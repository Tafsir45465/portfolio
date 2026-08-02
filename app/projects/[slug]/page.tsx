import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { projects } from "@/data/content";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return {};
  return { title: project.name, description: project.description };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return notFound();

  return (
    <>
      <Header />
      <main className="container-page pb-24 pt-32">
        <Link href="/#projects" className="inline-flex items-center gap-2 text-sm text-muted hover:text-text">
          <ArrowLeft size={14} /> Back to projects
        </Link>

        <h1 className="mt-6 font-heading text-4xl font-semibold">{project.name}</h1>
        <p className="mt-3 max-w-2xl text-lg text-muted">{project.description}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span key={t} className="rounded-full border border-white/10 px-3 py-1 text-xs text-muted">
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6 flex gap-4">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm hover:border-white/40">
              <Github size={16} /> GitHub
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-bg">
              <ExternalLink size={16} /> Live Demo
            </a>
          )}
        </div>

        <div className="mt-16 grid gap-10">
          <Section title="Problem" body={project.problem} />
          <Section title="Approach & Architecture" body={project.approach} />
          <div>
            <h2 className="font-heading text-xl font-medium">Features</h2>
            <ul className="mt-3 list-inside list-disc space-y-1 text-muted">
              {project.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>
          <Section title="Challenges" body={project.challenges} />
          <Section title="Lessons Learned" body={project.lessons} />
        </div>

        <div className="mt-16 rounded-2xl border border-white/10 bg-surface p-8 text-center">
          <p className="font-heading text-xl font-medium">Have a similar project in mind?</p>
          <Link href="/#contact" className="mt-4 inline-block rounded-full bg-primary px-6 py-3 font-medium text-bg">
            Let's talk
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}

function Section({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <h2 className="font-heading text-xl font-medium">{title}</h2>
      <p className="mt-3 text-muted">{body}</p>
    </div>
  );
}
