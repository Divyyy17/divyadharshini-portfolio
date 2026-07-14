"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Download, FolderOpenDot, Mail, Sparkles } from "lucide-react";
import { profile } from "@/lib/data";

function useTypewriter(words: string[], speed = 55, pause = 1400) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    let timeout: NodeJS.Timeout;

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), speed);
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), speed / 1.6);
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setIndex((i) => i + 1);
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, index, words, speed, pause]);

  return text;
}

export default function Hero() {
  const typed = useTypewriter(profile.roles);
  const heroRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const handleMove = (e: MouseEvent) => {
      if (!heroRef.current || !glowRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      glowRef.current.style.transform = `translate(${x - 250}px, ${y - 250}px)`;
    };
    const node = heroRef.current;
    node?.addEventListener("mousemove", handleMove);
    return () => node?.removeEventListener("mousemove", handleMove);
  }, []);

  const particles = Array.from({ length: 18 });

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-[100svh] flex items-center overflow-hidden bg-grid"
    >
      {/* gradient blobs */}
      <div className="absolute -top-40 -left-32 w-[28rem] h-[28rem] rounded-full bg-electric/25 blur-[110px] animate-floaty" />
      <div className="absolute bottom-[-8rem] right-[-6rem] w-[26rem] h-[26rem] rounded-full bg-signal/25 blur-[110px] animate-floaty" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-1/3 left-1/2 w-[20rem] h-[20rem] rounded-full bg-cyan/10 blur-[100px]" />

      {/* mouse-follow glow */}
      <div
        ref={glowRef}
        className="pointer-events-none absolute w-[500px] h-[500px] rounded-full bg-signal-radial hidden md:block"
      />

      {/* floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((_, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-white/30 animate-floaty"
            style={{
              width: `${2 + (i % 3)}px`,
              height: `${2 + (i % 3)}px`,
              top: `${(i * 37) % 100}%`,
              left: `${(i * 63) % 100}%`,
              animationDuration: `${5 + (i % 5)}s`,
              animationDelay: `${(i % 6) * 0.4}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 w-full grid md:grid-cols-[1.2fr_0.8fr] items-center gap-12 pt-24">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-mono text-cyan text-sm tracking-widest uppercase mb-4"
          >
            Hello, welcome to my universe
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display flex flex-wrap items-baseline gap-x-3 gap-y-1 leading-[1.05] tracking-tight"
          >
            <span className="text-3xl sm:text-4xl lg:text-5xl text-paper/70 font-normal">
              Hi, I&apos;m
            </span>
            <span className="text-4xl sm:text-5xl lg:text-7xl whitespace-nowrap">
              {profile.name}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-display text-2xl sm:text-3xl text-gradient mt-3"
          >
            {profile.role}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-6 h-7 font-mono text-base sm:text-lg text-paper/70"
          >
            <span>{typed}</span>
            <span className="inline-block w-[2px] h-5 bg-cyan ml-1 align-middle animate-pulseGlow" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <a
              href="/resume/Divyadharshini_Full_Stack_Developer_Resume.pdf"
              download
              data-cursor-hover
              className="flex items-center gap-2 px-5 py-3 rounded-full bg-paper text-ink font-mono text-sm hover:opacity-90 transition-opacity"
            >
              <Download size={15} /> Download Resume
            </a>
            <button
              data-cursor-hover
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="flex items-center gap-2 px-5 py-3 rounded-full border border-white/15 font-mono text-sm hover:border-white/30 transition-colors"
            >
              <FolderOpenDot size={15} /> View Projects
            </button>
            <button
              data-cursor-hover
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="flex items-center gap-2 px-5 py-3 rounded-full border border-white/15 font-mono text-sm hover:border-white/30 transition-colors"
            >
              <Mail size={15} /> Contact Me
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative mx-auto md:mx-0 w-64 h-64 sm:w-80 sm:h-80 lg:w-[22rem] lg:h-[22rem]"
        >
          {/* soft ambient glow behind everything */}
          <div className="absolute -inset-6 rounded-[3rem] bg-signal-radial blur-2xl opacity-80" />

          {/* rotating conic-gradient ring */}
          <div
            className="absolute -inset-2.5 rounded-[2.4rem] opacity-90 animate-spinSlow"
            style={{
              background:
                "conic-gradient(from 0deg, #2E6FFF, #8B5CF6, #22D3EE, transparent 65%, #2E6FFF)",
            }}
          />

          {/* frame housing the photo */}
          <div className="absolute inset-[6px] rounded-[2.1rem] bg-surface overflow-hidden border border-white/10">
            <Image
              src="/images/profile.png"
              alt={`${profile.name} at her desk`}
              fill
              priority
              sizes="(max-width: 768px) 256px, 352px"
              className="object-cover object-top grayscale-[15%] contrast-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
          </div>

          {/* viewfinder-style corner brackets */}
          {[
            "top-0 left-0 border-t-2 border-l-2 rounded-tl-xl",
            "top-0 right-0 border-t-2 border-r-2 rounded-tr-xl",
            "bottom-0 left-0 border-b-2 border-l-2 rounded-bl-xl",
            "bottom-0 right-0 border-b-2 border-r-2 rounded-br-xl",
          ].map((pos) => (
            <span
              key={pos}
              className={`absolute w-7 h-7 border-cyan/70 ${pos}`}
            />
          ))}

          {/* floating status badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="absolute -bottom-5 -left-5 sm:-left-8 glass rounded-2xl px-4 py-2.5 flex items-center gap-2 animate-floaty shadow-glow"
            style={{ animationDelay: "0.3s" }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span className="font-mono text-[11px] sm:text-xs text-paper/85">Open to work</span>
          </motion.div>

          {/* floating role chip */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.05 }}
            className="absolute -top-5 -right-4 sm:-right-6 glass rounded-2xl px-3.5 py-2 flex items-center gap-1.5 animate-floaty"
            style={{ animationDelay: "1s" }}
          >
            <Sparkles size={13} className="text-signal" />
            <span className="font-mono text-[11px] sm:text-xs text-paper/85">Full Stack</span>
          </motion.div>
        </motion.div>
      </div>

      <motion.button
        data-cursor-hover
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-paper/50 font-mono text-xs"
      >
        Scroll
        <ArrowDown size={16} className="animate-bounce" />
      </motion.button>
    </section>
  );
}
