"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import { education, certifications } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="relative py-28 sm:py-36 px-6 sm:px-10">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="font-mono text-xs tracking-widest uppercase text-cyan mb-3"
          >
            05 · Education
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="font-display text-3xl sm:text-4xl mb-10"
          >
            Education
          </motion.h2>

          <div className="space-y-6">
            {education.map((e, i) => (
              <motion.div
                key={e.degree}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass rounded-2xl p-6 flex gap-4"
              >
                <span className="w-10 h-10 rounded-xl bg-electric/15 flex items-center justify-center shrink-0">
                  <GraduationCap size={18} className="text-electric" />
                </span>
                <div>
                  <h3 className="font-display text-base sm:text-lg">{e.degree}</h3>
                  <p className="text-sm text-paper/60 mt-1">{e.school}</p>
                  <p className="font-mono text-xs text-cyan mt-2">{e.period}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="font-mono text-xs tracking-widest uppercase text-cyan mb-3"
          >
            06 · Certifications
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="font-display text-3xl sm:text-4xl mb-10"
          >
            Certifications
          </motion.h2>

          <div className="space-y-6">
            {certifications.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass rounded-2xl p-6 flex gap-4"
              >
                <span className="w-10 h-10 rounded-xl bg-signal/15 flex items-center justify-center shrink-0">
                  <Award size={18} className="text-signal" />
                </span>
                <div>
                  <h3 className="font-display text-base sm:text-lg">{c.title}</h3>
                  <p className="text-sm text-paper/60 mt-1">{c.issuer}</p>
                  <p className="font-mono text-xs text-cyan mt-2">{c.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
