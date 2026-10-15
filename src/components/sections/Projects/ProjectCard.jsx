import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Sparkles, ArrowUpRight, FolderGit2 } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

export default function ProjectCard({ project, index }) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <Card className="flex flex-col h-full overflow-hidden group hover:border-indigo-500/40 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300">
        {/* Project Thumbnail Image with Interactive Overlay & Zoom */}
        <a
          href={project.demoUrl || project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative aspect-video w-full overflow-hidden bg-slate-950 border-b border-white/10 block cursor-pointer"
          aria-label={`View ${project.title}`}
        >
          {!imgError ? (
            <img
              src={project.image}
              alt={`${project.title} Thumbnail Preview`}
              loading="lazy"
              onError={() => setImgError(true)}
              className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center bg-slate-900 text-slate-400 gap-2">
              <FolderGit2 className="w-10 h-10 text-indigo-400" />
              <span className="text-xs font-semibold">{project.title}</span>
            </div>
          )}

          {/* Vignette & Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-300" />

          {/* Hover Action Badge Overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
            <span className="px-4 py-2 rounded-full glass-pill text-xs font-bold text-white tracking-wide border border-white/20 shadow-xl backdrop-blur-md flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <span>Explore Project</span>
              <ArrowUpRight className="w-4 h-4 text-indigo-300" />
            </span>
          </div>

          {/* Top Category Badge */}
          <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10 pointer-events-none">
            <Badge variant="cyan" dot={project.status === "In Progress"}>
              {project.category}
            </Badge>
            {project.featured && (
              <Badge variant="purple" icon={Sparkles}>
                Featured
              </Badge>
            )}
          </div>
        </a>

        {/* Project Details */}
        <div className="p-6 flex flex-col justify-between flex-1">
          <div>
            <a
              href={project.demoUrl || project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block group/title"
            >
              <h3 className="text-xl font-bold text-white group-hover/title:text-indigo-300 transition-colors flex items-center justify-between">
                <span>{project.title}</span>
                <ArrowUpRight className="w-5 h-5 opacity-0 group-hover/title:opacity-100 group-hover/title:translate-x-1 group-hover/title:-translate-y-1 transition-all text-indigo-400 shrink-0 ml-2" />
              </h3>
            </a>

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
                View Project
              </Button>
            </a>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Source Code on GitHub"
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
