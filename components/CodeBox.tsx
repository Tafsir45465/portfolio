"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { profile } from "@/data/content";

type Token = { text: string; color: string };

// Simple hand-tagged tokens per line for lightweight syntax coloring —
// no highlighter dependency needed for a handful of lines.
const LINES: Token[][] = [
  [
    { text: "const", color: "text-[#FF7B9C]" },
    { text: " developer ", color: "text-text" },
    { text: "= {", color: "text-muted" },
  ],
  [
    { text: "  name", color: "text-[#5B8CFF]" },
    { text: ": ", color: "text-muted" },
    { text: `"${profile.name}"`, color: "text-[#00D4AA]" },
    { text: ",", color: "text-muted" },
  ],
  [
    { text: "  stack", color: "text-[#5B8CFF]" },
    { text: ": [", color: "text-muted" },
    { text: '"Next.js", "TypeScript", "Node"', color: "text-[#00D4AA]" },
    { text: "],", color: "text-muted" },
  ],
  [
    { text: "  ship", color: "text-[#FFD166]" },
    { text: "(idea) {", color: "text-muted" },
  ],
  [
    { text: "    return", color: "text-[#FF7B9C]" },
    { text: " production.", color: "text-text" },
    { text: "ready", color: "text-[#FFD166]" },
    { text: "(idea);", color: "text-muted" },
  ],
  [{ text: "  },", color: "text-muted" }],
  [{ text: "};", color: "text-muted" }],
];

function useTypedLines(lines: Token[][], speed = 22) {
  const [visible, setVisible] = useState<{ tokens: Token[]; chars: number }[]>([]);

  useEffect(() => {
    let li = 0;
    let ci = 0;
    const out: { tokens: Token[]; chars: number }[] = [];
    const id = setInterval(() => {
      if (li >= lines.length) {
        clearInterval(id);
        return;
      }
      const fullLineLength = lines[li].reduce((n, t) => n + t.text.length, 0);
      ci++;
      const current = { tokens: lines[li], chars: ci };
      const snapshot = [...out, current];
      setVisible(snapshot);
      if (ci >= fullLineLength) {
        out.push(current);
        li++;
        ci = 0;
      }
    }, speed);
    return () => clearInterval(id);
  }, [lines, speed]);

  return visible;
}

function renderLine(line: { tokens: Token[]; chars: number }) {
  let remaining = line.chars;
  return line.tokens.map((t, i) => {
    const slice = t.text.slice(0, Math.max(0, remaining));
    remaining -= t.text.length;
    return (
      <span key={i} className={t.color}>
        {slice}
      </span>
    );
  });
}

export default function CodeBox() {
  const visible = useTypedLines(LINES);

  // Lightweight 3D tilt — springs smooth the raw pointer delta, no extra deps.
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const rotateX = useSpring(useTransform(rawY, [-0.5, 0.5], [8, -8]), { stiffness: 150, damping: 18 });
  const rotateY = useSpring(useTransform(rawX, [-0.5, 0.5], [-8, 8]), { stiffness: 150, damping: 18 });
  const glowX = useSpring(useTransform(rawX, [-0.5, 0.5], [0, 100]), { stiffness: 150, damping: 20 });
  const glowY = useSpring(useTransform(rawY, [-0.5, 0.5], [0, 100]), { stiffness: 150, damping: 20 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    rawX.set((e.clientX - rect.left) / rect.width - 0.5);
    rawY.set((e.clientY - rect.top) / rect.height - 0.5);
  }
  function handleMouseLeave() {
    rawX.set(0);
    rawY.set(0);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
      style={{ perspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative"
    >
      {/* moving gradient border */}
      <div className="absolute -inset-[1.5px] rounded-2xl bg-[conic-gradient(from_var(--angle),#5B8CFF,#00D4AA,#5B8CFF)] opacity-70 blur-[1px] [animation:spin-border_6s_linear_infinite]" />

      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="relative overflow-hidden rounded-2xl border border-white/10 bg-surface/90 shadow-[0_0_60px_-15px_rgba(91,140,255,0.35)] backdrop-blur-xl"
      >
        {/* cursor-follow glow */}
        <motion.div
          style={{
            left: useTransform(glowX, (v) => `${v}%`),
            top: useTransform(glowY, (v) => `${v}%`),
          }}
          className="pointer-events-none absolute h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl"
        />

        <div className="relative flex items-center gap-2 border-b border-white/10 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-red-500/70" />
          <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
          <span className="h-3 w-3 rounded-full bg-green-500/70" />
          <span className="ml-3 text-xs text-muted">developer.ts</span>
        </div>
        <pre className="relative min-h-[220px] px-5 py-6 font-mono text-sm leading-relaxed">
          {visible.map((line, i) => (
            <div key={i}>{renderLine(line)}</div>
          ))}
          <span className="inline-block h-4 w-2 animate-blink bg-accent align-middle shadow-[0_0_10px_2px_rgba(0,212,170,0.7)]" />
        </pre>
      </motion.div>
    </motion.div>
  );
}
