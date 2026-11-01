import { SKILLS } from "@/data/content";
import { Reveal, SectionLabel } from "./Reveal";

const Visual = ({ id }) => {
  if (id === "product")
    return (
      <div className="space-y-3">
        {[["Discover", 38, "#1C1917"], ["Define", 56, "#57534E"], ["Build", 78, "#FF5A00"], ["Launch", 92, "#2F6F5E"]].map(([l, w, c]) => (
          <div key={l} className="flex items-center gap-3">
            <span className="w-20 font-mono text-[11px] uppercase tracking-[0.18em] text-[#57534E]">{l}</span>
            <span className="h-3 flex-1 rounded-full bg-[#D5CFBF]"><span className="block h-3 rounded-full" style={{ width: `${w}%`, background: c }} /></span>
          </div>
        ))}
      </div>
    );
  if (id === "design")
    return (
      <div className="flex gap-2">
        {["#F4F1EA", "#EAE5D9", "#FF5A00", "#2F6F5E", "#1C1917"].map((c) => <span key={c} className="h-14 flex-1 rounded-xl border border-[#CFC7B5]" style={{ background: c }} />)}
      </div>
    );
  if (id === "video")
    return (
      <div className="space-y-1.5 rounded-xl bg-[#1C1917] p-3">
        {[[10, 50], [30, 40], [5, 80]].map(([l, w], i) => (
          <div key={i} className="relative h-3 rounded bg-[#2B2824]">
            <span className="absolute h-3 rounded" style={{ left: `${l}%`, width: `${w}%`, background: ["#FF7A2E", "#6BF5CB", "#C9A227"][i] }} />
          </div>
        ))}
      </div>
    );
  return (
    <div className="vfd rounded-xl p-3 font-vfd text-lg leading-tight">
      &gt; idea → spec<br />&gt; build → ship<span className="blink">_</span>
    </div>
  );
};

export const Skills = () => (
  <section id="skills" className="px-5 py-24 sm:px-8 lg:py-32" data-testid="skills-section">
    <div className="mx-auto max-w-7xl">
      <SectionLabel code="SEC_03 / SKILLS" title={<>Four crafts,<br />one workbench.</>} kicker="From the first question to the launch film." />
      <div className="grid auto-rows-[minmax(240px,auto)] gap-5 md:grid-cols-2 lg:grid-cols-4">
        {SKILLS.map((s, i) => (
          <Reveal key={s.id} delay={i * 0.06} className={s.span}>
            <article data-testid={`skill-tile-${s.id}`} className="chassis flex h-full flex-col justify-between gap-8 rounded-[28px] p-7">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className={`font-display font-black tracking-tight ${s.id === "product" ? "text-4xl sm:text-5xl" : "text-2xl sm:text-3xl"}`}>{s.title}</h3>
                  <p className="mt-2 font-mono text-xs uppercase tracking-[0.15em] text-[#57534E]">{s.sub}</p>
                </div>
                <span className="font-vfd text-3xl text-[#57534E]">0{i + 1}</span>
              </div>
              <Visual id={s.id} />
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
