import { motion, useMotionTemplate, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export const START = 0.1;
export const STEP = 0.25;

export const ChapterLine = ({ p, i, beat, mobile }) => {
  const s = START + i * STEP;
  const e = s + STEP;
  const d = mobile ? "6vh" : "16vh";

  const y = useTransform(p, [s, s + STEP * 0.35, s + STEP * 0.65, e], [d, "0vh", "0vh", `-${d}`]);
  const opacity = useTransform(p, [s, s + 0.05, e - 0.05, e], [0, 1, 1, 0]);
  const blur = useTransform(p, [s, s + 0.06, e - 0.06, e], [10, 0, 0, 10]);
  const filter = useMotionTemplate`blur(${blur}px)`;
  const pointerEvents = useTransform(opacity, (v) => (v > 0.4 ? "auto" : "none"));

  const pos = mobile
    ? "top-20 inset-x-4 text-left"
    : "left-[6vw] top-1/2 -translate-y-1/2 text-left max-w-[34vw]";

  return (
    <div className={`absolute ${pos} z-10`}>
      <motion.div
        style={{ y, opacity, filter, pointerEvents }}
        data-testid={`chapter-beat-${i}`}
        className="rounded-2xl border border-[#D5CFBF] bg-[#FAF8F5]/95 p-5 shadow-[0_12px_32px_rgba(28,25,23,0.07)] backdrop-blur-md sm:p-7"
      >
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-mono text-xs font-bold text-[#FF5A00]">
            {beat.no} / 03
          </span>
          <span className="text-[#A8A29E]">·</span>
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#1C1917]">
            {beat.company}
          </span>
          <span className="rounded-full bg-[#EAE5D9] px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-[#57534E]">
            {beat.role}
          </span>
          <span className="rounded-full bg-[#FF5A00]/10 px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-[#FF5A00]">
            {beat.tag}
          </span>
        </div>

        <div className="mt-3">
          <div className="font-display text-3xl font-black tracking-tight text-[#1C1917] sm:text-4xl lg:text-[2.75rem] leading-[1.05]">
            {beat.metric}
          </div>
          <div className="mt-1 font-mono text-xs font-semibold uppercase tracking-wider text-[#78716C]">
            {beat.metricLabel}
          </div>
        </div>

        <p className="mt-3 text-xs leading-relaxed text-[#44403C] sm:text-sm">
          {beat.highlight}
        </p>

        <div className="mt-4 pt-3 border-t border-[#EAE5D9]/80">
          <a
            href={beat.target}
            data-sound="tick"
            className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider text-[#FF5A00] transition-colors hover:text-[#C83E00]"
          >
            Jump to {beat.company} proof <ArrowUpRight size={14} />
          </a>
        </div>
      </motion.div>
    </div>
  );
};
