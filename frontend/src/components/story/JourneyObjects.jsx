import { motion, useMotionTemplate, useTransform } from "framer-motion";
import { Mac3D } from "@/components/mac/Mac3D";

const EditDeck = ({ lp }) => {
  const x = useTransform(lp, [0, 1], ["4%", "94%"]);
  const rot = useTransform(lp, [0, 1], [0, 540]);
  const tracks = [[["5%", "30%", "#FF7A2E"], ["40%", "35%", "#C9A227"]], [["10%", "50%", "#6BF5CB"]], [["0%", "20%", "#3B4A8C"], ["25%", "60%", "#A8452F"]]];
  return (
    <div className="chassis w-[360px] rounded-[26px] p-4">
      <div className="relative rounded-xl bg-[#1C1917] p-3">
        {tracks.map((track, t) => (
          <div key={t} className="relative mb-1.5 h-5 rounded bg-[#2B2824]">
            {track.map(([l, w, c]) => <span key={l} className="absolute top-0 h-5 rounded" style={{ left: l, width: w, background: c }} />)}
          </div>
        ))}
        <motion.span className="absolute bottom-1 top-1 w-0.5 bg-[#FF5A00]" style={{ left: x }} />
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div className="grid grid-cols-3 gap-2">
          {["IN", "OUT", "CUT", "REW", "PLAY", "STOP"].map((k) => <span key={k} className="key flex h-10 w-12 items-center justify-center rounded-lg font-mono text-[9px] font-semibold text-[#1C1917]">{k}</span>)}
        </div>
        <motion.div className="knob relative h-24 w-24 rounded-full" style={{ rotate: rot }}>
          <span className="absolute left-[44px] top-2 h-4 w-1.5 rounded-full bg-[#FF5A00]" />
        </motion.div>
      </div>
    </div>
  );
};

const Reel = ({ rot, size }) => (
  <motion.div className="knob relative rounded-full" style={{ width: size, height: size, rotate: rot }}>
    {[0, 60, 120].map((a) => <span key={a} className="absolute left-1/2 top-1/2 h-[72%] w-1.5 rounded bg-[#B5AC97]" style={{ transform: `translate(-50%,-50%) rotate(${a}deg)` }} />)}
    <span className="absolute inset-[38%] rounded-full bg-[#1C1917]" />
  </motion.div>
);

const CinemaCamera = ({ lp }) => {
  const rot = useTransform(lp, [0, 1], [0, 720]);
  return (
    <div className="flex flex-col items-center">
      <div className="z-10 -mb-4 ml-24 flex items-end gap-2"><Reel rot={rot} size={110} /><Reel rot={rot} size={88} /></div>
      <div className="flex items-center">
        <div className="flex h-28 w-24 items-center justify-start rounded-l-2xl bg-[#1C1917] pl-2">
          <span className="h-24 w-4 rounded-full bg-[#2B2824] shadow-[inset_0_0_0_2px_#57534E]" />
          <span className="ml-2 h-20 w-3 rounded-full bg-[#2B2824]" />
        </div>
        <div className="chassis relative h-40 w-60 rounded-2xl p-4">
          <span className="led absolute right-4 top-4 h-2.5 w-2.5 rounded-full bg-[#FF5A00] text-[#FF5A00]" />
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#57534E]">Rec · 24fps</span>
          <div className="vfd mt-3 h-14 w-28 rounded-lg" />
          <div className="mt-3 flex gap-2">{[0, 1, 2].map((k) => <span key={k} className="key h-6 w-10 rounded-md" />)}</div>
        </div>
      </div>
    </div>
  );
};

