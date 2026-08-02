"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { profile } from "@/data/content";
import CodeBox from "@/components/CodeBox";
import MagneticButton from "@/components/MagneticButton";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-grid-fade pt-28 pb-10">
      <div className="container-page grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-heading text-5xl font-semibold tracking-tight leading-[1.05] sm:text-[3.75rem]">
            Hi, I'm {profile.name}
          </h1>
          <p className="mt-2 font-heading text-lg font-medium tracking-tight text-muted">
            A {profile.title}
          </p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative mt-8 max-w-lg"
          >
            <div className="absolute -left-4 top-1 bottom-1 w-[3px] rounded-full bg-gradient-to-b from-primary to-accent" />
            <p className="pl-5 font-heading text-2xl font-semibold tracking-tight sm:text-[1.75rem]">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] bg-clip-text text-transparent [animation:gradient-flow_5s_ease_infinite]">
                Still Curious. Still Coding.
              </span>
            </p>
            <p className="mt-3 pl-5 font-heading text-xl font-semibold tracking-tight text-text sm:text-2xl">
              Building Websites That People Remember.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-bg transition duration-300 hover:scale-[1.03] hover:opacity-90 hover:shadow-[0_0_25px_-5px_rgba(91,140,255,0.6)] active:scale-95"
            >
              See My Work
              <ArrowRight size={16} className="transition group-hover:translate-x-1" />
            </a>
            <MagneticButton
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 font-medium transition-colors duration-300 hover:border-accent/60 hover:bg-white/5 hover:text-accent hover:shadow-[0_0_28px_-6px_rgba(0,212,170,0.6)] active:scale-95"
            >
              Start Project
            </MagneticButton>
          </motion.div>
        </motion.div>

        <CodeBox />
      </div>
    </section>
  );
}
