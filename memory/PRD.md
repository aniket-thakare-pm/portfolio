# PRD — "The Product Machine" portfolio

## Original problem statement
Act like a judge, first ask me a few questions to get my thought process aligned. Ask me clarifying questions to get my idea strong and solid. Build a landing page: I want to build my own portfolio. I'm a product manager, designer, video editor, and also a product builder. I have built a lot of products using AI and web coding. Now I want to showcase or flaunt my product building and entrepreneurial capabilities. However I want the design to be something quite extraordinary. I am inspired by a lot of retro designs, buttons, clicky sounds, and old colors like beige, for example. But I don't want you to settle for this. First let us plan the design and outlook of my portfolio website and then we'll proceed with some stuff.

## Architecture
- React (CRA) frontend only; no backend use. Lenis smooth scroll, framer-motion, Web Audio synthesized clicks (off by default, saved in localStorage).
- Content in `frontend/src/data/content.js`. Routes: `/` (site, Vintage hardware world), `/previews` (4 style previews).

## Personas
Founders/investors, hiring managers, collaborators.

## Core requirements
Hero with line reveal + tilting console, sound switch, manifesto (founder leads), product stories in dialogs, skills bento, marquee, Book a call + Email CTA, initials logo/favicon, phone layout.

## Implemented (2026-11-01)
- All Phase 1 items above; 4 previews (hardware, Win95 desktop with draggable windows, 1970s catalogue, arcade TV with channels).
- Placeholders: [Your Name], YN initials, [your@email.com], [Calendar link], [City, Country], [Product 1–5] with problem/built/tools/result/link.

## Update (2026-11-01): Macintosh scroll chapter
- Old console replaced by a CSS-3D beige computer (components/mac): arcade green screen with boot flicker → HELLO → product names, brightness dial, power switch, 6 clickable keyboard keys.
- Pinned 520vh scroll chapter (components/site/Chapter.jsx): computer turns through 5 stops, 5 role lines rise with blur fade, screen shows [Product 1–5], 01/05 progress bar; settles and shrinks at the end. Phone layout puts lines above/below; reduced-motion shows a still version.
- Product cards: clipped monitor frames, scan lines, cursor spotlight. /previews Vintage hardware now shows the computer.

## Update (2026-11-01): pacing, pixel art, mini game
- Back-of-computer spin compressed to ~3.5% of chapter scroll (p 0.37→0.405); all 5 stops show the screen. Chapter now 600vh, lines use STEP 0.144 (0.1→0.82).
- Each product has an 8x8 `pixel` sprite in content.js shown on screen above the name.
- "Ship it" mini game (components/mac/ScreenGame.jsx) on the screen during the chapter's final hold (p ≥ 0.85): start with SHP key, any keyboard key, Space or tapping the screen; jump over bugs; high score saved in the browser.

## Backlog
- P0: owner picks final world; real content swap.
- P1: easy product editing without code, video reels per product.
- P2: easter eggs/boot sequence, analytics, SEO/social share.

## Next tasks
Await style choice and real content.
