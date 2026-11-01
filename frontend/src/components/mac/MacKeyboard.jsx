export const MAC_KEYS = [
  ["PM", "PRODUCT MANAGER"],
  ["DSN", "DESIGNER"],
  ["VID", "VIDEO EDITOR"],
  ["BLD", "BUILDER"],
  ["AI", "AI-NATIVE"],
  ["SHP", "SHIPS FAST"],
];

export const MacKeyboard = ({ onKey, y, z }) => (
  <div className="mac-kbd absolute left-1/2 top-1/2 p-3"
    style={{ width: 300, height: 118, marginLeft: -150, marginTop: -59, transform: `translate3d(0px, ${y}px, ${z}px) rotateX(58deg)` }}>
    <div className="grid grid-cols-6 gap-1.5">
      {MAC_KEYS.map(([l, m], i) => (
        <button key={l} onClick={() => onKey(m)} data-sound="key" data-testid={`mac-key-${l.toLowerCase()}`}
          className={`key ${i === 5 ? "key-orange" : ""} h-10 rounded-lg font-mono text-[10px] font-semibold`}>{l}</button>
      ))}
    </div>
    <div className="mt-2 grid grid-cols-[1fr_3fr_1fr] gap-1.5">
      <span className="key h-8 rounded-lg" /><span className="key h-8 rounded-lg" /><span className="key h-8 rounded-lg" />
    </div>
  </div>
);
