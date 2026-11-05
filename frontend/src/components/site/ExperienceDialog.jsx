import { useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, X } from "lucide-react";
import { playSound } from "@/lib/sound";

export const ExperienceDialog = ({ experience, side = "right", onClose }) => {
  useEffect(() => {
    if (!experience) return;

    // 1. Lock the background so nothing scrolls behind the pop-up
    window.__lenis?.stop();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // 2. Escape key dismiss
    const onKey = (e) => {
      if (e.key === "Escape") {
        playSound("tick");
        onClose();
      }
    };

    // 3. Flick-to-dismiss on scroll wheel
    let accumulatedDelta = 0;
    const onWheel = (e) => {
      accumulatedDelta += Math.abs(e.deltaY);
      if (accumulatedDelta > 18) {
        playSound("tick");
        onClose();
      }
    };

    // 4. Touch swipe to dismiss on mobile
    let touchStartY = null;
    const onTouchStart = (e) => {
      if (e.touches && e.touches[0]) {
        touchStartY = e.touches[0].clientY;
      }
    };
    const onTouchMove = (e) => {
      if (touchStartY !== null && e.touches && e.touches[0]) {
        const delta = Math.abs(e.touches[0].clientY - touchStartY);
        if (delta > 28) {
          playSound("tick");
          onClose();
        }
      }
    };

    window.addEventListener("keydown", onKey);
    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });

    return () => {
      // Resume background scroll on close
      window.__lenis?.start();
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
    };
  }, [experience, onClose]);

  if (!experience) return null;

  return createPortal(
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-hidden" data-lenis-prevent>
        {/* Darkened Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          onClick={() => {
            playSound("tick");
            onClose();
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
          {/* Dialog Window: Never cut off, maximum 85vh height with internal scroll */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 12 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-auto relative max-h-[85vh] w-full max-w-xl overflow-y-auto rounded-2xl border-2 border-[#D5CFBF] bg-[#FAF8F5] p-5 shadow-[0_25px_60px_rgba(0,0,0,0.4)] sm:p-6"
          >
            {/* Top Status & Close Row */}
            <div className="flex items-center justify-between border-b border-[#D5CFBF]/80 pb-2.5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-[#1C1917] px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-[#86efac]">
                  PM DOSSIER
                </span>
                <span className="font-mono text-xs text-[#78716C]">
                  {experience.period} · {experience.location}
                </span>
              </div>
              <button
                onClick={() => {
                  playSound("tick");
                  onClose();
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
                {experience.company}
              </h2>
              <p className="mt-1 font-mono text-xs font-bold uppercase tracking-wider text-[#FF5A00]">
                {experience.role}
              </p>
              <p className="mt-0.5 text-xs text-[#57534E]">
                {experience.context}
              </p>
            </div>

            {/* Key Deliverables & Impact Log */}
            <div className="mt-4">
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#78716C]">
                Detailed Impact & Deliverables
              </span>
              <div className="mt-2 space-y-2.5">
                {experience.bullets.map((b, idx) => (
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
            {experience.skills && experience.skills.length > 0 && (
              <div className="mt-4 border-t border-[#D5CFBF]/80 pt-3">
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#78716C]">
                  Core Competencies & Stack
                </span>
                <div className="mt-1.5 flex flex-wrap gap-1.5">
                  {experience.skills.map((s) => (
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
                Flick scroll or press Esc to dismiss
              </span>
              <button
                onClick={() => {
                  playSound("tick");
                  onClose();
                }}
                className="key key-orange inline-flex items-center gap-1.5 rounded-xl px-4 py-1.5 font-mono text-xs font-bold uppercase tracking-wider text-[#1C1917]"
              >
                Done
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>,
    document.body
  );
};
