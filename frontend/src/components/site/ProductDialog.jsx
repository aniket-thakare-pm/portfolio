import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const Row = ({ label, children }) => (
  <div className="grid gap-2 border-t border-[#D5CFBF] py-5 sm:grid-cols-[140px_1fr]">
    <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#57534E]">{label}</span>
    <div className="text-base leading-relaxed text-[#1C1917]">{children}</div>
  </div>
);

export const ProductDialog = ({ product: p, onClose }) => (
  <Dialog open={!!p} onOpenChange={(o) => !o && onClose()}>
    <DialogContent data-lenis-prevent data-testid="product-dialog"
      className="max-h-[90vh] max-w-2xl overflow-y-auto rounded-2xl border-[#D5CFBF] bg-[#F4F1EA] p-0">
      {p && (
        <>
          <div className="relative h-36 rounded-t-2xl p-6" style={{ background: p.color }}>
            <div className="grille absolute inset-0 rounded-t-2xl opacity-30 mix-blend-multiply" />
            <span className="relative font-vfd text-2xl text-white">No. {p.no} · {p.status}</span>
          </div>
          <div className="px-6 pb-8 pt-6 sm:px-8">
            <DialogTitle className="font-display text-3xl font-black tracking-tight text-[#1C1917] sm:text-4xl">{p.name}</DialogTitle>
            <DialogDescription className="mt-1 font-mono text-xs text-[#57534E]">{p.kind}</DialogDescription>
            <div className="mt-6">
              <Row label="The problem">{p.problem}</Row>
              <Row label="What I built">{p.built}</Row>
              <Row label="Tools">
                <div className="flex flex-wrap gap-2">
                  {p.tools.map((t) => (
                    <span key={t} className="rounded-md border border-[#D5CFBF] bg-[#FDFBF7] px-2.5 py-1 font-mono text-xs text-[#1C1917]">
                      {t}
                    </span>
                  ))}
                </div>
              </Row>
              <Row label="The result">{p.result}</Row>
            </div>
          </div>
        </>
      )}
    </DialogContent>
  </Dialog>
);
