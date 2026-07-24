import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Sparkles, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <Card className="flex flex-col h-full overflow-hidden group">
        {/* Project Thumbnail Image with Hover Zoom */}
        <div className="relative aspect-video w-full overflow-hidden bg-slate-950 border-b border-white/10">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

          {/* Top Category Badge */}
          <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
            <Badge variant="cyan" dot={project.status === "In Progress"}>
              {project.category}
            </Badge>
            {project.featured && (
              <Badge variant="purple" icon={Sparkles}>
                Featured
              </Badge>
            )}
          </div>
        </div>

        {/* Project Details */}
        <div className="p-6 flex flex-col justify-between flex-1">
          <div>
            <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors flex items-center justify-between">
              <span>{project.title}</span>
              <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all text-indigo-400" />
            </h3>

            <p className="text-sm text-slate-300 mt-3 leading-relaxed">
              {project.description}
            </p>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2 mt-6">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Project Links */}
          <div className="flex items-center gap-3 mt-8 pt-4 border-t border-white/5">
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <Button
                variant="primary"
                size="sm"
                className="w-full justify-center"
                icon={ExternalLink}
              >
                Live Demo
              </Button>
            </a>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="secondary"
                size="sm"
                className="px-3"
                icon={FaGithub}
                aria-label="View Source Code on GitHub"
              />
            </a>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
