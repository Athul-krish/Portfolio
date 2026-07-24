import React from "react";

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
      {/* Background dark color fallback */}
      <div className="absolute inset-0 bg-[#030712]" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_75%)]" />

      {/* Animated Glowing Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-indigo-600/25 via-purple-600/20 to-cyan-500/15 blur-[140px] animate-pulse-glow" />

      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] rounded-full bg-indigo-500/15 blur-[120px] animate-float" />

      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-purple-600/15 blur-[130px]" />
    </div>
  );
}