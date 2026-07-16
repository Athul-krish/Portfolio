import { motion } from "framer-motion";

export default function StatCard({ title, value }) {
  return (
    <motion.div
      whileHover={{
        y: -6,
      }}
      className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
    >
      <h2 className="text-4xl font-black text-white">
        {value}
      </h2>

      <p className="mt-2 text-zinc-400">
        {title}
      </p>
    </motion.div>
  );
}