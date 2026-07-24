import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, FileText, Sparkles, Download } from "lucide-react";
import Button from "@/components/ui/Button";
import MobileMenu from "./MobileMenu";
import { toast } from "sonner";

const links = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Toggle background fill
      if (currentScrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Hide on scroll down, show on scroll up
      if (currentScrollY > prevScrollY && currentScrollY > 150) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      setPrevScrollY(currentScrollY);

      // Section intersection detection
      const sections = links.map((l) => l.href.substring(1));
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollY]);

  const handleNavigate = (href) => {
    const targetId = href.substring(1);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleResumeDownload = () => {
    toast.success("Downloading Athul Krishna's Resume", {
      description: "PDF file is opening/downloading.",
    });
  };

  return (
    <>
      <motion.header
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: "-120%", opacity: 0 },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none"
      >
        <nav
          className={`pointer-events-auto flex items-center justify-between gap-4 md:gap-8 rounded-full border px-4 sm:px-6 py-2.5 transition-all duration-500 shadow-2xl backdrop-blur-xl ${
            scrolled
              ? "border-white/15 bg-slate-950/80 shadow-indigo-500/10"
              : "border-white/10 bg-slate-900/40"
          }`}
        >
          {/* Logo / Initials */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavigate("#hero");
            }}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold text-sm shadow-md group-hover:scale-105 transition-transform">
              AK
            </div>
            <span className="font-extrabold text-sm sm:text-base tracking-tight text-white group-hover:text-indigo-300 transition-colors hidden sm:inline-block">
              Athul Krishna
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1 bg-white/5 p-1 rounded-full border border-white/5">
            {links.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigate(link.href);
                  }}
                  className={`relative px-4 py-1.5 text-xs font-semibold rounded-full transition-colors ${
                    isActive ? "text-white" : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activePill"
                      className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full shadow-md -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </a>
              );
            })}
          </div>

          {/* Resume & Mobile Trigger */}
          <div className="flex items-center gap-2">
            <a
              href="/src/assets/resume/resume.pdf"
              download="Athul_Krishna_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleResumeDownload}
            >
              <Button size="sm" variant="primary" icon={Download}>
                Resume
              </Button>
            </a>

            {/* Mobile menu hamburger toggle */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-white md:hidden"
              aria-label="Open navigation menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        links={links}
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />
    </>
  );
}