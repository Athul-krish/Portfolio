import portfolioImg from "@/assets/projects/portfolio.png";
import hackathonImg from "@/assets/projects/hackathon.png";
import bookingImg from "@/assets/projects/booking.png";

export const about = {
  name: "Athul Krishna",
  role: "MCA Student & MERN Stack Developer",
  location: "Kerala, India",

  bio: `I'm an MCA student passionate about turning ideas into responsive web applications. I enjoy solving real-world problems using the MERN stack and continuously improving my skills through projects and hands-on learning.`,
};

export const stats = [
  {
    title: "Projects",
    value: "15+",
  },
  {
    title: "Technologies",
    value: "10+",
  },
  {
    title: "Learning",
    value: "Daily",
  },
  {
    title: "Coffee",
    value: "∞",
  },
];

export const skills = [
  {
    title: "React",
    category: "Frontend",
    icon: "react",
  },
  {
    title: "Node.js",
    category: "Backend",
    icon: "node",
  },
  {
    title: "Express",
    category: "Framework",
    icon: "express",
  },
  {
    title: "MongoDB",
    category: "Database",
    icon: "mongodb",
  },
  {
    title: "Tailwind",
    category: "Styling",
    icon: "tailwind",
  },
  {
    title: "Git",
    category: "Version Control",
    icon: "git",
  },
];

//projects
export const projects = [
  {
    id: 1,
    title: "Interactive Portfolio",
    description:
      "A modern portfolio built using React, Tailwind CSS and Framer Motion with responsive layouts and smooth animations.",

    image: portfolioImg,

    tech: ["React", "Tailwind", "Framer Motion"],

    github: "https://github.com/Athul-krish/Portfolio",

    demo: "#",
  },

  {
    id: 2,
    title: "Hackathon Team Management",

    description:
      "A MERN application to register, manage and monitor hackathon teams with CRUD operations.",

    image: hackathonImg,

    tech: ["React", "Node", "Express", "MongoDB"],

    github: "https://github.com/Athul-krish",

    demo: "#",
  },

  {
    id: 3,

    title: "Booking Management",

    description:
      "A responsive booking system with authentication, CRUD functionality and clean dashboard UI.",

    image: bookingImg,

    tech: ["React", "Express", "MongoDB"],

    github: "https://github.com/Athul-krish",

    demo: "#",
  },
];
