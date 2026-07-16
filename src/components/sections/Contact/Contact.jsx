import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

export default function Contact() {
  return (
    <Section id="contact">
      <Reveal>
        <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900 to-zinc-950 p-12 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-indigo-400">
            CONTACT
          </p>

          <h2 className="mt-4 text-5xl font-black text-white">
            Let's Build Something Amazing
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            I'm currently looking for internships, freelance opportunities and
            exciting collaborations. If you have an idea or opportunity, I'd
            love to hear from you.
          </p>

          <div className="mt-10">
            <a href="mailto:athulkrishna7.dev@gmail.com">
              {" "}
              <Button size="lg">Email Me</Button>
            </a>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <a
              href="https://github.com/Athul-krish"
              target="_blank"
              rel="noreferrer"
            >
              <Button variant="secondary">GitHub</Button>
            </a>

            <a
              href="https://www.linkedin.com/in/athul-krishna-392b79421/"
              target="_blank"
              rel="noreferrer"
            >
              <Button variant="secondary">LinkedIn</Button>
            </a>

            <a
              href="https://www.instagram.com/_athxllll_/"
              target="_blank"
              rel="noreferrer"
            >
              <Button variant="secondary">Instagram</Button>
            </a>

            <a href="/resume.pdf" download>
              <Button variant="secondary">Resume</Button>
            </a>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
