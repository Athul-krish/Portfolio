import { motion } from "framer-motion";

import profile from "@/assets//images/profile.png";

import Section from "@/components/ui/Section";

import AboutCard from "./AboutCard";
import StatCard from "./StatCard";

import { about, stats } from "@/data/portfolio";
import Reveal from "@/components/ui/Reveal";

export default function About() {
  return (
    <Section id="about">
     <Reveal>
       <div className="grid gap-16 lg:grid-cols-2 items-center">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
            <img
              src={profile}
              alt={about.name}
              className="h-[520px] w-full object-cover object-top transition duration-500 hover:scale-[1.02]"
            />
          </div>
        </motion.div>

        <AboutCard>
          <p className="uppercase tracking-[0.35em] text-indigo-400 text-sm">
            ABOUT ME
          </p>

          <h2 className="mt-4 text-5xl font-black text-white">{about.name}</h2>

          <p className="mt-3 text-indigo-300">{about.role}</p>

          <p className="mt-8 leading-8 text-zinc-400">{about.bio}</p>
        </AboutCard>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => (
          <StatCard key={item.title} {...item} />
        ))}
      </div>
     </Reveal>
    </Section>
  );
}
