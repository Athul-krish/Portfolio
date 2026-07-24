import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function Heading({
  title,
  subtitle,
  badge,
  align = "center",
  className = "",
}) {
  const alignStyles = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={cn("flex flex-col mb-16 md:mb-20", alignStyles[align], className)}
    >
      {badge && (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 mb-4 backdrop-blur-md">
          {badge}
        </span>
      )}

      {title && (
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white max-w-3xl leading-[1.15]">
          {typeof title === "string" ? (
            <span className="gradient-text">{title}</span>
          ) : (
            title
          )}
        </h2>
      )}

      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}

      <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mt-6 opacity-80" />
    </motion.div>
  );
}