import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { PRODUCTS } from "@/data/content";
import { Reveal } from "./Reveal";
import { ProductDialog } from "./ProductDialog";

const spot = (e) => {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
};

const Card = ({ p, big, onOpen }) => (
  <button onClick={onOpen} onMouseMove={spot} data-sound="open" data-testid={`product-card-${p.no}`}
    className="chassis group relative flex h-full w-full flex-col overflow-hidden rounded-2xl p-3 text-left transition-transform duration-300 hover:-translate-y-1">
    <span className="spot pointer-events-none absolute inset-0 z-10" />
    <div className="clip-frame rounded-xl bg-[#1C1917] p-[6px]">
      <div className={`clip-screen relative overflow-hidden ${big ? "h-60 sm:h-72" : "h-44"}`} style={{ background: p.color }}>
        <div className="grille absolute inset-0 opacity-30 mix-blend-multiply" />
        <div className="scanlines absolute inset-0 opacity-20" />
        <span className="absolute left-5 top-4 font-vfd text-2xl text-white/90">No. {p.no}</span>
        <span className="absolute right-4 top-4 rounded-md bg-[#F4F1EA] px-3 py-1 font-mono text-[11px] uppercase tracking-[0.15em] text-[#1C1917] font-semibold">{p.status}</span>
        <span className={`absolute bottom-3 left-5 font-wide font-black leading-none text-white/95 ${big ? "text-6xl sm:text-7xl" : "text-4xl sm:text-5xl"}`}>{p.no}</span>
        <span className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#F4F1EA] text-[#1C1917] transition-transform duration-300 group-hover:rotate-45">
          <ArrowUpRight size={18} />
        </span>
      </div>
    </div>
    <div className="flex flex-1 flex-col justify-between gap-4 px-3 pb-3 pt-5">
      <div>
        <h3 className="font-display text-2xl font-black tracking-tight text-[#1C1917]">{p.name}</h3>
        <p className="mt-1 font-mono text-xs text-[#57534E]">{p.kind}</p>
      </div>
      <div className="flex flex-wrap gap-1.5">
        {p.tags.map((t) => (
          <span key={t} className="rounded-md border border-[#D5CFBF] bg-[#FDFBF7] px-2.5 py-0.5 font-mono text-[11px] text-[#1C1917]">
            {t}
          </span>
        ))}
      </div>
    </div>
  </button>
);

export const Products = () => {
  const [open, setOpen] = useState(null);
  return (
    <section id="built" className="bg-[#EAE5D9] px-5 py-20 sm:px-8 lg:py-28" data-testid="products-section">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#57534E]">Software & Ventures</p>
          <h2 className="mt-2 font-display text-4xl font-black tracking-tight text-[#1C1917] sm:text-5xl lg:text-6xl">
            Things I Built
          </h2>
          <p className="mt-3 max-w-2xl text-base text-[#57534E] sm:text-lg">
            Commercial B2B SaaS, workflow automation, econometric choice simulations, and native mobile apps.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
