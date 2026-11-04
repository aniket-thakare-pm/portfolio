import { useState } from "react";
import { ArrowUpRight, FileText, Lock } from "lucide-react";
import { CASE_STUDIES } from "@/data/content";
import { Reveal } from "./Reveal";
import { CaseStudyPanel } from "./CaseStudyPanel";

export const CaseStudies = () => {
  const [open, setOpen] = useState(-1);
  return (
    <section id="cases" className="px-5 py-20 sm:px-8 lg:py-28" data-testid="cases-section">
      <div className="mx-auto max-w-7xl">
        {/* Single clean heading + description */}
        <div className="mb-12">
          <h2 className="font-display text-4xl font-black tracking-tight text-[#1C1917] sm:text-5xl lg:text-6xl">
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
                className="chassis-dark group flex h-full min-h-[450px] w-full flex-col justify-between rounded-2xl p-6 text-left text-[#F4F1EA] transition-transform duration-300 hover:-translate-y-1"
              >
                <div>
                  {/* Top Bar with Number & Arrow */}
                  <div className="flex items-center justify-between pb-4">
                    <span className="font-vfd text-2xl text-[#FF7A2E]">No. {c.no}</span>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F4F1EA] text-[#1C1917] transition-transform duration-300 group-hover:rotate-45">
                      <ArrowUpRight size={16} />
                    </span>
                  </div>

                  {/* INTERNAL LIGHT-COLORED BOX (Contains Tag, Big Title, and Subtitle) */}
                  <div className="rounded-xl border border-[#D5CFBF] bg-[#F4F1EA] p-5 text-[#1C1917] shadow-[inset_0_1px_2px_rgba(0,0,0,0.04)]">
                    <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#B84300] font-semibold">
                      {c.tag}
                    </p>
                    <h3 className="mt-1.5 font-display text-2xl font-black tracking-tight text-[#1C1917] sm:text-3xl">
                      {c.title}
                    </h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-[#44403C] sm:text-sm">
                      {c.subtitle}
                    </p>
                  </div>

                  {/* Role line below the box */}
                  <div className="mt-4 flex items-center justify-between">
                    <p className="font-mono text-xs text-[#A8A29E]">
                      {c.role}
                    </p>
                  </div>
                </div>

                {/* Bottom Metric + Deck / NDA status */}
                <div className="mt-6 border-t border-[#2B2824] pt-4">
                  <div className="flex items-baseline justify-between">
                    <p className="font-display text-4xl font-black text-[#FF7A2E]">{c.result}</p>
                    {c.deckUrl && c.prototypeUrl ? (
                      <span className="inline-flex items-center gap-1 rounded border border-[#FF7A2E]/50 bg-[#29221C] px-2 py-0.5 font-mono text-[10px] text-[#FF7A2E]">
                        <FileText size={10} /> Deck + UI
                      </span>
                    ) : c.deckUrl ? (
                      <span className="inline-flex items-center gap-1 rounded border border-[#FF7A2E]/40 bg-[#29221C] px-2 py-0.5 font-mono text-[10px] text-[#FF7A2E]">
                        <FileText size={10} /> Deck
                      </span>
                    ) : c.confidential ? (
                      <span className="inline-flex items-center gap-1 rounded border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-[10px] text-[#A8A29E]">
                        <Lock size={10} /> NDA
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-1 text-xs text-[#D6D3D1] font-mono">{c.resultLabel}</p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
      <CaseStudyPanel
        index={open}
        onClose={() => setOpen(-1)}
        onNext={() => setOpen((i) => (i + 1) % CASE_STUDIES.length)}
      />
    </section>
  );
};
