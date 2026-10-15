import {
  Code,
  Server,
  Database,
  Wrench,
  Sparkles,
  Layers,
  Terminal,
  Globe,
  Flame,
  Shield,
  GitBranch,
  Cpu,
} from "lucide-react";

export const skillCategories = [
  {
    id: "frontend",
    title: "Frontend Engineering",
    icon: Code,
    color: "from-indigo-500 to-purple-500",
    skills: [
      { name: "React.js", level: 92, tag: "Core Specialty", icon: Code },
      { name: "JavaScript (ES6+)", level: 90, tag: "Expert", icon: Terminal },
      { name: "Tailwind CSS", level: 95, tag: "Styling", icon: Sparkles },
      { name: "HTML5 & CSS3", level: 95, tag: "Foundation", icon: Globe },
      { name: "Framer Motion", level: 85, tag: "Animations", icon: Flame },
      { name: "Redux / Context API", level: 88, tag: "State Management", icon: Layers },
    ],
  },
  {
    id: "backend",
    title: "Backend & APIs",
    icon: Server,
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "Node.js", level: 88, tag: "Runtime", icon: Terminal },
      { name: "Express.js", level: 90, tag: "Framework", icon: Server },
      { name: "RESTful APIs", level: 92, tag: "Architecture", icon: Cpu },
      { name: "JWT & Auth", level: 85, tag: "Security", icon: Shield },
      { name: "WebSockets", level: 80, tag: "Real-time", icon: Flame },
    ],
  },
  {
    id: "database",
    title: "Database & Storage",
    icon: Database,
    color: "from-cyan-500 to-blue-500",
    skills: [
      { name: "MongoDB", level: 90, tag: "NoSQL Core", icon: Database },
      { name: "Mongoose ODM", level: 88, tag: "Schema Design", icon: Layers },
      { name: "PostgreSQL", level: 78, tag: "Relational", icon: Database },
      { name: "Firebase", level: 82, tag: "BaaS", icon: Flame },
    ],
  },
  {
    id: "tools",
    title: "Tools & Ecosystem",
    icon: Wrench,
    color: "from-emerald-500 to-teal-500",
    skills: [
      { name: "Git & GitHub", level: 90, tag: "Version Control", icon: GitBranch },
      { name: "Vite & Build Tools", level: 92, tag: "Bundling", icon: Sparkles },
      { name: "Postman", level: 88, tag: "API Testing", icon: Terminal },
      { name: "VS Code", level: 95, tag: "IDE", icon: Wrench },
    ],
  },
];
