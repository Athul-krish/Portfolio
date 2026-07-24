import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function HeroBadge({ children, className = "", icon: Icon }) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold glass-panel border border-white/10 text-slate-200 shadow-lg shadow-black/20 hover:border-indigo-500/50 hover:text-white transition-all cursor-default",
        className
      )}
    >
      {Icon && <Icon className="w-4 h-4 text-indigo-400" />}
      <span>{children}</span>
    </motion.div>
  );
}