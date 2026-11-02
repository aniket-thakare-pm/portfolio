import { EXPERIENCES } from "@/data/content";
import { Reveal } from "./Reveal";

export const Experience = () => {
  return (
    <section id="experience" className="px-5 py-20 sm:px-8 lg:py-28" data-testid="experience-section">
      <div className="mx-auto max-w-7xl">
        {/* Single clean heading + description */}
        <div className="mb-12">
          <h2 className="font-display text-4xl font-black tracking-tight text-[#1C1917] sm:text-5xl lg:text-6xl">
            Work Experience
          </h2>
          <p className="mt-3 max-w-2xl text-base text-[#57534E] sm:text-lg">
            Product management internships spanning enterprise voice AI and agentic diligence platforms.
          </p>
        </div>

        {/* Clean, balanced 2-column cards */}
        <div className="grid gap-6 lg:grid-cols-2">
          {EXPERIENCES.map((exp, idx) => (
            <Reveal key={exp.company} delay={idx * 0.08}>
              <article
                className="flex h-full flex-col justify-between rounded-2xl border border-[#D5CFBF] bg-[#FDFBF7] p-6 shadow-[0_2px_0_0_#D5CFBF] sm:p-8"
                data-testid={`experience-card-${idx}`}
              >
                <div>
                  {/* Company & Role Header */}
                  <div className="border-b border-[#D5CFBF] pb-5">
                    <h3 className="font-display text-3xl font-black tracking-tight text-[#1C1917]">
                      {exp.company}
                    </h3>
                    <p className="mt-1 text-base font-semibold text-[#1C1917]">
                      {exp.role}
                    </p>
                    <p className="mt-1 font-mono text-xs text-[#57534E]">
                      {exp.period} · {exp.location}
                    </p>
                    <p className="mt-2 text-xs font-mono text-[#8C827A]">
                      {exp.context}
                    </p>
                  </div>

                  {/* Exactly 4 balanced bullet points */}
                  <ul className="mt-6 space-y-3.5">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-[#1C1917] sm:text-[15px]">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-sm bg-[#FF5A00]" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom skill tags as crisp rounded rectangles */}
                <div className="mt-8 flex flex-wrap gap-2 border-t border-[#D5CFBF] pt-5">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-[#D5CFBF] bg-[#F4F1EA] px-2.5 py-1 font-mono text-xs text-[#1C1917]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
