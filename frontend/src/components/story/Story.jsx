import { useEffect, useRef, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Journey, StaticJourney } from "./Journey";
import { playSound } from "@/lib/sound";

const scrollToEl = (el, offset = -60) => {
  const l = window.__lenis;
  if (l) l.scrollTo(el, { offset, duration: 1.0, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
  else el.scrollIntoView({ behavior: "smooth" });
};

export const Story = () => {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef(null);
  const chamberRef = useRef(null);

  // Crucial: recalculate scroll height when chamber opens or closes
  useEffect(() => {
    if (window.__lenis) {
      window.__lenis.resize();
    }
  }, [open]);

  const toggle = () => {
    playSound(open ? "switch" : "open");
    if (!open) {
      setOpen(true);
      setTimeout(() => {
        if (window.__lenis) window.__lenis.resize();
        if (triggerRef.current) scrollToEl(triggerRef.current, 0);
      }, 50);
    } else {
      close();
    }
  };

  const close = () => {
    playSound("switch");
    if (triggerRef.current) {
      scrollToEl(triggerRef.current, -80);
    }
    setOpen(false);
    setTimeout(() => {
      if (window.__lenis) window.__lenis.resize();
    }, 100);
  };

  return (
    // IMPORTANT: No overflow-hidden on section, otherwise position: sticky in Journey breaks!
    <section id="story" className="relative w-full" data-testid="story-section">
      <div ref={triggerRef} />

      {/* 1. THE FULL-WIDTH HORIZONTAL STRIP (THE UPPER SPLIT HALF) */}
      <div className="w-full border-y border-[#3E3A35] bg-[#121110] text-[#F4F1EA] shadow-2xl transition-colors">
        <button
          onClick={toggle}
          data-sound="open"
          data-testid="story-toggle-btn"
          aria-expanded={open}
          className="group flex w-full items-center justify-between px-6 py-6 sm:px-12 sm:py-8 text-left transition-colors hover:bg-[#181614] focus:outline-none"
        >
          {/* Main Title */}
          <div>
            <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#F4F1EA]">
              My story{" "}
              <span className="italic text-[#FF5A00]" style={{ fontFamily: "Fraunces" }}>
                — how I got here
              </span>
            </h2>
          </div>

          {/* Interactive Split / Toggle Indicator */}
          <div className="flex items-center gap-3">
            <span className="hidden font-mono text-xs uppercase tracking-widest text-[#A8A29E] sm:inline">
              {open ? "[CLICK TO CLOSE]" : "[CLICK TO UNFURL]"}
            </span>
            <span
              className={`flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full border border-[#44403C] transition-all duration-300 ${
                open
                  ? "rotate-180 bg-[#FF5A00] text-[#1C1917] border-[#FF5A00]"
                  : "bg-[#24211D] text-[#F4F1EA] group-hover:border-[#FF5A00] group-hover:text-[#FF5A00]"
              }`}
            >
              <ChevronDown size={22} />
            </span>
          </div>
        </button>
      </div>

      {/* 2. THE UNFURLED CHAMBER (DARBAR SCROLL EXPANSION) */}
      {open && (
        <div
          ref={chamberRef}
          className="w-full bg-[#121110] text-[#F4F1EA]"
          data-testid="story-content"
        >
          {/* The Animated Stages Journey with working Sticky Window */}
          <div className="relative">
            <Journey onClose={close} />
          </div>

          {/* 3. THE LOWER SPLIT HALF (ROLL UP & CLOSE STRIP) */}
          <div className="w-full border-t border-[#3E3A35] bg-[#181614] text-[#F4F1EA] shadow-inner">
            <button
              onClick={close}
              data-sound="switch"
              data-testid="story-close-btn"
              className="group flex w-full items-center justify-between px-6 py-6 sm:px-12 sm:py-7 text-left transition-colors hover:bg-[#221F1C] focus:outline-none"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#292524] text-[#FF5A00] border border-[#3E3A35] group-hover:scale-110 transition-transform">
                  <ChevronUp size={18} />
                </span>
                <span className="font-display text-lg sm:text-2xl font-black tracking-tight text-[#F4F1EA] group-hover:text-[#FF5A00] transition-colors">
                  ▲ Click to roll up &amp; close story
                </span>
              </div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#FF5A00]">
                [ROLL UP]
              </span>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
