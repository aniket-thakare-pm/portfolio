import { useState, useEffect } from "react";
import { Gamepad2, Disc, Play, RotateCcw } from "lucide-react";
import { RetroFloppy } from "../arcade/RetroFloppy";
import { RetroGamepad } from "../arcade/RetroGamepad";
import { ArcadeEngine } from "../arcade/ArcadeEngine";
import { playSound } from "@/lib/sound";

const FLOPPY_DISKS = [
  {
    id: "snake",
    num: 1,
    exec: "SNAKE.EXE",
    title: "Nokia 3310 Snake",
    genre: "CLASSIC RETRO",
    color: "#166534",
    accent: "#4ADE80",
    desc: "Navigate the green phosphor grid. Collect apples, avoid tail & borders.",
  },
  {
    id: "invaders",
    num: 2,
    exec: "INVADERS.COM",
    title: "Space Invaders",
    genre: "ALIEN DEFENSE",
    color: "#1E3A8A",
    accent: "#60A5FA",
    desc: "Defend against descending alien waves. Move turret and shoot lasers.",
  },
  {
    id: "breakout",
    num: 3,
    exec: "BREAKOUT.BIN",
    title: "Arkanoid / Breakout",
    genre: "PADDLE BOUNCE",
    color: "#9A3412",
    accent: "#FB923C",
    desc: "Rebound the ball with your paddle to shatter color-coded barrier bricks.",
  },
];

