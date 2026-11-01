# Portfolio Update: "The Product Machine", now with the Macintosh

The hero console is replaced by a beige Macintosh-style computer with a glowing arcade-style screen.
As visitors scroll, the computer stays centred and turns in 3D, the screen shows each product name in turn, and lines of text rise around it. After that the page scrolls normally.

## Who it's for
- Founders, investors and collaborators deciding whether to work with the owner.
- Hiring managers looking for a product manager who also designs, edits video and builds.

## Core features and experience
- **Macintosh-style computer as the main object.** It is a true 3D model, not a flat picture: a beige all-in-one body with soft rounded edges, a recessed screen, a floppy-disk slot, vents, a small badge with the owner's initials, and a matching mini keyboard in front.
  - **Arcade screen.** Deep green glass with glowing pixel type, scan lines, a slight curve and a flicker. The text glow comes from the Arcade preview.
  - **Things you can still touch.** The tactile parts you liked stay, now built into the computer: a brightness dial that turns when clicked, a power switch, and keyboard keys that press down with a click. Clicking the keys also changes the screen.
- **Opening moment.** The headline reveals line by line, then the computer powers on with a short boot flicker. The screen shows "HELLO" and then the first product name.
- **The scroll chapter, the centrepiece.**
  - When the visitor starts scrolling, the computer stays pinned in the centre of the screen. It turns smoothly in 3D as they scroll: first a three-quarter view, then its side profile, then a nearly full spin, and finally back to the front.
  - At each turning stop, one large text line rises from below and fades past the computer: "Founder who ships fast." → "Product manager worth hiring." → "Designer with taste." → "Editor who tells the story." → "Builder who ships with AI."
  - Each time the computer turns, its screen switches to the next product name ([Product 1] … [Product 5]) with a quick channel-change glitch.
  - A small progress bar in the corner shows how far through the chapter the visitor is, labelled "01/05" in pixel type.
  - When the chapter ends, the computer settles, shrinks slightly and moves up. The manifesto, products, skills and contact sections then scroll normally.
- **Products section (kept, refined).** The cards keep their dotted grid backgrounds. Clipped screen frames are added so each card looks like a cartridge or monitor, with a soft spotlight that follows the cursor. Clicking a card still opens the short story.
- **Rest of the site kept.** The marquee, manifesto, skills grid, sound switch (off by default) and the closing "Book a call" and "Email me" buttons all stay. The old standalone console is removed everywhere, including from the Vintage hardware preview on /previews, which will now show the computer.
- **Phones.** The scroll chapter works on phones too. The computer is smaller and the text lines sit above and below it, not around it. If 3D is slow or the visitor has turned off motion, a still front view of the computer is shown and all text stays readable.

## User flow
1. Visitor lands. The headline reveals and the computer boots up with "HELLO".
2. They scroll. The computer stays put and turns, the role lines rise one by one, and the screen flips through the product names.
3. The chapter ends, the computer moves aside, and normal scrolling continues: manifesto → products → skills → contact.
4. They open a product story, then book a call or send an email.

## UI/UX feel
Warm beige and cream hardware with one sharp orange accent and that phosphor-green screen glow. Heavy, satisfying motion: the computer turns smoothly with the scroll and never jumps, and the text rises with a soft blur fade. Clicks are crisp and mechanical. It should feel like a physical object on a desk being slowly turned under studio light, with a soft floor shadow and a gentle highlight sliding across the casing as it turns.

## Implementation phases
- **Phase 1 (built now):**
  - The 3D Macintosh with the arcade screen, boot moment, dial, switch and keys.
  - The pinned scroll chapter with turning, rising role lines, product names on screen and the progress bar.
  - The phone and reduced-motion versions.
  - The old console removed.
  - Product cards refined with clipped frames and the cursor spotlight.
  - The Vintage hardware preview updated to show the computer.
- **Phase 2:** the owner's real name, email, calendar link, photo and product stories with screenshots. The screen could show a tiny pixel version of each product.
- **Phase 3:** easter eggs, such as typing a secret word on the keyboard or a mini arcade game on the screen. Also visitor analytics and search/social-share setup.

## Assumptions
- The role lines are the five above. They can be edited along with the rest of the content.
- The screen shows the five placeholder product names, [Product 1] to [Product 5], until real names are provided.
- The scroll chapter lasts about four screen-heights of scrolling, about one stop per product.
- The computer spins around its upright axis with a slight tilt. It is not flipped upside down.
- The computer's badge shows the "YN" initials mark, not Apple's logo or name, to avoid copying a real brand.
- Arcade text glow is used only on the computer screen. The rest of the site keeps its current type.
- The other three previews on /previews (desktop, catalogue, arcade) stay as they are for reference.
