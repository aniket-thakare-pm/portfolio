import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Folder, FileText, Monitor } from "lucide-react";

const Win = ({ title, children, className, area, testId }) => (
  <motion.div drag dragConstraints={area} dragMomentum={false} whileDrag={{ scale: 1.01 }} data-testid={testId}
    className={`w95 absolute cursor-grab active:cursor-grabbing ${className}`}>
    <div className="flex items-center justify-between bg-[#000080] px-2 py-1 text-sm font-bold text-white">
      <span>{title}</span>
      <span className="flex gap-1">{["_", "□", "×"].map((c) => <span key={c} className="w95-btn flex h-4 w-4 items-center justify-center text-[10px] text-black">{c}</span>)}</span>
    </div>
    <div className="p-3">{children}</div>
  </motion.div>
);

export const DesktopPreview = () => {
  const area = useRef(null);
  const [start, setStart] = useState(false);
  return (
    <div ref={area} className="relative h-[620px] overflow-hidden bg-[#008080] text-black" style={{ fontFamily: "'Pixelify Sans', monospace" }}>
      <div className="absolute left-4 top-4 flex flex-col gap-5 text-white">
        {[[Monitor, "My Products"], [Folder, "Case studies"], [FileText, "Resume.txt"]].map(([I, l]) => (
          <div key={l} className="flex w-20 flex-col items-center gap-1 text-center text-sm"><I size={34} strokeWidth={1.5} />{l}</div>
        ))}
      </div>
      <Win area={area} title="welcome.exe" testId="desktop-window-main" className="left-[8%] top-[18%] w-[84%] sm:left-[22%] sm:w-[520px]">
        <div className="w95-in p-4">
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl">I pick the right problems — and ship them fast.</h2>
          <p className="mt-3 text-base">[Your Name] · Founder · PM · Designer · Video editor</p>
        </div>
        <div className="mt-3 flex gap-2"><button data-sound="click" className="w95-btn px-4 py-1">Open products</button><button data-sound="click" className="w95-btn px-4 py-1">Book a call</button></div>
      </Win>
      <Win area={area} title="products/" testId="desktop-window-products" className="right-[4%] top-[62%] hidden w-[260px] sm:block">
        <div className="w95-in grid grid-cols-3 gap-2 p-2 text-center text-xs">{["P1", "P2", "P3", "P4", "P5", "+"].map((p) => <span key={p} className="flex flex-col items-center"><Folder size={24} />{p}</span>)}</div>
      </Win>
      <div className="w95 absolute inset-x-0 bottom-0 flex h-10 items-center gap-2 px-1">
        <button onClick={() => setStart((v) => !v)} data-sound="click" data-testid="desktop-start-btn" className="w95-btn px-3 py-0.5 font-bold">Start</button>
        <span className="ml-auto w95-in bg-[#C0C0C0] px-3 py-0.5 text-sm">12:00</span>
      </div>
      {start && (
        <div className="w95 absolute bottom-10 left-1 w-52 p-1 text-sm" data-testid="desktop-start-menu">
          {["Products", "Manifesto", "Skills", "Contact"].map((l) => <div key={l} className="px-3 py-2 hover:bg-[#000080] hover:text-white">{l}</div>)}
        </div>
      )}
    </div>
  );
};
