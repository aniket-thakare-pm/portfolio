import { useRef, useState } from "react";
import { motion, useMotionValueEvent, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { HERO_BEATS } from "@/data/content";
import { Mac3D } from "@/components/mac/Mac3D";
import { HeroIntro } from "./HeroIntro";
import { ChapterLine } from "./ChapterLine";
import { useIsMobile } from "@/lib/useIsMobile";

const MacScale = ({ children }) => (
  <div className="scale-[0.62] sm:scale-90 lg:scale-[1.05] xl:scale-[1.15]">{children}</div>
);

const HERO_PRODUCT = {
  screenName: "ANIKET THAKARE",
  company: "Aniket Thakare",
  name: "Aniket Thakare",
  pixel: ["..####..", ".######.", "###..###", "###..###", ".######.", "..####..", "..####..", ".######."],
};

const StaticChapter = () => (
  <section id="top" className="px-5 pb-20 pt-28 sm:px-8" data-testid="chapter-static">
    <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
      <HeroIntro />
      <div className="flex justify-center">
        <MacScale>
          <Mac3D rotateY={-18} product={HERO_PRODUCT} />
        </MacScale>
      </div>
    </div>
    <div className="mx-auto mt-16 max-w-7xl">
      <p className="mb-4 font-mono text-xs uppercase tracking-widest text-[#78716C]">Proven Impact</p>
      <div className="grid gap-4 sm:grid-cols-3">
        {HERO_BEATS.map((beat) => (
          <div
            key={beat.company}
            className="rounded-2xl border border-[#2D2A26] bg-[#141210] p-5 shadow-lg text-[#FAF8F5]"
          >
            <div className="flex items-center justify-between text-xs font-mono text-[#A8A29E]">
              <span className="font-bold text-white">{beat.company}</span>
              <span className="text-[#FF5A00] font-semibold">{beat.tag}</span>
            </div>
            <div className="mt-3 font-display text-2xl font-black text-white">{beat.metric}</div>
            <div className="mt-1 font-mono text-[11px] uppercase text-[#FF5A00]">{beat.metricLabel}</div>
            <p className="mt-2 text-xs text-[#A8A29E]">{beat.metricContext}</p>
            <div className="mt-3 pt-2 border-t border-[#262320]">
              <span className="text-xs font-bold text-white">{beat.shipTitle}</span>
              <p className="mt-0.5 text-xs text-[#D6D3D1]">{beat.shipDetail}</p>
            </div>
            <div className="mt-4">
              <a
                href={beat.target}
                className="font-mono text-xs font-bold text-[#FF5A00] hover:text-[#FFA066]"
              >
                See in detail →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const PinnedChapter = () => {
  const ref = useRef(null);
  const mobile = useIsMobile();
  const { scrollYProgress: p } = useScroll({ target: ref, offset: ["start start", "end end"] });

  // Monitor rotation: always facing front/viewer, angling toward active card
  // Hero: -18deg -> Limechat (left card): -24deg -> Gen AI Labs (right card): +24deg -> Meesho (left card): -24deg -> Flat front: 0deg
  const raw = useTransform(
    p,
    [0, 0.10, 0.36, 0.44, 0.66, 0.74, 0.92, 1.0],
    [-18, -24, -24, 24, 24, -24, -24, 0]
  );
  const rotateY = useSpring(raw, { stiffness: 80, damping: 22, mass: 0.6 });
  const hl = useTransform(rotateY, (v) => ((((-v) % 180) + 180) % 180) / 180 * 160 - 30);

  // Monitor position: moves opposite to the card
  // Hero: right side (20vw)
  // Beat 0 (Limechat on left): Mac stays on right (18vw)
  // Beat 1 (Gen AI Labs on right): Mac moves across to left (-18vw)
  // Beat 2 (Meesho DICE on left): Mac moves back to right (18vw)
  // End: centers (0vw)
  const x = useTransform(
    p,
    [0, 0.10, 0.36, 0.44, 0.66, 0.74, 0.92, 1.0],
    mobile
      ? ["0vw", "0vw", "0vw", "0vw", "0vw", "0vw", "0vw", "0vw"]
      : ["20vw", "18vw", "18vw", "-18vw", "-18vw", "18vw", "18vw", "0vw"]
  );

  const y = useTransform(
    p,
    [0, 0.10, 0.88, 0.94],
    mobile ? ["24vh", "0vh", "0vh", "4vh"] : ["3vh", "0vh", "0vh", "0vh"]
  );
  const scale = useTransform(p, [0.88, 0.94], [1, 0.92]);
  const hintO = useTransform(p, [0.90, 0.95], [0, 1]);

  const [activeBeat, setActiveBeat] = useState(null); // null = Hero
  const [gameReady, setGameReady] = useState(false);

  const introO = useTransform(p, [0, 0.08], [1, 0]);
  const introY = useTransform(p, [0, 0.08], [0, -50]);
  const introPE = useTransform(introO, (v) => (v < 0.2 ? "none" : "auto"));

  // Progress bar only visible during beats (hidden in Hero section)
  const barOpacity = useTransform(p, [0.08, 0.12, 0.90, 0.94], [0, 1, 1, 0]);
  const bar = useTransform(p, [0.12, 0.90], [0, 1]);

  useMotionValueEvent(p, "change", (v) => {
    if (v < 0.12) {
      setActiveBeat(null);
    } else if (v < 0.40) {
      setActiveBeat(0);
    } else if (v < 0.70) {
      setActiveBeat(1);
    } else {
      setActiveBeat(2);
    }
    setGameReady(v >= 0.92);
  });

  const currentProduct = activeBeat === null ? HERO_PRODUCT : HERO_BEATS[activeBeat];
  const displayIdx = activeBeat === null ? 1 : activeBeat + 1;

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
                product={currentProduct}
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

        {/* Progress Bar: strictly hidden in Hero section, only visible while scrolling experiences */}
        <motion.div
          style={{ opacity: barOpacity }}
          className="absolute bottom-6 left-5 flex items-center gap-3 sm:left-8 z-20 pointer-events-none"
          data-testid="chapter-progress"
        >
          <span className="font-arcade text-[10px] text-[#1C1917]">
            {String(displayIdx).padStart(2, "0")}/03
          </span>
          <span className="h-2 w-28 overflow-hidden rounded-full bg-[#D5CFBF] sm:w-40">
            <motion.span
              className="block h-full origin-left rounded-full bg-[#FF5A00]"
              style={{ scaleX: bar }}
            />
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export const Chapter = () => (useReducedMotion() ? <StaticChapter /> : <PinnedChapter />);
