import { SKILL_PILLARS } from "@/data/content";
import { Reveal } from "./Reveal";

// Balanced 2-line title formatting for equal visual height across all 4 pillars
const PILLAR_TITLES = [
  <>Product<br />Management</>,
  <>Data & Quantitative<br />Analytics</>,
  <>AI, LLMs &<br />Systems</>,
  <>Prototyping, Code<br />& Design</>,
];

export const Skills = () => (
  <section id="skills" className="px-5 py-20 sm:px-8 lg:py-28" data-testid="skills-section">
    <div className="mx-auto max-w-7xl">
      {/* Clean single heading + description */}
      <div className="mb-12">
        <h2 className="font-display text-4xl font-black tracking-tight text-[#1C1917] sm:text-5xl lg:text-6xl">
          Skills & Expertise
        </h2>
        <p className="mt-3 max-w-2xl text-base text-[#57534E] sm:text-lg">
          Core PM competencies, quantitative analytics, AI architectures, and functional prototyping.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {SKILL_PILLARS.map((pillar, i) => (
          <Reveal key={pillar.category} delay={i * 0.06}>
            <article
              data-testid={`skill-pillar-${i}`}
              className="flex h-full flex-col justify-between rounded-2xl border border-[#D5CFBF] bg-[#FDFBF7] p-6 shadow-[0_2px_0_0_#D5CFBF] transition-transform duration-300 hover:-translate-y-1"
            >
              <div>
                {/* Pillar Header with intentional 2-line title for unified height */}
                <div className="border-b border-[#D5CFBF] pb-4">
                  <span className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#B84300]">
                    Pillar 0{i + 1}
                  </span>
                  <h3 className="mt-2 font-display text-xl font-black leading-tight tracking-tight text-[#1C1917] min-h-[3.25rem] flex items-end">
                    <span>{PILLAR_TITLES[i]}</span>
                  </h3>
                </div>

                {/* Unified Dark Terminal Box (Matches exact palette of other dark boxes, no loud neon glow) */}
                <div className="mt-5 rounded-xl border border-[#2B2824] bg-[#121110] p-4 shadow-[inset_0_1px_3px_rgba(0,0,0,0.6)]">
                  <ul className="space-y-2.5 font-mono text-xs">
                    {pillar.skills.map((skill) => (
                      <li key={skill} className="flex items-start gap-2 leading-relaxed">
                        <span className="select-none font-bold text-[#22C55E]">&gt;</span>
                        <span className="text-[#86efac]">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
