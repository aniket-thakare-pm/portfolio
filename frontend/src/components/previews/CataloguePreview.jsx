const ITEMS = [["No. 101", "[Product 1]", "AI assistant"], ["No. 102", "[Product 2]", "Web app"], ["No. 103", "[Product 3]", "Video tool"], ["No. 104", "[Product 4]", "Internal tool"]];

export const CataloguePreview = () => (
  <div className="paper min-h-[620px] p-6 text-[#2A1F14] sm:p-12" style={{ fontFamily: "Fraunces, serif" }}>
    <div className="flex justify-between border-b-2 border-[#2A1F14] pb-3 font-mono text-xs uppercase tracking-[0.25em]">
      <span>Catalogue Vol. I</span><span>Spring edition</span><span className="hidden sm:inline">Price on request</span>
    </div>
    <div className="grid gap-10 pt-8 lg:grid-cols-[1.4fr_1fr]">
      <div>
        <p className="italic text-[#8A3A1E]">The complete product maker —</p>
        <h2 className="mt-2 text-6xl font-black leading-[0.9] tracking-tight sm:text-8xl">Problems, picked.<br /><span className="italic font-light">Products, shipped.</span></h2>
        <p className="mt-6 max-w-md text-lg">[Your Name]. Founder, product manager, designer and video editor. Order a call below.</p>
        <button data-sound="click" className="mt-6 border-2 border-[#2A1F14] bg-[#C8471F] px-6 py-3 font-mono text-sm uppercase tracking-[0.2em] text-[#F7F4EB] shadow-[4px_4px_0_#2A1F14] active:translate-x-1 active:translate-y-1 active:shadow-none">Order form →</button>
      </div>
      <ul className="border-t-2 border-[#2A1F14]">
        {ITEMS.map(([n, name, k]) => (
          <li key={n} className="flex items-baseline justify-between gap-4 border-b border-dashed border-[#2A1F14] py-4">
            <span className="font-mono text-xs">{n}</span><span className="flex-1 text-2xl font-bold">{name}</span><span className="text-sm italic">{k}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);
