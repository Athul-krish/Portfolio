import { Briefcase, GraduationCap, Award } from "lucide-react";

export const experienceData = [
  {
    type: "work",
    role: "Full Stack Developer",
    organization: "Independent Software Projects",
    period: "2023 - Present",
    location: "Remote / India",
    description:
      "Architected and delivered end-to-end full-stack web applications using the MERN stack (MongoDB, Express, React, Node.js). Engineered RESTful APIs, optimized database queries, and implemented real-time features.",
    skills: ["React.js", "Node.js", "Express", "MongoDB", "Tailwind CSS", "REST APIs"],
    icon: Briefcase,
  },
  {
    type: "education",
    role: "MERN Stack Web Development Specialization",
    organization: "Advanced Software Engineering Program",
    period: "2023 - 2024",
    location: "Kerala, India",
    description:
      "Comprehensive immersive specialization in modern frontend engineering, component hierarchy architecture, server-side development, state management, and modern CSS frameworks.",
    skills: ["JavaScript (ES6+)", "React Hooks", "State Management", "Git & GitHub"],
    icon: GraduationCap,
  },
  {
    type: "education",
    role: "Bachelor's Degree in Computer Science / Technology",
    organization: "University Institute",
    period: "2020 - 2023",
    location: "India",
    description:
      "Studied computer science fundamentals, data structures, algorithms, object-oriented programming, and database design concepts.",
    skills: ["Data Structures", "Algorithms", "DBMS", "Software Engineering"],
    icon: Award,
  },
];
