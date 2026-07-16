import Section from "@/components/ui/Section";
import SkillCard from "./SkillCard";
import Reveal from "@/components/ui/Reveal";

import { skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <Section id="skills">

      <Reveal>
        <div className="text-center mb-16">

        <p className="uppercase tracking-[0.35em] text-indigo-400 text-sm">
          MY SKILLS
        </p>

        <h2 className="mt-4 text-5xl font-black text-white">
          Tech Stack
        </h2>

        <p className="mt-6 text-zinc-400 max-w-2xl mx-auto">
          I enjoy building modern web applications
          using technologies across the full stack.
        </p>

      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

        {skills.map((skill) => (
          <SkillCard
            key={skill.title}
            {...skill}
          />
        ))}

      </div>
        </Reveal>

    </Section>
  );
}