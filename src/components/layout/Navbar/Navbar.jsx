import Button from "@/components/ui/Button";
const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed top-6 left-1/2 z-50 -translate-x-1/2">
      <nav className="flex items-center gap-8 rounded-full border border-white/10 bg-white/5 px-6 py-3 backdrop-blur-xl shadow-lg shadow-black/20">
        
        <h1 className="text-lg font-bold tracking-wider text-white">
          AK
        </h1>

        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-zinc-300 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <Button size="sm">
          Resume
        </Button>
      </nav>
    </header>
  );
}