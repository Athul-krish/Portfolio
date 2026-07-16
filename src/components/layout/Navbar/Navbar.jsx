import Button from "@/components/ui/Button";
import { useEffect, useState } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`
    fixed left-1/2 top-5 z-50 w-[94%] max-w-6xl
    -translate-x-1/2 transition-all duration-300
        ${scrolled ? "scale-[0.98]" : "scale-100"}
      `}
    >
      <nav
        className={`
          flex items-center justify-between rounded-full
          border border-white/10 px-6 py-3
          transition-all duration-300

          ${
            scrolled
              ? "bg-black/60 backdrop-blur-2xl shadow-[0_0_30px_rgba(99,102,241,0.15)]"
              : "bg-black/30 backdrop-blur-xl"
          }
        `}
      >
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div
            className="
            flex h-10 w-10 items-center justify-center
            rounded-full bg-gradient-to-r
            from-indigo-500 to-violet-500
            font-bold text-white
          "
          >
            AK
          </div>

          <span className="hidden md:block font-semibold text-white">
            Athul Krishna
          </span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="
                text-sm text-zinc-400
                transition
                hover:text-white
              "
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Resume Button */}
        <Button className="hidden sm:flex">Resume</Button>
      </nav>
    </header>
  );
}
