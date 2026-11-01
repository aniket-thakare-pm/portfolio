import { Console } from "@/components/site/Console";

export const HardwarePreview = () => (
  <div className="grid min-h-[620px] items-center gap-10 bg-[#F4F1EA] p-6 sm:p-12 lg:grid-cols-2">
    <div>
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#57534E]">[PM-01] Product machine</p>
      <h2 className="mt-5 font-display text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl">I pick the right problems — and ship them fast.</h2>
      <p className="mt-5 max-w-md text-[#44403C]">A Braun-meets-synth object you can press, turn and play.</p>
    </div>
    <Console />
  </div>
);
