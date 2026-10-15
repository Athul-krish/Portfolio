import React, { useState } from "react";
import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { skillCategories } from "@/data/skills";

export default function Skills() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredCategories =
    activeTab === "all"
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === activeTab);

  return (
    <Section id="skills" className="relative">
      <Heading
        badge="Technical Expertise"
        title="Skills & Capabilities"
        subtitle="A comprehensive overview of my technical stack, tools, and development proficiencies."
      />

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap justify-center items-center gap-2 mb-12">
        <button
          onClick={() => setActiveTab("all")}
          className={`px-5 py-2 rounded-full text-xs font-semibold transition-all ${
            activeTab === "all"
              ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/25 border border-indigo-400/30"
              : "glass-pill text-slate-400 hover:text-white hover:bg-white/5"
          }`}
        >
          All Skills
        </button>

        {skillCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveTab(cat.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all ${
              activeTab === cat.id
                ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/25 border border-indigo-400/30"
                : "glass-pill text-slate-400 hover:text-white hover:bg-white/5"
            }`}
          >
            <cat.icon className="w-3.5 h-3.5" />
            <span>{cat.title}</span>
          </button>
        ))}
      </div>

      {/* Skills Categories Display */}
      <div className="space-y-12">
        {filteredCategories.map((category) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {/* Category Header */}
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <div className={`p-2.5 rounded-xl bg-gradient-to-r ${category.color} text-white shadow-md`}>
                <category.icon className="w-5 h-5" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {category.title}
              </h3>
            </div>

            {/* Grid of Skill Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.skills.map((skill, idx) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                >
                  <Card className="p-5 flex flex-col justify-between h-full">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2.5">
                          <span className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                            <skill.icon className="w-4 h-4" />
                          </span>
                          <span className="font-bold text-white text-base">
                            {skill.name}
                          </span>
                        </div>
                        <Badge variant="cyan">{skill.tag}</Badge>
                      </div>

                      <div className="flex items-center justify-between text-xs text-slate-400 mt-4 mb-1.5 font-medium">
                        <span>Proficiency</span>
                        <span className="text-indigo-300 font-bold">{skill.level}%</span>
                      </div>
                    </div>

                    {/* Animated Progress Bar */}
                    <div className="w-full h-2 rounded-full bg-slate-800/80 overflow-hidden p-0.5 border border-white/5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + idx * 0.05, ease: "easeOut" }}
                        className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
                      />
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
