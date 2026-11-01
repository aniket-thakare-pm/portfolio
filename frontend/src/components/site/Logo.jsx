import { OWNER } from "@/data/content";

export const Logo = ({ size = 40 }) => (
  <span
    className="relative inline-flex items-center justify-center rounded-[12px] border-2 border-[#1C1917] bg-[#EAE5D9] font-wide font-black text-[#1C1917] shrink-0"
    style={{ width: size, height: size, fontSize: size * 0.36 }}
    data-testid="logo-mark"
  >
    {OWNER.initials}
    <span className="absolute right-[5px] top-[5px] h-[6px] w-[6px] rounded-full bg-[#FF5A00]" />
  </span>
);
