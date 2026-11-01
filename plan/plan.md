# Personal Portfolio — "The Product Machine"

A one-page portfolio for a product manager, designer, video editor and product builder who ships AI-built products.
It presents the owner as a fast-shipping founder with taste, and the site itself is a crafted, tactile retro object people want to click.

## Who it's for
- Founders, investors and collaborators deciding whether to partner with the owner.
- Hiring managers and recruiters looking for a product manager who can also design and build.
- Anyone the owner shares the link with, who should leave thinking: "this person picks the right problems and ships them well."

## Core features and experience
- **Style preview first.** Before the full site is built, four clickable one-screen hero previews are made, one per retro world, so the owner can choose by seeing rather than reading:
  1. Vintage hardware — beige casing, chunky keys, knobs, toggle switches, glowing number displays (like a Braun radio or a synthesizer). Real-world reference: teenage.engineering
  2. Old computer desktop — windows you open and drag, folder icons, start menu (like Windows 95 / early Macintosh). Reference: poolsuite.net, yuteoctober.github.io/wins95Portfolio
  3. 1970s printed catalogue — paper texture, big serif headlines, each product listed with an order number.
  4. Arcade / old TV — glowing screen, scan lines, pixel type, a "channel" or "level" per product. Reference: kaisermann.me
  The chosen world is then pushed further than plain "beige retro": modern layout, premium motion and real craft, so it feels new rather than nostalgic-only.
- **Hero with a signature moment.** Large headline revealed line by line on load, a subtle 3D tilt/parallax on the main retro object, and a sound switch (off by default).
- **Three-part positioning.** Founder who ships fast · Product manager worth hiring · Taste for the right problems. Shown as a short manifesto section.
- **Products as short stories.** Each product card opens into: the problem, what was built, tools used (AI, code, design, video), the result, and a link to try it.
- **Skills bento.** Product, design, video editing and building shown as an aligned grid of tiles in the chosen style.
- **Slow editorial marquee** of tools and words (e.g. "shipped", "designed", "edited", "launched").
- **Clicky sounds.** Every button, key and switch has a matching retro click once the visitor turns sound on. Choice is remembered.
- **Closing call to action.** Two buttons: "Book a call" (opens the owner's calendar link) and "Email me" (opens the visitor's email app).
- **Original logo mark** built from the owner's initials in the chosen style, also used as the browser tab icon.
- Works fully on phones; every section readable even if animations don't run.

## User flow
1. Visitor lands, sees the hero object assemble and the headline reveal.
2. Optionally flips the sound switch on.
3. Scrolls through manifesto, products, skills and marquee.
4. Opens one or two product stories and tries a product.
5. Ends at the closing section and books a call or sends an email.

## UI/UX feel
Tactile, warm and confident. Beige, cream and muted tones from the chosen era, with one sharp accent colour. Buttons feel pressable (depth, press-down animation, click). Smooth momentum scrolling, sections that reveal as you scroll, generous spacing, and distinctive type that matches the era — premium "award site" craft rather than a template.

## Implementation phases
- **Phase 1 (MVP, built now):** four clickable style previews to choose from; then the full one-page site in the chosen style — hero, manifesto, product stories, skills bento, marquee, sound toggle, logo/favicon, Book a call + Email buttons, phone layout.
- **Phase 2:** owner's real content swapped in (name, photo, products, screenshots, links), a simple way to edit products without touching code, and short video reels per product.
- **Phase 3:** extra easter eggs in the chosen world (hidden keys, mini-game or boot sequence), visitor analytics, and search/social-share setup.

## Assumptions
- The site is a single scrolling page.
- Name, calendar link, email, photo and product details are not available yet; clearly marked placeholders (e.g. [Your Name], [Calendar link], [Product 1]) are used and listed for replacement.
- 4–6 sample product stories are shown as placeholders.
- Sound is off until the visitor switches it on.
- No contact form or login; contact is via calendar link and email only.
- The three-part positioning (founder, hireable PM, taste) is the core message, with "founder who ships fast" leading.
- Final choice of retro world is made by the owner from the visual previews in Phase 1.
