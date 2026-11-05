import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Github, Linkedin } from "lucide-react";
import { OWNER } from "@/data/content";

export const HeroIntro = () => (
  <div data-testid="hero-intro">
    <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-[#57534E] sm:text-sm font-semibold">
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

    <p className="mt-4 max-w-lg text-sm sm:text-base leading-relaxed text-[#44403C]">
      Enterprise voice AI, agentic private equity workflows, and B2B SaaS. PM intern at LimeChat and Gen AI Labs.
    </p>

    {/* Compact, refined action links fitted closely beneath subtitle */}
    <div className="mt-4 flex flex-wrap items-center gap-2.5 sm:mt-5 sm:gap-3">
      <a
        href="#contact"
        data-sound="tick"
        data-testid="hero-contact-btn"
        className="key key-orange inline-flex items-center gap-1.5 rounded-xl px-4 py-2 font-mono text-xs font-semibold uppercase tracking-[0.12em] text-[#1C1917] transition-all"
      >
        Contact Me <ArrowDownRight size={14} />
      </a>
      <a
        href={OWNER.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        data-sound="tick"
        data-testid="hero-linkedin-btn"
        className="key inline-flex items-center gap-1.5 rounded-xl px-3.5 py-2 font-mono text-xs font-semibold uppercase tracking-[0.12em] text-[#1C1917] transition-all"
      >
        <Linkedin size={14} /> LinkedIn <ArrowUpRight size={12} className="opacity-50" />
      </a>
      <a
        href={OWNER.github}
        target="_blank"
        rel="noopener noreferrer"
        data-sound="tick"
        data-testid="hero-github-btn"
        className="key inline-flex items-center gap-1.5 rounded-xl px-3.5 py-2 font-mono text-xs font-semibold uppercase tracking-[0.12em] text-[#1C1917] transition-all"
      >
        <Github size={14} /> GitHub <ArrowUpRight size={12} className="opacity-50" />
      </a>
    </div>
  </div>
);
