import { useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, CheckCircle2, X } from "lucide-react";
import { playSound } from "@/lib/sound";

export const ExperienceDialog = ({ experience, side = "right", onClose }) => {
  useEffect(() => {
    if (!experience) return;
    const onKey = (e) => {
      if (e.key === "Escape") {
        playSound("tick");
        onClose();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [experience, onClose]);

  if (!experience) return null;

  // Determine desktop placement based on the user's requirement:
  // - If initial card was on the left, dialog opens slightly towards center-right.
  // - If initial card was on the right, dialog opens slightly towards center-left.
  const placementClass =
    side === "right"
      ? "md:left-[60%] md:-translate-x-1/2"
      : "md:left-[40%] md:-translate-x-1/2";

  return createPortal(
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6" data-lenis-prevent>
        {/* Darkened Backdrop Blur */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={() => {
            playSound("tick");
            onClose();
          }}
          className="fixed inset-0 bg-black/65 backdrop-blur-md"
        />

        {/* Dialog Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className={`relative z-10 max-h-[88vh] w-full max-w-xl overflow-y-auto rounded-2xl border-2 border-[#D5CFBF] bg-[#FAF8F5] p-6 shadow-[0_25px_60px_rgba(0,0,0,0.35)] sm:p-7 md:fixed md:top-1/2 md:-translate-y-1/2 ${placementClass}`}
        >
          {/* Top Status & Close Row */}
          <div className="flex items-center justify-between border-b border-[#D5CFBF]/80 pb-3">
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
          <div className="mt-4">
            <h2 className="font-display text-3xl font-black tracking-tight text-[#1C1917] sm:text-4xl">
              {experience.company}
            </h2>
            <p className="mt-1 font-mono text-xs font-bold uppercase tracking-wider text-[#FF5A00]">
              {experience.role}
            </p>
            <p className="mt-1 text-xs text-[#57534E]">
              {experience.context}
            </p>
          </div>

          {/* Key Deliverables & Impact Log */}
          <div className="mt-5">
            <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#78716C]">
              Detailed Impact & Deliverables
            </span>
            <div className="mt-2.5 space-y-3">
              {experience.bullets.map((b, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-[#D5CFBF]/70 bg-[#F2EFE8]/70 p-3.5 sm:p-4"
                >
                  <div className="flex items-start gap-2.5">
                    <span className="mt-0.5 font-mono text-xs font-bold text-[#FF5A00]">
                      #{String(idx + 1).padStart(2, "0")}
                    </span>
                    <p className="text-xs leading-relaxed text-[#1C1917] sm:text-sm">
                      {b}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Core Skills & Tools */}
          {experience.skills && experience.skills.length > 0 && (
            <div className="mt-5 border-t border-[#D5CFBF]/80 pt-4">
              <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#78716C]">
                Core Competencies & Stack
              </span>
              <div className="mt-2.5 flex flex-wrap gap-1.5">
                {experience.skills.map((s) => (
                  <span
                    key={s}
                    className="rounded-md border border-[#D5CFBF] bg-[#FDFBF7] px-2.5 py-1 font-mono text-xs font-medium text-[#1C1917]"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Footer Action */}
          <div className="mt-6 flex items-center justify-between border-t border-[#D5CFBF]/80 pt-4">
            <span className="font-mono text-[11px] text-[#A8A29E]">
              Press Esc or click outside to dismiss
            </span>
            <button
              onClick={() => {
                playSound("tick");
                onClose();
              }}
              className="key key-orange inline-flex items-center gap-1.5 rounded-xl px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider text-[#1C1917]"
            >
              Done
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>,
    document.body
  );
};
