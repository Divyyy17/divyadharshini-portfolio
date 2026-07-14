"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 sm:py-36 px-6 sm:px-10">
      <div className="max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs tracking-widest uppercase text-cyan mb-3"
        >
          03 · Experience
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="font-display text-3xl sm:text-4xl lg:text-5xl mb-16"
        >
          Professional Experience
        </motion.h2>

        <div className="relative pl-8 sm:pl-10">
          <div className="absolute left-[7px] sm:left-[9px] top-2 bottom-2 w-px bg-gradient-to-b from-electric via-signal to-cyan" />

          {experience.map((job, ji) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: ji * 0.1 }}
              className="relative mb-4"
            >
              <span className="absolute -left-8 sm:-left-10 top-1.5 w-4 h-4 rounded-full bg-ink border-2 border-signal shadow-glow flex items-center justify-center">
                <Briefcase size={9} className="text-signal" />
              </span>

              <div className="glass rounded-2xl p-6 sm:p-8">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                  <h3 className="font-display text-xl sm:text-2xl">{job.role}</h3>
                  <span className="font-mono text-xs text-cyan">{job.period}</span>
                </div>
                <p className="text-paper/60 font-mono text-sm mb-5">
                  {job.company} · {job.location}
                </p>
                <ul className="space-y-2.5">
                  {job.points.map((p) => (
                    <li key={p} className="flex gap-3 text-sm text-paper/75 leading-relaxed">
                      <span className="mt-2 w-1 h-1 rounded-full bg-signal shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
