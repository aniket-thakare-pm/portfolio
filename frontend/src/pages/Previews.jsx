import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { HardwarePreview } from "@/components/previews/HardwarePreview";
import { DesktopPreview } from "@/components/previews/DesktopPreview";
import { CataloguePreview } from "@/components/previews/CataloguePreview";
import { ArcadePreview } from "@/components/previews/ArcadePreview";
import { SoundSwitch } from "@/components/site/SoundSwitch";

const STYLES = [
  { id: "hardware", n: "01", name: "Vintage hardware", note: "Beige casing, chunky keys, knobs, glowing display", C: HardwarePreview },
  { id: "desktop", n: "02", name: "Old computer desktop", note: "Windows you drag, folders, a start menu", C: DesktopPreview },
  { id: "catalogue", n: "03", name: "1970s catalogue", note: "Paper, big serif, order numbers", C: CataloguePreview },
  { id: "arcade", n: "04", name: "Arcade / old TV", note: "Glowing screen, scan lines, channels", C: ArcadePreview },
];

export default function Previews() {
  const [sel, setSel] = useState("hardware");
  const S = STYLES.find((s) => s.id === sel);
  return (
    <div className="min-h-screen bg-[#F4F1EA] px-3 py-4 text-[#1C1917] sm:px-6" data-testid="previews-page">
      <div className="mx-auto max-w-7xl">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <Link to="/" data-sound="tick" data-testid="previews-back-link" className="key inline-flex items-center gap-2 rounded-xl px-4 py-2 font-mono text-xs uppercase tracking-[0.18em]">
            <ArrowLeft size={14} /> Back to site
          </Link>
          <SoundSwitch />
        </div>
        <h1 className="font-display text-4xl font-black tracking-tight sm:text-5xl">Pick a world.</h1>
        <p className="mt-2 max-w-xl text-base text-[#44403C]">Four one-screen previews of the same hero. The full site is currently built in Vintage hardware — tell me which one you want.</p>
        <div className="my-6 grid grid-cols-2 gap-3 lg:grid-cols-4" role="tablist">
          {STYLES.map((s) => (
            <button key={s.id} onClick={() => setSel(s.id)} data-on={sel === s.id} data-sound="key" data-testid={`style-tab-${s.id}`} role="tab" aria-selected={sel === s.id}
              className={`key rounded-2xl p-4 text-left ${sel === s.id ? "key-orange" : ""}`}>
              <span className="font-vfd text-2xl">{s.n}</span>
              <span className="block font-display text-base font-black sm:text-lg">{s.name}</span>
              <span className="hidden text-sm text-[#44403C] sm:block">{s.note}</span>
            </button>
          ))}
        </div>
        <div className="overflow-hidden rounded-[28px] border-2 border-[#1C1917]" data-testid={`preview-${S.id}`}>
          <S.C />
        </div>
      </div>
    </div>
  );
}
