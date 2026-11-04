import { LEADERSHIP } from "@/data/content";
import { Reveal } from "./Reveal";

const spot = (e) => {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
};

export const Leadership = () => {
  return (
    <section id="leadership" className="px-5 py-16 sm:px-8 lg:py-20" data-testid="leadership-section">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <div className="flex items-center gap-3">
            <span className="font-arcade text-xs text-[#FF5A00]">04</span>
            <span className="h-px w-8 bg-[#D5CFBF]" />
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#57534E]">
              Governance & Teams
            </span>
          </div>
          <h2 className="mt-3 font-display text-4xl font-black tracking-tight text-[#1C1917] sm:text-5xl">
            Leadership
          </h2>
          <p className="mt-2 max-w-2xl text-base text-[#57534E]">
            Directing cross-functional design contingents, product ecosystems, and student engineering initiatives.
          </p>
        </div>

        {/* 3-Column Minimalist Rack Console */}
        <div className="grid gap-5 md:grid-cols-3">
          {LEADERSHIP.map((item, i) => (
            <Reveal key={item.no} delay={i * 0.08}>
              <div
                onMouseMove={spot}
                data-testid={`leadership-card-${item.no}`}
                className="chassis group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1"
              >
                <span className="spot pointer-events-none absolute inset-0 z-10" />

                <div>
                  {/* Top Bar: Number + Monospace Badge */}
                  <div className="flex items-center justify-between pb-6 border-b border-[#D5CFBF]/60">
                    <span className="font-vfd text-xl text-[#FF5A00]">
                      No. {item.no}
                    </span>
                    <span className="rounded-md border border-[#D5CFBF] bg-[#FDFBF7] px-2.5 py-1 font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.14em] text-[#1C1917] shadow-sm">
                      {item.badge}
                    </span>
                  </div>

                  {/* Main Role Title */}
                  <h3 className="mt-6 font-display text-2xl font-black tracking-tight text-[#1C1917] sm:text-2xl leading-tight">
                    {item.role}
                  </h3>

                  {/* Organization */}
                  <p className="mt-2 font-mono text-xs text-[#57534E] leading-relaxed">
                    {item.org}
                  </p>
                </div>

                {/* Bottom Tenure / Hardware Accent */}
                <div className="mt-8 flex items-center justify-between border-t border-[#D5CFBF]/60 pt-4 font-mono text-xs text-[#78716C]">
                  <span className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#FF5A00] animate-pulse" />
                    <span>TENURE</span>
                  </span>
                  <span className="font-semibold text-[#1C1917]">{item.tenure}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
