import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { PRODUCTS } from "@/data/content";
import { Reveal } from "./Reveal";
import { ProductDialog } from "./ProductDialog";
import { ProductGraphic } from "./ProductGraphics";

const spot = (e) => {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
};

const Card = ({ p, bannerHeight = "h-48", onOpen }) => (
  <button
    onClick={onOpen}
    onMouseMove={spot}
    data-sound="open"
    data-testid={`product-card-${p.no}`}
    className="chassis group relative flex h-full w-full flex-col overflow-hidden rounded-2xl p-3 text-left transition-transform duration-300 hover:-translate-y-1"
  >
    <span className="spot pointer-events-none absolute inset-0 z-10" />

    {/* TV Bezel / Clip Frame */}
    <div className="clip-frame rounded-xl bg-[#1C1917] p-[6px]">
      <div
        className={`clip-screen relative overflow-hidden ${bannerHeight}`}
        style={{ background: p.color }}
      >
        <div className="grille absolute inset-0 opacity-25 mix-blend-multiply" />
        <div className="scanlines absolute inset-0 opacity-20" />

        {/* Custom Retro Vector Graphic */}
        <div className="absolute inset-0 flex items-center justify-center p-3 opacity-90 transition-transform duration-500 group-hover:scale-105">
          <ProductGraphic type={p.graphicType} className="h-full w-full text-white/90" />
        </div>

        {/* Number badge (Top Left) */}
        <span className="absolute left-4 top-3.5 font-vfd text-xl sm:text-2xl text-white/95 drop-shadow-sm">
          No. {p.no}
        </span>

        {/* Category Badge (Top Right) */}
        <span className="absolute right-3.5 top-3.5 rounded-md bg-[#F4F1EA] px-2.5 py-1 font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.14em] text-[#1C1917] shadow-sm">
          {p.categoryBadge}
        </span>

        {/* Operational Status (Bottom Left) */}
        <span className="absolute bottom-3 left-4 rounded-md border border-white/15 bg-black/45 px-2.5 py-1 font-mono text-[10px] sm:text-[11px] text-white/90 backdrop-blur-sm">
          {p.status}
        </span>

        {/* Circular Action Arrow (Bottom Right) */}
        <span className="absolute bottom-3 right-3.5 flex h-9 w-9 items-center justify-center rounded-full bg-[#F4F1EA] text-[#1C1917] shadow-md transition-transform duration-300 group-hover:rotate-45">
          <ArrowUpRight size={17} />
        </span>
      </div>
    </div>

    {/* Card Metadata Body */}
    <div className="flex flex-1 flex-col justify-between gap-3 px-3 pb-2 pt-4">
      <div>
        <div className="flex items-baseline justify-between gap-2">
          <h3 className="font-display text-2xl font-black tracking-tight text-[#1C1917]">
            {p.name}
          </h3>
        </div>
        <p className="mt-1 font-mono text-xs font-semibold text-[#57534E]">
          {p.kind}
        </p>
        <p className="mt-2 text-xs leading-relaxed text-[#44403C] line-clamp-2">
          {p.problem}
        </p>
      </div>

      <div className="flex flex-wrap gap-1.5 pt-1">
        {p.tags.map((t) => (
          <span
            key={t}
            className="rounded-md border border-[#D5CFBF] bg-[#FDFBF7] px-2 py-0.5 font-mono text-[10px] sm:text-[11px] text-[#1C1917]"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  </button>
);

export const Products = () => {
  const [open, setOpen] = useState(null);

  // Scalex and Dezine (Top tier)
  const topTier = PRODUCTS.slice(0, 2);
  // UBS Engine, LOCUS, FinTrack (Bottom tier)
  const bottomTier = PRODUCTS.slice(2);

  return (
    <section id="built" className="bg-[#EAE5D9] px-4 py-14 sm:px-8 lg:py-24" data-testid="products-section">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 sm:mb-12">
          <h2 className="font-display text-3xl font-black tracking-tight text-[#1C1917] sm:text-5xl lg:text-6xl">
            Things I Built
          </h2>
          <p className="mt-3 max-w-2xl text-base text-[#57534E] sm:text-lg">
            Commercial startups, creative operations, econometric choice simulations, and local-first software.
          </p>
        </div>

        {/* TOP TIER: Scalex (Startup) & Dezine (Agency) with Equal Heights */}
        <div className="mb-6 grid gap-6 md:grid-cols-2">
          {topTier.map((p, i) => (
            <Reveal key={p.no} delay={i * 0.08}>
              <Card p={p} bannerHeight="h-40 sm:h-56" onOpen={() => setOpen(p)} />
            </Reveal>
          ))}
        </div>

        {/* BOTTOM TIER: Technical Side Projects (UBS Engine, LOCUS, FinTrack) */}
        <div className="grid gap-6 md:grid-cols-3">
          {bottomTier.map((p, i) => (
            <Reveal key={p.no} delay={0.16 + i * 0.08}>
              <Card p={p} bannerHeight="h-32 sm:h-44" onOpen={() => setOpen(p)} />
            </Reveal>
          ))}
        </div>
      </div>

      <ProductDialog product={open} onClose={() => setOpen(null)} />
    </section>
  );
};
