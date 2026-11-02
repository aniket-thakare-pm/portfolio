import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { CASE_STUDIES } from "@/data/content";
import { Reveal } from "./Reveal";
import { CaseStudyPanel } from "./CaseStudyPanel";

export const CaseStudies = () => {
  const [open, setOpen] = useState(-1);
  return (
    <section id="cases" className="px-5 py-20 sm:px-8 lg:py-28" data-testid="cases-section">
      <div className="mx-auto max-w-7xl">
        {/* Clean section header */}
        <div className="mb-12">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#57534E]">Strategy & Execution</p>
          <h2 className="mt-2 font-display text-4xl font-black tracking-tight text-[#1C1917] sm:text-5xl lg:text-6xl">
            Case Studies & Competitions
          </h2>
          <p className="mt-3 max-w-2xl text-base text-[#57534E] sm:text-lg">
            National gold medals and marketplace product teardowns. Tap any card to open the deep-dive report.
          </p>
        </div>

        {/* 3-column grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {CASE_STUDIES.map((c, i) => (
            <Reveal key={c.no} delay={i * 0.07}>
              <button
                onClick={() => setOpen(i)}
                data-sound="open"
                data-testid={`case-card-${c.no}`}
                className="chassis-dark group flex h-full min-h-[420px] w-full flex-col justify-between rounded-2xl p-7 text-left text-[#F4F1EA] transition-transform duration-300 hover:-translate-y-1"
              >
                <div>
                  {/* Top Bar with Number & Arrow */}
                  <div className="flex items-start justify-between gap-4">
                    <span className="font-vfd text-3xl text-[#FF7A2E]">{c.no}</span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F4F1EA] text-[#1C1917] transition-transform duration-300 group-hover:rotate-45">
                      <ArrowUpRight size={18} />
                    </span>
                  </div>

                  {/* Award / Category Tag */}
                  <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.15em] text-[#A8A29E]">
                    {c.tag}
                  </p>

                  {/* BIG, CLEAR TITLE */}
                  <h3 className="mt-2 font-display text-3xl font-black tracking-tight text-[#F4F1EA] sm:text-4xl">
                    {c.title}
                  </h3>

                  {/* Clear, readable subtitle */}
                  <p className="mt-2 text-sm leading-relaxed text-[#D6D3D1]">
                    {c.subtitle}
                  </p>
                  <p className="mt-1 font-mono text-xs text-[#8C827A]">
                    {c.role}
                  </p>
                </div>

                {/* Bottom Metric */}
                <div className="mt-8 border-t border-[#2B2824] pt-5">
                  <p className="font-display text-4xl font-black text-[#FF7A2E]">{c.result}</p>
                  <p className="mt-1 text-xs text-[#D6D3D1] font-mono">{c.resultLabel}</p>
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
