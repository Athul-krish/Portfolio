import React, { useState } from "react";
import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import ProjectCard from "./ProjectCard";
import { projectsData } from "@/data/projects";

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "MERN Stack", "Full Stack", "Frontend"];

  const filteredProjects =
    filter === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === filter);

  return (
    <Section id="projects" className="relative">
      <Heading
        badge="Portfolio Showcase"
        title="Featured Engineering Projects"
        subtitle="A collection of full-stack web applications, real-time products, and modern frontend interfaces."
      />

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center items-center gap-2 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-5 py-2 rounded-full text-xs font-semibold transition-all ${
              filter === cat
                ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/25 border border-indigo-400/30"
                : "glass-pill text-slate-400 hover:text-white hover:bg-white/5"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project, idx) => (
          <ProjectCard key={project.id} project={project} index={idx} />
        ))}
      </div>
    </Section>
  );
}
