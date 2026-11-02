export const OWNER = {
  name: "Aniket Thakare",
  initials: "AT",
  email: "aathakare07@gmail.com",
  calendar: "",
  location: "IIT Kharagpur, India",
  linkedin: "https://www.linkedin.com/in/aniket-a-thakare/",
  github: "https://github.com/aniket-thakare-pm",
};

export const NAV = [
  { id: "manifesto", label: "Manifesto" },
  { id: "cases", label: "Cases" },
  { id: "products", label: "Built" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export const MANIFESTO = [
  {
    num: "01",
    title: "Founder who ships fast",
    tag: "Lead trait",
    body: "I go from idea to a live, usable product in days — not quarters. AI and web code are my power tools; judgement decides what gets built.",
  },
  {
    num: "02",
    title: "Product manager worth hiring",
    tag: "Strategy",
    body: "Discovery, prioritisation and clear trade-offs. I write the spec, align the team and stay accountable for the outcome.",
  },
  {
    num: "03",
    title: "Taste for the right problems",
    tag: "Craft",
    body: "Design and video sense mean the product looks, feels and tells its story as well as it works.",
  },
];

export const PRODUCTS = [
  {
    no: "01",
    name: "[Product 1]",
    kind: "AI assistant · sample",
    status: "Live",
    color: "#FF5A00",
    tags: ["AI", "Code", "Design"],
    problem: "[Describe the problem you saw — who had it and why it mattered.]",
    built: "[What you built, in one or two sentences.]",
    tools: ["[LLM]", "React", "FastAPI", "Figma"],
    result: "[Result — users, revenue, time saved or what you learned.]",
    link: "[Product link]",
    pixel: ["..####..", ".#....#.", "#.#..#.#", "#......#", "#.####.#", ".#....#.", "..####..", ".#.##.#."],
  },
  {
    no: "02",
    name: "[Product 2]",
    kind: "Web app · sample",
    status: "Live",
    color: "#2F6F5E",
    tags: ["Code", "Design"],
    problem: "[The problem.]",
    built: "[What you built.]",
    tools: ["React", "[Database]", "Figma"],
    result: "[The result.]",
    link: "[Product link]",
    pixel: ["########", "#.#.#..#", "########", "#......#", "#.##...#", "#......#", "#.####.#", "########"],
  },
  {
    no: "03",
    name: "[Product 3]",
    kind: "Video tool · sample",
    status: "Beta",
    color: "#C9A227",
    tags: ["AI", "Video"],
    problem: "[The problem.]",
    built: "[What you built.]",
    tools: ["[AI model]", "Premiere Pro"],
    result: "[The result.]",
    link: "[Product link]",
    pixel: ["#.#.#.#.", "########", "#..#...#", "#..##..#", "#..###.#", "#..##..#", "#..#...#", "########"],
  },
  {
    no: "04",
    name: "[Product 4]",
    kind: "Internal tool · sample",
    status: "Shipped",
    color: "#3B4A8C",
    tags: ["Product", "Code"],
    problem: "[The problem.]",
    built: "[What you built.]",
    tools: ["[No-code / code]", "[AI model]"],
    result: "[The result.]",
    link: "[Product link]",
    pixel: ["...##...", ".#.##.#.", "..####..", "###..###", "###..###", "..####..", ".#.##.#.", "...##..."],
  },
  {
    no: "05",
    name: "[Product 5]",
    kind: "Side project · sample",
    status: "Experiment",
    color: "#A8452F",
    tags: ["Design", "Video"],
    problem: "[The problem.]",
    built: "[What you built.]",
    tools: ["Figma", "After Effects"],
    result: "[The result.]",
    link: "[Product link]",
    pixel: ["...##...", "...##...", "########", ".######.", "..####..", ".##..##.", ".#....#.", "#......#"],
  },
];

export const SKILLS = [
  { id: "product", title: "Product", sub: "Discovery · Roadmaps · Specs · Metrics", span: "lg:col-span-2 lg:row-span-2" },
  { id: "design", title: "Design", sub: "Interfaces · Systems · Motion", span: "lg:col-span-2" },
  { id: "video", title: "Video editing", sub: "Launch films · Reels · Story", span: "lg:col-span-1" },
  { id: "build", title: "Building", sub: "AI · Web code · Shipping", span: "lg:col-span-1" },
];

export const ROLE_LINES = [
  ["Founder who ships", "fast."],
  ["Product manager worth", "hiring."],
  ["Designer with", "taste."],
  ["Editor who tells the", "story."],
  ["Builder who ships with", "AI."],
];

export const JOURNEY = [
  { no: "01", obj: "edit", title: "Video editing", line: "Taught me pacing, rhythm, and the ruthless discipline of cutting anything that doesn't serve the core story." },
  { no: "02", obj: "film", title: "Filmmaking", line: "Directing cast and crew under tight deadlines taught me cross-functional alignment and steering people toward a unified vision." },
  { no: "03", obj: "photo", title: "Photography", line: "Trained my eye for framing, composition, and learning how to isolate the essential signal from surrounding noise." },
  { no: "04", obj: "ps", title: "Graphic design", line: "Taught me typography, visual weight, and spatial hierarchy — and that perceived quality directly dictates user trust." },
  { no: "05", obj: "ui", title: "UI / UX", line: "Moving from static aesthetics to dynamic interaction — designing intuitive flows that minimize cognitive friction." },
  { no: "06", obj: "pm", title: "Product management", line: "The strategic anchor: identifying the right problem, talking to real users, weighing hard trade-offs, and prioritizing outcomes." },
  { no: "07", obj: "build", title: "Product building", line: "Closing the loop: using code and modern AI to take a concept from a PRD all the way to a live, working product in the real world." },
];

const caseStudy = (no) => ({
  no,
  title: `[Case study ${Number(no)}]`,
  area: "[Product area]",
  role: "[Your role, e.g. Lead PM]",
  result: "[+00%]",
  resultLabel: "[Headline result — placeholder]",
  problem: "[The user or business problem, and why it mattered now.]",
  research: "[How you learned — interviews, data, experiments — and the key insight.]",
  decisions: ["[Decision 1] — [the trade-off you accepted]", "[Decision 2] — [the trade-off]", "[What you chose not to build, and why]"],
  launched: "[What shipped, to whom, and how it rolled out.]",
  outcome: "[Metrics and what changed for users or the business — placeholder.]",
  metrics: [["[Metric 1]", "[+00%]"], ["[Metric 2]", "[00k]"], ["[Metric 3]", "[0.0x]"]],
  next: "[What you'd do next with more time or data.]",
});

export const CASE_STUDIES = ["01", "02", "03"].map(caseStudy);

export const MARQUEE_WORDS = ["Shipped", "Designed", "Edited", "Launched", "Prototyped", "Tested", "Iterated", "Shipped again"];
export const MARQUEE_TOOLS = ["[LLMs]", "React", "FastAPI", "Figma", "Premiere Pro", "After Effects", "Notion", "[Your tools]"];
