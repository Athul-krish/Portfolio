import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import HeroBackground from "./HeroBackground";
import HeroBadge from "./HeroBadge";
import ScrollIndicator from "./ScrollIndicator";
import { FiDownload } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi";


const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function Hero() {
  return (
    <Section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <HeroBackground />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 flex flex-col items-center text-center"
      >
        <motion.p
          variants={item}
          className="mb-5 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-5 py-2 text-sm text-indigo-300"
        >
          👋 Welcome to my portfolio
        </motion.p>

        <motion.h1
          variants={item}
          className="text-6xl font-black leading-tight md:text-8xl"
        >
          Athul Krishna
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400"
        >
          MERN Stack Developer crafting fast, responsive and user-focused web applications.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <Button>
            Explore My Work <FiArrowRight />
          </Button>

          <Button variant="secondary">
            <FiDownload />
            Download CV
          </Button>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-14 flex flex-wrap justify-center gap-3"
        >
          <HeroBadge>React</HeroBadge>
          <HeroBadge>Node.js</HeroBadge>
          <HeroBadge>Express</HeroBadge>
          <HeroBadge>MongoDB</HeroBadge>
          <HeroBadge>Tailwind</HeroBadge>
          <HeroBadge>Framer Motion</HeroBadge>
        </motion.div>
      </motion.div>
      <ScrollIndicator />
    </Section>
  );
}
