"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";

function ProjectCard({ project, index }: { project: (typeof projects)[number]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: py * -6, y: px * 8 });
  };

  const resetTilt = () => setTilt({ x: 0, y: 0 });

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="relative rounded-3xl p-[1px] bg-signal-gradient"
      style={{ perspective: "1000px" }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMove}
        onMouseLeave={resetTilt}
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: "transform 0.25s ease-out",
        }}
        className="bg-surface rounded-[calc(1.5rem-1px)] p-7 sm:p-8 h-full flex flex-col"
      >
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="font-display text-2xl">{project.title}</h3>
            <p className="font-mono text-xs text-cyan mt-1">{project.role}</p>
          </div>
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            data-cursor-hover
            aria-label={`Visit ${project.title}`}
            className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center hover:border-white/40 transition-colors shrink-0"
          >
            <ExternalLink size={15} />
          </a>
        </div>

        <p className="text-sm text-paper/70 leading-relaxed mb-5">{project.description}</p>

        <ul className="space-y-2 mb-6">
          {project.highlights.map((h) => (
            <li key={h} className="flex gap-2.5 text-[13px] text-paper/60 leading-relaxed">
              <ArrowUpRight size={13} className="text-signal shrink-0 mt-0.5" />
              {h}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t) => (
            <span
              key={t}
              className="font-mono text-[11px] px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-paper/70"
            >
              {t}
            </span>
          ))}
        </div>

        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          data-cursor-hover
          className="mt-auto inline-flex items-center gap-1.5 font-mono text-[13px] text-cyan hover:text-paper transition-colors w-fit"
        >
          Visit site <ExternalLink size={13} />
        </a>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 sm:py-36 px-6 sm:px-10">
      <div className="max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs tracking-widest uppercase text-cyan mb-3"
        >
          04 · Projects
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="font-display text-3xl sm:text-4xl lg:text-5xl mb-14"
        >
          Featured Work
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <div key={p.title} className={i === projects.length - 1 && projects.length % 2 !== 0 ? "md:col-span-2" : ""}>
              <ProjectCard project={p} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
