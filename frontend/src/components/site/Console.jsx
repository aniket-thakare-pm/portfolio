import { useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const KEYS = [
  { l: "PM", m: "PRODUCT MANAGER" },
  { l: "DSN", m: "DESIGNER" },
  { l: "VID", m: "VIDEO EDITOR" },
  { l: "BLD", m: "PRODUCT BUILDER" },
  { l: "AI", m: "AI-NATIVE" },
  { l: "SHP", m: "SHIPS FAST" },
];

const Knob = ({ label, testId }) => {
  const [deg, setDeg] = useState(-40);
  return (
    <div className="flex flex-col items-center gap-2">
      <button
        onClick={() => setDeg((d) => (d >= 120 ? -120 : d + 40))}
        data-sound="tick" data-testid={testId} aria-label={`${label} knob`}
        className="knob relative h-14 w-14 rounded-full sm:h-16 sm:w-16"
        style={{ transform: `rotate(${deg}deg)`, transition: "transform .25s cubic-bezier(.3,1.6,.5,1)" }}
      >
        <span className="absolute left-1/2 top-1.5 h-4 w-1 -translate-x-1/2 rounded-full bg-[#FF5A00]" />
      </button>
      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#57534E]">{label}</span>
    </div>
  );
};

export const Console = () => {
  const [active, setActive] = useState(5);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [9, -9]), { stiffness: 120, damping: 14 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-12, 12]), { stiffness: 120, damping: 14 });

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  return (
    <div className="[perspective:1400px]" onMouseMove={onMove} onMouseLeave={() => { mx.set(0); my.set(0); }}>
      <motion.div
        style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
        initial={{ opacity: 0, y: 40, rotateZ: -2 }} animate={{ opacity: 1, y: 0, rotateZ: 0 }}
        transition={{ duration: 0.9, delay: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
        className="chassis relative mx-auto w-full max-w-[520px] rounded-[30px] p-5 sm:p-7" data-testid="hero-console"
      >
        {["left-3 top-3", "right-3 top-3", "left-3 bottom-3", "right-3 bottom-3"].map((p) => <span key={p} className={`screw absolute ${p}`} />)}
        <div className="mb-4 flex items-center justify-between px-1">
          <span className="font-wide text-xs font-black tracking-tight">PM-01 <span className="font-mono font-normal text-[#57534E]">/ product machine</span></span>
          <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-[#57534E]">
            <span className="led h-2 w-2 rounded-full bg-[#FF5A00] text-[#FF5A00]" /> Live
          </span>
        </div>
        <div className="vfd vfd-grid relative overflow-hidden rounded-2xl px-5 py-4" data-testid="console-display">
          <div className="font-vfd text-sm uppercase tracking-widest opacity-70">Mode {String(active + 1).padStart(2, "0")} / 06</div>
          <div className="font-vfd text-4xl leading-none sm:text-5xl">{KEYS[active].m}<span className="blink">_</span></div>
          <div className="mt-2 flex gap-1">{KEYS.map((k, i) => <span key={k.l} className={`h-1.5 flex-1 rounded-full ${i <= active ? "bg-[#6BF5CB]" : "bg-[#0d3a32]"}`} />)}</div>
        </div>
        <div className="mt-6 grid grid-cols-[1fr_auto] gap-5">
          <div className="grid grid-cols-3 gap-3">
            {KEYS.map((k, i) => (
              <button key={k.l} onClick={() => setActive(i)} data-on={active === i} data-sound="key" data-testid={`console-key-${k.l.toLowerCase()}`}
                className={`key ${i === 5 ? "key-orange" : ""} h-14 rounded-xl font-mono text-xs font-semibold tracking-widest sm:h-16`}>
                {k.l}
              </button>
            ))}
          </div>
          <div className="flex flex-col items-center justify-between gap-3">
            <Knob label="Speed" testId="console-knob-speed" />
            <Knob label="Taste" testId="console-knob-taste" />
          </div>
        </div>
        <div className="grille mt-6 h-10 rounded-xl" />
      </motion.div>
    </div>
  );
};
