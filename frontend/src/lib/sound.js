import { createContext, createElement, useCallback, useContext, useEffect, useRef, useState } from "react";

const KEY = "pm-sound-v2";
const PRESETS = {
  key: { freq: 160, dur: 0.07, noise: 0.25, gain: 0.35 },
  click: { freq: 1800, dur: 0.025, noise: 0.18, gain: 0.18 },
  switch: { freq: 700, dur: 0.035, noise: 0.35, gain: 0.3 },
  tick: { freq: 3200, dur: 0.012, noise: 0.08, gain: 0.12 },
  open: { freq: 520, dur: 0.14, noise: 0.05, gain: 0.16 },
};

const GAME = {
  blip: [[440, 880, 0, 0.08, "square", 0.12]],
  buzz: [[140, 55, 0, 0.32, "sawtooth", 0.16], [146, 60, 0, 0.32, "square", 0.08]],
  chime: [[660, 660, 0, 0.07, "triangle", 0.14], [990, 990, 0.07, 0.12, "triangle", 0.14]],
};

const tone = (from, to, delay, dur, wave, gain) => {
  const t = ctx.currentTime + delay;
  const g = ctx.createGain();
  g.gain.setValueAtTime(gain, t);
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  g.connect(ctx.destination);
  const o = ctx.createOscillator();
  o.type = wave;
  o.frequency.setValueAtTime(from, t);
  o.frequency.exponentialRampToValueAtTime(to, t + dur);
  o.connect(g);
  o.start(t);
  o.stop(t + dur);
};

let ctx;
export const playSound = (type = "click") => {
  if (typeof window === "undefined" || localStorage.getItem(KEY) !== "on") return;
  const Ctx = window.AudioContext || window.webkitAudioContext;
  if (!Ctx) return;
  ctx = ctx || new Ctx();
  if (GAME[type]) {
    GAME[type].forEach((n) => tone(...n));
    return;
  }
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
