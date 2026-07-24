import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Typewriter({ words = [], interval = 3000, className = "" }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (words.length === 0) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, interval);
    return () => clearInterval(timer);
  }, [words, interval]);

  if (words.length === 0) return null;

  return (
    <span className={`inline-block relative overflow-hidden align-bottom ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: 24, opacity: 0, filter: "blur(8px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          exit={{ y: -24, opacity: 0, filter: "blur(8px)" }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="inline-block gradient-text-accent font-bold"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
