"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 sm:py-36 px-6 sm:px-10">
      <div className="max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs tracking-widest uppercase text-cyan mb-3"
        >
          02 · Skills
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="font-display text-3xl sm:text-4xl lg:text-5xl mb-14"
        >
          A stack built for shipping, and for feel.
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: gi * 0.08 }}
              className="glass rounded-2xl p-6 hover:shadow-glow transition-shadow duration-300"
            >
              <h3 className="font-display text-lg mb-4 text-paper">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item, i) => (
                  <span
                    key={item}
                    data-cursor-hover
                    className="font-mono text-[12px] px-3 py-1.5 rounded-full border border-white/10 text-paper/75 hover:text-ink hover:bg-paper hover:border-paper transition-colors duration-200"
                    style={{ transitionDelay: `${i * 15}ms` }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
