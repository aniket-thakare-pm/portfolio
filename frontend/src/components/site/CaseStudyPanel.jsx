import { ArrowRight } from "lucide-react";
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
      <DialogContent data-lenis-prevent data-testid="case-panel"
        className="h-[92vh] w-[96vw] max-w-5xl overflow-y-auto rounded-[28px] border-[#D5CFBF] bg-[#F4F1EA] p-0 [&>button]:z-10 [&>button]:rounded-full [&>button]:bg-[#F4F1EA] [&>button]:p-1.5 [&>button]:text-[#1C1917] [&>button]:opacity-100">
        {c && (
          <div>
            <div className="chassis-dark rounded-t-[28px] px-6 pb-10 pt-12 text-[#F4F1EA] sm:px-12">
              <p className="font-arcade text-[10px] text-[#FF7A2E]">CASE {c.no} / 0{CASE_STUDIES.length}</p>
              <DialogTitle className="mt-4 font-display text-4xl font-black tracking-tight sm:text-6xl">{c.title}</DialogTitle>
              <DialogDescription className="mt-3 text-base text-[#D6D3D1]">{c.area} · {c.role}</DialogDescription>
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
                <ul className="space-y-3">{c.decisions.map((d) => <li key={d} className="flex gap-3"><span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-[#FF5A00]" />{d}</li>)}</ul>
              </Part>
              <Part n="04" label="What launched">{c.launched}</Part>
              <Part n="05" label="Outcome">{c.outcome}</Part>
              <Part n="06" label="What I'd do next">{c.next}</Part>
              <button onClick={onNext} data-sound="key" data-testid="case-next-btn"
                className="key key-orange mt-4 inline-flex items-center gap-2 rounded-2xl px-6 py-4 font-mono text-sm font-semibold uppercase tracking-[0.15em]">
                Next case study <ArrowRight size={16} />
              </button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
