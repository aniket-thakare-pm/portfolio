import { ScreenGame } from "./ScreenGame";

const LEVELS = [0.55, 0.8, 1.1];

const PixelArt = ({ rows }) => (
  <div className="pixel-art grid w-fit grid-cols-8" data-testid="mac-pixel-art">
    {rows.join("").split("").map((c, i) => (
      <span key={i} className={`h-[5px] w-[5px] ${c === "#" ? "bg-[#4ade80]" : ""}`} />
    ))}
  </div>
);

export const MacScreen = ({ text, pixel, logo, on, booting, bright, game, onTap }) => (
  <div
    onClick={onTap}
    className={`mac-screen relative h-full w-full overflow-hidden ${onTap ? "cursor-pointer" : ""}`}
    style={{ filter: `brightness(${LEVELS[bright]})` }}
    data-testid="mac-screen"
  >
    {booting && <div className="mac-boot absolute inset-0" />}
    {on && !booting && (
      <div className="mac-flicker mac-glow absolute inset-0 flex flex-col justify-between p-3 text-[#4ade80]">
        <span className="font-vfd text-[15px] leading-none opacity-80">PM-01 · {game ? "ARCADE" : "READY"}</span>
        {game ? (
          <ScreenGame />
        ) : (
          <div key={text} className="mac-glitch my-auto flex flex-col items-center justify-center">
            {logo ? (
              <div className="mb-2 flex items-center justify-center">
                <div className="relative flex h-14 w-28 items-center justify-center rounded-lg bg-black/60 p-1.5 border border-[#4ade80]/40 shadow-[0_0_14px_rgba(74,222,128,0.3)]">
                  <img
                    src={logo}
                    alt={text}
                    className="max-h-full max-w-full object-contain filter drop-shadow-[0_0_6px_rgba(74,222,128,0.7)]"
                  />
                </div>
              </div>
            ) : pixel ? (
              <div className="mb-2">
                <PixelArt rows={pixel} />
              </div>
            ) : null}
            <span className="font-arcade text-[12px] leading-[1.6]" data-testid="mac-screen-text">
              {text}
              <span className="blink">_</span>
            </span>
          </div>
        )}
        {!game && <span className="font-vfd text-[15px] leading-none opacity-80">&gt; RUN</span>}
      </div>
    )}
    <div className="scanlines pointer-events-none absolute inset-0 opacity-50" />
    <div className="mac-glass pointer-events-none absolute inset-0" />
  </div>
);
