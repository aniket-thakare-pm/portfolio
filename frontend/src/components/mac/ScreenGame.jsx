import { useEffect, useRef } from "react";
import { playSound } from "@/lib/sound";

const GW = 92, GH = 62, S = 2, GROUND = 54;
const SHIP = ["..##..", ".####.", "######", "#.##.#"];
const fresh = () => ({ y: GROUND - 4, vy: 0, obs: [], t: 0, next: 50, speed: 0.9, score: 0, over: false });

export const ScreenGame = () => {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = ref.current.getContext("2d");
    let best = Number(localStorage.getItem("pm-best") || 0);
    let g = fresh();
    const jump = () => {
      if (g.over) { g = fresh(); return; }
      if (g.y >= GROUND - 4) { g.vy = -3.2; playSound("blip"); }
    };
    const onKey = (e) => {
      if (e.code !== "Space" && e.code !== "ArrowUp") return;
      e.preventDefault();
      jump();
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("mac-jump", jump);
    const px = (x, y, w = 1, h = 1) => ctx.fillRect(Math.round(x) * S, Math.round(y) * S, w * S, h * S);
    let id;
    const loop = () => {
      if (!g.over) {
        g.t += 1;
        g.vy += 0.22;
        g.y = Math.min(GROUND - 4, g.y + g.vy);
        g.speed += 0.0008;
        if (g.t >= g.next) {
          g.obs.push({ x: GW, h: 3 + Math.floor(Math.random() * 4), passed: false });
          g.next = g.t + 45 + Math.random() * 55 - Math.min(g.score, 20);
        }
        g.obs.forEach((o) => {
          o.x -= g.speed;
          if (!o.passed && o.x + 4 < 10) { o.passed = true; g.score += 1; playSound("chime"); }
          if (o.x < 16 && o.x + 4 > 10 && g.y + 4 > GROUND - o.h) {
            g.over = true;
            playSound("buzz");
            if (g.score > best) { best = g.score; localStorage.setItem("pm-best", String(best)); }
          }
        });
        g.obs = g.obs.filter((o) => o.x > -6);
      }
      ctx.clearRect(0, 0, GW * S, GH * S);
      ctx.fillStyle = "#4ade80";
      for (let x = -(g.t % 6); x < GW; x += 6) px(x, GROUND, 3, 1);
      SHIP.forEach((row, r) => row.split("").forEach((c, i) => c === "#" && px(10 + i, g.y + r)));
      g.obs.forEach((o) => { px(o.x, GROUND - o.h, 4, o.h); px(o.x - 1, GROUND - o.h + 1); px(o.x + 4, GROUND - o.h + 1); });
      ctx.font = "8px 'Press Start 2P'";
      ctx.fillText(`SHIPPED ${g.score}`, 4, 14);
      ctx.fillText(`HI ${best}`, GW * S - 44, 14);
      if (g.over) { ctx.fillText("BUG HIT!", 56, 52); ctx.fillText("PRESS SHP", 52, 68); }
      id = requestAnimationFrame(loop);
    };
    id = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(id);
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("mac-jump", jump);
    };
  }, []);

  return <canvas ref={ref} width={GW * S} height={GH * S} className="pixel-canvas w-full" data-testid="mac-game" />;
};
