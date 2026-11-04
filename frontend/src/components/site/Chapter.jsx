import { useRef, useState } from "react";
import { motion, useMotionValueEvent, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { HERO_BEATS } from "@/data/content";
import { Mac3D } from "@/components/mac/Mac3D";
import { HeroIntro } from "./HeroIntro";
import { ChapterLine, START, STEP } from "./ChapterLine";
import { useIsMobile } from "@/lib/useIsMobile";

const MacScale = ({ children }) => (
  <div className="scale-[0.62] sm:scale-90 lg:scale-[1.05] xl:scale-[1.15]">{children}</div>
);

const StaticChapter = () => (
  <section id="top" className="px-5 pb-20 pt-28 sm:px-8" data-testid="chapter-static">
    <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
      <HeroIntro />
      <div className="flex justify-center">
        <MacScale>
          <Mac3D rotateY={-22} product={HERO_BEATS[0]} />
        </MacScale>
      </div>
    </div>
    <div className="mx-auto mt-16 max-w-7xl">
      <p className="mb-4 font-mono text-xs uppercase tracking-widest text-[#78716C]">Proven Impact</p>
      <div className="grid gap-4 sm:grid-cols-3">
        {HERO_BEATS.map((beat) => (
          <a
            key={beat.company}
            href={beat.target}
            className="chassis block rounded-2xl p-5 transition-transform hover:-translate-y-1"
          >
            <div className="flex items-center justify-between text-xs font-mono text-[#78716C]">
              <span className="font-bold text-[#1C1917]">{beat.company}</span>
              <span className="text-[#FF5A00] font-semibold">{beat.tag}</span>
            </div>
            <div className="mt-2 font-display text-2xl font-black text-[#1C1917]">{beat.metric}</div>
            <div className="mt-1 font-mono text-[11px] uppercase text-[#78716C]">{beat.metricLabel}</div>
            <p className="mt-2 text-xs text-[#44403C]">{beat.highlight}</p>
          </a>
        ))}
      </div>
    </div>
  </section>
);

const PinnedChapter = () => {
  const ref = useRef(null);
  const mobile = useIsMobile();
  const { scrollYProgress: p } = useScroll({ target: ref, offset: ["start start", "end end"] });

  const raw = useTransform(
    p,
    [0, 0.1, 0.35, 0.6, 0.85, 1],
    [-22, -28, -50, -315, -360, -360]
  );
  const rotateY = useSpring(raw, { stiffness: 70, damping: 20, mass: 0.6 });
  const hl = useTransform(rotateY, (v) => ((((-v) % 180) + 180) % 180) / 180 * 160 - 30);

  const x = useTransform(p, [0, 0.1], mobile ? ["0vw", "0vw"] : ["22vw", "0vw"]);
  const y = useTransform(
    p,
    [0, 0.1, 0.82, 0.88],
    mobile ? ["24vh", "0vh", "0vh", "4vh"] : ["3vh", "0vh", "0vh", "0vh"]
  );
  const scale = useTransform(p, [0.82, 0.88], [1, 0.92]);
  const hintO = useTransform(p, [0.84, 0.88], [0, 1]);

  const [gameReady, setGameReady] = useState(false);
  const introO = useTransform(p, [0, 0.07], [1, 0]);
  const introY = useTransform(p, [0, 0.07], [0, -60]);
  const introPE = useTransform(introO, (v) => (v < 0.2 ? "none" : "auto"));

  const bar = useTransform(p, [START, START + STEP * 3], [0, 1]);
  const [idx, setIdx] = useState(0);

  useMotionValueEvent(p, "change", (v) => {
    const rawIdx = Math.floor((v - START) / STEP);
    setIdx(Math.min(2, Math.max(0, rawIdx)));
    setGameReady(v >= 0.85);
  });

  return (
    <section ref={ref} id="top" className="relative h-[380vh]" data-testid="chapter-section">
      <div className="sticky top-0 h-screen overflow-hidden">
        {HERO_BEATS.map((beat, i) => (
          <ChapterLine key={beat.company} p={p} i={i} beat={beat} mobile={mobile} />
        ))}

        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div style={{ x, y, scale }}>
            <MacScale>
              <Mac3D
                rotateY={rotateY}
                hl={hl}
                product={HERO_BEATS[idx]}
                gameReady={gameReady}
              />
            </MacScale>
          </motion.div>
        </div>

        <div
          className={`pointer-events-none absolute ${
            mobile
              ? "inset-x-5 top-24"
              : "left-[5vw] top-1/2 max-w-[44vw] -translate-y-1/2"
          }`}
        >
          <motion.div style={{ opacity: introO, y: introY, pointerEvents: introPE }}>
            <HeroIntro />
          </motion.div>
        </div>

        <div
          className={`pointer-events-none absolute ${
            mobile
              ? "inset-x-5 top-24"
              : "left-[5vw] top-1/2 max-w-[28vw] -translate-y-1/2"
          }`}
        >
          <motion.div style={{ opacity: hintO }} data-testid="game-hint">
            <p className="font-arcade text-[10px] uppercase leading-relaxed text-[#B84300]">Bonus level</p>
            <p className="mt-3 font-display text-3xl font-black leading-[0.95] tracking-tight sm:text-5xl">
              Play{" "}
              <span className="italic text-[#FF5A00]" style={{ fontFamily: "Fraunces" }}>
                Ship it.
              </span>
            </p>
            <p className="mt-3 max-w-xs text-sm text-[#44403C] sm:text-base">
              Press SHP, Space or tap the screen to jump over bugs. Keep scrolling to skip.
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-6 left-5 flex items-center gap-3 sm:left-8 z-20" data-testid="chapter-progress">
          <span className="font-arcade text-[10px] text-[#1C1917]">
            {String(idx + 1).padStart(2, "0")}/03
          </span>
          <span className="h-2 w-28 overflow-hidden rounded-full bg-[#D5CFBF] sm:w-40">
            <motion.span
              className="block h-full origin-left rounded-full bg-[#FF5A00]"
              style={{ scaleX: bar }}
            />
          </span>
        </div>
      </div>
    </section>
  );
};

export const Chapter = () => (useReducedMotion() ? <StaticChapter /> : <PinnedChapter />);
