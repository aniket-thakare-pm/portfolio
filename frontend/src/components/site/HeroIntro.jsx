import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Github, Linkedin } from "lucide-react";
import { OWNER } from "@/data/content";

export const HeroIntro = () => (
  <div data-testid="hero-intro">
    <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-[#57534E] sm:text-sm font-semibold">
      Aniket Thakare · IIT Kharagpur &apos;27
    </p>

    <h1
      className="font-display text-[2.5rem] font-black leading-[0.96] tracking-tight sm:text-6xl lg:text-[4.1rem] xl:text-[4.7rem]"
      data-testid="hero-headline"
    >
      <span className="block overflow-hidden pb-1">
        <motion.span
          className="block"
          initial={{ y: "105%" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.2, 0.8, 0.2, 1] }}
        >
          Product Manager
        </motion.span>
      </span>
      <span className="block overflow-hidden pb-1">
        <motion.span
          className="block"
          initial={{ y: "105%" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, delay: 0.22, ease: [0.2, 0.8, 0.2, 1] }}
        >
          Who <span className="italic text-[#FF5A00]" style={{ fontFamily: "Fraunces" }}>Ships.</span>
        </motion.span>
      </span>
    </h1>

    <p className="mt-5 max-w-lg text-base leading-relaxed text-[#44403C] sm:mt-7 sm:text-lg">
      Enterprise voice AI, agentic private equity workflows, and B2B SaaS. PM intern at LimeChat and Gen AI Labs.
    </p>

    <div className="mt-6 flex flex-wrap items-center gap-3 sm:mt-9 sm:gap-4">
      <a
        href="#cases"
        data-sound="key"
        data-testid="hero-see-proof-btn"
        className="key key-orange inline-flex items-center gap-2 rounded-2xl px-5 py-3.5 font-mono text-xs font-semibold uppercase tracking-[0.15em] sm:px-6 sm:py-4 sm:text-sm"
      >
        View Work <ArrowDownRight size={16} />
      </a>
      <a
        href={OWNER.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        data-sound="key"
        data-testid="hero-linkedin-btn"
        className="key inline-flex items-center gap-2 rounded-2xl px-4 py-3.5 font-mono text-xs font-semibold uppercase tracking-[0.15em] sm:px-5 sm:py-4 sm:text-sm text-[#1C1917]"
      >
        <Linkedin size={16} /> LinkedIn <ArrowUpRight size={14} className="opacity-50" />
      </a>
      <a
        href={OWNER.github}
        target="_blank"
        rel="noopener noreferrer"
        data-sound="key"
        data-testid="hero-github-btn"
        className="key inline-flex items-center gap-2 rounded-2xl px-4 py-3.5 font-mono text-xs font-semibold uppercase tracking-[0.15em] sm:px-5 sm:py-4 sm:text-sm text-[#1C1917]"
      >
        <Github size={16} /> GitHub <ArrowUpRight size={14} className="opacity-50" />
      </a>
    </div>

    <div className="mt-7 flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-[#78716C] sm:mt-9 sm:text-xs">
      <span>Don&apos;t take my word for it. Take the numbers.</span>
      <span className="inline-block animate-bounce font-bold text-[#FF5A00]">↓</span>
    </div>
  </div>
);
