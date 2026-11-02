import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, X } from "lucide-react";
import { Journey, StaticJourney } from "./Journey";

const scrollToEl = (el, offset, immediate = false) => {
  const l = window.__lenis;
  if (l) l.scrollTo(el, { offset, immediate });
  else el.scrollIntoView({ behavior: immediate ? "auto" : "smooth" });
};

export const Story = () => {
  const [open, setOpen] = useState(false);
  const btnRef = useRef(null);
  const storyRef = useRef(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!open) return undefined;
    const t = setTimeout(() => storyRef.current && scrollToEl(storyRef.current, 0), 120);
    return () => clearTimeout(t);
  }, [open]);

  const close = () => {
    setOpen(false);
    requestAnimationFrame(() => btnRef.current && scrollToEl(btnRef.current, -100, true));
  };

  return (
    <section id="story" className="relative" data-testid="story-section">
      <div ref={btnRef} className="px-5 py-16 sm:px-8">
        <button onClick={() => (open ? close() : setOpen(true))} data-sound="key" data-testid="story-toggle-btn" aria-expanded={open}
          className={`key ${open ? "key-ink" : ""} mx-auto flex w-full max-w-7xl items-center justify-between gap-6 rounded-[28px] px-6 py-7 text-left sm:px-10 sm:py-9`}>
          <span>
            <span className={`block font-mono text-[11px] uppercase tracking-[0.25em] ${open ? "text-[#A8A29E]" : "text-[#57534E]"}`}>[Bonus track] · Stages #01 – #07</span>
            <span className="mt-2 block font-display text-3xl font-black tracking-tight sm:text-5xl">
              My story <span className="italic text-[#FF5A00]" style={{ fontFamily: "Fraunces" }}>— how I got here</span>
            </span>
          </span>
          <span className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full transition-transform duration-300 sm:h-16 sm:w-16 ${open ? "rotate-180 bg-[#F4F1EA] text-[#1C1917]" : "bg-[#1C1917] text-[#F4F1EA]"}`}>
            <ArrowDown size={24} />
          </span>
        </button>
      </div>
      {open && (
        <motion.div ref={storyRef} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }} className="bg-[#121110] text-[#F4F1EA]" data-testid="story-content">
          {reduce ? <StaticJourney /> : <Journey />}
          <div className="flex justify-center px-5 pb-16 pt-12">
            <button onClick={close} data-sound="key" data-testid="story-close-btn"
              className="key inline-flex items-center gap-2 rounded-2xl px-6 py-4 font-mono text-sm font-semibold uppercase tracking-[0.15em] text-[#1C1917]">
              <X size={16} /> Close story
            </button>
          </div>
          <div className="h-40 bg-gradient-to-b from-[#121110] to-[#F4F1EA]" />
        </motion.div>
      )}
    </section>
  );
};
