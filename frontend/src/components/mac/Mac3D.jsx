import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MacScreen } from "./MacScreen";
import { MacKeyboard } from "./MacKeyboard";
import { MacControls } from "./MacControls";

const W = 280, H = 330, D = 250;
const f = (w, h, t) => ({ width: w, height: h, marginLeft: -w / 2, marginTop: -h / 2, transform: t });

const useBoot = () => {
  const [phase, setPhase] = useState("off");
  useEffect(() => {
    const a = setTimeout(() => setPhase("boot"), 900);
    const b = setTimeout(() => setPhase("hello"), 1500);
    const c = setTimeout(() => setPhase("ready"), 3200);
    return () => { clearTimeout(a); clearTimeout(b); clearTimeout(c); };
  }, []);
  return phase;
};

export const Mac3D = ({ rotateY = -24, rotateX = -9, hl = 40, product = "[Product 1]", testId = "mac" }) => {
  const phase = useBoot();
  const [power, setPower] = useState(true);
  const [bright, setBright] = useState(2);
  const [msg, setMsg] = useState(null);

  useEffect(() => {
    if (!msg) return undefined;
    const t = setTimeout(() => setMsg(null), 1800);
    return () => clearTimeout(t);
  }, [msg]);

  const on = power && phase !== "off";
  const text = phase === "hello" ? "HELLO" : msg || product;

  return (
    <div className="relative" style={{ width: W + 40, height: H + 110, perspective: 1700 }} data-testid={testId}>
      <motion.div className="absolute left-1/2 top-[42%]" style={{ rotateY, rotateX, "--hl": hl, transformStyle: "preserve-3d" }}>
        <div className="mac-face" style={f(W, H, `translateZ(${D / 2}px)`)}>
          <div className="mac-bezel absolute left-[24px] right-[24px] top-[22px] h-[196px] rounded-[18px] p-[12px]">
            <MacScreen text={text} on={on} booting={power && phase === "boot"} bright={bright} />
          </div>
          <MacControls bright={bright} onDial={() => setBright((b) => (b + 1) % 3)} power={power} onPower={() => setPower((v) => !v)} />
        </div>
        <div className="mac-face mac-side" style={f(W, H, `rotateY(180deg) translateZ(${D / 2}px)`)}>
          <div className="mac-vents absolute inset-x-[40px] top-[40px] h-[90px]" />
          <span className="absolute bottom-[40px] left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.3em] text-[#6B6255]">PM-01 · Product machine</span>
        </div>
        <div className="mac-face mac-side" style={f(D, H, `rotateY(90deg) translateZ(${W / 2}px)`)}>
          <div className="mac-vents absolute left-[30px] right-[30px] top-[30px] h-[60px]" />
        </div>
        <div className="mac-face mac-side" style={f(D, H, `rotateY(-90deg) translateZ(${W / 2}px)`)}>
          <div className="mac-vents absolute left-[30px] right-[30px] top-[30px] h-[60px]" />
        </div>
        <div className="mac-face mac-top" style={f(W, D, `rotateX(90deg) translateZ(${H / 2}px)`)} />
        <div className="mac-face mac-bottom" style={f(W, D, `rotateX(-90deg) translateZ(${H / 2}px)`)} />
        <MacKeyboard onKey={setMsg} y={H / 2 + 34} z={D / 2 + 80} />
      </motion.div>
      <div className="floor-shadow pointer-events-none absolute bottom-0 left-1/2 -z-10 h-[50px] w-[380px] -translate-x-1/2" />
    </div>
  );
};
