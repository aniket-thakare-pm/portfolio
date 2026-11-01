import { MARQUEE_TOOLS, MARQUEE_WORDS } from "@/data/content";

const Row = ({ items, className, reverse, sep }) => (
  <div className="overflow-hidden">
    <div className={`marquee-track flex ${reverse ? "reverse" : ""}`}>
      {[...items, ...items].map((w, i) => (
        <span key={i} className={`flex items-center whitespace-nowrap ${className}`}>
          {w}<span className="mx-6 sm:mx-10">{sep}</span>
        </span>
      ))}
    </div>
  </div>
);

export const Marquee = () => (
  <section className="border-y border-[#1C1917] bg-[#1C1917] py-6 text-[#F4F1EA]" data-testid="marquee-section" aria-label="Words and tools">
    <Row items={MARQUEE_WORDS} sep={<span className="inline-block h-3 w-3 rounded-full bg-[#FF5A00]" />}
      className="font-display text-4xl font-black uppercase tracking-tight sm:text-6xl" />
    <div className="mt-4">
      <Row items={MARQUEE_TOOLS} reverse sep="/" className="font-mono text-sm uppercase tracking-[0.25em] text-[#D6D3D1]" />
    </div>
  </section>
);
