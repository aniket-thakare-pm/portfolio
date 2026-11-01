import { motion } from "framer-motion";
import { ArrowDownRight, PhoneCall } from "lucide-react";
import { OWNER } from "@/data/content";
import { bookCall } from "./actions";

const LINES = ["Right problems.", "Real products.", "Shipped fast."];

export const HeroIntro = () => (
  <div data-testid="hero-intro">
    <p className="mb-6 flex flex-wrap items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-[#57534E] sm:text-xs">
      <span className="rounded-full border border-[#1C1917] px-3 py-1 text-[#1C1917]">[SEC_00]</span>
      Founder · PM · Designer · Video editor
    </p>
    <h1 className="font-display text-[2.4rem] font-black leading-[0.95] tracking-tight sm:text-6xl lg:text-[4.1rem] xl:text-[4.6rem]" data-testid="hero-headline">
      {LINES.map((l, i) => (
        <span key={l} className="block overflow-hidden pb-1">
          <motion.span className="block" initial={{ y: "105%" }} animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 + i * 0.12, ease: [0.2, 0.8, 0.2, 1] }}>
            {i === 2 ? <>Shipped <span className="italic text-[#FF5A00]" style={{ fontFamily: "Fraunces" }}>fast.</span></> : l}
          </motion.span>
        </span>
      ))}
    </h1>
    <p className="mt-5 max-w-lg text-sm leading-relaxed text-[#44403C] sm:mt-8 sm:text-lg">
      I'm {OWNER.name}. I turn ideas into live products using AI and web code — then design them, film them and launch them myself.
    </p>
    <div className="mt-6 flex flex-wrap gap-3 sm:mt-10 sm:gap-4">
      <a href="#products" data-sound="key" data-testid="hero-see-products-btn"
        className="key key-orange inline-flex items-center gap-2 rounded-2xl px-4 py-3 font-mono text-xs font-semibold uppercase tracking-[0.15em] sm:px-6 sm:py-4 sm:text-sm">
        Products <ArrowDownRight size={16} />
      </a>
      <button onClick={bookCall} data-sound="key" data-testid="hero-book-call-btn"
        className="key inline-flex items-center gap-2 rounded-2xl px-4 py-3 font-mono text-xs font-semibold uppercase tracking-[0.15em] sm:px-6 sm:py-4 sm:text-sm">
        <PhoneCall size={14} /> Book a call
      </button>
    </div>
  </div>
);
