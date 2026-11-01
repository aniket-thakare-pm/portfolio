import { motion } from "framer-motion";
import { ArrowDownRight, PhoneCall } from "lucide-react";
import { OWNER } from "@/data/content";
import { Console } from "./Console";
import { bookCall } from "./actions";

const LINES = ["Right problems.", "Real products.", "Shipped fast."];

export const Hero = () => (
  <section id="top" className="relative px-5 pb-20 pt-32 sm:px-8 lg:pt-40" data-testid="hero-section">
    <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.15fr_1fr]">
      <div>
        <p className="mb-8 flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-[#57534E]">
          <span className="rounded-full border border-[#1C1917] px-3 py-1 text-[#1C1917]">[SEC_00]</span>
          Founder · PM · Designer · Video editor
        </p>
        <h1 className="font-display text-[2.6rem] font-black leading-[0.95] tracking-tight sm:text-6xl lg:text-[4.1rem] xl:text-[4.6rem]" data-testid="hero-headline">
          {LINES.map((l, i) => (
            <span key={l} className="block overflow-hidden pb-1">
              <motion.span className="block" initial={{ y: "105%" }} animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 + i * 0.12, ease: [0.2, 0.8, 0.2, 1] }}>
                {i === 2 ? <>Shipped <span className="italic text-[#FF5A00]" style={{ fontFamily: "Fraunces" }}>fast.</span></> : l}
              </motion.span>
            </span>
          ))}
        </h1>
        <p className="mt-8 max-w-lg text-base leading-relaxed text-[#44403C] sm:text-lg">
          I'm {OWNER.name}. I turn ideas into live products using AI and web code — then design them, film them and launch them myself.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a href="#products" data-sound="key" data-testid="hero-see-products-btn"
            className="key key-orange inline-flex items-center gap-2 rounded-2xl px-6 py-4 font-mono text-sm font-semibold uppercase tracking-[0.15em]">
            See the products <ArrowDownRight size={18} />
          </a>
          <button onClick={bookCall} data-sound="key" data-testid="hero-book-call-btn"
            className="key inline-flex items-center gap-2 rounded-2xl px-6 py-4 font-mono text-sm font-semibold uppercase tracking-[0.15em]">
            <PhoneCall size={16} /> Book a call
          </button>
        </div>
      </div>
      <Console />
    </div>
  </section>
);
