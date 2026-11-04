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
          <Mac3D rotateY={-22} product={HERO_PRODUCT} />
        </MacScale>
      </div>
    </div>
    <div className="mx-auto mt-16 max-w-7xl">
      <p className="mb-4 font-mono text-xs uppercase tracking-widest text-[#78716C]">Proven Impact</p>
      <div className="grid gap-4 sm:grid-cols-3">
        {HERO_BEATS.map((beat) => (
          <div
            key={beat.company}
            className="rounded-2xl border border-[#D5CFBF] bg-[#FAF8F5] p-5 shadow-sm text-[#1C1917]"
          >
            <div className="flex items-center justify-between text-xs font-mono text-[#78716C]">
              <span className="font-bold text-[#1C1917]">{beat.company}</span>
              <span className="rounded-full bg-[#1C1917] px-2 py-0.5 text-[10px] font-bold text-[#86efac]">
                {beat.tag}
              </span>
            </div>
            <div className="mt-3 font-display text-2xl font-black text-[#1C1917]">{beat.metric}</div>
            <div className="mt-1 font-mono text-[11px] uppercase text-[#FF5A00]">{beat.metricLabel}</div>
            <p className="mt-2 text-xs text-[#57534E]">{beat.metricContext}</p>
            <div className="mt-3 pt-2 border-t border-[#D5CFBF]/80">
              <span className="text-xs font-bold text-[#1C1917]">{beat.shipTitle}</span>
              <p className="mt-0.5 text-xs text-[#57534E]">{beat.shipDetail}</p>
            </div>
            <div className="mt-4">
              <a
                href={beat.target}
                className="font-mono text-xs font-bold text-[#FF5A00] hover:text-[#C83E00]"
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

  // Complete 360-degree continuous rotation:
  // - Hero: -22deg
  // - Tile 1 (Left): -45deg to -60deg (angled toward Left tile)
  // - Rapid turn through the back: -60deg -> -300deg (between Tile 1 & Tile 2)
  // - Tile 2 (Right): -325deg (which is +35deg facing Right tile)
  // - Tile 3 (Left): completes rotation to -395deg (which is -35deg facing Left tile)
  // - Settles front at -360deg
  const raw = useTransform(
    p,
    [0, 0.10, 0.23, 0.36, 0.44, 0.50, 0.62, 0.70, 0.75, 0.88, 1.0],
    [-22, -28, -45, -60, -300, -325, -340, -370, -395, -410, -360]
  );
  const rotateY = useSpring(raw, { stiffness: 70, damping: 20, mass: 0.6 });
  const hl = useTransform(rotateY, (v) => ((((-v) % 180) + 180) % 180) / 180 * 160 - 30);

  // Position: starts on right (22vw) during hero to give text room, then stays centered (0vw) throughout
  const x = useTransform(
    p,
    [0, 0.10, 1.0],
    mobile ? ["0vw", "0vw", "0vw"] : ["22vw", "0vw", "0vw"]
  );

  const y = useTransform(
    p,
    [0, 0.10, 0.85, 0.90],
    mobile ? ["24vh", "0vh", "0vh", "4vh"] : ["3vh", "0vh", "0vh", "0vh"]
  );
  const scale = useTransform(p, [0.85, 0.90], [1, 0.92]);
  const hintO = useTransform(p, [0.88, 0.92], [0, 1]);

  const [activeBeat, setActiveBeat] = useState(null); // null = Hero
  const [gameReady, setGameReady] = useState(false);

  const introO = useTransform(p, [0, 0.08], [1, 0]);
  const introY = useTransform(p, [0, 0.08], [0, -50]);
  const introPE = useTransform(introO, (v) => (v < 0.2 ? "none" : "auto"));

  // Progress bar strictly hidden in Hero section, only visible during scrolling tiles
  const barOpacity = useTransform(p, [0.08, 0.12, 0.86, 0.90], [0, 1, 1, 0]);
  const bar = useTransform(p, [0.10, 0.86], [0, 1]);

  useMotionValueEvent(p, "change", (v) => {
    if (v < 0.10) {
      setActiveBeat(null);
    } else if (v < 0.36) {
      setActiveBeat(0);
    } else if (v < 0.62) {
      setActiveBeat(1);
    } else {
      setActiveBeat(2);
    }
    setGameReady(v >= 0.88);
  });

  const currentProduct = activeBeat === null ? HERO_PRODUCT : HERO_BEATS[activeBeat];
  const displayIdx = activeBeat === null ? 1 : activeBeat + 1;

  return (
    <section ref={ref} id="top" className="relative h-[380vh]" data-testid="chapter-section">
      <div className="sticky top-0 h-screen overflow-hidden">
        {HERO_BEATS.map((beat, i) => (
          <ChapterLine key={beat.company} p={p} i={i} beat={beat} mobile={mobile} />
        ))}

        {/* Mac anchored in the center */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
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
