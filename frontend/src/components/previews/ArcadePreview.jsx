import { useState } from "react";

const CH = ["Founder", "Product manager", "Designer", "Video editor", "Builder"];

export const ArcadePreview = () => {
  const [ch, setCh] = useState(0);
  return (
    <div className="flex min-h-[620px] items-center justify-center bg-[#1a1410] p-5 sm:p-10">
      <div className="w-full max-w-4xl rounded-[40px] bg-[#3a2a1c] p-4 shadow-[inset_0_2px_0_#5a4330] sm:p-6">
        <div className="relative overflow-hidden rounded-[32px] bg-[#04130b] p-6 text-[#4ade80] sm:p-12" style={{ boxShadow: "inset 0 0 80px rgba(0,0,0,.9)" }}>
          <div className="scanlines pointer-events-none absolute inset-0" />
          <div className="relative" style={{ textShadow: "0 0 10px rgba(74,222,128,.8)" }}>
            <p className="font-vfd text-2xl">CH {String(ch + 1).padStart(2, "0")} · {CH[ch].toUpperCase()}</p>
            <h2 className="mt-6 text-2xl leading-relaxed sm:text-4xl" style={{ fontFamily: "'Press Start 2P', monospace" }}>PICK THE RIGHT PROBLEM. SHIP IT FAST.</h2>
            <p className="mt-6 font-vfd text-2xl text-[#bbf7d0]">[YOUR NAME] — PRESS START<span className="blink">_</span></p>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between px-2">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#d6c3a5]">Channel</span>
          <div className="flex gap-3">
            {["−", "+"].map((s, i) => (
              <button key={s} data-sound="tick" data-testid={`arcade-ch-${i ? "up" : "down"}`} onClick={() => setCh((c) => (c + (i ? 1 : CH.length - 1)) % CH.length)}
                className="knob h-12 w-12 rounded-full text-xl font-bold text-[#3a2a1c]">{s}</button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
