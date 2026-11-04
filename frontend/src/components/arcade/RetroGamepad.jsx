import React from "react";
import { ArrowUp, ArrowDown, ArrowLeft, ArrowRight } from "lucide-react";

export const RetroGamepad = ({ onAction, activeKeys = {} }) => {
  return (
    <div className="relative mx-auto mt-6 flex flex-col items-center">
      {/* Coiled Wire connecting Gamepad to CRT */}
      <div className="flex justify-center -mb-2 z-0">
        <svg width="120" height="36" viewBox="0 0 120 36" fill="none" className="opacity-60">
          <path
            d="M60 0 C60 12, 40 10, 40 18 C40 26, 80 24, 80 32 C80 36, 60 36, 60 36"
            stroke="#44403C"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Main Gamepad Chassis */}
      <div className="relative z-10 flex w-full max-w-md items-center justify-between rounded-[28px] border-4 border-[#292524] bg-[#E7E2D5] px-6 py-5 shadow-[0_15px_30px_rgba(0,0,0,0.5),inset_0_2px_0_rgba(255,255,255,0.4)] text-[#1C1917] select-none">
        {/* Left Side: D-PAD */}
        <div className="relative flex flex-col items-center">
          <div className="relative h-28 w-28 flex items-center justify-center">
            {/* D-Pad Base Cross Background */}
            <div className="absolute h-24 w-8 rounded-md bg-[#292524] shadow-inner" />
            <div className="absolute h-8 w-24 rounded-md bg-[#292524] shadow-inner" />
            <div className="absolute h-8 w-8 rounded-full bg-[#1C1917]" />

            {/* UP Button */}
            <button
              onMouseDown={() => onAction("UP")}
              onTouchStart={(e) => { e.preventDefault(); onAction("UP"); }}
              data-testid="gamepad-up"
              className={`absolute top-0 h-8 w-8 rounded-t-md flex items-center justify-center text-white transition-all ${
                activeKeys.UP || activeKeys.ArrowUp || activeKeys.KeyW
                  ? "bg-[#FF5A00] translate-y-0.5 shadow-none"
                  : "bg-[#3D3835] hover:bg-[#4E4844] active:bg-[#FF5A00] shadow-[0_2px_0_#1C1917]"
              }`}
            >
              <ArrowUp size={14} />
            </button>

            {/* DOWN Button */}
            <button
              onMouseDown={() => onAction("DOWN")}
              onTouchStart={(e) => { e.preventDefault(); onAction("DOWN"); }}
              data-testid="gamepad-down"
              className={`absolute bottom-0 h-8 w-8 rounded-b-md flex items-center justify-center text-white transition-all ${
                activeKeys.DOWN || activeKeys.ArrowDown || activeKeys.KeyS
                  ? "bg-[#FF5A00] -translate-y-0.5 shadow-none"
                  : "bg-[#3D3835] hover:bg-[#4E4844] active:bg-[#FF5A00] shadow-[0_-2px_0_#1C1917]"
              }`}
            >
              <ArrowDown size={14} />
            </button>

            {/* LEFT Button */}
            <button
              onMouseDown={() => onAction("LEFT")}
              onTouchStart={(e) => { e.preventDefault(); onAction("LEFT"); }}
              data-testid="gamepad-left"
              className={`absolute left-0 h-8 w-8 rounded-l-md flex items-center justify-center text-white transition-all ${
                activeKeys.LEFT || activeKeys.ArrowLeft || activeKeys.KeyA
                  ? "bg-[#FF5A00] translate-x-0.5 shadow-none"
                  : "bg-[#3D3835] hover:bg-[#4E4844] active:bg-[#FF5A00] shadow-[2px_0_0_#1C1917]"
              }`}
            >
              <ArrowLeft size={14} />
            </button>

            {/* RIGHT Button */}
            <button
              onMouseDown={() => onAction("RIGHT")}
              onTouchStart={(e) => { e.preventDefault(); onAction("RIGHT"); }}
              data-testid="gamepad-right"
              className={`absolute right-0 h-8 w-8 rounded-r-md flex items-center justify-center text-white transition-all ${
                activeKeys.RIGHT || activeKeys.ArrowRight || activeKeys.KeyD
                  ? "bg-[#FF5A00] -translate-x-0.5 shadow-none"
                  : "bg-[#3D3835] hover:bg-[#4E4844] active:bg-[#FF5A00] shadow-[-2px_0_0_#1C1917]"
              }`}
            >
              <ArrowRight size={14} />
            </button>
          </div>
          <span className="mt-1 font-mono text-[9px] font-bold tracking-widest text-[#78716C]">
            DIRECTION
          </span>
        </div>

        {/* Center Section: SELECT & START */}
        <div className="flex flex-col items-center justify-center px-3">
          <div className="font-arcade text-[8px] uppercase tracking-widest text-[#78716C] mb-3">
            AGY-1984 PAD
          </div>

          <div className="flex items-center gap-4">
            {/* SELECT (Cycles Floppy Games) */}
            <div className="flex flex-col items-center">
              <button
                onClick={() => onAction("SELECT")}
                data-testid="gamepad-select"
                title="Change Game (Floppy)"
                className="h-3 w-10 -rotate-12 rounded-full border border-black/40 bg-[#57534E] shadow-[0_2px_0_#292524] active:translate-y-0.5 active:shadow-none transition-transform"
              />
              <span className="mt-2 font-mono text-[8px] font-bold tracking-wider text-[#78716C]">
                SELECT
              </span>
            </div>

            {/* START (Restart/Pause) */}
            <div className="flex flex-col items-center">
              <button
                onClick={() => onAction("START")}
                data-testid="gamepad-start"
                title="Start or Restart"
                className="h-3 w-10 -rotate-12 rounded-full border border-black/40 bg-[#57534E] shadow-[0_2px_0_#292524] active:translate-y-0.5 active:shadow-none transition-transform"
              />
              <span className="mt-2 font-mono text-[8px] font-bold tracking-wider text-[#78716C]">
                START
              </span>
            </div>
          </div>

          {/* Indicator Light */}
          <div className="mt-4 flex items-center gap-1.5 font-mono text-[8px] text-[#A8A29E]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#22C55E] animate-pulse" />
            <span>PORT 1 READY</span>
          </div>
        </div>

        {/* Right Side: A & B Action Buttons */}
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-3 rotate-[-15deg] my-2">
            {/* B Button (Reset/Back) */}
            <div className="flex flex-col items-center">
              <button
                onMouseDown={() => onAction("BUTTON_B")}
                onTouchStart={(e) => { e.preventDefault(); onAction("BUTTON_B"); }}
                data-testid="gamepad-btn-b"
                className={`h-11 w-11 rounded-full border-2 border-black/50 flex items-center justify-center font-display text-sm font-black text-white transition-all ${
                  activeKeys.BUTTON_B || activeKeys.KeyB || activeKeys.KeyX
                    ? "bg-[#2563EB] translate-y-1 shadow-none"
                    : "bg-[#1E3A8A] hover:bg-[#2563EB] shadow-[0_4px_0_#0F172A] active:translate-y-1 active:shadow-none"
                }`}
              >
                B
              </button>
              <span className="mt-1 font-mono text-[9px] font-bold text-[#78716C]">
                RESET
              </span>
            </div>

            {/* A Button (Primary Action: Shoot/Jump/Start) */}
            <div className="flex flex-col items-center">
              <button
                onMouseDown={() => onAction("BUTTON_A")}
                onTouchStart={(e) => { e.preventDefault(); onAction("BUTTON_A"); }}
                data-testid="gamepad-btn-a"
                className={`h-11 w-11 rounded-full border-2 border-black/50 flex items-center justify-center font-display text-sm font-black text-white transition-all ${
                  activeKeys.BUTTON_A || activeKeys.Space || activeKeys.KeyZ || activeKeys.Enter
                    ? "bg-[#FF5A00] translate-y-1 shadow-none"
                    : "bg-[#DC2626] hover:bg-[#EF4444] shadow-[0_4px_0_#7F1D1D] active:translate-y-1 active:shadow-none"
                }`}
              >
                A
              </button>
              <span className="mt-1 font-mono text-[9px] font-bold text-[#FF5A00]">
                FIRE / RUN
              </span>
            </div>
          </div>
          <span className="mt-1 font-mono text-[9px] font-bold tracking-widest text-[#78716C]">
            ACTIONS
          </span>
        </div>
      </div>
    </div>
  );
};
