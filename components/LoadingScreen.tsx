"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1100);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[200] bg-ink flex flex-col items-center justify-center"
        >
          <motion.span
            initial={{ letterSpacing: "0.1em", opacity: 0.4 }}
            animate={{ letterSpacing: "0.35em", opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="font-display text-2xl text-gradient"
          >
            DM
          </motion.span>
          <div className="mt-6 w-40 h-[2px] bg-white/10 overflow-hidden rounded-full">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-1/2 h-full bg-signal-gradient"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
