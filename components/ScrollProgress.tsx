"use client";

import { useEffect, useState } from "react";

/**
 * The "Signal" — a live waveform threading across the top of the page.
 * It literalizes Divya's Animation & UI Motion specialty: the one thing
 * that visibly moves through every section is motion itself.
 */
export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrollTop = h.scrollTop || document.body.scrollTop;
      const scrollHeight = h.scrollHeight - h.clientHeight;
      setProgress(scrollHeight > 0 ? scrollTop / scrollHeight : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-[3px] bg-white/5">
      <div
        className="h-full bg-signal-gradient relative transition-[width] duration-75 ease-linear"
        style={{ width: `${progress * 100}%` }}
      >
        <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-cyan shadow-glowCyan animate-pulseGlow" />
      </div>
    </div>
  );
}
