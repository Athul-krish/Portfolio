import React from "react";
import { cn } from "@/lib/utils";

export default function Badge({
  children,
  className = "",
  variant = "default",
  dot = false,
  icon: Icon,
}) {
  const variantStyles = {
    default:
      "bg-indigo-500/10 text-indigo-300 border-indigo-500/20 hover:border-indigo-500/40",
    success:
      "bg-emerald-500/10 text-emerald-300 border-emerald-500/20 hover:border-emerald-500/40",
    purple:
      "bg-purple-500/10 text-purple-300 border-purple-500/20 hover:border-purple-500/40",
    cyan:
      "bg-cyan-500/10 text-cyan-300 border-cyan-500/20 hover:border-cyan-500/40",
    outline:
      "bg-white/5 text-slate-300 border-white/10 hover:border-white/20",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full border transition-all duration-300 glass-pill backdrop-blur-md",
        variantStyles[variant],
        className
      )}
    >
      {dot && (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
      )}
      {Icon && <Icon className="w-3.5 h-3.5" />}
      <span>{children}</span>
    </span>
  );
}