import React from "react";

export const RetroFloppy = ({ disk, isActive, onClick }) => {
  return (
    <button
      onClick={() => onClick(disk.id)}
      data-sound="switch"
      data-testid={`floppy-${disk.id}`}
      className={`group relative flex flex-col items-center justify-between text-left transition-all duration-300 focus:outline-none ${
        isActive
          ? "-translate-y-4 shadow-[0_20px_35px_-10px_rgba(255,90,0,0.35)] ring-2 ring-[#FF5A00]"
          : "hover:-translate-y-3 hover:shadow-[0_15px_30px_-8px_rgba(0,0,0,0.6)] opacity-85 hover:opacity-100"
      }`}
      style={{ width: "160px", height: "175px" }}
    >
      {/* Active Indicator Pin */}
      {isActive && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#FF5A00] px-2 py-0.5 font-mono text-[9px] font-black uppercase tracking-wider text-black shadow-md animate-pulse">
          LOADED
        </span>
      )}

      {/* Floppy Plastic Casing */}
      <div
        className="relative flex h-full w-full flex-col justify-between overflow-hidden rounded-[8px] p-2.5 shadow-xl border border-black/40"
        style={{ backgroundColor: disk.color }}
      >
        {/* Top-Right Chamfered Corner */}
        <div className="absolute right-0 top-0 h-4 w-4 bg-[#0E0D0C] [clip-path:polygon(100%_0,0_0,100%_100%)] pointer-events-none" />

        {/* Metal Sliding Shutter (Top) */}
        <div className="relative mx-auto h-12 w-24 rounded-t-[3px] border border-black/30 bg-gradient-to-b from-[#E5E5E5] via-[#CCCCCC] to-[#999999] p-1.5 shadow-inner">
          {/* Shutter Oval Window showing magnetic disk inside */}
          <div className="mx-auto mt-1 h-5 w-8 rounded-full bg-[#18181B] border border-black/60 flex items-center justify-center">
            <div className="h-2 w-2 rounded-full bg-[#27272A]" />
          </div>
          {/* Direction Arrow */}
          <div className="mt-1 flex justify-center opacity-40">
            <span className="font-mono text-[7px] text-black font-bold">▲ INSERT ▲</span>
          </div>
        </div>

        {/* Paper Sticker Label (Center/Bottom) */}
        <div className="relative mt-2 flex flex-1 flex-col justify-between rounded-[4px] border border-black/20 bg-[#F5F2EB] p-2 shadow-sm text-[#1C1917]">
          {/* Top rule & Brand */}
          <div className="flex items-center justify-between border-b border-[#D5CFBF] pb-1">
            <span className="font-mono text-[8px] font-bold text-[#78716C] uppercase tracking-wider">
              AGY-2HD · 1.44MB
            </span>
            <span
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: disk.accent }}
            />
          </div>

          {/* Game Title */}
          <div className="py-1">
            <p className="font-mono text-[9px] font-bold text-[#A8452F] tracking-tight">
              {disk.exec}
            </p>
            <p className="font-display text-xs font-black tracking-tight text-[#1C1917] leading-none mt-0.5">
              {disk.title}
            </p>
          </div>

          {/* Genre & Disk No */}
          <div className="flex items-center justify-between border-t border-[#D5CFBF] pt-1 font-mono text-[8px] text-[#57534E]">
            <span className="truncate">{disk.genre}</span>
            <span className="font-bold">#0{disk.num}</span>
          </div>
        </div>

        {/* Bottom Notches */}
        <div className="mt-1.5 flex justify-between px-1">
          {/* Write-protect slider */}
          <div className="h-2 w-3 rounded-sm bg-black/40 border border-white/10" />
          {/* Density detection hole */}
          <div className="h-2 w-2 rounded-sm bg-black/50" />
        </div>
      </div>
    </button>
  );
};
