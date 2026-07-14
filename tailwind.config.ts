import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#09090B",
        paper: "#F5F5F7",
        surface: "#111114",
        surface2: "#17171C",
        line: "#26262E",
        electric: "#2E6FFF",
        signal: "#8B5CF6",
        cyan: "#22D3EE",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "signal-gradient": "linear-gradient(90deg, #2E6FFF 0%, #8B5CF6 55%, #22D3EE 100%)",
        "signal-radial": "radial-gradient(circle at center, rgba(139,92,246,0.25), transparent 70%)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(46,111,255,0.35)",
        glowCyan: "0 0 40px rgba(34,211,238,0.3)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
        floaty: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        spinSlow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        marquee: "marquee 22s linear infinite",
        pulseGlow: "pulseGlow 2.4s ease-in-out infinite",
        floaty: "floaty 6s ease-in-out infinite",
        spinSlow: "spinSlow 9s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
