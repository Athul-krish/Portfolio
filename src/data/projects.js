import studentpulseImg from "@/assets/images/projects/studentpulse.jpg";
import ecommerceImg from "@/assets/images/projects/ecommerce.jpg";
import campusconnectImg from "@/assets/images/projects/campusconnect.jpg";
import bloodbankImg from "@/assets/images/projects/bloodbank.jpg";
import portfolioImg from "@/assets/images/projects/portfolio.jpg";

export const projectsData = [
  {
    id: "studentpulse",
    title: "StudentPulse: AI Dropout Warning & Intervention System",
    category: "Full Stack",
    description:
      "Academic decision-support platform detecting student dropout risk using Random Forest ML models, attendance & academic indicators, automated explainability breakdowns, and faculty intervention tracking.",
    image: studentpulseImg,
    tags: [
      "React.js",
      "Node.js",
      "Express",
      "MongoDB",
      "FastAPI",
      "Python ML",
      "Tailwind CSS",
    ],
    demoUrl: "https://github.com/Athul-krish/StudentPulse",
    githubUrl: "https://github.com/Athul-krish/StudentPulse",
    featured: true,
    status: "Completed",
  },
  {
    id: "e-commerce-platform",
    title: "Full-Stack E-Commerce Platform",
    category: "MERN Stack",
    description:
      "Modern full-featured online storefront with JWT user authentication, real-time product search & filtering, dynamic shopping cart, checkout workflow, and customer order management dashboard.",
    image: ecommerceImg,
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Redux", "Tailwind CSS"],
    demoUrl: "https://github.com/Athul-krish/E-Com-Full",
    githubUrl: "https://github.com/Athul-krish/E-Com-Full",
    featured: true,
    status: "Completed",
  },
  {
    id: "campusconnect",
    title: "CampusConnect: Academic & Student Portal",
    category: "Full Stack",
    description:
      "Interactive centralized college management portal with weekly timetable schedule calendar, course modules, campus announcements feed, and student GPA analytics.",
    image: campusconnectImg,
    tags: ["React.js", "Node.js", "Express", "MongoDB", "REST APIs", "Tailwind CSS"],
    demoUrl: "https://github.com/Athul-krish/campus-react-app",
    githubUrl: "https://github.com/Athul-krish/campus-react-app",
    featured: false,
    status: "Completed",
  },
  {
    id: "bloodbank-app",
    title: "BloodBank & Donor Connect Network",
    category: "MERN Stack",
    description:
      "Healthcare logistics web platform facilitating real-time blood donor search, blood unit stock tracking across blood groups, urgent emergency blood requests, and donor appointments.",
    image: bloodbankImg,
    tags: ["React.js", "Node.js", "Express", "MongoDB", "REST APIs", "Tailwind CSS"],
    demoUrl: "https://github.com/Athul-krish/bloodbank-app",
    githubUrl: "https://github.com/Athul-krish/bloodbank-app",
    featured: false,
    status: "Completed",
  },
  {
    id: "interactive-portfolio",
    title: "Modern Developer Portfolio Showcase",
    category: "Frontend",
    description:
      "Ultra-polished, 60fps responsive personal portfolio website built with React 19, Vite, Tailwind CSS, Lenis smooth scroll, interactive spotlights, and Framer Motion micro-interactions.",
    image: portfolioImg,
    tags: ["React 19", "Vite", "Tailwind CSS", "Framer Motion", "Lenis"],
    demoUrl: "https://github.com/Athul-krish/Portfolio",
    githubUrl: "https://github.com/Athul-krish/Portfolio",
    featured: false,
    status: "Completed",
  },
];
