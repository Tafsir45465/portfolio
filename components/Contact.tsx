"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Github, Linkedin, Instagram, Mail, Loader2, CheckCircle2, XCircle, Send } from "lucide-react";
import { profile } from "@/data/content";

const schema = z.object({
  name: z.string().min(2, "Name is too short"),
  email: z.string().email("Enter a valid email"),
  message: z.string().min(10, "Message needs at least 10 characters"),
});
type FormData = z.infer<typeof schema>;

// Fill these in from your EmailJS dashboard (emailjs.com — free tier is enough).
// Never hardcode a private key here — only the public key belongs client-side.
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";

function FloatingField({
  id,
  label,
  error,
  textarea,
  register,
}: {
  id: "name" | "email" | "message";
  label: string;
  error?: string;
  textarea?: boolean;
  register: ReturnType<typeof useForm<FormData>>["register"];
}) {
  const Tag = textarea ? "textarea" : "input";
  return (
    <div className="relative">
      <Tag
        id={id}
        placeholder=" "
        rows={textarea ? 4 : undefined}
        {...register(id)}
        aria-invalid={!!error}
        className="peer w-full rounded-lg border border-white/10 bg-surface px-4 pb-2.5 pt-5 outline-none transition duration-300 focus:border-primary focus:shadow-[0_0_0_3px_rgba(91,140,255,0.15)]"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-4 top-4 text-muted transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary [&:not(:placeholder-shown)]:top-2 [&:not(:placeholder-shown)]:text-xs"
      >
        {label}
      </label>
      {error && <p className="mt-1 text-sm text-red-400">{error}</p>}
    </div>
  );
}

// Each button gets its own gentle float + pulse loop, offset in time so
// they don't all move in sync.
const SOCIAL_ICONS = [
  { icon: Mail, href: (p: typeof profile) => `mailto:${p.email}`, label: "Email", color: "text-primary", ring: "hover:border-primary/50", glow: "rgba(91,140,255,0.5)" },
  { icon: Github, href: (p: typeof profile) => p.social.github, label: "GitHub", color: "text-text", ring: "hover:border-white/40", glow: "rgba(255,255,255,0.35)" },
  { icon: Linkedin, href: (p: typeof profile) => p.social.linkedin, label: "LinkedIn", color: "text-primary", ring: "hover:border-primary/50", glow: "rgba(91,140,255,0.5)" },
  { icon: Instagram, href: (p: typeof profile) => p.social.instagram, label: "Instagram", color: "text-accent", ring: "hover:border-accent/50", glow: "rgba(0,212,170,0.5)" },
];

function SocialGrid() {
  return (
    <div className="grid grid-cols-2 gap-5">
      {SOCIAL_ICONS.map(({ icon: Icon, href, label, color, ring, glow }, i) => (
        <motion.a
          key={label}
          href={href(profile)}
          target={label === "Email" ? undefined : "_blank"}
          rel="noopener noreferrer"
          aria-label={label}
          animate={{ y: [0, -6, 0], scale: [1, 1.04, 1] }}
          transition={{ duration: 3.4 + i * 0.3, repeat: Infinity, ease: "easeInOut", delay: i * 0.25 }}
          whileHover={{ scale: 1.1, y: -4, boxShadow: `0 0 25px -4px ${glow}` }}
          className={`flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-surface/80 backdrop-blur transition-colors duration-300 ${ring} ${color}`}
          style={{ boxShadow: "0 0 0 0 transparent" }}
        >
          <Icon size={24} />
        </motion.a>
      ))}
    </div>
  );
}

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  async function onSubmit(data: FormData) {
    setStatus("idle");
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        { from_name: data.name, from_email: data.email, message: data.message, to_email: profile.email },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      reset();
    } catch (err) {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="border-t border-white/5 py-16">
      <div className="container-page">
        <div className="text-center">
          <p className="font-heading text-sm uppercase tracking-[0.2em] text-accent">Contact</p>
          <h2 className="mt-3 font-heading text-3xl font-semibold">Let's build something</h2>
          <p className="mx-auto mt-4 max-w-md text-muted">
            Open to freelance work, remote roles, and internships. Fastest reply: email.
          </p>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="flex justify-center lg:justify-start">
            <SocialGrid />
          </div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-5"
            noValidate
          >
            <FloatingField id="name" label="Name" error={errors.name?.message} register={register} />
            <FloatingField id="email" label="Email" error={errors.email?.message} register={register} />
            <FloatingField id="message" label="Message" textarea error={errors.message?.message} register={register} />

            <button
              type="submit"
              disabled={isSubmitting}
              className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-primary px-6 py-3 font-medium text-bg transition duration-300 hover:scale-[1.02] hover:opacity-90 hover:shadow-[0_0_30px_-5px_rgba(91,140,255,0.7)] active:scale-95 disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={16} className="animate-spin" /> Sending...
                </>
              ) : (
                <>
                  Start Conversation
                  <Send size={15} className="transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                </>
              )}
            </button>

            {isSubmitSuccessful && status === "idle" && (
              <p className="flex items-center gap-2 text-sm text-accent">
                <CheckCircle2 size={16} /> Sent — I'll reply within a day or two.
              </p>
            )}
            {status === "error" && (
              <p className="flex items-center gap-2 text-sm text-red-400">
                <XCircle size={16} /> Something went wrong — email me directly at {profile.email}.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
