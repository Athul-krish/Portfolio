import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  icon: Icon,
  iconPosition = "right",
  disabled = false,
  onClick,
  ...props
}) {
  const baseStyles =
    "relative inline-flex items-center justify-center font-medium rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 disabled:opacity-50 disabled:pointer-events-none overflow-hidden group cursor-pointer";

  const sizeStyles = {
    sm: "px-4 py-2 text-xs font-semibold gap-1.5",
    md: "px-6 py-3 text-sm font-semibold gap-2",
    lg: "px-8 py-4 text-base font-semibold gap-2.5",
  };

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.02] active:scale-[0.98]",
    secondary:
      "bg-slate-900/80 hover:bg-slate-800 text-slate-100 border border-slate-700/60 shadow-lg shadow-black/40 hover:border-indigo-500/40 hover:scale-[1.02] active:scale-[0.98]",
    outline:
      "bg-transparent text-indigo-300 border border-indigo-500/40 hover:bg-indigo-500/10 hover:border-indigo-400 hover:text-white",
    ghost:
      "bg-transparent text-slate-300 hover:text-white hover:bg-white/5",
    glow:
      "relative bg-indigo-600 text-white shadow-[0_0_20px_rgba(99,102,241,0.5)] hover:shadow-[0_0_30px_rgba(99,102,241,0.8)] border border-indigo-400/30",
  };

  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      disabled={disabled}
      className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
      {...props}
    >
      {/* Shine hover beam effect */}
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />

      {Icon && iconPosition === "left" && (
        <Icon className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
      )}
      
      <span className="relative z-10">{children}</span>

      {Icon && iconPosition === "right" && (
        <Icon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
      )}
    </motion.button>
  );
}