import { MANIFESTO } from "@/data/content";
import { Reveal, SectionLabel } from "./Reveal";

export const Manifesto = () => (
  <section id="manifesto" className="px-5 py-24 sm:px-8 lg:py-32" data-testid="manifesto-section">
    <div className="mx-auto max-w-7xl">
      <SectionLabel code="SEC_01 / MANIFESTO" title={<>Three things,<br />one person.</>}
        kicker="Most teams hire these as three separate roles. I bring them in one." />
      <div className="grid gap-5 lg:grid-cols-12">
        {MANIFESTO.map((m, i) => (
          <Reveal key={m.num} delay={i * 0.08} className={i === 0 ? "lg:col-span-6" : "lg:col-span-3"}>
            <article data-testid={`manifesto-card-${m.num}`}
              className={`${i === 0 ? "chassis-dark text-[#F4F1EA]" : "chassis"} flex h-full min-h-[340px] flex-col justify-between rounded-[28px] p-7 sm:p-9`}>
              <div className="flex items-center justify-between">
                <span className={`font-vfd text-5xl ${i === 0 ? "text-[#FF7A2E]" : "text-[#1C1917]"}`}>{m.num}</span>
                <span className={`rounded-full border px-3 py-1 font-mono text-[11px] uppercase tracking-[0.2em] ${i === 0 ? "border-[#FF7A2E] text-[#FF7A2E]" : "border-[#1C1917]"}`}>{m.tag}</span>
              </div>
              <div>
                <h3 className={`font-display font-black leading-[1] tracking-tight ${i === 0 ? "text-4xl sm:text-5xl" : "text-2xl sm:text-3xl"}`}>{m.title}</h3>
                <p className={`mt-5 text-base leading-relaxed ${i === 0 ? "text-[#D6D3D1]" : "text-[#44403C]"}`}>{m.body}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
