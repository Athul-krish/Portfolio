import Button from "@/components/ui/Button";
const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed top-6 left-1/2 z-50 -translate-x-1/2 w-[92%] max-w-6xl">
      <nav className="flex items-center justify-between rounded-full border border-white/10 bg-black/30 px-6 py-3 backdrop-blur-xl">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 font-bold text-white">
            AK
          </div>

          <span className="hidden md:block font-semibold text-white">
            Athul Krishna
          </span>
        </div>

        {/* Navigation Links */}

        {/* Resume Button */}
      </nav>
    </header>
  );
}
