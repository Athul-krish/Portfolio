import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  Sparkles,
  Zap,
  Globe,
  CheckCircle2,
  Award,
  Terminal,
  Cpu,
} from "lucide-react";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Timeline from "../Timeline";
import profileImg from "@/assets/images/profile.png";

const stats = [
  { label: "Full-Stack Web Apps", value: "12+", icon: Code },
  { label: "Technologies Mastered", value: "10+", icon: Cpu },
  { label: "Responsive UI Score", value: "100%", icon: Zap },
  { label: "Commitment to Clean Code", value: "60fps", icon: Globe },
];

const highlights = [
  "Expertise in MERN Stack (MongoDB, Express, React, Node.js)",
  "Modern UI Development with React, Tailwind CSS & Framer Motion",
  "RESTful API Design & Database Schema Architecture",
  "Responsive Mobile-First Interface Craftsman",
];

export default function About() {
  return (
    <Section id="about" className="relative">
      <Heading
        badge="About Me"
        title="Passionate Developer Crafting Modern Web Solutions"
        subtitle="Bridging performance, user experience, and robust full-stack software development."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
        
        {/* Left Column: Profile Picture Card with Spotlight Tilt */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 flex justify-center"
        >
          <div className="relative w-full max-w-md">
            {/* Ambient Background Glow */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 opacity-30 blur-2xl animate-pulse-glow" />

            <Card className="relative p-4 md:p-6 overflow-hidden">
              <div className="relative aspect-square w-full rounded-xl overflow-hidden border border-white/10 group">
                <img
                  src={profileImg}
                  alt="Athul Krishna"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                
                {/* Status Floating Pill */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl glass-panel border border-white/15 backdrop-blur-md flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                    </span>
                    <span className="text-xs font-semibold text-white">Athul Krishna</span>
                  </div>
                  <span className="text-[10px] uppercase font-bold text-indigo-300 tracking-wider">
                    MERN Developer
                  </span>
                </div>
              </div>
            </Card>
          </div>
        </motion.div>

        {/* Right Column: Bio & Core Values */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-7 space-y-6"
        >
          <div className="space-y-4">
            <h3 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
              Transforming Complex Ideas into Elegant, High-Performance Web Applications.
            </h3>
            <p className="text-slate-300 leading-relaxed text-base">
              I am <span className="text-indigo-400 font-semibold">Athul Krishna</span>, a dedicated Full Stack Developer specializing in the MERN stack. I thrive on building scalable, secure backend systems seamlessly integrated with modern, interactive frontend interfaces.
            </p>
            <p className="text-slate-400 leading-relaxed text-base">
              My philosophy centers around writing clean, maintainable code, adhering to UI/UX design standards, and optimizing software performance for seamless user engagement.
            </p>
          </div>

          {/* Key Skill Highlights Checkboxes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/5 text-xs sm:text-sm text-slate-200"
              >
                <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Animated Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + idx * 0.1 }}
              >
                <Card className="p-4 text-center group hover:border-indigo-500/40">
                  <stat.icon className="w-5 h-5 text-indigo-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <div className="text-2xl font-black gradient-text">{stat.value}</div>
                  <div className="text-[11px] font-medium text-slate-400 mt-1 leading-tight">
                    {stat.label}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>

      {/* Experience & Education Timeline */}
      <div className="mt-20">
        <div className="text-center mb-12">
          <Badge variant="purple" className="mb-3">
            Journey & Background
          </Badge>
          <h3 className="text-2xl sm:text-3xl font-bold text-white">
            Experience & Education Timeline
          </h3>
        </div>

        <Timeline />
      </div>
    </Section>
  );
}
