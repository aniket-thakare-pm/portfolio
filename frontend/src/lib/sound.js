import { createContext, createElement, useCallback, useContext, useEffect, useRef, useState } from "react";

const KEY = "pm-sound";
const PRESETS = {
  key: { freq: 160, dur: 0.07, noise: 0.25, gain: 0.35 },
  click: { freq: 1800, dur: 0.025, noise: 0.18, gain: 0.18 },
  switch: { freq: 700, dur: 0.035, noise: 0.35, gain: 0.3 },
  tick: { freq: 3200, dur: 0.012, noise: 0.08, gain: 0.12 },
  open: { freq: 520, dur: 0.14, noise: 0.05, gain: 0.16 },
};

let ctx;
export const playSound = (type = "click") => {
  if (typeof window === "undefined" || localStorage.getItem(KEY) !== "on") return;
  const Ctx = window.AudioContext || window.webkitAudioContext;
  if (!Ctx) return;
  ctx = ctx || new Ctx();
  const p = PRESETS[type] || PRESETS.click;
  const t = ctx.currentTime;
  const out = ctx.createGain();
  out.gain.setValueAtTime(p.gain, t);
  out.gain.exponentialRampToValueAtTime(0.0001, t + p.dur);
  out.connect(ctx.destination);
  const osc = ctx.createOscillator();
  osc.type = "square";
  osc.frequency.setValueAtTime(p.freq, t);
  osc.frequency.exponentialRampToValueAtTime(p.freq * 0.5, t + p.dur);
  osc.connect(out);
  osc.start(t);
  osc.stop(t + p.dur);
  const len = Math.floor(ctx.sampleRate * 0.02);
  const buf = ctx.createBuffer(1, len, ctx.sampleRate);
  const data = buf.getChannelData(0);
  for (let i = 0; i < len; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / len) * p.noise;
  const src = ctx.createBufferSource();
  src.buffer = buf;
  src.connect(out);
  src.start(t);
};

const SoundCtx = createContext({ enabled: false, toggle: () => {} });

export const SoundProvider = ({ children }) => {
  const [enabled, setEnabled] = useState(() => typeof window !== "undefined" && localStorage.getItem(KEY) === "on");
  const ref = useRef(enabled);

  useEffect(() => {
    ref.current = enabled;
    localStorage.setItem(KEY, enabled ? "on" : "off");
  }, [enabled]);

  useEffect(() => {
    const onDown = (e) => {
      const el = e.target.closest?.("[data-sound]");
      if (el && ref.current) playSound(el.getAttribute("data-sound"));
    };
    document.addEventListener("pointerdown", onDown);
    return () => document.removeEventListener("pointerdown", onDown);
  }, []);

  const toggle = useCallback(() => {
    setEnabled((v) => {
      const next = !v;
      localStorage.setItem(KEY, next ? "on" : "off");
      if (next) setTimeout(() => playSound("switch"), 0);
      return next;
    });
  }, []);

  return createElement(SoundCtx.Provider, { value: { enabled, toggle } }, children);
};

export const useSound = () => useContext(SoundCtx);
