import { useEffect, useState, useRef, useCallback } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { ArrowDown, X } from "lucide-react";
import { playSound } from "@/lib/sound";

export const ExperienceDialog = ({ experience, side = "right", onClose }) => {
  const [activeExp, setActiveExp] = useState(experience);
  const [isClosing, setIsClosing] = useState(false);
  const isClosingRef = useRef(false);
  const accumulatedScrollRef = useRef(0);
  const dismissTimeoutRef = useRef(null);

  // Sync internal state when parent opens or changes experience
  useEffect(() => {
    if (experience) {
      setActiveExp(experience);
      setIsClosing(false);
      isClosingRef.current = false;
      accumulatedScrollRef.current = 0;
    }
  }, [experience]);

  // Final cleanup once the exit fade-out completes
  const handleFinishedClose = useCallback(() => {
    if (dismissTimeoutRef.current) {
      clearTimeout(dismissTimeoutRef.current);
      dismissTimeoutRef.current = null;
    }

    // 1. Resume smooth background scrolling
    window.__lenis?.start();
    document.body.style.overflow = "";

    // 2. If user initiated dismissal via downward scroll, carry over the scroll momentum
    const carry = accumulatedScrollRef.current;
    if (window.__lenis && carry > 0) {
      const scrollAmount = Math.min(carry, 240);
      window.__lenis.scrollTo(window.scrollY + scrollAmount, {
        duration: 0.85,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    }

    // 3. Notify parent to clear selection and reset internal state
    onClose?.();
    setActiveExp(null);
    setIsClosing(false);
    isClosingRef.current = false;
    accumulatedScrollRef.current = 0;
  }, [onClose]);

  // Begin smooth fade-out
  const startDismiss = useCallback(
    (initialDelta = 0) => {
      if (isClosingRef.current) return;
      isClosingRef.current = true;
      setIsClosing(true);
      accumulatedScrollRef.current = Math.max(0, initialDelta);

      // Fallback timeout to guarantee cleanup even if animation event is interrupted
      if (dismissTimeoutRef.current) clearTimeout(dismissTimeoutRef.current);
      dismissTimeoutRef.current = setTimeout(() => {
        handleFinishedClose();
      }, 340);
    },
    [handleFinishedClose]
  );

  useEffect(() => {
    if (!activeExp) return;

    // 1. Lock the background so nothing scrolls behind the pop-up while active
    window.__lenis?.stop();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // 2. Escape key dismiss
    const onKey = (e) => {
      if (e.key === "Escape") {
        playSound("tick");
        startDismiss(0);
      }
    };

    // 3. Smooth fade-out on global DOWN scroll (ONLY when scrolling OUTSIDE the dialog box)
    const onWheel = (e) => {
      // If mouse is inside the dossier content, allow natural local scrolling without dismissal
      if (e.target.closest?.("[data-dialog-content]")) {
        return;
      }

      // Only global DOWN scroll triggers dismissal and scroll continuation
      if (e.deltaY > 0) {
        if (!isClosingRef.current) {
          playSound("tick");
          startDismiss(e.deltaY);
        } else {
          // Accumulate downward scroll to carry over to the page once fade finishes
          accumulatedScrollRef.current += e.deltaY;
        }
      }
    };

    // 4. Mobile swipe up (scroll down) on backdrop
    let touchStartY = null;
    let touchInside = false;
    const onTouchStart = (e) => {
      if (e.touches && e.touches[0]) {
        touchInside = !!e.target.closest?.("[data-dialog-content]");
        touchStartY = e.touches[0].clientY;
      }
    };
    const onTouchMove = (e) => {
      if (touchInside || touchStartY === null || !e.touches || !e.touches[0]) return;
      const deltaY = touchStartY - e.touches[0].clientY; // positive = swipe up = scroll down
      if (deltaY > 16) {
        if (!isClosingRef.current) {
          playSound("tick");
          startDismiss(deltaY * 2);
        } else {
          accumulatedScrollRef.current += deltaY;
        }
      }
    };

    window.addEventListener("keydown", onKey);
    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });

    return () => {
      window.__lenis?.start();
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      if (dismissTimeoutRef.current) {
        clearTimeout(dismissTimeoutRef.current);
      }
    };
  }, [activeExp, startDismiss]);

  if (!activeExp) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 overflow-hidden" data-lenis-prevent>
      {/* Darkened Backdrop: Fades out smoothly */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isClosing ? 0 : 1 }}
        transition={{ duration: 0.26, ease: "easeOut" }}
        onClick={() => {
          playSound("tick");
          startDismiss(0);
        }}
        className="fixed inset-0 bg-black/65 backdrop-blur-md pointer-events-auto"
      />

      {/* Outer Flex Container: Mathematically Centered Vertically via Flexbox */}
      <div
        className={`fixed inset-0 flex items-center p-4 sm:p-6 pointer-events-none ${
          side === "right"
            ? "justify-center md:justify-end md:pr-[4vw] lg:pr-[6vw]"
            : "justify-center md:justify-start md:pl-[4vw] lg:pl-[6vw]"
        }`}
      >
        {/* Dialog Window: Fades out smoothly on down scroll, never cut off */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{
            opacity: isClosing ? 0 : 1,
            scale: isClosing ? 0.96 : 1,
            y: isClosing ? 26 : 0,
          }}
          transition={{
            duration: isClosing ? 0.28 : 0.22,
            ease: [0.16, 1, 0.3, 1],
          }}
          onAnimationComplete={() => {
            if (isClosing) {
              handleFinishedClose();
            }
          }}
          data-dialog-content
          onWheel={(e) => e.stopPropagation()}
          className="pointer-events-auto relative max-h-[82vh] w-full max-w-xl overflow-y-auto overscroll-contain rounded-2xl border-2 border-[#D5CFBF] bg-[#FAF8F5] p-5 shadow-[0_25px_60px_rgba(0,0,0,0.4)] sm:p-6"
        >
          {/* Top Status & Close Row */}
          <div className="flex items-center justify-between border-b border-[#D5CFBF]/80 pb-2.5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-[#1C1917] px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-[#86efac]">
                PM DOSSIER
              </span>
              <span className="font-mono text-xs text-[#78716C]">
                {activeExp.period} · {activeExp.location}
              </span>
            </div>
            <button
              onClick={() => {
                playSound("tick");
                startDismiss(0);
              }}
              data-sound="tick"
              aria-label="Close dialog"
              className="key flex h-8 w-8 items-center justify-center rounded-lg border border-[#D5CFBF] bg-[#F2EFE8] text-[#1C1917] transition-colors hover:border-[#FF5A00] hover:text-[#FF5A00]"
            >
              <X size={15} />
            </button>
          </div>

          {/* Company & Role Header */}
          <div className="mt-3.5">
            <h2 className="font-display text-2xl sm:text-3xl font-black tracking-tight text-[#1C1917]">
              {activeExp.company}
            </h2>
            <p className="mt-1 font-mono text-xs font-bold uppercase tracking-wider text-[#FF5A00]">
              {activeExp.role}
            </p>
            <p className="mt-0.5 text-xs text-[#57534E]">
              {activeExp.context}
            </p>
          </div>

          {/* Key Deliverables & Impact Log */}
          <div className="mt-4">
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#78716C]">
              Detailed Impact & Deliverables
            </span>
            <div className="mt-2 space-y-2.5">
              {activeExp.bullets.map((b, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-[#D5CFBF]/70 bg-[#F2EFE8]/70 p-3"
                >
                  <div className="flex items-start gap-2.5">
                    <span className="mt-0.5 font-mono text-xs font-bold text-[#FF5A00]">
                      #{String(idx + 1).padStart(2, "0")}
                    </span>
                    <p className="text-xs leading-relaxed text-[#1C1917]">
                      {b}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Core Skills & Tools */}
          {activeExp.skills && activeExp.skills.length > 0 && (
            <div className="mt-4 border-t border-[#D5CFBF]/80 pt-3">
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#78716C]">
                Core Competencies & Stack
              </span>
              <div className="mt-1.5 flex flex-wrap gap-1.5">
                {activeExp.skills.map((s) => (
                  <span
                    key={s}
                    className="rounded-md border border-[#D5CFBF] bg-[#FDFBF7] px-2.5 py-0.5 font-mono text-xs font-medium text-[#1C1917]"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Footer Action with Scroll Dismiss Hint */}
          <div className="mt-4 flex items-center justify-between border-t border-[#D5CFBF]/80 pt-3">
            <span className="flex items-center gap-1.5 font-mono text-[11px] text-[#78716C]">
              <ArrowDown size={12} className="animate-bounce text-[#FF5A00]" />
              Scroll down or press Esc to dismiss
            </span>
            <button
              onClick={() => {
                playSound("tick");
                startDismiss(0);
              }}
              className="key key-orange inline-flex items-center gap-1.5 rounded-xl px-4 py-1.5 font-mono text-xs font-bold uppercase tracking-wider text-[#1C1917]"
            >
              Done
            </button>
          </div>
        </motion.div>
      </div>
    </div>,
    document.body
  );
};
