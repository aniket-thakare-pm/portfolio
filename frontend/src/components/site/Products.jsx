import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { PRODUCTS } from "@/data/content";
import { Reveal, SectionLabel } from "./Reveal";
import { ProductDialog } from "./ProductDialog";

const spot = (e) => {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
};

const Card = ({ p, big, onOpen }) => (
  <button onClick={onOpen} onMouseMove={spot} data-sound="open" data-testid={`product-card-${p.no}`}
    className="chassis group relative flex h-full w-full flex-col overflow-hidden rounded-[28px] p-3 text-left transition-transform duration-300 hover:-translate-y-1">
    <span className="spot pointer-events-none absolute inset-0 z-10" />
    <div className="clip-frame rounded-[22px] bg-[#1C1917] p-[6px]">
      <div className={`clip-screen relative overflow-hidden ${big ? "h-64 sm:h-80" : "h-48"}`} style={{ background: p.color }}>
        <div className="grille absolute inset-0 opacity-30 mix-blend-multiply" />
        <div className="scanlines absolute inset-0 opacity-20" />
        <span className="absolute left-5 top-4 font-vfd text-2xl text-white/90">No. {p.no}</span>
        <span className="absolute right-4 top-4 rounded-full bg-[#F4F1EA] px-3 py-1 font-mono text-[11px] uppercase tracking-[0.2em] text-[#1C1917] font-semibold">{p.status}</span>
        <span className={`absolute bottom-3 left-5 font-wide font-black leading-none text-white/95 ${big ? "text-6xl sm:text-8xl" : "text-5xl"}`}>{p.no}</span>
        <span className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#F4F1EA] text-[#1C1917] transition-transform duration-300 group-hover:rotate-45">
          <ArrowUpRight size={20} />
        </span>
      </div>
    </div>
    <div className="flex flex-1 flex-col justify-between gap-4 px-3 pb-3 pt-5">
      <div>
        <h3 className="font-display text-2xl font-black tracking-tight">{p.name}</h3>
        <p className="mt-1 font-mono text-xs uppercase tracking-[0.18em] text-[#57534E]">{p.kind}</p>
      </div>
      <div className="flex flex-wrap gap-2">
        {p.tags.map((t) => <span key={t} className="rounded-full border border-[#CFC7B5] bg-[#FDFBF7] px-3 py-1 font-mono text-[11px] uppercase tracking-[0.15em] text-[#1C1917]">{t}</span>)}
      </div>
    </div>
  </button>
);

export const Products = () => {
  const [open, setOpen] = useState(null);
  return (
    <section id="built" className="bg-[#EAE5D9] px-5 py-24 sm:px-8 lg:py-32" data-testid="products-section">
      <div className="mx-auto max-w-7xl">
        <SectionLabel
          code="SEC_03 / THINGS I BUILT"
          title={<>Ventures &<br />products shipped.</>}
          kicker="Commercial B2B SaaS, workflow automation, econometric choice simulations, and native mobile apps. Tap to inspect."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((p, i) => (
            <Reveal key={p.no} delay={(i % 3) * 0.06} className={i === 0 ? "md:col-span-2" : ""}>
              <Card p={p} big={i === 0} onOpen={() => setOpen(p)} />
            </Reveal>
          ))}
        </div>
      </div>
      <ProductDialog product={open} onClose={() => setOpen(null)} />
    </section>
  );
};
