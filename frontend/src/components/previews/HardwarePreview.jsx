import { Mac3D } from "@/components/mac/Mac3D";

export const HardwarePreview = () => (
  <div className="grid min-h-[620px] items-center gap-6 overflow-hidden bg-[#F4F1EA] p-6 sm:p-12 lg:grid-cols-2">
    <div>
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#57534E]">[PM-01] Product machine</p>
      <h2 className="mt-5 font-display text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl">I pick the right problems — and ship them fast.</h2>
      <p className="mt-5 max-w-md text-[#44403C]">A beige computer with an arcade screen you can press, turn and play.</p>
    </div>
    <div className="flex justify-center">
      <div className="scale-[0.75] sm:scale-100"><Mac3D rotateY={-26} product="[Product 1]" testId="preview-mac" /></div>
    </div>
  </div>
);
