# Portfolio Update: "My Story" journey, two project shelves, and game sounds

This update adds a hidden "My story" section that opens when clicked. It shows the owner's path from video editing to building products, and the object on screen turns into a different tool for each step.
The projects are split into two shelves: PM case studies, which open into full stories, and the products the owner built. The "Ship it" game also gets retro sounds.

## Who it's for
- Hiring managers and founders who want proof of product management skill, through the PM case studies.
- Collaborators and investors who want to see what the owner has built and how a storyteller became a builder.

## Core features and experience
- **"My story" button.** It sits right after the computer scroll chapter. It is a large, pressable retro key labelled "My story — how I got here" with an arrow. The section stays closed until it is clicked. Clicking it makes a crisp click and smoothly opens the section. A "Close story" key at the end folds it back up.
- **Dark theme inside the story.** The section switches to a darker world: near-black graphite, warm off-white text, the orange accent, and a soft studio spotlight on the object. When the story ends, the page fades back to the usual beige and the projects continue.
- **Journey as a pinned scroll.** While visitors scroll inside the story, one object stays centred and changes into the tool of each step. Steps are numbered 01–07, with no years:
  1. Video editing: an editing deck with a timeline strip.
  2. Filmmaking: a cinema camera with a film reel.
  3. Photography: a classic photo camera with a lens that focuses as you scroll.
  4. Photoshop: a monitor showing layers and a brush.
  5. UI/UX: a design tablet with a wireframe.
  6. Product management: a board with sticky notes moving across a roadmap.
  7. Product building: the beige computer from the hero, closing the loop.
  - Each step has a large title and one short line about what that step taught. The text is placeholder until real wording is given. The title rises from below with a soft blur fade.
  - The change between objects is a smooth morph: shrink, turn, blur, then settle into the next tool. It does not hard-cut.
  - A pixel-type step counter ("03/07") and a thin progress line sit in the corner.
- **Two project shelves.**
  - **PM case studies (new).** 3 placeholder case studies. Each card shows the product area, the owner's role and one headline result. Clicking a card opens a full-height story panel that covers most of the screen. The panel has clear sections: the problem, research, key decisions and trade-offs, what launched, and the metrics or outcome. It also has a short "what I'd do next" note and a "Next case study" button.
  - **Things I built (existing).** The current product cards with monitor frames and cursor spotlight stay as they are. They still open the short story with "Try it".
- **Game sound pack.** When the sound switch is on, the "Ship it" game plays a retro jump blip, a crash buzz when a bug is hit, and a short rising chime for each point. It is silent when the switch is off.
- **Everything else stays:** hero chapter, marquee, manifesto, skills grid, contact keys, and /previews.

## User flow
1. Visitor scrolls the computer chapter, with its roles, product names and the game.
2. They see the "My story" key. If they press it, the dark section opens. They scroll through the seven steps as the object transforms, then return to the beige site.
3. They browse PM case studies and open one full story. Then they browse "Things I built".
4. They finish with skills and contact: Book a call or Email me.

## UI/UX feel
The main site keeps its warm beige hardware look. The story is the cinematic contrast: dark, spotlit and slower, like a product film. The objects are crafted from the same beige-and-orange material, so they feel like one family of hardware. Motion stays heavy and smooth, and clicks stay crisp and mechanical.

## Implementation phases
- **Phase 1 (built now):**
  - The "My story" button that opens and closes the dark section.
  - The seven-step pinned journey with transforming objects, step titles and the counter.
  - The phone version: the object is smaller, with the text above and below it. Visitors who turn off motion get a simple stacked list.
  - The PM case studies shelf with 3 placeholder full stories.
  - The renamed "Things I built" shelf.
  - Game sounds.
- **Phase 2:** the owner's real story text, case studies, product details, name, email and calendar link. Optional real photos or short clips per journey step, such as a frame from an early edit or a photograph taken.
- **Phase 3:** easter eggs in each journey object (for example, click the camera to take a "photo"), downloadable resume, visitor analytics and search/social-share setup.

## Assumptions
- The story button sits directly after the computer scroll chapter, before the manifesto, and the story is closed when a visitor first arrives.
- The five role lines in the computer chapter stay as they are.
- The journey is about seven screen-heights of scrolling, one per step, inside the opened section.
- Step titles and lines are placeholders, e.g. "01 — Video editing: [What this taught me]".
- There are 3 PM case studies, all placeholders such as [Case study 1], with placeholder metrics clearly marked.
- The objects are original illustrations of generic tools, with no real brand logos (no Adobe, Canon and so on). "Photoshop" appears only as a text label.
- Game sounds follow the existing sound switch, which is off by default.
- Publishing is done with the platform's Deploy button once the owner is happy. It is not part of this plan.