export const Arcade = () => {
  const [activeGame, setActiveGame] = useState("snake");
  const [activeKeys, setActiveKeys] = useState({});
  const [driveLed, setDriveLed] = useState(false);

  // Trigger custom action for the game engine
  const dispatchAction = (action) => {
    playSound("key");
    window.dispatchEvent(new CustomEvent("arcade-action", { detail: action }));
  };

  // Change Floppy Disk
  const selectDisk = (id) => {
    if (id === activeGame) return;
    playSound("switch");
    setDriveLed(true);
    setTimeout(() => setDriveLed(false), 600);
    setActiveGame(id);
  };

  // Listen for keyboard down/up to visually reflect on the controller
  useEffect(() => {
    const handleDown = (e) => {
      setActiveKeys((prev) => ({ ...prev, [e.code]: true }));
    };
    const handleUp = (e) => {
      setActiveKeys((prev) => {
        const next = { ...prev };
        delete next[e.code];
        return next;
      });
    };
    window.addEventListener("keydown", handleDown);
    window.addEventListener("keyup", handleUp);
    return () => {
      window.removeEventListener("keydown", handleDown);
      window.removeEventListener("keyup", handleUp);
    };
  }, []);

  const curDisk = FLOPPY_DISKS.find((d) => d.id === activeGame) || FLOPPY_DISKS[0];

  return (
    <section
      id="arcade"
      className="border-t border-[#262320] bg-[#0E0D0C] px-4 py-14 text-[#F4F1EA] sm:px-8 lg:py-24"
      data-testid="arcade-section"
    >
      <div className="mx-auto max-w-5xl">
        {/* Section Eyebrow & Headline */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#2D2A26] bg-[#181614] px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-[#FF5A00]">
            <Gamepad2 size={14} /> Bonus Level · Retro Arcade Station
          </div>

          <h2 className="mt-4 font-display text-3xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            Insert <span className="italic text-[#FF5A00]" style={{ fontFamily: "Fraunces" }}>Floppy Disk</span> & Play
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-xs sm:text-base leading-relaxed text-[#A8A29E]">
            Click any 3.5" floppy disk below to load the ROM into the vintage CRT monitor.
            Play with the wired on-screen controller or your physical keyboard.
          </p>
        </div>

        {/* 1. FLOPPY DISKS RACK / SELECTOR */}
        <div className="mt-8 sm:mt-12 flex items-end justify-center gap-3 sm:gap-8">
          {FLOPPY_DISKS.map((disk) => (
            <RetroFloppy
              key={disk.id}
              disk={disk}
              isActive={activeGame === disk.id}
              onClick={selectDisk}
            />
          ))}
        </div>

        {/* Disk Prompt info */}
        <div className="mt-4 text-center">
          <span className="font-mono text-xs text-[#78716C] uppercase tracking-wider">
            [CLICK A DISK ABOVE TO SWAP THE ACTIVE GAME]
          </span>
        </div>

        {/* 2. RETRO ARCADE CRT MONITOR */}
        <div className="mx-auto mt-10 max-w-2xl">
          <div className="relative rounded-[32px] border-4 border-[#292524] bg-[#1E1B18] p-5 sm:p-7 shadow-[0_30px_70px_rgba(0,0,0,0.8),inset_0_2px_0_rgba(255,255,255,0.15)]">
            {/* Top CRT Status Marquee */}
            <div className="mb-4 flex flex-wrap items-center justify-between border-b border-[#332E2A] pb-3 font-mono text-[11px] uppercase tracking-wider">
              <div className="flex items-center gap-2 text-[#4ADE80]">
                <span className="h-2 w-2 rounded-full bg-[#4ADE80] animate-pulse" />
                <span>CRT-1984 · 60Hz RGB</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[#A8A29E]">DISK:</span>
                <span className="rounded bg-black/60 px-2 py-0.5 font-bold text-[#FF5A00]">
                  {curDisk.exec}
                </span>
              </div>
            </div>

            {/* CRT Screen Frame & Bezel */}
            <div className="relative overflow-hidden rounded-2xl border-4 border-[#121110] bg-black p-2.5 shadow-[inset_0_0_20px_rgba(0,0,0,0.9)]">
              {/* Virtual Game Engine Canvas */}
              <ArcadeEngine gameId={activeGame} onSelectGame={selectDisk} />
            </div>

            {/* Bottom Monitor Console Bar */}
            <div className="mt-5 flex flex-wrap items-center justify-between gap-4 border-t border-[#332E2A] pt-4 font-mono text-xs">
              {/* Floppy Drive Slot Representation */}
              <div className="flex items-center gap-3 rounded-lg border border-[#332E2A] bg-[#141210] px-3.5 py-2">
                <Disc size={15} className={driveLed ? "text-[#FF5A00] animate-spin" : "text-[#78716C]"} />
                <div className="flex flex-col">
                  <span className="text-[9px] uppercase tracking-wider text-[#78716C]">
                    FLOPPY DRIVE A:
                  </span>
                  <span className="text-[10px] font-bold text-[#E4E4E7]">
                    {curDisk.exec}
                  </span>
                </div>
                <div className="ml-2 flex items-center gap-1">
                  <span
                    className={`h-2 w-2 rounded-full transition-colors ${
                      driveLed ? "bg-[#EF4444] animate-ping" : "bg-[#22C55E]"
                    }`}
                  />
                  <span className="text-[8px] text-[#A8A29E]">
                    {driveLed ? "BUSY" : "READY"}
                  </span>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => dispatchAction("BUTTON_A")}
                  data-sound="key"
                  className="inline-flex items-center gap-1.5 rounded-xl bg-[#FF5A00] px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider text-[#1C1917] shadow-md hover:bg-[#E04F00] active:scale-95 transition-transform"
                >
                  <Play size={13} /> Action (A)
                </button>
                <button
                  onClick={() => dispatchAction("START")}
                  data-sound="tick"
                  title="Restart Game"
                  className="inline-flex items-center gap-1.5 rounded-xl border border-[#3E3A35] bg-[#24211D] px-3.5 py-2 font-mono text-xs text-[#A8A29E] hover:text-white active:scale-95 transition-transform"
                >
                  <RotateCcw size={14} /> Restart
                </button>
              </div>
            </div>
          </div>

          {/* 3. WIRED RETRO GAMEPAD */}
          <RetroGamepad onAction={dispatchAction} activeKeys={activeKeys} />

          {/* Controls Legend */}
          <div className="mt-8 rounded-2xl border border-[#262320] bg-[#141210]/60 p-4 text-center font-mono text-[11px] text-[#A8A29E]">
            <p className="text-white font-bold tracking-wider uppercase mb-1">
              INPUT MATRIX SUPPORTED
            </p>
            <p className="text-[#78716C]">
              <span className="text-[#FF5A00]">D-PAD / ARROW KEYS / WASD:</span> Move &bull;{" "}
              <span className="text-[#FF5A00]">[A] / SPACE:</span> Shoot / Launch / Action &bull;{" "}
              <span className="text-[#FF5A00]">[B] / ESC:</span> Reset &bull;{" "}
              <span className="text-[#FF5A00]">SELECT:</span> Cycle Floppy Game
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
