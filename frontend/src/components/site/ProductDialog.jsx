import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ProductGraphic } from "./ProductGraphics";

const Row = ({ label, children }) => (
  <div className="grid gap-2 border-t border-[#D5CFBF] py-5 sm:grid-cols-[140px_1fr]">
    <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#57534E]">{label}</span>
    <div className="text-base leading-relaxed text-[#1C1917]">{children}</div>
  </div>
);

export const ProductDialog = ({ product: p, onClose }) => (
  <Dialog open={!!p} onOpenChange={(o) => !o && onClose()}>
    <DialogContent
      data-lenis-prevent
      data-testid="product-dialog"
      className="max-h-[92vh] max-w-2xl overflow-y-auto rounded-2xl border-[#D5CFBF] bg-[#F4F1EA] p-0 [&>button]:z-20 [&>button]:rounded-full [&>button]:bg-[#F4F1EA] [&>button]:p-1.5 [&>button]:text-[#1C1917]"
    >
      {p && (
        <>
          <div className="relative h-44 sm:h-48 overflow-hidden rounded-t-2xl p-6" style={{ background: p.color }}>
            <div className="grille absolute inset-0 opacity-25 mix-blend-multiply" />
            <div className="scanlines absolute inset-0 opacity-20" />
            
            {/* Visual Graphic in Background */}
            <div className="absolute inset-0 flex items-center justify-center p-4 opacity-35">
              <ProductGraphic type={p.graphicType} className="h-full w-full text-white" />
            </div>

            <div className="relative z-10 flex h-full flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="font-vfd text-2xl text-white drop-shadow-sm">No. {p.no}</span>
                <span className="rounded-md bg-[#F4F1EA] px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-[#1C1917] shadow">
                  {p.categoryBadge}
                </span>
              </div>
              <div className="inline-block self-start rounded-md border border-white/20 bg-black/40 px-3 py-1 font-mono text-xs text-white/95 backdrop-blur-sm">
                {p.status}
              </div>
            </div>
          </div>

          <div className="px-6 pb-8 pt-6 sm:px-8">
            <DialogTitle className="font-display text-3xl font-black tracking-tight text-[#1C1917] sm:text-4xl">
              {p.name}
            </DialogTitle>
            <DialogDescription className="mt-1 font-mono text-xs font-semibold text-[#57534E]">
              {p.kind}
            </DialogDescription>

            <div className="mt-6">
              <Row label="The problem">{p.problem}</Row>
              <Row label="What I built">{p.built}</Row>
              <Row label="Tools & Stack">
                <div className="flex flex-wrap gap-2">
                  {p.tools.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-[#D5CFBF] bg-[#FDFBF7] px-2.5 py-1 font-mono text-xs text-[#1C1917]"
                    >
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
