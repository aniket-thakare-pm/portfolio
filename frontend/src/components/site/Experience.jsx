import { EXPERIENCES } from "@/data/content";
import { Reveal, SectionLabel } from "./Reveal";
import { Briefcase, Calendar, MapPin, Sparkles } from "lucide-react";

export const Experience = () => {
  return (
    <section id="experience" className="px-5 py-24 sm:px-8 lg:py-32" data-testid="experience-section">
      <div className="mx-auto max-w-7xl">
        <SectionLabel
          code="SEC_01 / WORK EXPERIENCE"
          title={<>Enterprise &<br />production roles.</>}
          kicker="High-scale conversational voice AI, agentic LLM platforms, and autonomous QA systems."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {EXPERIENCES.map((exp, idx) => (
            <Reveal key={exp.company} delay={idx * 0.1}>
              <article
                className={`chassis flex h-full flex-col justify-between rounded-[28px] p-6 sm:p-8 transition-transform duration-300 hover:-translate-y-1`}
                data-testid={`experience-card-${idx}`}
              >
                <div>
                  {/* Top Bar: Company, Badge & Number */}
                  <div className="flex items-start justify-between gap-4 border-b border-[#D5CFBF] pb-5">
                    <div>
                      <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#57534E]">
                        Role 0{idx + 1}
                      </span>
                      <h3 className="mt-1 font-display text-3xl font-black tracking-tight text-[#1C1917] sm:text-4xl">
                        {exp.company}
                      </h3>
                      <p className="mt-1 font-mono text-xs uppercase tracking-[0.15em] text-[#B84300] font-semibold flex items-center gap-1.5">
                        <Briefcase size={13} /> {exp.role}
                      </p>
                    </div>
                    <span className="rounded-full border border-[#1C1917] bg-[#1C1917] px-3.5 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.15em] text-[#F4F1EA]">
                      {exp.badge}
                    </span>
                  </div>

                  {/* Metadata Row: Period & Location */}
                  <div className="mt-4 flex flex-wrap items-center gap-y-2 gap-x-5 text-xs font-mono text-[#57534E]">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar size={13} /> {exp.period}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin size={13} /> {exp.location}
                    </span>
                  </div>

                  {/* Context / Vertical note */}
                  <div className="mt-3 rounded-xl bg-[#EAE5D9] px-3.5 py-2 font-mono text-[11px] text-[#44403C]">
                    {exp.vertical}
                  </div>

                  {/* Bullets */}
                  <ul className="mt-6 space-y-3.5">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-[#1C1917] sm:text-[15px]">
                        <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#FF5A00]" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Skill Tags */}
                <div className="mt-8 flex flex-wrap gap-2 border-t border-[#D5CFBF] pt-5">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-[#CFC7B5] bg-[#FDFBF7] px-3 py-1 font-mono text-[11px] uppercase tracking-[0.12em] text-[#1C1917]"
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
