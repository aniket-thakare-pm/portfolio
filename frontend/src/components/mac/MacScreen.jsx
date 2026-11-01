const LEVELS = [0.55, 0.8, 1.1];

export const MacScreen = ({ text, on, booting, bright }) => (
  <div className="mac-screen relative h-full w-full overflow-hidden" style={{ filter: `brightness(${LEVELS[bright]})` }} data-testid="mac-screen">
    {booting && <div className="mac-boot absolute inset-0" />}
    {on && !booting && (
      <div className="mac-flicker mac-glow absolute inset-0 flex flex-col justify-between p-3 text-[#4ade80]">
        <span className="font-vfd text-[15px] leading-none opacity-80">PM-01 · READY</span>
        <span key={text} className="mac-glitch font-arcade text-[14px] leading-[1.6]" data-testid="mac-screen-text">
          {text}<span className="blink">_</span>
        </span>
        <span className="font-vfd text-[15px] leading-none opacity-80">&gt; RUN</span>
      </div>
    )}
    <div className="scanlines pointer-events-none absolute inset-0 opacity-50" />
    <div className="mac-glass pointer-events-none absolute inset-0" />
  </div>
);
