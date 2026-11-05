import { useState, useEffect, useRef } from "react";
import { Gamepad2, Disc, Play, RotateCcw, ChevronDown, ChevronUp } from "lucide-react";
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
  const [open, setOpen] = useState(false);
  const [activeGame, setActiveGame] = useState("snake");
  const [activeKeys, setActiveKeys] = useState({});
  const [driveLed, setDriveLed] = useState(false);
  const triggerRef = useRef(null);

  // Recalculate Lenis scroll bounds when opening/closing
  useEffect(() => {
    if (window.__lenis) {
      window.__lenis.resize();
    }
  }, [open]);

  const toggle = () => {
    playSound(open ? "switch" : "open");
    if (!open) {
      setOpen(true);
      setTimeout(() => {
        if (window.__lenis) window.__lenis.resize();
        if (triggerRef.current) {
          window.__lenis?.scrollTo(triggerRef.current, { offset: -60, duration: 1.0 });
        }
      }, 50);
    } else {
      close();
    }
  };

  const close = () => {
    playSound("switch");
    if (triggerRef.current) {
      window.__lenis?.scrollTo(triggerRef.current, { offset: -60, duration: 0.8 });
    }
    setOpen(false);
    setTimeout(() => {
      if (window.__lenis) window.__lenis.resize();
    }, 100);
  };

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
    if (!open) return undefined;
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
  }, [open]);

  const curDisk = FLOPPY_DISKS.find((d) => d.id === activeGame) || FLOPPY_DISKS[0];

  return (
    <section
      id="arcade"
      className="relative w-full border-t border-[#262320] bg-[#0E0D0C] text-[#F4F1EA]"
      data-testid="arcade-section"
    >
      <div ref={triggerRef} />

      {/* 1. THE TRIGGER DRAWER BAR (When Closed or Open) */}
      <div className={`w-full bg-[#121110] ${open ? "border-b border-[#262320]" : ""}`}>
        <button
          onClick={toggle}
          data-sound="open"
          data-testid="arcade-toggle-btn"
          className="group flex w-full items-center justify-between px-6 py-5 sm:px-12 sm:py-6 text-left transition-colors hover:bg-[#181614] focus:outline-none"
        >
          <div className="flex items-center gap-3.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#292524] text-[#FF5A00] border border-[#3E3A35] group-hover:scale-105 transition-transform">
              <Gamepad2 size={18} />
            </span>
            <div>
              <span className="block font-arcade text-[10px] text-[#FF5A00]">
                EASTER EGG · BONUS LEVEL
              </span>
              <span className="font-display text-xl sm:text-2xl font-black tracking-tight text-white">
                Retro Arcade Station ·{" "}
                <span className="text-[#A8A29E] font-normal text-sm sm:text-base font-mono">
                  3.5&quot; Floppy ROMs
                </span>
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden font-mono text-xs uppercase tracking-widest text-[#A8A29E] sm:inline">
              {open ? "[CLOSE ARCADE]" : "[INSERT FLOPPY & PLAY ▼]"}
            </span>
            <span
              className={`flex h-10 w-10 items-center justify-center rounded-full border border-[#44403C] transition-all duration-300 ${
                open
                  ? "rotate-180 bg-[#FF5A00] text-black border-[#FF5A00]"
                  : "bg-[#24211D] text-[#F4F1EA] group-hover:border-[#FF5A00] group-hover:text-[#FF5A00]"
              }`}
            >
              <ChevronDown size={18} />
            </span>
          </div>
        </button>
      </div>

      {/* 2. THE UNFURLED RETRO ARCADE CHAMBER */}
      {open && (
        <div className="w-full px-4 pt-14 pb-0 sm:px-8 sm:pt-16 sm:pb-0 lg:pt-20 lg:pb-0" data-testid="arcade-chamber">
          <div className="mx-auto max-w-5xl">
            {/* Section Eyebrow & Headline */}
            <div className="text-center">
              <h3 className="font-display text-3xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Insert <span className="italic text-[#FF5A00]" style={{ fontFamily: "Fraunces" }}>Floppy Disk</span> &amp; Play
              </h3>
              <p className="mx-auto mt-2 max-w-xl text-xs sm:text-base leading-relaxed text-[#A8A29E]">
                Click any 3.5&quot; floppy disk below to mount the ROM into the vintage CRT monitor.
                Control via the on-screen wired gamepad or your physical keyboard.
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

          {/* EJECT / CLOSE BOTTOM BAR */}
          <div className="mt-14 w-full border-t border-[#262320] bg-[#141210] -mx-4 sm:-mx-8 px-6 py-4 sm:px-12 sm:py-5">
            <button
              onClick={close}
              data-sound="switch"
              className="group flex w-full items-center justify-between text-left transition-colors hover:text-[#FF5A00] focus:outline-none"
            >
              <div className="flex items-center gap-2.5 font-display text-base sm:text-lg font-black text-white group-hover:text-[#FF5A00] transition-colors">
                <ChevronUp size={18} className="text-[#FF5A00]" />
                <span>▲ Eject ROM &amp; Close Arcade Station</span>
              </div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#FF5A00]">
                [CLOSE]
              </span>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
