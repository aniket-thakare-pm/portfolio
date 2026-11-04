import { motion, useMotionTemplate, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export const CARD_WINDOWS = [
  [0.12, 0.38],
  [0.42, 0.68],
  [0.72, 0.92],
];

export const ChapterLine = ({ p, i, beat, mobile }) => {
  const [s, e] = CARD_WINDOWS[i];
  const isLeft = i % 2 === 0;
  const d = mobile ? "6vh" : "12vh";

  const y = useTransform(p, [s, s + 0.06, e - 0.06, e], [d, "0vh", "0vh", `-${d}`]);
  const opacity = useTransform(p, [s, s + 0.05, e - 0.05, e], [0, 1, 1, 0]);
  const blur = useTransform(p, [s, s + 0.05, e - 0.05, e], [10, 0, 0, 10]);
  const filter = useMotionTemplate`blur(${blur}px)`;
  const pointerEvents = useTransform(opacity, (v) => (v > 0.4 ? "auto" : "none"));

  const pos = mobile
    ? "top-20 inset-x-4 text-left"
    : isLeft
    ? "left-[5vw] top-1/2 -translate-y-1/2 text-left max-w-[36vw]"
    : "right-[5vw] top-1/2 -translate-y-1/2 text-left max-w-[36vw]";

  return (
    <div className={`absolute ${pos} z-10`}>
      <motion.div
        style={{ y, opacity, filter, pointerEvents }}
        data-testid={`chapter-beat-${i}`}
        className="rounded-2xl border border-[#2D2A26] bg-[#141210]/95 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-6 text-[#FAF8F5]"
      >
        {/* Top Header Badge Row */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-mono text-xs font-bold text-[#FF5A00]">
            {beat.no} / 03
          </span>
          <span className="text-[#57534E]">·</span>
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#FAF8F5]">
            {beat.company}
          </span>
          <span className="rounded-full bg-[#262320] px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-[#A8A29E]">
            {beat.role}
          </span>
          <span className="rounded-full bg-[#FF5A00]/15 border border-[#FF5A00]/30 px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-[#FF5A00]">
            {beat.tag}
          </span>
        </div>

        {/* Block 1: The Core Metric */}
        <div className="mt-4 rounded-xl bg-[#1C1A17] p-3.5 border border-[#2B2722]">
          <div className="font-display text-3xl font-black tracking-tight text-white sm:text-4xl leading-none">
            {beat.metric}
          </div>
          <div className="mt-1.5 font-mono text-xs font-bold uppercase tracking-wider text-[#FF5A00]">
            {beat.metricLabel}
          </div>
          <p className="mt-1.5 text-xs text-[#A8A29E] leading-relaxed">
            {beat.metricContext}
          </p>
        </div>

        {/* Block 2: Shipped System / Output (Clear Separate Hierarchy) */}
        <div className="mt-3 rounded-xl bg-[#181614] p-3.5 border border-[#262320]">
          <div className="font-display text-sm font-bold text-[#FAF8F5]">
            {beat.shipTitle}
          </div>
          <p className="mt-1 text-xs text-[#D6D3D1] leading-relaxed">
            {beat.shipDetail}
          </p>
        </div>

        {/* CTA Footer */}
        <div className="mt-4 pt-3 border-t border-[#262320] flex items-center justify-between">
          <a
            href={beat.target}
            data-sound="tick"
            className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider text-[#FF5A00] transition-colors hover:text-[#FFA066]"
          >
            See in detail <ArrowUpRight size={14} />
          </a>
          <span className="font-mono text-[10px] uppercase tracking-widest text-[#78716C]">
            {beat.company}
          </span>
        </div>
      </motion.div>
    </div>
  );
};
