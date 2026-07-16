import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
      className="group overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900/90 to-zinc-950 transition-all duration-300 hover:-translate-y-2 hover:border-indigo-500/30 hover:shadow-[0_20px_60px_rgba(99,102,241,0.18)]"
    >
      <div className="overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-56 w-full object-cover transition duration-500 group-hover:scale-110"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-2xl font-bold text-white">
          {project.title}
        </h3>

        <p className="mt-4 flex-1 leading-7 text-zinc-400">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-8 flex gap-3">
          <Button size="sm" className="flex-1">
            GitHub →
          </Button>

          <Button variant="secondary" size="sm" className="flex-1">
            Live Demo ↗
          </Button>
        </div>
      </div>
    </motion.div>
  );
}