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
                <div className="font-mono text-xs text-[#A8A29E]">
                  {c.role} · {c.tag}
                </div>
              </div>

              <DialogTitle className="mt-4 font-display text-4xl font-black tracking-tight sm:text-5xl">
                {c.title}
              </DialogTitle>
              <DialogDescription className="mt-2 text-base text-[#D6D3D1]">
                {c.subtitle} · <span className="text-[#FF7A2E]">{c.tag}</span>
              </DialogDescription>

              {/* 60% Deck Preview Rectangle + 40% Vertically Stacked Metric Cards */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-[1.45fr_1fr] gap-4 items-stretch">
                {/* 60% Preview Container */}
                {c.deckUrl ? (
                  <div className="relative flex flex-col justify-between overflow-hidden rounded-2xl border-2 border-[#3E3A35] bg-[#141210] p-3 sm:p-4 shadow-inner transition-all hover:border-[#FF5A00]/80">
                    {/* Top status bar */}
                    <div className="flex items-center justify-between pb-2.5 px-1 border-b border-[#2B2824]">
                      <div className="flex items-center gap-2">
                        <span className="flex h-2 w-2 rounded-full bg-[#FF7A2E] animate-pulse" />
                        <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#A8A29E]">
                          Slide Archive · {c.tag}
                        </span>
                      </div>
                      <span className="rounded bg-[#24211D] px-2 py-0.5 font-mono text-[10px] font-semibold text-[#86efac]">
                        {c.slidePages ? `${c.slidePages}-PAGE DECK · PDF` : "PITCH DECK · PDF"}
                      </span>
                    </div>

                    {/* 16:9 Slide 1 Cover Container - Entire rectangle clickable to open deck */}
                    <a
                      href={c.deckUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Click to view full slide deck in new tab"
                      className="group relative my-2 aspect-video w-full overflow-hidden rounded-xl border border-[#2B2824] bg-black block cursor-pointer"
                    >
                      {c.slidePreview ? (
                        <img
                          src={c.slidePreview}
                          alt={`${c.title} Cover Slide`}
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center font-mono text-xs text-[#A8A29E]">
                          Preview Loading...
                        </div>
                      )}

                      {/* Top-left slide indicator pill */}
                      <div className="absolute top-2.5 left-2.5 inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-black/75 px-2.5 py-1 font-mono text-[10px] font-semibold text-[#86efac] backdrop-blur-md">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#86efac] animate-pulse" />
                        <span>SLIDE 01 / {c.slidePages || 24}</span>
                      </div>

                      {/* Top-right click-to-expand badge */}
                      <div className="absolute top-2.5 right-2.5 inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-black/75 px-2.5 py-1 font-mono text-[10px] text-[#D6D3D1] backdrop-blur-md opacity-85 transition-opacity group-hover:opacity-100 group-hover:text-white">
                        <span>Open Deck</span>
                        <ExternalLink size={11} />
                      </div>

                      {/* Bottom-right Floating Prototype Pill Button */}
                      {c.prototypeUrl && (
                        <button
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            window.open(c.prototypeUrl, "_blank", "noopener,noreferrer");
                          }}
                          data-testid={`case-prototype-preview-btn-${c.no}`}
                          className="absolute bottom-2.5 right-2.5 z-10 inline-flex items-center gap-1.5 rounded-lg border border-white/20 bg-black/85 px-3 py-1.5 font-mono text-[11px] font-bold uppercase tracking-wider text-white shadow-xl backdrop-blur-md transition-all hover:bg-[#FF5A00] hover:border-[#FF5A00] hover:scale-105 active:scale-95"
                        >
                          <Sparkles size={12} className="text-[#FF7A2E]" />
                          <span>Prototypes</span>
                          <ExternalLink size={11} />
                        </button>
                      )}
                    </a>

                    {/* Bottom Quick Bar */}
                    <div className="flex items-center justify-between pt-1 px-1 text-[11px] font-mono text-[#A8A29E]">
                      <span className="text-[11px]">Click slide preview to open full presentation (PDF) ↗</span>
                    </div>
                  </div>
                ) : (
                  /* Confidential Under NDA Terminal Box */
                  <div className="flex flex-col justify-between rounded-2xl border-2 border-[#3E3A35] bg-[#141210] p-5 sm:p-6 shadow-inner">
                    <div className="flex items-center justify-between border-b border-[#2B2824] pb-3">
                      <div className="flex items-center gap-2">
                        <Lock size={13} className="text-[#FF7A2E]" />
                        <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#FDBA74]">
                          Classified Dossier
                        </span>
                      </div>
                      <span className="rounded bg-[#29221C] px-2 py-0.5 font-mono text-[10px] font-bold text-[#FF7A2E]">
                        RESTRICTED UNDER NDA
                      </span>
                    </div>

                    <div className="my-4 rounded-xl border border-[#2B2824] bg-[#1C1A18]/80 p-4 font-mono text-xs leading-relaxed text-[#D6D3D1]">
                      <p className="text-[10px] uppercase tracking-widest text-[#78716C]">
                        SECURITY CLEARANCE: PUBLIC EMBARGO
                      </p>
                      <p className="mt-2 text-sm font-bold text-[#F4F1EA]">
                        Evaluated by Adobe Design & Engineering Leadership
                      </p>
                      <p className="mt-1 text-xs text-[#A8A29E]">
                        Standing: 1st / 23 IITs · Gold Medalist. System architecture & design artifacts archived under corporate NDA.
                      </p>
                    </div>

                    <div className="inline-flex items-center gap-2 text-xs font-mono text-[#A8A29E]">
                      <Lock size={12} className="text-[#FF7A2E]" />
                      <span>Preview restricted · In-person review only</span>
                    </div>
                  </div>
                )}

                {/* 40% Vertically Stacked Metric Cards */}
                <div className="flex flex-col justify-between gap-2.5">
                  {c.metrics.map(([l, v]) => (
                    <div
                      key={l}
                      className="flex flex-1 flex-col justify-center rounded-2xl border border-[#2B2824] bg-[#1C1A18] px-5 py-3.5 shadow-sm"
                    >
                      <p className="font-display text-2xl sm:text-3xl font-black text-[#FF7A2E]">
                        {v}
                      </p>
                      <p className="mt-0.5 font-mono text-xs text-[#D6D3D1]">
                        {l}
                      </p>
                    </div>
                  ))}
                </div>
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
                  className="key key-orange ml-auto inline-flex items-center gap-2 rounded-xl px-5 py-3 font-mono text-xs font-bold uppercase tracking-wider text-[#1C1917]"
                >
                  <span>Next Case Study</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
