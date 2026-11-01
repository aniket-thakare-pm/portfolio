import { ExternalLink } from "lucide-react";
import { toast } from "sonner";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const Row = ({ label, children }) => (
  <div className="grid gap-2 border-t border-[#D5CFBF] py-5 sm:grid-cols-[140px_1fr]">
    <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#57534E]">{label}</span>
    <div className="text-base leading-relaxed text-[#1C1917]">{children}</div>
  </div>
);

const tryIt = (link) => {
  if (/^https?:\/\//.test(link)) window.open(link, "_blank", "noopener");
  else toast("Product link coming soon", { description: "Add it in src/data/content.js" });
};

export const ProductDialog = ({ product: p, onClose }) => (
  <Dialog open={!!p} onOpenChange={(o) => !o && onClose()}>
    <DialogContent data-lenis-prevent data-testid="product-dialog"
      className="max-h-[90vh] max-w-2xl overflow-y-auto rounded-[28px] border-[#D5CFBF] bg-[#F4F1EA] p-0">
      {p && (
        <>
          <div className="relative h-40 rounded-t-[28px] p-6" style={{ background: p.color }}>
            <div className="grille absolute inset-0 rounded-t-[28px] opacity-30 mix-blend-multiply" />
            <span className="relative font-vfd text-2xl text-white">No. {p.no} · {p.status}</span>
          </div>
          <div className="px-6 pb-7 pt-6 sm:px-8">
            <DialogTitle className="font-display text-3xl font-black tracking-tight sm:text-4xl">{p.name}</DialogTitle>
            <DialogDescription className="mt-1 font-mono text-xs uppercase tracking-[0.18em] text-[#57534E]">{p.kind}</DialogDescription>
            <div className="mt-6">
              <Row label="The problem">{p.problem}</Row>
              <Row label="What I built">{p.built}</Row>
              <Row label="Tools">
                <div className="flex flex-wrap gap-2">
                  {p.tools.map((t) => <span key={t} className="rounded-full border border-[#CFC7B5] bg-[#FDFBF7] px-3 py-1 font-mono text-xs">{t}</span>)}
                </div>
              </Row>
              <Row label="The result">{p.result}</Row>
            </div>
            <button onClick={() => tryIt(p.link)} data-sound="key" data-testid="product-dialog-try-btn"
              className="key key-orange mt-4 inline-flex items-center gap-2 rounded-2xl px-6 py-4 font-mono text-sm font-semibold uppercase tracking-[0.15em]">
              Try it <ExternalLink size={16} />
            </button>
          </div>
        </>
      )}
    </DialogContent>
  </Dialog>
);
