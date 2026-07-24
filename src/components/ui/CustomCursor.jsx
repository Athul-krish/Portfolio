import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.getAttribute("role") === "button"
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  // Only render on non-touch screens
  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden hidden md:block">
      {/* Outer ambient glow spotlight */}
      <div
        className="fixed rounded-full pointer-events-none transition-transform duration-75 ease-out -translate-x-1/2 -translate-y-1/2"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          width: isHovering ? "400px" : "300px",
          height: isHovering ? "400px" : "300px",
          background: `radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, rgba(147, 51, 234, 0.03) 45%, transparent 70%)`,
        }}
      />

      {/* Tiny sharp tracking ring */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 rounded-full border border-indigo-400/40 pointer-events-none z-50 mix-blend-screen"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
          scale: isHovering ? 1.8 : 1,
          borderColor: isHovering ? "rgba(165, 180, 252, 0.9)" : "rgba(99, 102, 241, 0.4)",
          backgroundColor: isHovering ? "rgba(99, 102, 241, 0.15)" : "transparent",
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.2 }}
      />
    </div>
  );
}
