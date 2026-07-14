"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { profile, stats } from "@/lib/data";

function Counter({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const numeric = parseInt(value.replace(/\D/g, ""), 10);
    if (isNaN(numeric)) return;
    const suffix = value.replace(/[0-9]/g, "");
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      el.textContent = value;
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            let start = 0;
            const duration = 1200;
            const startTime = performance.now();
            const step = (now: number) => {
              const progress = Math.min((now - startTime) / duration, 1);
              start = Math.floor(progress * numeric);
              if (el) el.textContent = `${start}${suffix}`;
              if (progress < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );
    if (wrapRef.current) observer.observe(wrapRef.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={wrapRef} className="text-center">
      <div className="font-display text-4xl sm:text-5xl text-gradient">
        <span ref={ref}>0</span>
      </div>
      <p className="mt-2 font-mono text-xs sm:text-sm text-paper/60">{label}</p>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative py-28 sm:py-36 px-6 sm:px-10">
      <div className="max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs tracking-widest uppercase text-cyan mb-3"
        >
          01 · About
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="font-display text-3xl sm:text-4xl lg:text-5xl leading-tight max-w-3xl"
        >
          Building interfaces that move the way ideas do.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-8 max-w-2xl text-paper/70 leading-relaxed"
        >
          {profile.summary}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 glass rounded-3xl p-8"
        >
          {stats.map((s) => (
            <Counter key={s.label} value={s.value} label={s.label} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
