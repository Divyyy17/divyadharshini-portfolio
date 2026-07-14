"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, Download } from "lucide-react";
import { nav } from "@/lib/data";

export default function Nav() {
  const [active, setActive] = useState("hero");
  const [open, setOpen] = useState(false);
  const [light, setLight] = useState(false);

  useEffect(() => {
    const sections = nav.map((n) => document.getElementById(n.id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    html.classList.toggle("light");
    setLight(html.classList.contains("light"));
  };

  const scrollTo = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-3 left-0 right-0 z-40 flex justify-center px-4">
      <nav className="glass w-full max-w-5xl rounded-full px-4 sm:px-6 py-3 flex items-center justify-between">
        <button
          onClick={() => scrollTo("hero")}
          className="font-display text-sm sm:text-base tracking-tight text-paper"
          data-cursor-hover
        >
          DM<span className="text-signal">.</span>
        </button>

        <ul className="hidden md:flex items-center gap-1 font-mono text-[13px]">
          {nav.map((item) => (
            <li key={item.id}>
              <button
                data-cursor-hover
                onClick={() => scrollTo(item.id)}
                className={`px-3 py-1.5 rounded-full transition-colors ${
                  active === item.id
                    ? "text-ink bg-paper"
                    : "text-paper/70 hover:text-paper"
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            data-cursor-hover
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-paper/80 hover:text-paper"
          >
            {light ? <Moon size={16} /> : <Sun size={16} />}
          </button>
          <a
            href="/resume/Divyadharshini_Full_Stack_Developer_Resume.pdf"
            download
            data-cursor-hover
            className="hidden sm:flex items-center gap-1.5 text-[13px] font-mono px-4 py-2 rounded-full bg-paper text-ink hover:opacity-90 transition-opacity"
          >
            <Download size={14} /> Resume
          </a>
          <button
            data-cursor-hover
            className="md:hidden w-9 h-9 rounded-full border border-white/10 flex items-center justify-center"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="glass absolute top-16 left-4 right-4 rounded-2xl p-3 flex flex-col md:hidden"
          >
            {nav.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`text-left px-4 py-3 rounded-xl font-mono text-sm ${
                  active === item.id ? "bg-paper text-ink" : "text-paper/80"
                }`}
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