const PhotoCamera = ({ lp }) => {
  const ring = useTransform(lp, [0, 1], [0, 220]);
  const focus = useTransform(lp, [0, 0.6], [9, 0]);
  const filter = useMotionTemplate`blur(${focus}px)`;
  return (
    <div className="relative pt-8">
      <div className="chassis absolute left-10 top-0 h-12 w-28 rounded-t-2xl" />
      <span className="absolute right-12 top-3 h-6 w-10 rounded-t-lg bg-[#FF5A00]" />
      <div className="chassis relative h-44 w-80 rounded-[24px]">
        <div className="absolute inset-x-0 top-1/2 h-16 -translate-y-1/2 bg-[#2B2824]" />
        <div className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full border-[6px] border-[#D5CFBF] bg-[#1C1917]">
          <motion.div className="absolute inset-2 rounded-full border-2 border-dashed border-[#A8A29E]" style={{ rotate: ring }} />
          <motion.div className="absolute inset-6 rounded-full bg-[radial-gradient(circle_at_35%_35%,#5b6b8c,#0b0f18_70%)]" style={{ filter }}>
            <span className="absolute left-[28%] top-[24%] h-4 w-4 rounded-full bg-white/70" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const Monitor = ({ lp }) => {
  const len = useTransform(lp, [0.05, 0.75], [0, 1]);
  return (
    <div className="flex flex-col items-center">
      <div className="chassis rounded-[22px] p-3">
        <div className="flex h-48 w-[320px] overflow-hidden rounded-xl bg-[#1C1917]">
          <div className="w-20 space-y-1.5 border-r border-[#2B2824] p-2">
            {["Layer 4", "Layer 3", "Brush", "Base"].map((l, i) => (
              <div key={l} className={`rounded px-1.5 py-1 font-mono text-[9px] ${i === 2 ? "bg-[#FF5A00] text-[#1C1917]" : "bg-[#2B2824] text-[#D6D3D1]"}`}>{l}</div>
            ))}
          </div>
          <div className="relative m-2 flex-1 rounded bg-[#F4F1EA]">
            <svg viewBox="0 0 200 140" className="absolute inset-0 h-full w-full">
              <motion.path d="M15 110 C 50 20, 90 130, 120 60 S 180 40, 190 20" fill="none" stroke="#FF5A00" strokeWidth="9" strokeLinecap="round" style={{ pathLength: len }} />
            </svg>
          </div>
        </div>
      </div>
      <div className="h-8 w-16 bg-[#CFC7B5]" />
      <div className="chassis h-3 w-40 rounded-full" />
    </div>
  );
};

const Block = ({ lp, k, className }) => {
  const opacity = useTransform(lp, [k * 0.1, k * 0.1 + 0.12], [0, 1]);
  return <motion.span className={`absolute rounded ${className}`} style={{ opacity }} />;
};

const Tablet = ({ lp }) => (
  <div className="relative">
    <div className="rounded-[26px] bg-[#1C1917] p-4 shadow-[0_30px_60px_-20px_rgba(0,0,0,.7)]">
      <div className="relative h-52 w-80 rounded-xl bg-[#F4F1EA]">
        <Block lp={lp} k={0} className="left-3 right-3 top-3 h-5 bg-[#D5CFBF]" />
        <Block lp={lp} k={1} className="left-3 top-11 h-20 w-[55%] border-2 border-dashed border-[#78716C]" />
        <Block lp={lp} k={2} className="right-3 top-11 h-20 w-[35%] bg-[#EAE5D9]" />
        {["left-[3%]", "left-[36%]", "left-[69%]"].map((l, c) => <Block key={l} lp={lp} k={3 + c} className={`${l} top-[136px] h-12 w-[28%] bg-[#EAE5D9]`} />)}
        <Block lp={lp} k={6} className="bottom-3 left-3 h-6 w-24 bg-[#FF5A00]" />
      </div>
    </div>
    <span className="absolute -right-8 top-6 h-44 w-3 rotate-[18deg] rounded-full bg-[#D5CFBF] shadow-[inset_0_-10px_0_#FF5A00]" />
  </div>
);

const Note = ({ lp, i, color, top }) => {
  const x = useTransform(lp, [0.1 + i * 0.07, 0.55 + i * 0.07], [0, 228 - (i % 2) * 110]);
  return <motion.span className="absolute left-4 h-12 w-[88px] rounded-md shadow-[0_4px_0_rgba(0,0,0,.15)]" style={{ x, top, background: color }} />;
};

const Board = ({ lp }) => (
  <div className="chassis relative h-[250px] w-[360px] rounded-[22px]">
    <div className="grid grid-cols-3 px-4 pt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[#57534E]">
      <span>Now</span><span>Next</span><span>Later</span>
    </div>
    <span className="absolute bottom-3 left-[33%] top-9 w-px bg-[#CFC7B5]" />
    <span className="absolute bottom-3 left-[66%] top-9 w-px bg-[#CFC7B5]" />
    {["#FF7A2E", "#C9A227", "#6BF5CB", "#F4F1EA"].map((c, i) => <Note key={c} lp={lp} i={i} color={c} top={40 + i * 50} />)}
  </div>
);

const Computer = () => <div className="scale-[0.8]"><Mac3D rotateY={-20} testId="journey-mac" /></div>;

export const OBJECTS = { edit: EditDeck, film: CinemaCamera, photo: PhotoCamera, ps: Monitor, ui: Tablet, pm: Board, build: Computer };
