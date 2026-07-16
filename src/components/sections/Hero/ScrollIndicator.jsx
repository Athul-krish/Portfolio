import { motion } from "framer-motion";

export default function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2, duration: 1 }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2"
    >
      <div className="flex flex-col items-center gap-2 text-zinc-500">
        <span className="text-xs tracking-[0.3em] uppercase">
          Scroll
        </span>

        <div className="flex h-12 w-7 justify-center rounded-full border border-zinc-700">
          <motion.div
            animate={{
              y: [4, 20, 4],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.8,
            }}
            className="mt-2 h-2 w-2 rounded-full bg-indigo-400"
          />
        </div>
      </div>
    </motion.div>
  );
}