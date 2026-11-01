import { useSound } from "@/lib/sound";

export const SoundSwitch = () => {
  const { enabled, toggle } = useSound();
  return (
    <button
      onClick={toggle}
      aria-pressed={enabled}
      aria-label="Toggle sound"
      data-testid="sound-toggle"
      className="group flex items-center gap-2 rounded-full border border-[#D5CFBF] bg-[#EAE5D9] py-1 pl-1 pr-3"
    >
      <span className="relative h-6 w-11 rounded-full bg-[#1C1917] shadow-[inset_0_2px_4px_rgba(0,0,0,.6)]">
        <span
          className={`key absolute top-[2px] h-5 w-5 rounded-full transition-[left] duration-150 ${enabled ? "left-[22px]" : "left-[2px]"}`}
          style={{ boxShadow: "0 2px 0 #BDB49F" }}
        />
      </span>
      <span className={`led h-2 w-2 rounded-full ${enabled ? "bg-[#22C55E] text-[#22C55E]" : "bg-[#A8A29E] text-transparent"}`} />
      <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em]" data-testid="sound-state">
        Sound {enabled ? "on" : "off"}
      </span>
    </button>
  );
};
