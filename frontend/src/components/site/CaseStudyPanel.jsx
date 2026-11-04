import { ArrowRight, ExternalLink, Lock, FileText, Sparkles } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { CASE_STUDIES } from "@/data/content";

const Part = ({ n, label, children }) => (
  <section className="grid gap-3 border-t border-[#D5CFBF] py-7 md:grid-cols-[200px_1fr]">
    <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#57534E]">{n} · {label}</p>
    <div className="text-base leading-relaxed text-[#1C1917] sm:text-lg">{children}</div>
  </section>
);

export const CaseStudyPanel = ({ index, onClose, onNext }) => {
  const c = CASE_STUDIES[index];
  return (
    <Dialog open={!!c} onOpenChange={(o) => !o && onClose()}>
      <DialogContent
        data-lenis-prevent
        data-testid="case-panel"
        className="h-[92vh] w-[96vw] max-w-5xl overflow-y-auto rounded-[28px] border-[#D5CFBF] bg-[#F4F1EA] p-0 [&>button]:z-20 [&>button]:rounded-full [&>button]:bg-[#F4F1EA] [&>button]:p-1.5 [&>button]:text-[#1C1917] [&>button]:opacity-100"
      >
        {c && (
          <div>
            <div className="chassis-dark rounded-t-[28px] px-6 pb-10 pt-12 text-[#F4F1EA] sm:px-12">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="font-arcade text-[10px] text-[#FF7A2E]">CASE {c.no} / 0{CASE_STUDIES.length}</p>

                {/* Deck, Prototype, or Confidentiality Pill in Header */}
                <div className="flex flex-wrap items-center gap-2">
                  {c.deckUrl && (
                    <a
                      href={c.deckUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-testid={`case-deck-btn-${c.no}`}
                      className="inline-flex items-center gap-1.5 rounded-lg bg-[#FF5A00] px-3.5 py-1.5 font-mono text-xs font-bold uppercase tracking-wider text-white shadow transition-all hover:bg-[#E04F00] hover:scale-105 active:scale-95"
                    >
                      <FileText size={13} />
                      <span>{c.deckLabel || "View Deck (PDF)"}</span>
                      <ExternalLink size={13} />
                    </a>
                  )}

                  {c.prototypeUrl && (
                    <a
                      href={c.prototypeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-testid={`case-prototype-btn-${c.no}`}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-[#D5CFBF]/40 bg-[#F4F1EA] px-3.5 py-1.5 font-mono text-xs font-bold uppercase tracking-wider text-[#1C1917] shadow transition-all hover:bg-white hover:scale-105 active:scale-95"
                    >
                      <Sparkles size={13} className="text-[#FF5A00]" />
                      <span>{c.prototypeLabel || "Interactive Prototypes"}</span>
                      <ExternalLink size={13} />
                    </a>
                  )}

                  {c.confidential && (
                    <div className="inline-flex items-center gap-1.5 rounded-lg border border-[#3E3A35] bg-[#24211D] px-3 py-1.5 font-mono text-xs text-[#A8A29E]">
                      <Lock size={12} className="text-[#FF7A2E]" />
                      <span>Confidential under NDA</span>
                    </div>
                  )}
                </div>
              </div>

              <DialogTitle className="mt-4 font-display text-4xl font-black tracking-tight sm:text-5xl">
                {c.title}
              </DialogTitle>
              <DialogDescription className="mt-2 text-base text-[#D6D3D1]">
                {c.subtitle} · <span className="text-[#FF7A2E]">{c.tag}</span> · {c.role}
              </DialogDescription>

              {/* Confidential Advisory Notice if NDA */}
              {c.confidential && (
                <div className="mt-4 inline-flex items-center gap-2 rounded-xl border border-[#FF7A2E]/30 bg-[#29221C] px-4 py-2.5 font-mono text-xs text-[#FDBA74]">
                  <Lock size={14} className="shrink-0 text-[#FF7A2E]" />
                  <span>{c.confidentialNote}</span>
                </div>
              )}

              {/* Metrics Grid */}
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {c.metrics.map(([l, v]) => (
                  <div key={l} className="rounded-2xl border border-[#2B2824] bg-[#1C1A18] p-5">
                    <p className="font-display text-3xl font-black text-[#FF7A2E]">{v}</p>
                    <p className="mt-1 text-sm text-[#D6D3D1]">{l}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="px-6 pb-10 sm:px-12">
              <Part n="01" label="The problem">{c.problem}</Part>
              <Part n="02" label="Research">{c.research}</Part>
              <Part n="03" label="Decisions & trade-offs">
                <ul className="space-y-3">
                  {c.decisions.map((d) => (
                    <li key={d} className="flex gap-3">
                      <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-[#FF5A00]" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </Part>
              <Part n="04" label="What launched">{c.launched}</Part>
              <Part n="05" label="Outcome">{c.outcome}</Part>
              <Part n="06" label="What I'd do next">{c.next}</Part>

              <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-[#D5CFBF] pt-6">
                <div className="flex flex-wrap items-center gap-3">
                  {c.deckUrl && (
                    <a
                      href={c.deckUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-[#D5CFBF] bg-[#FDFBF7] px-4 py-3 font-mono text-xs font-bold uppercase tracking-wider text-[#1C1917] shadow-sm hover:border-[#1C1917] transition-colors"
                    >
                      <FileText size={14} />
                      <span>{c.deckLabel || "Open Presentation (PDF)"}</span>
                      <ExternalLink size={13} />
                    </a>
                  )}

                  {c.prototypeUrl && (
                    <a
                      href={c.prototypeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-[#FF5A00] bg-[#FF5A00] px-4 py-3 font-mono text-xs font-bold uppercase tracking-wider text-white shadow hover:bg-[#E04F00] transition-colors"
                    >
                      <Sparkles size={14} />
                      <span>{c.prototypeLabel || "Launch Prototypes"}</span>
                      <ExternalLink size={13} />
                    </a>
                  )}
                </div>

                <button
                  onClick={onNext}
                  data-sound="key"
                  data-testid="case-next-btn"
                  className="key key-orange inline-flex items-center gap-2 rounded-2xl px-6 py-4 font-mono text-sm font-semibold uppercase tracking-[0.15em]"
                >
                  Next case study <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
