import { useRef, useState } from "react";
import { motion, useMotionValueEvent, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { EXPERIENCES, HERO_BEATS } from "@/data/content";
import { Mac3D } from "@/components/mac/Mac3D";
import { HeroIntro } from "./HeroIntro";
import { ChapterLine } from "./ChapterLine";
import { ExperienceDialog } from "./ExperienceDialog";
import { useIsMobile } from "@/lib/useIsMobile";
import { playSound } from "@/lib/sound";

const MacScale = ({ children }) => (
  <div className="scale-[0.52] sm:scale-75 md:scale-90 lg:scale-[1.05] xl:scale-[1.15]">{children}</div>
);

const HERO_PRODUCT = {
  screenName: "ANIKET THAKARE",
  company: "Aniket Thakare",
  name: "Aniket Thakare",
  pixel: ["..####..", ".######.", "###..###", "###..###", ".######.", "..####..", "..####..", ".######."],
};

export const scrollToExperience = () => {
  // Soft, pleasant retro two-tone chime (non-alarming, gentle)
  playSound("chime");
  const topEl = document.getElementById("top");
  if (topEl) {
    const rect = topEl.getBoundingClientRect();
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;
    const sectionTop = rect.top + scrollY;
    const totalScroll = topEl.offsetHeight - window.innerHeight;
    const targetY = sectionTop + totalScroll * 0.22;
    if (window.__lenis) {
      window.__lenis.scrollTo(targetY, {
        duration: 2.2,
        easing: (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2),
      });
    } else {
      window.scrollTo({ top: targetY, behavior: "smooth" });
    }
  }
};

const StaticChapter = () => {
  const [selectedExp, setSelectedExp] = useState(null);

  const handleOpenExperience = (beat, side) => {
    const exp = EXPERIENCES.find(
      (e) =>
        e.company.toLowerCase().includes(beat.company.toLowerCase()) ||
        beat.company.toLowerCase().includes(e.company.toLowerCase())
    );
    if (exp) {
      setSelectedExp({ data: exp, side });
    }
  };

  return (
    <section id="top" className="px-5 pb-20 pt-28 sm:px-8" data-testid="chapter-static">
      <div id="experience" className="absolute pointer-events-none" style={{ top: "52.8vh" }} />
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
        <HeroIntro />
        <div className="flex justify-center">
          <MacScale>
            <Mac3D rotateY={-22} product={HERO_PRODUCT} />
          </MacScale>
        </div>
      </div>

      {/* Centered Scroll Prompt */}
      <div className="mx-auto mt-14 text-center">
        <button
          type="button"
          onClick={scrollToExperience}
          className="group inline-flex flex-col items-center gap-2 cursor-pointer transition-transform hover:scale-105 active:scale-95"
        >
          <span className="font-mono text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] text-[#57534E] group-hover:text-[#1C1917] transition-colors">
            Don&apos;t take my word for it. Take the numbers.
          </span>
          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D5CFBF] bg-[#FAF8F5] shadow-sm transition-all group-hover:border-[#FF5A00] group-hover:bg-white group-hover:shadow-md">
            <ArrowDown size={18} className="text-[#FF5A00] block" />
          </span>
        </button>
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
                <div className="flex items-center gap-2">
                  {beat.logo && (
                    <div className="flex h-6 w-6 items-center justify-center rounded-md border border-[#D5CFBF] bg-white p-0.5 shadow-sm">
                      <img src={beat.logo} alt="" className="h-full w-full object-contain" />
                    </div>
                  )}
                  <span className="font-bold text-[#1C1917]">{beat.company}</span>
                </div>
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
                {beat.target === "#cases" ? (
                  <a
                    href="#cases"
                    className="inline-flex items-center gap-1.5 rounded-xl bg-[#1C1917] px-3.5 py-1.5 font-mono text-xs font-bold uppercase tracking-wider text-[#FAF8F5]"
                  >
                    See in detail →
                  </a>
                ) : (
                  <button
                    type="button"
                    onClick={() => handleOpenExperience(beat, "right")}
                    className="inline-flex items-center gap-1.5 rounded-xl bg-[#1C1917] px-3.5 py-1.5 font-mono text-xs font-bold uppercase tracking-wider text-[#FAF8F5]"
                  >
                    See in detail →
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <ExperienceDialog
        experience={selectedExp?.data}
        side={selectedExp?.side}
        onClose={() => setSelectedExp(null)}
      />
    </section>
  );
};

const PinnedChapter = () => {
  const ref = useRef(null);
  const mobile = useIsMobile();
  const { scrollYProgress: p } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const [selectedExp, setSelectedExp] = useState(null);

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
    [0, 0.10, 0.88, 1.0],
    mobile ? ["28vh", "-12vh", "-12vh", "-12vh"] : ["3vh", "0vh", "0vh", "0vh"]
  );
  const scale = useTransform(p, [0.88, 1.0], [1, 0.94]);

  const [activeBeat, setActiveBeat] = useState(null); // null = Hero

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
  });

  const handleOpenExperience = (beat, side) => {
    const exp = EXPERIENCES.find(
      (e) =>
        e.company.toLowerCase().includes(beat.company.toLowerCase()) ||
        beat.company.toLowerCase().includes(e.company.toLowerCase())
    );
    if (exp) {
      setSelectedExp({ data: exp, side });
    }
  };

  const currentProduct = activeBeat === null ? HERO_PRODUCT : HERO_BEATS[activeBeat];
  const displayIdx = activeBeat === null ? 1 : activeBeat + 1;

  return (
    <section ref={ref} id="top" className="relative h-[340vh]" data-testid="chapter-section">
      {/* Target anchor that places the viewport directly at Tile 01 (LimeChat) */}
      <div id="experience" className="absolute pointer-events-none" style={{ top: "52.8vh" }} />

      <div className="sticky top-0 h-screen overflow-hidden">
        {HERO_BEATS.map((beat, i) => (
          <ChapterLine
            key={beat.company}
            p={p}
            i={i}
            beat={beat}
            mobile={mobile}
            onOpenExperience={handleOpenExperience}
          />
        ))}

        {/* Mac anchored in the center */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div style={{ x, y, scale }}>
            <MacScale>
              <Mac3D
                rotateY={rotateY}
                hl={hl}
                product={currentProduct}
                gameReady={false}
              />
            </MacScale>
          </motion.div>
        </div>

        {/* Hero Left Content */}
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

        {/* Centered Scroll Indicator Bar (Visible only during Hero, disappears on scroll) */}
        <div className="pointer-events-none absolute bottom-5 sm:bottom-7 md:bottom-8 lg:bottom-10 inset-x-0 mx-auto flex flex-col items-center justify-center text-center z-20 px-4">
          <motion.div style={{ opacity: introO, y: introY, pointerEvents: introPE }}>
            <button
              type="button"
              onClick={scrollToExperience}
              className="group pointer-events-auto flex flex-col items-center gap-2 cursor-pointer transition-transform hover:scale-105 active:scale-95"
              title="Jump to Experience"
            >
              <span className="font-mono text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] text-[#57534E] group-hover:text-[#1C1917] transition-colors">
                Don&apos;t take my word for it. Take the numbers.
              </span>
              <motion.span
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D5CFBF] bg-[#FAF8F5] shadow-sm transition-all group-hover:border-[#FF5A00] group-hover:bg-white group-hover:shadow-md"
              >
                <ArrowDown size={18} className="text-[#FF5A00] block" />
              </motion.span>
            </button>
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

      {/* Experience Deep Dive Pop-up */}
      <ExperienceDialog
        experience={selectedExp?.data}
        side={selectedExp?.side}
        onClose={() => setSelectedExp(null)}
      />
    </section>
  );
};

export const Chapter = () => (useReducedMotion() ? <StaticChapter /> : <PinnedChapter />);
