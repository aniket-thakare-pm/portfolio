import { motion } from "framer-motion";

export const Reveal = ({ children, delay = 0, className = "" }) => (
  <motion.div className={className} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.7, delay, ease: [0.2, 0.8, 0.2, 1] }}>
    {children}
  </motion.div>
);

export const SectionLabel = ({ code, title, kicker }) => (
  <div className="mb-14 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
    <div>
      <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-[#57534E]">[{code}]</p>
      <h2 className="font-display text-4xl font-black leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl">{title}</h2>
    </div>
    {kicker && <p className="max-w-sm text-base text-[#44403C] md:text-lg">{kicker}</p>}
  </div>
);
