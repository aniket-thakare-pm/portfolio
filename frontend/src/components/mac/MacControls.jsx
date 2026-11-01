import { Logo } from "@/components/site/Logo";

export const MacControls = ({ bright, onDial, power, onPower }) => (
  <>
    <div className="absolute left-[28px] top-[236px] flex items-center gap-2">
      <Logo size={24} />
      <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#6B6255]">PM-01</span>
    </div>
    <div className="absolute right-[28px] top-[240px] h-[9px] w-[96px] rounded-full bg-[#3A342B] shadow-[inset_0_2px_3px_rgba(0,0,0,.7),0_1px_0_#fff]">
      <span className="absolute right-2 top-[2px] h-[5px] w-[14px] rounded-full bg-[#5A5244]" />
    </div>
    <div className="absolute bottom-[20px] left-[28px] flex items-center gap-2">
      <button onClick={onDial} data-sound="tick" data-testid="mac-dial" aria-label="Brightness dial"
        className="knob relative h-[30px] w-[30px] rounded-full"
        style={{ transform: `rotate(${bright * 110 - 110}deg)`, transition: "transform .25s cubic-bezier(.3,1.6,.5,1)" }}>
        <span className="absolute left-1/2 top-[3px] h-[8px] w-[3px] -translate-x-1/2 rounded-full bg-[#FF5A00]" />
      </button>
      <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#6B6255]">Bright</span>
    </div>
    <div className="mac-vents absolute bottom-[26px] left-[120px] h-[18px] w-[60px]" />
    <button onClick={onPower} data-sound="switch" data-testid="mac-power" aria-pressed={power} aria-label="Power switch"
      className="absolute bottom-[22px] right-[28px] flex h-[24px] w-[46px] items-center rounded-md bg-[#2B2622] p-[3px] shadow-[inset_0_2px_3px_rgba(0,0,0,.6)]">
      <span className={`key h-full w-[20px] rounded-[4px] transition-transform duration-150 ${power ? "translate-x-[20px]" : ""}`} style={{ boxShadow: "0 2px 0 #BDB49F" }} />
      <span className={`led absolute -top-3 right-0 h-[5px] w-[5px] rounded-full ${power ? "bg-[#22C55E] text-[#22C55E]" : "bg-[#8d846f] text-transparent"}`} />
    </button>
  </>
);
