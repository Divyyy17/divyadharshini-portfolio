"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const canHover = window.matchMedia("(hover: hover)").matches;
    setEnabled(canHover);
    if (!canHover) return;

    let ringX = 0, ringY = 0, mouseX = 0, mouseY = 0;

    const move = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
      }
    };

    const onEnter = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [data-cursor-hover]") && ringRef.current) {
        ringRef.current.style.width = "56px";
        ringRef.current.style.height = "56px";
      }
    };
    const onLeave = () => {
      if (ringRef.current) {
        ringRef.current.style.width = "34px";
        ringRef.current.style.height = "34px";
      }
    };

    let raf: number;
    const tick = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", onEnter);
    document.addEventListener("mouseout", onLeave);
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", onEnter);
      document.removeEventListener("mouseout", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}
