import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/portfolio";
import Reveal from "@/components/ui/Reveal";


const container = {
  hidden: {},

  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};


export default function Projects() {
  return (
    <Section id="projects">

      <Reveal>

        <div className="mb-16 text-center">

          <p className="
            text-sm uppercase
            tracking-[0.35em]
            text-indigo-400
          ">
            FEATURED WORK
          </p>


          <h2 className="
            mt-4
            text-4xl
            font-black
            text-white
            md:text-5xl
          ">
            Projects
          </h2>


          <p className="
            mx-auto
            mt-6
            max-w-2xl
            text-zinc-400
          ">
            A selection of projects that showcase my skills in
            full-stack development, UI design, and problem-solving.
          </p>

        </div>


        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{
            once:true,
            amount:0.2,
          }}
          className="
            grid
            gap-8
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >

          {projects.map((project) => (

            <ProjectCard
              key={project.id}
              project={project}
            />

          ))}


        </motion.div>


      </Reveal>

    </Section>
  );
}