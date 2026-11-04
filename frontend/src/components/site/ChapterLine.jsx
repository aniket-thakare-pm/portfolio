import { motion, useMotionTemplate, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export const CARD_WINDOWS = [
  [0.10, 0.36],
  [0.36, 0.62],
  [0.62, 0.88],
];

export const ChapterLine = ({ p, i, beat, mobile, onOpenExperience }) => {
  const [s, e] = CARD_WINDOWS[i];
  const mid = (s + e) / 2;
  const isLeft = i % 2 === 0;
  const d = mobile ? "12vh" : "24vh";

  // Continuous flowing scroll without artificial pause
  const y = useTransform(p, [s, mid, e], [d, "0vh", `-${d}`]);
  const opacity = useTransform(p, [s, s + 0.05, e - 0.05, e], [0, 1, 1, 0]);
  const blur = useTransform(p, [s, s + 0.06, e - 0.06, e], [12, 0, 0, 12]);
  const filter = useMotionTemplate`blur(${blur}px)`;
  const pointerEvents = useTransform(opacity, (v) => (v > 0.4 ? "auto" : "none"));

  const pos = mobile
    ? "top-16 inset-x-4 text-left"
    : isLeft
    ? "left-[5vw] top-1/2 -translate-y-1/2 text-left max-w-[36vw]"
    : "right-[5vw] top-1/2 -translate-y-1/2 text-left max-w-[36vw]";

  const isCaseStudy = beat.target === "#cases";

  return (
    <div className={`absolute ${pos} z-10 pointer-events-none`}>
      <motion.div
        style={{ y, opacity, filter, pointerEvents }}
        data-testid={`chapter-beat-${i}`}
        className="rounded-2xl border border-[#D5CFBF] bg-[#FAF8F5]/95 p-5 shadow-[0_16px_36px_rgba(28,25,23,0.09)] backdrop-blur-md sm:p-6 text-[#1C1917]"
      >
        {/* Top Header Row: Stage, Role, Category */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#D5CFBF]/80 pb-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-black text-[#FF5A00]">
              STAGE {beat.no}
            </span>
            <span className="text-[#A8A29E] font-mono text-xs">/ 03</span>
            <span className="rounded-full bg-[#EAE5D9] px-3 py-1 font-mono text-xs font-semibold uppercase tracking-wider text-[#44403C]">
              {beat.role}
            </span>
          </div>

          {/* High contrast dark retro category badge - prominent */}
          <span className="rounded-full bg-[#1C1917] px-3.5 py-1 font-mono text-xs font-bold uppercase tracking-wider text-[#86efac] shadow-sm">
            {beat.tag}
          </span>
        </div>

        {/* Company Title - Bold, Large, Authoritative */}
        <div className="mt-3.5">
          <h3 className="font-display text-2xl sm:text-3xl lg:text-[2rem] font-black tracking-tight text-[#1C1917] leading-none">
            {beat.company}
          </h3>
        </div>

        {/* Block 1: The Core Metric */}
        <div className="mt-3.5 rounded-xl border border-[#D5CFBF] bg-[#F2EFE8] p-3.5 sm:p-4">
          <div className="font-display text-3xl font-black tracking-tight text-[#1C1917] sm:text-4xl leading-none">
            {beat.metric}
          </div>
          <div className="mt-1.5 font-mono text-xs font-bold uppercase tracking-wider text-[#FF5A00]">
            {beat.metricLabel}
          </div>
          <p className="mt-1.5 text-xs text-[#57534E] leading-relaxed sm:text-sm">
            {beat.metricContext}
          </p>
        </div>

        {/* Block 2: Shipped System / Output */}
        <div className="mt-3 rounded-xl border border-[#D5CFBF] bg-[#FAF8F5] p-3.5 sm:p-4">
          <div className="font-display text-sm font-bold text-[#1C1917] sm:text-base">
            {beat.shipTitle}
          </div>
          <p className="mt-1 text-xs text-[#57534E] leading-relaxed sm:text-sm">
            {beat.shipDetail}
          </p>
        </div>

        {/* CTA Footer with Prominent Dark Pill Button */}
        <div className="mt-4 pt-3 border-t border-[#D5CFBF]/80 flex items-center justify-between">
          {isCaseStudy ? (
            <a
              href="#cases"
              data-sound="tick"
              className="inline-flex items-center gap-2 rounded-xl bg-[#1C1917] px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider text-[#FAF8F5] shadow-md transition-all hover:bg-[#2C2825] hover:text-[#FF5A00] hover:shadow-lg active:scale-95"
            >
              See in detail <ArrowUpRight size={14} className="text-[#FF5A00]" />
            </a>
          ) : (
            <button
              type="button"
              onClick={() => onOpenExperience?.(beat, isLeft ? "right" : "left")}
              data-sound="key"
              className="inline-flex items-center gap-2 rounded-xl bg-[#1C1917] px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider text-[#FAF8F5] shadow-md transition-all hover:bg-[#2C2825] hover:text-[#FF5A00] hover:shadow-lg active:scale-95"
            >
              See in detail <ArrowUpRight size={14} className="text-[#FF5A00]" />
            </button>
          )}
          <span className="font-mono text-xs uppercase tracking-widest text-[#78716C] font-semibold">
            {beat.company}
          </span>
        </div>
      </motion.div>
    </div>
  );
};
