import { LEADERSHIP } from "@/data/content";
import { Reveal } from "./Reveal";

const spot = (e) => {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
};

export const Leadership = () => {
  return (
    <section id="leadership" className="px-5 py-10 sm:px-8 lg:py-14" data-testid="leadership-section">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6">
          <div className="flex items-center gap-3">
            <span className="font-arcade text-xs text-[#FF5A00]">04</span>
            <span className="h-px w-8 bg-[#D5CFBF]" />
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#57534E]">
              Governance & Teams
            </span>
          </div>
          <h2 className="mt-2 font-display text-3xl font-black tracking-tight text-[#1C1917] sm:text-4xl">
            Leadership
          </h2>
          <p className="mt-1.5 max-w-2xl text-sm text-[#57534E]">
            Directing cross-functional design contingents, product ecosystems, and student engineering initiatives.
          </p>
        </div>

        {/* Snug, content-hugging 3-column grid */}
        <div className="grid gap-4 md:grid-cols-3">
          {LEADERSHIP.map((item, i) => (
            <Reveal key={item.role} delay={i * 0.06}>
              <div
                onMouseMove={spot}
                data-testid={`leadership-card-${i + 1}`}
                className="chassis group relative overflow-hidden rounded-xl p-5 transition-transform duration-200 hover:-translate-y-0.5"
              >
                <span className="spot pointer-events-none absolute inset-0 z-10" />
                <h3 className="font-display text-lg sm:text-xl font-black tracking-tight text-[#1C1917] leading-snug">
                  {item.role}
                </h3>
                <p className="mt-1.5 font-mono text-xs text-[#57534E]">
                  {item.org}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
