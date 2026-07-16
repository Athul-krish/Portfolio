import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";

import { SiExpress, SiMongodb, SiTailwindcss } from "react-icons/si";

const icons = {
  react: <FaReact className="text-cyan-400" />,
  node: <FaNodeJs className="text-green-500" />,
  express: <SiExpress className="text-white" />,
  mongodb: <SiMongodb className="text-green-400" />,
  tailwind: <SiTailwindcss className="text-sky-400" />,
  git: <FaGitAlt className="text-orange-500" />,
};

import { motion } from "framer-motion";

export default function SkillCard({ icon, title, category }) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      transition={{
        duration: 0.25,
      }}
      className="group rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-6 backdrop-blur-xl transition-all duration-300 hover:border-indigo-500/40 hover:shadow-[0_0_35px_rgba(99,102,241,0.18)]"
    >
      <div className="mb-5 text-5xl transition-transform duration-300 group-hover:scale-110">{icons[icon]} </div>

      <h3 className="text-xl font-bold text-white">{title}</h3>

      <p className="mt-2 text-zinc-400">{category}</p>
    </motion.div>
  );
}
