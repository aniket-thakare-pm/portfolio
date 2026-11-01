import { motion, useMotionTemplate, useTransform } from "framer-motion";

export const START = 0.1, STEP = 0.16;

export const LineText = ({ line }) => (
  <>
    {line[0]} <span className="italic text-[#FF5A00]" style={{ fontFamily: "Fraunces" }}>{line[1]}</span>
  </>
);

export const ChapterLine = ({ p, i, line, mobile }) => {
  const s = START + i * STEP, e = s + STEP;
  const d = mobile ? "10vh" : "28vh";
  const y = useTransform(p, [s, s + STEP / 2, e], [d, "0vh", `-${d}`]);
  const opacity = useTransform(p, [s, s + 0.04, e - 0.04, e], [0, 1, 1, 0]);
  const blur = useTransform(p, [s, s + 0.05, e - 0.05, e], [14, 0, 0, 14]);
  const filter = useMotionTemplate`blur(${blur}px)`;
  const left = i % 2 === 0;
  const pos = mobile
    ? left ? "top-24 inset-x-5 text-left" : "bottom-20 inset-x-5 text-right"
    : left ? "left-[5vw] top-1/2 -translate-y-1/2 text-left" : "right-[5vw] top-1/2 -translate-y-1/2 text-right";
  return (
    <div className={`pointer-events-none absolute ${pos} ${mobile ? "" : "max-w-[30vw]"}`}>
      <motion.p style={{ y, opacity, filter }} data-testid={`chapter-line-${i}`}
        className="font-display text-4xl font-black leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl">
        <LineText line={line} />
      </motion.p>
    </div>
  );
};
