import { SKILL_PILLARS } from "@/data/content";
import { Reveal } from "./Reveal";

const PillarVisual = ({ index }) => {
  if (index === 0) {
    // Product Strategy: Tactile Lifecycle Pipeline
    const stages = [
      { label: "Discovery", active: true },
      { label: "PRD Spec", active: true },
      { label: "RICE Triage", active: true },
      { label: "GTM Launch", active: true },
    ];
    return (
      <div className="rounded-xl border border-[#D5CFBF] bg-[#EAE5D9] p-3">
        <div className="grid grid-cols-4 gap-1.5">
          {stages.map((st) => (
            <div key={st.label} className="flex flex-col items-center">
              <span className="h-1.5 w-full rounded-full bg-[#1C1917]" />
              <span className="mt-1.5 font-mono text-[9px] uppercase tracking-wider text-[#57534E]">
                {st.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (index === 1) {
    // Data & Analytics: Telemetry Spectrum Meter
    const channels = [
      { name: "SQL", height: "70%", color: "#FF5A00" },
      { name: "LOGIT", height: "95%", color: "#2F6F5E" },
      { name: "STATS", height: "80%", color: "#3B4A8C" },
      { name: "COHORT", height: "85%", color: "#C9A227" },
    ];
    return (
      <div className="rounded-xl border border-[#D5CFBF] bg-[#1C1917] p-3">
        <div className="grid grid-cols-4 gap-2 h-10 items-end">
          {channels.map((ch) => (
            <div key={ch.name} className="flex flex-col items-center h-full justify-end">
              <div className="w-full rounded-sm" style={{ height: ch.height, background: ch.color }} />
              <span className="mt-1 font-mono text-[8px] text-[#A8A29E] tracking-widest">{ch.name}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (index === 2) {
    // AI & Systems: Retro VFD Monospace Terminal
    return (
      <div className="vfd rounded-xl p-2.5 font-vfd text-[13px] leading-tight text-[#4ade80]">
        &gt; PROMPT_LOOP: ACTIVE<br />
        &gt; BOT_QA: MECE 35/35<br />
        &gt; HITL_GUARDRAILS: LOCKED<span className="blink">_</span>
      </div>
    );
  }

  // Prototyping & Code: Tactile Hardware Key Swatches
  const tools = [
    { name: "FIGMA", bg: "#F4F1EA", border: "#CFC7B5" },
    { name: "COMPOSE", bg: "#2F6F5E", border: "#2F6F5E", text: "#FFF" },
    { name: "REACT", bg: "#FF5A00", border: "#FF5A00", text: "#FFF" },
    { name: "SQLITE", bg: "#1C1917", border: "#1C1917", text: "#FFF" },
  ];
  return (
    <div className="flex gap-1.5">
      {tools.map((t) => (
        <span
          key={t.name}
          className="flex-1 rounded-lg border py-2 text-center font-mono text-[9px] font-bold tracking-wider"
          style={{ background: t.bg, borderColor: t.border, color: t.text || "#1C1917" }}
        >
          {t.name}
        </span>
      ))}
    </div>
  );
};

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
              className="chassis flex h-full flex-col justify-between rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1"
            >
              <div>
                {/* Pillar Header with VFD index */}
                <div className="flex items-center justify-between border-b border-[#D5CFBF] pb-4">
                  <span className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#B84300]">
                    Pillar 0{i + 1}
                  </span>
                  <span className="font-vfd text-2xl text-[#57534E]">
                    0{i + 1}
                  </span>
                </div>

                <h3 className="mt-3 font-display text-xl font-black tracking-tight text-[#1C1917]">
                  {pillar.category}
                </h3>

                {/* Tactile Hardware Visual Element (Restores beauty and meaning) */}
                <div className="my-4">
                  <PillarVisual index={i} />
                </div>

                {/* Concrete, legible skill tags */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {pillar.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-[#D5CFBF] bg-[#FDFBF7] px-2.5 py-1 font-mono text-xs text-[#1C1917]"
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
