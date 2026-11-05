import { Mail, PhoneCall } from "lucide-react";
import { OWNER } from "@/data/content";
import { Logo } from "./Logo";
import { Reveal } from "./Reveal";
import { bookCall, emailMe } from "./actions";

export const Contact = () => (
  <section
    id="contact"
    className="relative flex min-h-[100dvh] flex-col justify-between bg-[#121110] px-5 pb-8 pt-24 text-[#F4F1EA] sm:px-8 sm:pb-10 sm:pt-28"
    data-testid="contact-section"
  >
    <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center py-6 sm:py-10">
      <Reveal>
        <h2 className="max-w-4xl font-display text-4xl font-black leading-[0.95] tracking-tight sm:text-5xl lg:text-7xl">
          Got a problem <span className="italic text-[#FF7A2E]" style={{ fontFamily: "Fraunces" }}>worth</span> solving?
        </h2>
        <p className="mt-4 max-w-xl text-base text-[#D6D3D1] sm:text-lg">
          Whether you&apos;re looking for an APM, Product Manager, or an autonomous product builder — let&apos;s connect.
        </p>
      </Reveal>

      {/* Clean, right-sized contact buttons */}
      <div className="mt-8 flex flex-wrap gap-4">
        <button
          onClick={emailMe}
          data-sound="key"
          data-testid="contact-email-btn"
          className="key key-orange inline-flex items-center gap-2.5 rounded-xl px-6 py-3.5 font-mono text-xs font-semibold uppercase tracking-[0.15em] text-[#1C1917] sm:text-sm"
        >
          <Mail size={16} /> Email Me
        </button>
        <button
          onClick={bookCall}
          data-sound="key"
          data-testid="contact-book-call-btn"
          className="key inline-flex items-center gap-2.5 rounded-xl px-6 py-3.5 font-mono text-xs font-semibold uppercase tracking-[0.15em] text-[#1C1917] sm:text-sm"
        >
          <PhoneCall size={16} /> Book a Call
        </button>
      </div>
    </div>

    {/* Bottom Line / Site Footer: Exactly at bottom edge of viewport */}
    <footer
      className="mx-auto w-full max-w-7xl border-t border-[#2B2824] pt-6 sm:pt-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between"
      data-testid="site-footer"
    >
      <div className="flex items-center gap-3">
        <Logo size={34} />
        <span className="font-mono text-xs uppercase tracking-[0.15em] text-[#A8A29E]">
          {OWNER.name} · {OWNER.location}
        </span>
      </div>
      <div className="flex items-center gap-6 font-mono text-xs uppercase tracking-[0.15em] text-[#A8A29E]">
        <a href={OWNER.linkedin} target="_blank" rel="noopener noreferrer" data-sound="tick" className="hover:text-[#FF7A2E] transition-colors">
          LinkedIn
        </a>
        <a href={OWNER.github} target="_blank" rel="noopener noreferrer" data-sound="tick" className="hover:text-[#FF7A2E] transition-colors">
          GitHub
        </a>
        <span>© {new Date().getFullYear()}</span>
      </div>
    </footer>
  </section>
);
