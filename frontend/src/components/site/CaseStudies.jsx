import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { CASE_STUDIES } from "@/data/content";
import { Reveal, SectionLabel } from "./Reveal";
import { CaseStudyPanel } from "./CaseStudyPanel";

export const CaseStudies = () => {
  const [open, setOpen] = useState(-1);
  return (
    <section id="cases" className="px-5 py-24 sm:px-8 lg:py-32" data-testid="cases-section">
      <div className="mx-auto max-w-7xl">
        <SectionLabel
          code="SEC_02 / CASE STUDIES & COMPETITIONS"
          title={<>Strategy, trade-offs<br />& measurable impact.</>}
          kicker="Deep dives into enterprise voice AI systems, national gold medal strategy, and marketplace creator commerce."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {CASE_STUDIES.map((c, i) => (
            <Reveal key={c.no} delay={i * 0.07}>
              <button onClick={() => setOpen(i)} data-sound="open" data-testid={`case-card-${c.no}`}
                className="chassis-dark group flex h-full min-h-[380px] w-full flex-col justify-between rounded-[28px] p-7 text-left text-[#F4F1EA] transition-transform duration-300 hover:-translate-y-1">
                <div className="flex items-start justify-between gap-4">
                  <span className="font-vfd text-4xl text-[#FF7A2E]">{c.no}</span>
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F4F1EA] text-[#1C1917] transition-transform duration-300 group-hover:rotate-45">
                    <ArrowUpRight size={20} />
                  </span>
                </div>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#A8A29E]">{c.area}</p>
                  <h3 className="mt-2 font-display text-2xl font-black tracking-tight sm:text-3xl">{c.title}</h3>
                  <p className="mt-1 text-sm text-[#D6D3D1]">{c.role}</p>
                  <div className="mt-6 border-t border-[#2B2824] pt-5">
                    <p className="font-display text-4xl font-black text-[#FF7A2E]">{c.result}</p>
                    <p className="mt-1 text-sm text-[#D6D3D1]">{c.resultLabel}</p>
                  </div>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
      <CaseStudyPanel index={open} onClose={() => setOpen(-1)} onNext={() => setOpen((i) => (i + 1) % CASE_STUDIES.length)} />
    </section>
  );
};
