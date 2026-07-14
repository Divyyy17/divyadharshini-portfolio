"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, Send } from "lucide-react";
import { profile } from "@/lib/data";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // No backend wired up — opens the visitor's mail client pre-filled.
    // Swap this for an API route or form service (e.g. Resend, Formspree) when ready.
    const subject = encodeURIComponent(`Portfolio contact from ${form.name || "a visitor"}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const links = [
    { icon: Linkedin, label: "LinkedIn", href: profile.linkedin },
    { icon: Github, label: "GitHub", href: profile.github },
    { icon: Mail, label: "Email", href: `mailto:${profile.email}` },
    { icon: Phone, label: "Phone", href: `tel:${profile.phone}` },
  ];

  return (
    <section id="contact" className="relative py-28 sm:py-36 px-6 sm:px-10">
      <div className="max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs tracking-widest uppercase text-cyan mb-3"
        >
          07 · Contact
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="font-display text-3xl sm:text-4xl lg:text-5xl mb-4"
        >
          Let&apos;s build something.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-paper/60 mb-14 max-w-xl"
        >
          Open to Full Stack and Frontend Developer roles. Reach out and I&apos;ll get back to you.
        </motion.p>

        <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-10">
          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="glass rounded-3xl p-7 sm:p-8 space-y-5"
          >
            <div>
              <label className="font-mono text-xs text-paper/50 uppercase tracking-wide" htmlFor="name">Name</label>
              <input
                id="name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="mt-2 w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-signal transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="font-mono text-xs text-paper/50 uppercase tracking-wide" htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="mt-2 w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-signal transition-colors"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="font-mono text-xs text-paper/50 uppercase tracking-wide" htmlFor="message">Message</label>
              <textarea
                id="message"
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="mt-2 w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-signal transition-colors resize-none"
                placeholder="Tell me about the role or project"
              />
            </div>
            <button
              type="submit"
              data-cursor-hover
              className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-paper text-ink font-mono text-sm hover:opacity-90 transition-opacity"
            >
              <Send size={15} /> {sent ? "Opening your mail app…" : "Send Message"}
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-4"
          >
            {links.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                data-cursor-hover
                className="group glass rounded-2xl p-5 flex items-center gap-4 hover:shadow-glow transition-shadow"
              >
                <span className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-signal-gradient transition-all">
                  <Icon size={17} />
                </span>
                <span className="font-mono text-sm">{label}</span>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
