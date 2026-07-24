import React from "react";
import { motion } from "framer-motion";
import { ArrowUp, Mail, Heart } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import Container from "@/components/ui/Container";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-slate-950 border-t border-white/10 pt-16 pb-12 overflow-hidden">
      {/* Subtle top glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />

      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold text-xs shadow-md">
                AK
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                Athul Krishna
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-md">
              Full-Stack MERN Developer specializing in building high-performance, modern, and accessible web experiences.
            </p>
          </div>

          {/* Nav Quick Links */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-xs font-semibold text-slate-400">
            <a href="#hero" className="hover:text-white transition-colors">Home</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center gap-4">
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
                className="p-2.5 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:border-indigo-500/40 hover:bg-indigo-500/10 transition-all flex items-center justify-center"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </motion.a>
            ))}

            <motion.button
              onClick={scrollToTop}
              whileHover={{ y: -3, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2.5 rounded-full bg-indigo-600 text-white shadow-lg shadow-indigo-500/25 hover:bg-indigo-500 transition-all ml-2 cursor-pointer"
              aria-label="Scroll to Top"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Athul Krishna. All rights reserved.
          </div>

          <div className="flex items-center gap-1.5">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-indigo-400 fill-indigo-400 inline" />
            <span>using React, Vite, Tailwind CSS & Framer Motion</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
