import { useEffect, useRef } from "react";
import { playSound } from "@/lib/sound";

// Virtual Screen Dimensions (Internal pixel resolution)
const V_WIDTH = 320;
const V_HEIGHT = 200;

export const ArcadeEngine = ({ gameId = "snake", onSelectGame }) => {
  const canvasRef = useRef(null);
  const stateRef = useRef({});

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    // Retrieve High Scores from localStorage
    const getBest = (key) => Number(localStorage.getItem(`pm-arcade-${key}`) || 0);
    const saveBest = (key, val) => localStorage.setItem(`pm-arcade-${key}`, String(val));

    // -------------------------------------------------------------
    // 1. GAME: SNAKE SETUP
    // -------------------------------------------------------------
    const GRID_SIZE = 10;
    const COLS = Math.floor(V_WIDTH / GRID_SIZE); // 32
    const ROWS = Math.floor(V_HEIGHT / GRID_SIZE); // 20

    const initSnake = () => {
      const startX = Math.floor(COLS / 2);
      const startY = Math.floor(ROWS / 2);
      return {
        body: [
          { x: startX, y: startY },
          { x: startX - 1, y: startY },
          { x: startX - 2, y: startY },
        ],
        dir: { x: 1, y: 0 },
        nextDir: { x: 1, y: 0 },
        food: { x: startX + 5, y: startY },
        score: 0,
        best: getBest("snake"),
        gameOver: false,
        tickRate: 8,
        ticks: 0,
      };
    };

    const spawnFood = (snake) => {
      let x, y, collision;
      do {
        x = Math.floor(Math.random() * (COLS - 2)) + 1;
        y = Math.floor(Math.random() * (ROWS - 3)) + 2;
        // eslint-disable-next-line no-loop-func
        collision = snake.body.some((seg) => seg.x === x && seg.y === y);
      } while (collision);
      return { x, y };
    };

    // -------------------------------------------------------------
    // 2. GAME: SPACE INVADERS SETUP
    // -------------------------------------------------------------
    const initInvaders = () => {
      const aliens = [];
      const alienRows = 3;
      const alienCols = 7;
      for (let r = 0; r < alienRows; r++) {
        for (let c = 0; c < alienCols; c++) {
          aliens.push({
            x: 40 + c * 34,
            y: 35 + r * 22,
            w: 18,
            h: 12,
            type: r === 0 ? "top" : r === 1 ? "mid" : "low",
            alive: true,
          });
        }
      }
      return {
        player: { x: V_WIDTH / 2 - 12, y: V_HEIGHT - 22, w: 24, h: 10, speed: 4 },
        bullets: [],
        enemyBullets: [],
        aliens,
        alienDir: 1,
        alienSpeed: 0.6,
        alienDropTimer: 0,
        score: 0,
        best: getBest("invaders"),
        lives: 3,
        gameOver: false,
        won: false,
        particles: [],
      };
    };

    // -------------------------------------------------------------
    // 3. GAME: BREAKOUT / ARKANOID SETUP
    // -------------------------------------------------------------
    const initBreakout = () => {
      const bricks = [];
      const bRows = 4;
      const bCols = 8;
      const brickW = 32;
      const brickH = 10;
      const colors = ["#EF4444", "#F97316", "#EAB308", "#22C55E"];
      for (let r = 0; r < bRows; r++) {
        for (let c = 0; c < bCols; c++) {
          bricks.push({
            x: 18 + c * (brickW + 4),
            y: 30 + r * (brickH + 4),
            w: brickW,
            h: brickH,
            color: colors[r],
            alive: true,
          });
        }
      }
      return {
        paddle: { x: V_WIDTH / 2 - 25, y: V_HEIGHT - 18, w: 50, h: 8, speed: 5 },
        ball: {
          x: V_WIDTH / 2,
          y: V_HEIGHT - 35,
          vx: 2.2 * (Math.random() > 0.5 ? 1 : -1),
          vy: -2.8,
          radius: 3.5,
          stuck: true,
        },
        bricks,
        score: 0,
        best: getBest("breakout"),
        lives: 3,
        gameOver: false,
        won: false,
        particles: [],
      };
    };

    // Initialize state
    stateRef.current = {
      activeGame: gameId,
      snake: initSnake(),
      invaders: initInvaders(),
      breakout: initBreakout(),
      keysPressed: {},
    };

    // -------------------------------------------------------------
    // INPUT HANDLING (Gamepad Buttons & Keyboard)
    // -------------------------------------------------------------
    const handleGameAction = (action) => {
      const g = stateRef.current;
      const cur = g.activeGame;

      if (action === "SELECT") {
        playSound("switch");
        if (onSelectGame) {
          const next = cur === "snake" ? "invaders" : cur === "invaders" ? "breakout" : "snake";
          onSelectGame(next);
        }
        return;
      }

      if (cur === "snake") {
        const s = g.snake;
        if (action === "START" || (s.gameOver && (action === "BUTTON_A" || action === "BUTTON_B"))) {
          g.snake = initSnake();
          playSound("blip");
          return;
        }
        if (action === "UP" && s.dir.y === 0) s.nextDir = { x: 0, y: -1 };
        if (action === "DOWN" && s.dir.y === 0) s.nextDir = { x: 0, y: 1 };
        if (action === "LEFT" && s.dir.x === 0) s.nextDir = { x: -1, y: 0 };
        if (action === "RIGHT" && s.dir.x === 0) s.nextDir = { x: 1, y: 0 };
      } else if (cur === "invaders") {
        const inv = g.invaders;
        if (action === "START" || (inv.gameOver && (action === "BUTTON_A" || action === "BUTTON_B"))) {
          g.invaders = initInvaders();
          playSound("blip");
          return;
        }
        if (action === "LEFT") inv.player.x = Math.max(8, inv.player.x - inv.player.speed * 2);
        if (action === "RIGHT") inv.player.x = Math.min(V_WIDTH - inv.player.w - 8, inv.player.x + inv.player.speed * 2);
        if (action === "BUTTON_A" || action === "UP") {
          if (inv.bullets.length < 3 && !inv.gameOver) {
            inv.bullets.push({ x: inv.player.x + inv.player.w / 2 - 1, y: inv.player.y - 4, vy: -5 });
            playSound("tick");
          }
        }
      } else if (cur === "breakout") {
        const b = g.breakout;
        if (action === "START" || (b.gameOver && (action === "BUTTON_A" || action === "BUTTON_B"))) {
          g.breakout = initBreakout();
          playSound("blip");
          return;
        }
        if (action === "LEFT") b.paddle.x = Math.max(6, b.paddle.x - b.paddle.speed * 2);
        if (action === "RIGHT") b.paddle.x = Math.min(V_WIDTH - b.paddle.w - 6, b.paddle.x + b.paddle.speed * 2);
        if ((action === "BUTTON_A" || action === "UP") && b.ball.stuck) {
          b.ball.stuck = false;
          playSound("tick");
        }
      }
    };

    const onCustomAction = (e) => handleGameAction(e.detail);
    window.addEventListener("arcade-action", onCustomAction);

    // Keyboard controls listener
    const onKeyDown = (e) => {
      stateRef.current.keysPressed[e.code] = true;
      if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Space"].includes(e.code)) {
        e.preventDefault();
      }
      if (e.code === "ArrowUp" || e.code === "KeyW") handleGameAction("UP");
      if (e.code === "ArrowDown" || e.code === "KeyS") handleGameAction("DOWN");
      if (e.code === "ArrowLeft" || e.code === "KeyA") handleGameAction("LEFT");
      if (e.code === "ArrowRight" || e.code === "KeyD") handleGameAction("RIGHT");
      if (e.code === "Space" || e.code === "KeyZ" || e.code === "Enter") handleGameAction("BUTTON_A");
      if (e.code === "KeyX" || e.code === "Escape") handleGameAction("BUTTON_B");
    };

    const onKeyUp = (e) => {
      delete stateRef.current.keysPressed[e.code];
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);

    // -------------------------------------------------------------
    // MAIN GAME LOOP (60 FPS)
    // -------------------------------------------------------------
    let animId;
    const loop = () => {
      const g = stateRef.current;
      const cur = g.activeGame;

      // Continuous key presses for smooth movement in Invaders & Breakout
      if (cur === "invaders" && !g.invaders.gameOver) {
        const inv = g.invaders;
        if (g.keysPressed.ArrowLeft || g.keysPressed.KeyA) {
          inv.player.x = Math.max(8, inv.player.x - inv.player.speed);
        }
        if (g.keysPressed.ArrowRight || g.keysPressed.KeyD) {
          inv.player.x = Math.min(V_WIDTH - inv.player.w - 8, inv.player.x + inv.player.speed);
        }
      } else if (cur === "breakout" && !g.breakout.gameOver) {
        const b = g.breakout;
        if (g.keysPressed.ArrowLeft || g.keysPressed.KeyA) {
          b.paddle.x = Math.max(6, b.paddle.x - b.paddle.speed);
        }
        if (g.keysPressed.ArrowRight || g.keysPressed.KeyD) {
          b.paddle.x = Math.min(V_WIDTH - b.paddle.w - 6, b.paddle.x + b.paddle.speed);
        }
        if (b.ball.stuck) {
          b.ball.x = b.paddle.x + b.paddle.w / 2;
        }
      }

      // Clear Canvas Screen (Pure CRT Deep Black)
      ctx.fillStyle = "#0B0C0E";
      ctx.fillRect(0, 0, V_WIDTH, V_HEIGHT);

      // -----------------------------------------------------------
      // RENDER: SNAKE
      // -----------------------------------------------------------
      if (cur === "snake") {
        const s = g.snake;
        if (!s.gameOver) {
          s.ticks += 1;
          if (s.ticks >= s.tickRate) {
            s.ticks = 0;
            s.dir = s.nextDir;
            const head = { x: s.body[0].x + s.dir.x, y: s.body[0].y + s.dir.y };

            // Wall Collision
            if (head.x < 1 || head.x >= COLS - 1 || head.y < 2 || head.y >= ROWS - 1) {
              s.gameOver = true;
              playSound("buzz");
              if (s.score > s.best) {
                s.best = s.score;
                saveBest("snake", s.best);
              }
            }
            // Self Collision
            else if (s.body.some((seg) => seg.x === head.x && seg.y === head.y)) {
              s.gameOver = true;
              playSound("buzz");
              if (s.score > s.best) {
                s.best = s.score;
                saveBest("snake", s.best);
              }
            } else {
              s.body.unshift(head);
              // Eat Food
              if (head.x === s.food.x && head.y === s.food.y) {
                s.score += 10;
                playSound("chime");
                s.food = spawnFood(s);
                if (s.score % 50 === 0 && s.tickRate > 4) s.tickRate -= 1;
              } else {
                s.body.pop();
              }
            }
          }
        }

        // Draw Arena Boundary Frame
        ctx.strokeStyle = "#15803D";
        ctx.lineWidth = 1;
        ctx.strokeRect(GRID_SIZE, GRID_SIZE * 2, (COLS - 2) * GRID_SIZE, (ROWS - 3) * GRID_SIZE);

        // Draw Food (Flashing Retro Dot)
        ctx.fillStyle = "#EF4444";
        ctx.fillRect(s.food.x * GRID_SIZE + 1, s.food.y * GRID_SIZE + 1, GRID_SIZE - 2, GRID_SIZE - 2);

        // Draw Snake Body
        s.body.forEach((seg, i) => {
          ctx.fillStyle = i === 0 ? "#4ADE80" : "#22C55E";
          ctx.fillRect(seg.x * GRID_SIZE + 1, seg.y * GRID_SIZE + 1, GRID_SIZE - 2, GRID_SIZE - 2);
        });

        // Top Status Bar
        ctx.fillStyle = "#86EFAC";
        ctx.font = "8px 'Press Start 2P', monospace";
        ctx.fillText(`SCORE: ${s.score}`, 12, 14);
        ctx.fillText(`HI: ${s.best}`, V_WIDTH - 80, 14);

        if (s.gameOver) {
          ctx.fillStyle = "#EF4444";
          ctx.font = "12px 'Press Start 2P', monospace";
          ctx.fillText("GAME OVER", V_WIDTH / 2 - 50, V_HEIGHT / 2 - 6);
          ctx.fillStyle = "#F5F2EB";
          ctx.font = "7px 'Press Start 2P', monospace";
          ctx.fillText("PRESS [A] OR START TO RETRY", V_WIDTH / 2 - 85, V_HEIGHT / 2 + 14);
        }
      }

      // -----------------------------------------------------------
      // RENDER: SPACE INVADERS
      // -----------------------------------------------------------
      else if (cur === "invaders") {
        const inv = g.invaders;
        if (!inv.gameOver) {
          // Move Alien Swarm
          let hitEdge = false;
          inv.aliens.forEach((a) => {
            if (!a.alive) return;
            a.x += inv.alienDir * inv.alienSpeed;
            if (a.x <= 10 || a.x + a.w >= V_WIDTH - 10) hitEdge = true;
          });

          if (hitEdge) {
            inv.alienDir *= -1;
            inv.aliens.forEach((a) => {
              if (a.alive) a.y += 8;
              if (a.alive && a.y + a.h >= inv.player.y) {
                inv.gameOver = true;
                playSound("buzz");
              }
            });
            inv.alienSpeed = Math.min(2.2, inv.alienSpeed + 0.12);
          }

          // Move Player Bullets
          inv.bullets.forEach((b) => {
            b.y += b.vy;
            // Collision with aliens
            inv.aliens.forEach((a) => {
              if (a.alive && b.x >= a.x && b.x <= a.x + a.w && b.y >= a.y && b.y <= a.y + a.h) {
                a.alive = false;
                b.dead = true;
                inv.score += 20;
                playSound("chime");
                // Particle blast
                for (let p = 0; p < 6; p++) {
                  inv.particles.push({
                    x: a.x + a.w / 2,
                    y: a.y + a.h / 2,
                    vx: (Math.random() - 0.5) * 4,
                    vy: (Math.random() - 0.5) * 4,
                    life: 14,
                    color: "#60A5FA",
                  });
                }
              }
            });
          });
          inv.bullets = inv.bullets.filter((b) => !b.dead && b.y > 10);

          // Random Enemy Fire
          if (Math.random() < 0.025 && inv.enemyBullets.length < 3) {
            const living = inv.aliens.filter((a) => a.alive);
            if (living.length > 0) {
              const shooter = living[Math.floor(Math.random() * living.length)];
              inv.enemyBullets.push({ x: shooter.x + shooter.w / 2, y: shooter.y + shooter.h, vy: 3 });
            }
          }

          // Move Enemy Bullets
          inv.enemyBullets.forEach((eb) => {
            eb.y += eb.vy;
            // Hit player
            if (
              eb.x >= inv.player.x &&
              eb.x <= inv.player.x + inv.player.w &&
              eb.y >= inv.player.y &&
              eb.y <= inv.player.y + inv.player.h
            ) {
              eb.dead = true;
              inv.lives -= 1;
              playSound("buzz");
              if (inv.lives <= 0) {
                inv.gameOver = true;
                if (inv.score > inv.best) {
                  inv.best = inv.score;
                  saveBest("invaders", inv.best);
                }
              }
            }
          });
          inv.enemyBullets = inv.enemyBullets.filter((eb) => !eb.dead && eb.y < V_HEIGHT);

          // Check Win Condition
          if (inv.aliens.every((a) => !a.alive)) {
            inv.won = true;
            inv.gameOver = true;
            if (inv.score > inv.best) {
              inv.best = inv.score;
              saveBest("invaders", inv.best);
            }
          }
        }

        // Draw Player Ship (Turret cannon)
        ctx.fillStyle = "#38BDF8";
        ctx.fillRect(inv.player.x, inv.player.y + 4, inv.player.w, inv.player.h - 4);
        ctx.fillRect(inv.player.x + inv.player.w / 2 - 2, inv.player.y, 4, 4);

        // Draw Player Bullets
        ctx.fillStyle = "#F59E0B";
        inv.bullets.forEach((b) => ctx.fillRect(b.x, b.y, 2, 6));

        // Draw Enemy Bullets
        ctx.fillStyle = "#EF4444";
        inv.enemyBullets.forEach((eb) => ctx.fillRect(eb.x, eb.y, 2, 5));

        // Draw Aliens
        inv.aliens.forEach((a) => {
          if (!a.alive) return;
          ctx.fillStyle = a.type === "top" ? "#F43F5E" : a.type === "mid" ? "#A855F7" : "#06B6D4";
          ctx.fillRect(a.x + 2, a.y + 2, a.w - 4, a.h - 4);
          ctx.fillRect(a.x, a.y + 4, 2, a.h - 8);
          ctx.fillRect(a.x + a.w - 2, a.y + 4, 2, a.h - 8);
        });

        // Update & Draw Particles
        inv.particles.forEach((p) => {
          p.x += p.vx;
          p.y += p.vy;
          p.life -= 1;
          ctx.fillStyle = p.color;
          ctx.fillRect(p.x, p.y, 2, 2);
        });
        inv.particles = inv.particles.filter((p) => p.life > 0);

        // Status Header
        ctx.fillStyle = "#38BDF8";
        ctx.font = "8px 'Press Start 2P', monospace";
        ctx.fillText(`SCORE: ${inv.score}`, 12, 14);
        ctx.fillText(`LIVES: ${inv.lives}`, 130, 14);
        ctx.fillText(`HI: ${inv.best}`, V_WIDTH - 80, 14);

        if (inv.gameOver) {
          ctx.fillStyle = inv.won ? "#4ADE80" : "#EF4444";
          ctx.font = "12px 'Press Start 2P', monospace";
          ctx.fillText(inv.won ? "SYSTEM DEFENDED!" : "DEFENSE BREACHED", V_WIDTH / 2 - (inv.won ? 75 : 85), V_HEIGHT / 2 - 6);
          ctx.fillStyle = "#F5F2EB";
          ctx.font = "7px 'Press Start 2P', monospace";
          ctx.fillText("PRESS [A] OR START TO RE-ENGAGE", V_WIDTH / 2 - 95, V_HEIGHT / 2 + 14);
        }
      }

      // -----------------------------------------------------------
      // RENDER: BREAKOUT / ARKANOID
      // -----------------------------------------------------------
      else if (cur === "breakout") {
        const b = g.breakout;
        if (!b.gameOver) {
          if (!b.ball.stuck) {
            b.ball.x += b.ball.vx;
            b.ball.y += b.ball.vy;

            // Bounce off left/right walls
            if (b.ball.x - b.ball.radius <= 6) {
              b.ball.x = 6 + b.ball.radius;
              b.ball.vx *= -1;
              playSound("tick");
            } else if (b.ball.x + b.ball.radius >= V_WIDTH - 6) {
              b.ball.x = V_WIDTH - 6 - b.ball.radius;
              b.ball.vx *= -1;
              playSound("tick");
            }

            // Bounce off ceiling
            if (b.ball.y - b.ball.radius <= 18) {
              b.ball.y = 18 + b.ball.radius;
              b.ball.vy *= -1;
              playSound("tick");
            }

            // Paddle Collision
            if (
              b.ball.y + b.ball.radius >= b.paddle.y &&
              b.ball.y - b.ball.radius <= b.paddle.y + b.paddle.h &&
              b.ball.x >= b.paddle.x &&
              b.ball.x <= b.paddle.x + b.paddle.w
            ) {
              b.ball.vy = -Math.abs(b.ball.vy);
              // Influence ball angle depending on where it hits the paddle
              const hitOffset = (b.ball.x - (b.paddle.x + b.paddle.w / 2)) / (b.paddle.w / 2);
              b.ball.vx = hitOffset * 3.5;
              playSound("blip");
            }

            // Brick Collisions
            b.bricks.forEach((brick) => {
              if (!brick.alive) return;
              if (
                b.ball.x + b.ball.radius >= brick.x &&
                b.ball.x - b.ball.radius <= brick.x + brick.w &&
                b.ball.y + b.ball.radius >= brick.y &&
                b.ball.y - b.ball.radius <= brick.y + brick.h
              ) {
                brick.alive = false;
                b.ball.vy *= -1;
                b.score += 15;
                playSound("chime");
                // Particle burst
                for (let p = 0; p < 5; p++) {
                  b.particles.push({
                    x: brick.x + brick.w / 2,
                    y: brick.y + brick.h / 2,
                    vx: (Math.random() - 0.5) * 3,
                    vy: (Math.random() - 0.5) * 3,
                    life: 12,
                    color: brick.color,
                  });
                }
              }
            });

            // Missed bottom edge
            if (b.ball.y - b.ball.radius > V_HEIGHT) {
              b.lives -= 1;
              playSound("buzz");
              if (b.lives <= 0) {
                b.gameOver = true;
                if (b.score > b.best) {
                  b.best = b.score;
                  saveBest("breakout", b.best);
                }
              } else {
                b.ball.stuck = true;
                b.ball.vx = 2.2 * (Math.random() > 0.5 ? 1 : -1);
                b.ball.vy = -2.8;
              }
            }

            // Win condition (all bricks cleared)
            if (b.bricks.every((br) => !br.alive)) {
              b.won = true;
              b.gameOver = true;
              if (b.score > b.best) {
                b.best = b.score;
                saveBest("breakout", b.best);
              }
            }
          }
        }

        // Draw Paddle
        ctx.fillStyle = "#FB923C";
        ctx.fillRect(b.paddle.x, b.paddle.y, b.paddle.w, b.paddle.h);
        ctx.fillStyle = "#FFFFFF";
        ctx.fillRect(b.paddle.x + 4, b.paddle.y + 1, b.paddle.w - 8, 2);

        // Draw Ball
        ctx.fillStyle = "#FACC15";
        ctx.beginPath();
        ctx.arc(b.ball.x, b.ball.y, b.ball.radius, 0, Math.PI * 2);
        ctx.fill();

        // Draw Bricks
        b.bricks.forEach((brick) => {
          if (!brick.alive) return;
          ctx.fillStyle = brick.color;
          ctx.fillRect(brick.x, brick.y, brick.w, brick.h);
          ctx.fillStyle = "rgba(255,255,255,0.3)";
          ctx.fillRect(brick.x, brick.y, brick.w, 1.5);
        });

        // Update & Draw Particles
        b.particles.forEach((p) => {
          p.x += p.vx;
          p.y += p.vy;
          p.life -= 1;
          ctx.fillStyle = p.color;
          ctx.fillRect(p.x, p.y, 2, 2);
        });
        b.particles = b.particles.filter((p) => p.life > 0);

        // Status Header
        ctx.fillStyle = "#FB923C";
        ctx.font = "8px 'Press Start 2P', monospace";
        ctx.fillText(`SCORE: ${b.score}`, 12, 14);
        ctx.fillText(`BALLS: ${b.lives}`, 130, 14);
        ctx.fillText(`HI: ${b.best}`, V_WIDTH - 80, 14);

        if (b.ball.stuck && !b.gameOver) {
          ctx.fillStyle = "#E4E4E7";
          ctx.font = "7px 'Press Start 2P', monospace";
          ctx.fillText("PRESS [A] OR SPACE TO LAUNCH", V_WIDTH / 2 - 90, V_HEIGHT / 2 + 30);
        }

        if (b.gameOver) {
          ctx.fillStyle = b.won ? "#4ADE80" : "#EF4444";
          ctx.font = "12px 'Press Start 2P', monospace";
          ctx.fillText(b.won ? "GRID CLEARED!" : "ALL BALLS LOST", V_WIDTH / 2 - (b.won ? 65 : 75), V_HEIGHT / 2 - 6);
          ctx.fillStyle = "#F5F2EB";
          ctx.font = "7px 'Press Start 2P', monospace";
          ctx.fillText("PRESS [A] OR START TO RETRY", V_WIDTH / 2 - 85, V_HEIGHT / 2 + 14);
        }
      }

      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("arcade-action", onCustomAction);
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
    };
  }, [gameId, onSelectGame]);

  return (
    <div className="relative w-full overflow-hidden rounded-lg bg-black">
      <canvas
        ref={canvasRef}
        width={V_WIDTH}
        height={V_HEIGHT}
        className="w-full aspect-[16/10] block object-contain select-none"
        data-testid="arcade-canvas"
      />
      {/* CRT Scanline & Curved Glass Reflection Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_60%,rgba(0,0,0,0.65)_100%)]" />
      <div className="pointer-events-none scanlines absolute inset-0 opacity-25" />
    </div>
  );
};
