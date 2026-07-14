"use client";

import { ArrowUp, Github, Linkedin } from "lucide-react";
import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 pt-16 pb-10 px-6 sm:px-10">
      <svg
        className="absolute -top-px left-0 w-full h-10 text-surface2"
        viewBox="0 0 1200 60"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path d="M0,30 C300,60 900,0 1200,30 L1200,0 L0,0 Z" fill="currentColor" opacity="0.3" />
      </svg>

      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="font-mono text-xs text-paper/50 text-center sm:text-left">
          Made with <span className="text-signal">♥</span> by {profile.name}
        </p>

        <div className="flex items-center gap-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            data-cursor-hover
            className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:border-white/30 transition-colors"
          >
            <Github size={15} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            data-cursor-hover
            className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:border-white/30 transition-colors"
          >
            <Linkedin size={15} />
          </a>
          <button
            data-cursor-hover
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="w-9 h-9 rounded-full bg-paper text-ink flex items-center justify-center hover:opacity-90 transition-opacity"
          >
            <ArrowUp size={15} />
          </button>
        </div>
      </div>
    </footer>
  );
}
