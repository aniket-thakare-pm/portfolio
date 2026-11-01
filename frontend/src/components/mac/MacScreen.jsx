import { ScreenGame } from "./ScreenGame";

const LEVELS = [0.55, 0.8, 1.1];

const PixelArt = ({ rows }) => (
  <div className="pixel-art grid w-fit grid-cols-8" data-testid="mac-pixel-art">
    {rows.join("").split("").map((c, i) => <span key={i} className={`h-[5px] w-[5px] ${c === "#" ? "bg-[#4ade80]" : ""}`} />)}
  </div>
);

export const MacScreen = ({ text, pixel, on, booting, bright, game, onTap }) => (
  <div onClick={onTap} className={`mac-screen relative h-full w-full overflow-hidden ${onTap ? "cursor-pointer" : ""}`}
    style={{ filter: `brightness(${LEVELS[bright]})` }} data-testid="mac-screen">
    {booting && <div className="mac-boot absolute inset-0" />}
    {on && !booting && (
      <div className="mac-flicker mac-glow absolute inset-0 flex flex-col justify-between p-3 text-[#4ade80]">
        <span className="font-vfd text-[15px] leading-none opacity-80">PM-01 · {game ? "ARCADE" : "READY"}</span>
        {game ? <ScreenGame /> : (
          <div key={text} className="mac-glitch">
            {pixel && <div className="mb-2"><PixelArt rows={pixel} /></div>}
            <span className="font-arcade text-[12px] leading-[1.6]" data-testid="mac-screen-text">{text}<span className="blink">_</span></span>
          </div>
        )}
        {!game && <span className="font-vfd text-[15px] leading-none opacity-80">&gt; RUN</span>}
      </div>
    )}
    <div className="scanlines pointer-events-none absolute inset-0 opacity-50" />
    <div className="mac-glass pointer-events-none absolute inset-0" />
  </div>
);
