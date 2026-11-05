import { useRef, useState } from "react";
import { motion, useMotionTemplate, useMotionValue, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { X } from "lucide-react";
import { JOURNEY } from "@/data/content";
import { useIsMobile } from "@/lib/useIsMobile";
import { OBJECTS } from "./JourneyObjects";

const N = JOURNEY.length;
const A = 0.025;

const JourneyObject = ({ p, i, kind }) => {
  const s = i / N, e = (i + 1) / N;
  const r = [s - A, s + A, e - A, e + A];
  const first = i === 0, last = i === N - 1;
  const opacity = useTransform(p, r, [first ? 1 : 0, 1, 1, last ? 1 : 0]);
  const scale = useTransform(p, r, [first ? 1 : 0.6, 1, 1, last ? 1 : 0.6]);
  const rotateY = useTransform(p, r, [first ? 0 : -50, 0, 0, last ? 0 : 50]);
  const blur = useTransform(p, r, [first ? 0 : 14, 0, 0, last ? 0 : 14]);
  const filter = useMotionTemplate`blur(${blur}px)`;
  const lp = useTransform(p, [s, e], [0, 1]);
  const C = OBJECTS[kind];
  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center"
      style={{ opacity, scale, rotateY, filter, transformPerspective: 1200 }}
      data-testid={`journey-object-${kind}`}
    >
      <C lp={lp} />
    </motion.div>
  );
};

const JourneyText = ({ p, i, step, mobile }) => {
  const s = i / N, e = (i + 1) / N;
  const r = [s - A, s + A, e - A, e + A];
  const first = i === 0, last = i === N - 1;
  const y = useTransform(p, r, [first ? "0vh" : "12vh", "0vh", "0vh", last ? "0vh" : "-8vh"]);
  const opacity = useTransform(p, r, [first ? 1 : 0, 1, 1, last ? 1 : 0]);
  const blur = useTransform(p, r, [first ? 0 : 12, 0, 0, last ? 0 : 12]);
  const filter = useMotionTemplate`blur(${blur}px)`;
  const head = (
    <>
      <p className="font-arcade text-xs text-[#FF7A2E]">{step.no}</p>
      <h3 className="mt-3 font-display text-4xl font-black leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl">
        {step.title}
      </h3>
    </>
  );
  const line = <p className="text-base leading-relaxed text-[#D6D3D1] sm:text-lg">{step.line}</p>;
  if (mobile) {
    return (
      <>
        <div className="pointer-events-none absolute inset-x-5 top-24">
          <motion.div style={{ y, opacity, filter }} data-testid={`journey-step-${step.no}`}>
            {head}
          </motion.div>
        </div>
        <div className="pointer-events-none absolute inset-x-5 bottom-24">
          <motion.div style={{ opacity }}>{line}</motion.div>
        </div>
      </>
    );
  }
  return (
    <div className="pointer-events-none absolute left-[6vw] top-1/2 max-w-[32vw] -translate-y-1/2">
      <motion.div style={{ y, opacity, filter }} data-testid={`journey-step-${step.no}`}>
        {head}
        <div className="mt-5">{line}</div>
      </motion.div>
    </div>
  );
};

export const Journey = ({ onClose }) => {
  const ref = useRef(null);
  const mobile = useIsMobile();
  const { scrollYProgress: p } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const [idx, setIdx] = useState(0);

  useMotionValueEvent(p, "change", (v) => {
    setIdx(Math.min(N - 1, Math.max(0, Math.floor(v * N))));
  });

  return (
    <div ref={ref} className="relative h-[550vh]" data-testid="journey">
      {/* Sticky Screen: stays pinned in the viewport while user scrolls down 550vh */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <div className={`story-spot absolute inset-0 ${mobile ? "" : "story-spot-right"}`} />

        {/* Sticky Close Button (Always visible and clickable in top-right) */}
        {onClose && (
          <div className="absolute top-6 right-5 sm:right-8 z-30 pointer-events-auto">
            <button
              onClick={onClose}
              data-sound="switch"
              data-testid="story-sticky-close-btn"
              className="flex items-center gap-1.5 rounded-full border border-[#44403C] bg-[#1C1917]/90 px-3.5 py-1.5 font-mono text-[11px] font-bold uppercase tracking-wider text-[#D6D3D1] shadow-lg backdrop-blur-md hover:border-[#FF5A00] hover:text-white transition-all active:scale-95"
            >
              <X size={13} className="text-[#FF5A00]" />
              <span>Close Story</span>
            </button>
          </div>
        )}

        {/* 3D / Animated Retro Object (Cinema, Camera, Tablet, Monitor, Mac, etc.) */}
        <div className={`absolute inset-0 flex items-center justify-center ${mobile ? "" : "pl-[34vw]"}`}>
          <div className="relative h-[360px] w-[400px] scale-[0.72] sm:scale-90 lg:scale-100">
            {JOURNEY.map((s, i) => (
              <JourneyObject key={s.no} p={p} i={i} kind={s.obj} />
            ))}
          </div>
        </div>

        {/* Story Text per Chapter */}
        {JOURNEY.map((s, i) => (
          <JourneyText key={s.no} p={p} i={i} step={s} mobile={mobile} />
        ))}

        {/* Sticky Progress Bar: pinned to bottom right, NEVER scrolls away */}
        <div
          className="absolute bottom-6 right-5 sm:right-8 z-30 flex items-center gap-3 pointer-events-none"
          data-testid="journey-progress"
        >
          <span className="font-arcade text-[10px] text-[#F4F1EA]">
            {String(idx + 1).padStart(2, "0")}/{String(N).padStart(2, "0")}
          </span>
          <span className="h-[2px] w-28 bg-[#2B2824] sm:w-40">
            <motion.span className="block h-full origin-left bg-[#FF5A00]" style={{ scaleX: p }} />
          </span>
        </div>
      </div>
    </div>
  );
};

export const StaticJourney = () => {
  const still = useMotionValue(1);
  return (
    <ol className="mx-auto max-w-5xl space-y-20 px-5 py-20 sm:px-8" data-testid="journey-static">
      {JOURNEY.map((s) => {
        const C = OBJECTS[s.obj];
        return (
          <li key={s.no} className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <p className="font-arcade text-[10px] text-[#FF7A2E]">STEP {s.no}</p>
              <h3 className="mt-3 font-display text-4xl font-black tracking-tight sm:text-5xl">{s.title}</h3>
              <p className="mt-4 text-[#D6D3D1]">{s.line}</p>
            </div>
            <div className="flex justify-center">
              <div className="scale-75 sm:scale-90">
                <C lp={still} />
              </div>
            </div>
          </li>
        );
      })}
    </ol>
  );
};
