import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Download, FileText } from "lucide-react";
import Button from "@/components/ui/Button";

export default function MobileMenu({ isOpen, onClose, links, activeSection, onNavigate }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[90] bg-black/80 backdrop-blur-2xl flex flex-col justify-between p-6 md:hidden"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <span className="text-xl font-bold gradient-text">Athul Krishna</span>
            <button
              onClick={onClose}
              className="p-2.5 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-white"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col gap-4 my-auto py-8">
            {links.map((link, idx) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.08 + 0.1, duration: 0.3 }}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(link.href);
                    onClose();
                  }}
                  className={`flex items-center justify-between p-4 rounded-2xl text-lg font-semibold transition-all ${
                    isActive
                      ? "bg-indigo-600/20 border border-indigo-500/40 text-white"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span>{link.label}</span>
                  <ArrowRight
                    className={`w-5 h-5 transition-transform ${
                      isActive ? "text-indigo-400 translate-x-1" : "text-slate-600"
                    }`}
                  />
                </motion.a>
              );
            })}
          </div>

          {/* Mobile Action Footer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col gap-3 pt-4 border-t border-white/10"
          >
            <a
              href="/src/assets/resume/resume.pdf"
              download="Athul_Krishna_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <Button variant="primary" className="w-full justify-center" icon={Download}>
                Download Resume
              </Button>
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
