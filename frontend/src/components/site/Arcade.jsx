import { useState } from "react";
import { ScreenGame } from "@/components/mac/ScreenGame";
import { Gamepad2, Play, RotateCcw } from "lucide-react";
import { playSound } from "@/lib/sound";

export const Arcade = () => {
  const [key, setKey] = useState(0);

  const jump = () => {
    playSound("key");
    window.dispatchEvent(new Event("mac-jump"));
  };

  const restart = () => {
    playSound("blip");
    setKey((k) => k + 1);
  };

  return (
    <section id="arcade" className="border-t border-[#262320] bg-[#0E0D0C] px-5 py-16 text-[#F4F1EA] sm:px-8 lg:py-24" data-testid="arcade-section">
      <div className="mx-auto max-w-4xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#2D2A26] bg-[#181614] px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-[#FF5A00]">
          <Gamepad2 size={14} /> Bonus Level · Retro Arcade
        </div>

        <h2 className="mt-4 font-display text-3xl font-black tracking-tight text-white sm:text-5xl">
          Play <span className="italic text-[#FF5A00]" style={{ fontFamily: "Fraunces" }}>Ship it.</span>
        </h2>
        <p className="mx-auto mt-2 max-w-md text-sm text-[#A8A29E] sm:text-base">
          Jump over production bugs and ship features. Press Space, tap the screen, or hit the Jump button.
        </p>

        {/* Retro CRT Terminal Box */}
        <div className="mx-auto mt-8 max-w-md">
          <div className="relative overflow-hidden rounded-2xl border-4 border-[#2D2A26] bg-[#141210] p-4 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
            {/* Top CRT Status */}
            <div className="mb-3 flex items-center justify-between border-b border-[#262320] pb-2 font-mono text-[11px] uppercase tracking-wider text-[#4ade80]">
              <span className="flex items-center gap-1.5">
                <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-[#4ade80]" />
                PM-01 ARCADE ENGINE
              </span>
              <span className="text-[#A8A29E]">READY</span>
            </div>

            {/* Canvas Screen */}
            <div
              onClick={jump}
              className="cursor-pointer relative overflow-hidden rounded-xl border border-[#262320] bg-black p-2 select-none"
              title="Click or tap to jump"
            >
              <ScreenGame key={key} />
              <div className="scanlines pointer-events-none absolute inset-0 opacity-40" />
            </div>

            {/* Controls Bar */}
            <div className="mt-4 flex items-center justify-between gap-3 pt-2">
              <button
                onClick={jump}
                data-sound="key"
                className="key key-orange inline-flex flex-1 items-center justify-center gap-2 rounded-xl py-3 font-mono text-xs font-bold uppercase tracking-widest text-[#1C1917]"
              >
                <Play size={14} /> Jump (Space)
              </button>
              <button
                onClick={restart}
                data-sound="tick"
                title="Restart Game"
                className="key inline-flex items-center justify-center rounded-xl p-3 text-[#A8A29E] hover:text-white"
              >
                <RotateCcw size={16} />
              </button>
            </div>
          </div>
          <p className="mt-3 font-mono text-[11px] text-[#78716C]">
            HIGH SCORE PERSISTS IN LOCAL STORAGE · PRESS ESC/RESTART TO RESET
          </p>
        </div>
      </div>
    </section>
  );
};
