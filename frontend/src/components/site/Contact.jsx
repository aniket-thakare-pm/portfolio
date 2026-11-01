import { Link } from "react-router-dom";
import { Mail, PhoneCall } from "lucide-react";
import { OWNER } from "@/data/content";
import { Logo } from "./Logo";
import { Reveal } from "./Reveal";
import { bookCall, emailMe } from "./actions";

export const Contact = () => (
  <section id="contact" className="bg-[#121110] px-5 pb-10 pt-24 text-[#F4F1EA] sm:px-8 lg:pt-32" data-testid="contact-section">
    <div className="mx-auto max-w-7xl">
      <Reveal>
        <p className="mb-6 font-mono text-xs uppercase tracking-[0.25em] text-[#A8A29E]">[SEC_05 / CONTACT]</p>
        <h2 className="max-w-4xl font-display text-5xl font-black leading-[0.92] tracking-tight sm:text-6xl lg:text-8xl">
          Got a problem <span className="italic text-[#FF7A2E]" style={{ fontFamily: "Fraunces" }}>worth</span> solving?
        </h2>
        <p className="mt-8 max-w-xl text-base text-[#D6D3D1] sm:text-lg">
          Co-founding, a product role, or a build you want shipped — press a key.
        </p>
      </Reveal>
      <div className="chassis-dark mt-14 grid gap-4 rounded-[30px] p-4 sm:grid-cols-2 sm:p-6">
        <button onClick={bookCall} data-sound="key" data-testid="contact-book-call-btn"
          className="key key-orange flex items-center justify-between rounded-[22px] px-7 py-8 text-left text-[#1C1917]">
          <span><span className="block font-mono text-xs uppercase tracking-[0.2em]">Key A</span><span className="font-display text-3xl font-black sm:text-4xl">Book a call</span></span>
          <PhoneCall size={30} />
        </button>
        <button onClick={emailMe} data-sound="key" data-testid="contact-email-btn"
          className="key flex items-center justify-between rounded-[22px] px-7 py-8 text-left text-[#1C1917]">
          <span><span className="block font-mono text-xs uppercase tracking-[0.2em]">Key B</span><span className="font-display text-3xl font-black sm:text-4xl">Email me</span></span>
          <Mail size={30} />
        </button>
      </div>
      <footer className="mt-20 flex flex-col gap-6 border-t border-[#2B2824] pt-8 sm:flex-row sm:items-center sm:justify-between" data-testid="site-footer">
        <div className="flex items-center gap-3"><Logo size={36} /><span className="font-mono text-xs uppercase tracking-[0.2em] text-[#A8A29E]">{OWNER.name} · {OWNER.location}</span></div>
        <div className="flex items-center gap-6 font-mono text-xs uppercase tracking-[0.2em] text-[#A8A29E]">
          <Link to="/previews" data-sound="tick" data-testid="footer-previews-link" className="hover:text-[#FF7A2E]">Style previews</Link>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </footer>
    </div>
  </section>
);
