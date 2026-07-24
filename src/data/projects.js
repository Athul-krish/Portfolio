import project1Img from "@/assets/images/project1.png";
import heroImg from "@/assets/images/hero.png";

export const projectsData = [
  {
    id: "e-commerce-platform",
    title: "Full-Stack E-Commerce Platform",
    category: "MERN Stack",
    description:
      "A feature-rich MERN stack e-commerce web application featuring user authentication, product catalog filtering, dynamic shopping cart management, stripe payment processing, and comprehensive order tracking dashboard.",
    image: project1Img,
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Redux", "Tailwind CSS"],
    demoUrl: "https://github.com/Athul-krish/Portfolio",
    githubUrl: "https://github.com/Athul-krish",
    featured: true,
    status: "Completed",
  },
  {
    id: "realtime-chat-app",
    title: "Real-Time Collaboration & Chat App",
    category: "Full Stack",
    description:
      "Modern instant messaging and workspace collaboration web app built with Socket.io, React, and Node.js. Includes direct messaging, channel creation, file attachment sharing, online status presence, and dark mode UI.",
    image: heroImg,
    tags: ["React.js", "Node.js", "Socket.io", "MongoDB", "Tailwind CSS"],
    demoUrl: "https://github.com/Athul-krish/Portfolio",
    githubUrl: "https://github.com/Athul-krish",
    featured: true,
    status: "Completed",
  },
  {
    id: "task-management-dashboard",
    title: "AI-Powered Workflow & Task Dashboard",
    category: "MERN Stack",
    description:
      "Productivity dashboard allowing users to create Kanban boards, organize tasks with priorities, assign deadlines, and collaborate with team members in real-time.",
    image: project1Img,
    tags: ["React.js", "Node.js", "Express", "MongoDB", "Framer Motion"],
    demoUrl: "https://github.com/Athul-krish/Portfolio",
    githubUrl: "https://github.com/Athul-krish",
    featured: false,
    status: "In Progress",
  },
  {
    id: "interactive-portfolio",
    title: "Modern Developer Portfolio Showcase",
    category: "Frontend",
    description:
      "Ultra-polished, 60fps responsive personal portfolio website built with React 19, Vite, Tailwind CSS, Lenis smooth scroll, and Framer Motion micro-interactions.",
    image: heroImg,
    tags: ["React 19", "Vite", "Tailwind CSS", "Framer Motion", "Lenis"],
    demoUrl: "https://github.com/Athul-krish/Portfolio",
    githubUrl: "https://github.com/Athul-krish/Portfolio",
    featured: false,
    status: "Completed",
  },
];
