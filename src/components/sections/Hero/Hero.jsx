import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import HeroBackground from "./HeroBackground";
import HeroBadge from "./HeroBadge";

export default function Hero() {
  return (
    <Section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <HeroBackground />

      <div className="relative z-10 flex flex-col items-center text-center">

        <p className="mb-4 text-indigo-400 uppercase tracking-[0.35em]">
          MERN STACK DEVELOPER
        </p>

        <h1 className="max-w-4xl text-6xl font-bold leading-tight md:text-8xl">
          Athul Krishna
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400 md:text-xl">
          Building thoughtful digital experiences with React,
          Node.js and modern web technologies.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-4">

          <Button>
            View Projects
          </Button>

          <Button variant="secondary">
            Download Resume
          </Button>

        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-3">

          <HeroBadge>React</HeroBadge>

          <HeroBadge>Node.js</HeroBadge>

          <HeroBadge>MongoDB</HeroBadge>

          <HeroBadge>Express</HeroBadge>

          <HeroBadge>Tailwind</HeroBadge>

        </div>

      </div>
    </Section>
  );
}