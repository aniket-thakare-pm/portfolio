import { SKILL_PILLARS } from "@/data/content";
import { Reveal } from "./Reveal";

export const Skills = () => (
  <section id="skills" className="px-5 py-20 sm:px-8 lg:py-28" data-testid="skills-section">
    <div className="mx-auto max-w-7xl">
      <div className="mb-12">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#57534E]">Execution Stack</p>
        <h2 className="mt-2 font-display text-4xl font-black tracking-tight text-[#1C1917] sm:text-5xl lg:text-6xl">
          Skills & Expertise
        </h2>
        <p className="mt-3 max-w-2xl text-base text-[#57534E] sm:text-lg">
          Core PM competencies, data modeling, AI architectures, and technical prototyping.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {SKILL_PILLARS.map((pillar, i) => (
          <Reveal key={pillar.category} delay={i * 0.06}>
            <article
              data-testid={`skill-pillar-${i}`}
              className="flex h-full flex-col justify-between rounded-2xl border border-[#D5CFBF] bg-[#FDFBF7] p-6 shadow-[0_2px_0_0_#D5CFBF]"
            >
              <div>
                {/* Pillar Header */}
                <div className="flex items-center justify-between border-b border-[#D5CFBF] pb-4">
                  <span className="font-mono text-xs font-semibold uppercase tracking-[0.15em] text-[#B84300]">
                    Pillar 0{i + 1}
                  </span>
                  <span className="font-mono text-xs text-[#8C827A]">
                    {pillar.skills.length} skills
                  </span>
                </div>

                <h3 className="mt-3 font-display text-xl font-bold tracking-tight text-[#1C1917]">
                  {pillar.category}
                </h3>

                {/* Scannable, concrete skill badges */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {pillar.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-[#D5CFBF] bg-[#F4F1EA] px-2.5 py-1 font-mono text-xs text-[#1C1917]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
