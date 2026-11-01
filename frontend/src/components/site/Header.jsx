import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { NAV, OWNER } from "@/data/content";
import { Logo } from "./Logo";
import { SoundSwitch } from "./SoundSwitch";

export const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-40 px-3 pt-3 sm:px-6 sm:pt-4" data-testid="site-header">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 rounded-[22px] border border-[#D5CFBF] bg-[#F4F1EA]/85 px-2 py-2 shadow-[0_2px_0_#D5CFBF] backdrop-blur-xl sm:px-3">
        <a href="#top" data-sound="tick" className="flex items-center gap-3" data-testid="header-logo-link">
          <Logo size={38} />
          <span className="hidden font-display text-sm font-bold sm:block">{OWNER.name}</span>
        </a>
        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((n) => (
            <a key={n.id} href={`#${n.id}`} data-sound="tick" data-testid={`nav-${n.id}`}
              className="rounded-full px-4 py-2 font-mono text-[12px] uppercase tracking-[0.18em] transition-colors hover:bg-[#EAE5D9]">
              {n.label}
            </a>
          ))}
          <Link to="/previews" data-sound="tick" data-testid="nav-previews"
            className="rounded-full px-4 py-2 font-mono text-[12px] uppercase tracking-[0.18em] text-[#B84300] hover:bg-[#EAE5D9]">
            Styles
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <SoundSwitch />
          <button onClick={() => setOpen((v) => !v)} data-sound="click" data-testid="mobile-menu-btn"
            className="key flex h-10 w-10 items-center justify-center rounded-xl md:hidden" aria-label="Menu">
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="chassis mx-auto mt-2 grid max-w-7xl grid-cols-2 gap-2 rounded-[22px] p-3 md:hidden" data-testid="mobile-menu">
          {NAV.map((n) => (
            <a key={n.id} href={`#${n.id}`} onClick={() => setOpen(false)} data-sound="key" data-testid={`mobile-nav-${n.id}`}
              className="key rounded-xl px-4 py-3 font-mono text-xs uppercase tracking-[0.18em]">{n.label}</a>
          ))}
          <Link to="/previews" data-sound="key" data-testid="mobile-nav-previews"
            className="key key-orange col-span-2 rounded-xl px-4 py-3 text-center font-mono text-xs uppercase tracking-[0.18em]">See the 4 styles</Link>
        </nav>
      )}
    </header>
  );
};
