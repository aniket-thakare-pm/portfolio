import { SKILL_PILLARS } from "@/data/content";
import { Reveal } from "./Reveal";
import { Wrench } from "lucide-react";

export const Skills = () => (
  <section id="skills" className="px-5 py-16 sm:px-8 lg:py-20" data-testid="skills-section">
    <div className="mx-auto max-w-7xl">
      {/* Header */}
      <Reveal>
        <div className="mb-8 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#B84300]">
              <Wrench size={13} /> PM & Builder Toolkit
            </div>
            <h2 className="mt-2 font-display text-3xl font-black tracking-tight text-[#1C1917] sm:text-4xl lg:text-5xl">
              Methods & Technical Stack
            </h2>
          </div>
          <p className="max-w-md font-mono text-xs text-[#57534E] sm:text-right">
            Verified across 80K+ calls, 2 national gold medals & 5 shipped products.
          </p>
        </div>
      </Reveal>

      {/* Single 1-Row Hardware Chassis */}
      <Reveal delay={0.1}>
        <div
          data-testid="skills-toolkit-strip"
          className="rounded-2xl border border-[#D5CFBF] bg-[#FAF8F5] p-5 shadow-[0_4px_16px_rgba(28,25,23,0.04)] sm:p-6"
        >
          <div className="grid grid-cols-1 divide-y divide-[#D5CFBF]/80 md:grid-cols-4 md:divide-y-0 md:divide-x">
            {SKILL_PILLARS.map((pillar, i) => (
              <div
                key={pillar.category}
                className="py-4 first:pt-0 last:pb-0 md:py-1 md:px-5 md:first:pl-1 md:last:pr-1"
              >
                {/* Column Meta */}
                <div className="flex items-center justify-between border-b border-[#D5CFBF]/60 pb-2.5">
                  <span className="font-display text-sm font-black uppercase tracking-tight text-[#1C1917]">
                    {pillar.category}
                  </span>
                  <span className="font-mono text-xs font-bold text-[#FF5A00]">
                    0{i + 1}
                  </span>
                </div>

                {/* 4 Curated High-Signal Tools */}
                <ul className="mt-3 space-y-2">
                  {pillar.skills.map((skill) => (
                    <li key={skill} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF5A00]" />
                      <span className="font-mono text-xs font-medium text-[#292524]">
                        {skill}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);
