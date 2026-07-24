import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Mail,
  Sparkles,
  Code2,
  Database,
  Layers,
  Terminal,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import Typewriter from "@/components/ui/Typewriter";
import HeroBackground from "./HeroBackground";
import HeroBadge from "./HeroBadge";
import { toast } from "sonner";

export default function Hero() {
  const roles = [
    "MERN Stack Developer",
    "Full-Stack Architect",
    "React & Node Specialist",
    "UI/UX Enthusiast",
  ];

  const handleDownloadResume = () => {
    toast.success("Opening Athul Krishna's Resume", {
      description: "Downloading PDF document...",
    });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("athulkrishna.dev@gmail.com");
    toast.success("Email copied to clipboard!", {
      description: "athulkrishna.dev@gmail.com",
    });
  };

  return (
    <Section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-28 md:pt-36 pb-20 relative overflow-hidden"
    >
      <HeroBackground />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 flex flex-col items-center text-center">
        
        {/* Availability Pill */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-pill border border-emerald-500/30 text-xs font-semibold text-emerald-300 mb-8 shadow-lg shadow-emerald-500/5 backdrop-blur-xl"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span>Available for full-time roles & freelance</span>
        </motion.div>

        {/* Dynamic Greeting & Name */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="space-y-4 max-w-4xl"
        >
          <p className="text-sm sm:text-base font-bold uppercase tracking-[0.35em] text-indigo-400 flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-indigo-400 animate-spin-slow" />
            <span>Hello, I'm</span>
          </p>

          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight text-white leading-[1.05]">
            Athul Krishna
          </h1>

          <div className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-300 pt-2 min-h-[3rem]">
            I am a <Typewriter words={roles} interval={2800} />
          </div>

          <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-slate-400 leading-relaxed font-normal">
            Building thoughtful digital experiences with React, Node.js and modern web technologies. Passionate about crafting high-performance, accessible, and elegant software.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-wrap justify-center items-center gap-4"
        >
          <a href="#projects">
            <Button size="lg" variant="primary" icon={ArrowRight}>
              Explore Projects
            </Button>
          </a>

          <a
            href="/src/assets/resume/resume.pdf"
            download="Athul_Krishna_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleDownloadResume}
          >
            <Button size="lg" variant="secondary" icon={Download}>
              Download CV
            </Button>
          </a>

          <Button
            size="lg"
            variant="outline"
            icon={Mail}
            onClick={handleCopyEmail}
          >
            Copy Email
          </Button>
        </motion.div>

        {/* Social Icons Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 flex items-center justify-center gap-4"
        >
          {[
            { icon: FaGithub, label: "GitHub", href: "https://github.com/Athul-krish" },
            { icon: FaLinkedin, label: "LinkedIn", href: "https://linkedin.com" },
            { icon: Mail, label: "Email", href: "mailto:athulkrishna.dev@gmail.com" },
          ].map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-full glass-panel border border-white/10 text-slate-400 hover:text-white hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all shadow-md flex items-center justify-center"
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5" />
            </motion.a>
          ))}
        </motion.div>

        {/* Core Tech Stack Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 flex flex-wrap justify-center gap-3 max-w-2xl"
        >
          <HeroBadge icon={Code2}>React.js</HeroBadge>
          <HeroBadge icon={Terminal}>Node.js</HeroBadge>
          <HeroBadge icon={Database}>MongoDB</HeroBadge>
          <HeroBadge icon={Layers}>Express.js</HeroBadge>
          <HeroBadge icon={Sparkles}>Tailwind CSS</HeroBadge>
        </motion.div>

      </div>
    </Section>
  );
}