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
  { id: "experience", label: "Experience" },
  { id: "cases", label: "Cases" },
  { id: "built", label: "Built" },
  { id: "principles", label: "Principles" },
  { id: "contact", label: "Contact" },
];

export const EXPERIENCES = [
  {
    no: "01",
    role: "Product Management Intern",
    company: "Limechat",
    location: "Bengaluru, India",
    period: "May 2026 – Jul 2026",
    vertical: "Enterprise Conversational Voice AI (Reporting to Deputy Director of Product)",
    badge: "Voice AI · 500k+ Calls",
    bullets: [
      "Optimized hybrid classification pipeline processing 80K+ monthly production calls; cut recurring LLM costs by introducing deterministic rules.",
      "Analyzed 500K+ enterprise voice interactions in SQL to isolate drop-off triggers; redesigned prompt architecture raising average call duration from 24s to 40s+ (+67%).",
      "Cut engineering QA bandwidth load by 40% via a MECE scenario testing framework by building an autonomous simulation bot for bot-on-bot QA.",
      "Shipped analytics module from a solo-authored PRD, cutting client report generation time from 2 hours to <5 minutes.",
      "Engineered prompt self-learning loop across 10+ live customer bots (Nivea, Mahindra), resolving 60% of recurring issues upfront.",
    ],
    skills: ["SQL", "Voice AI", "PRD Authoring", "Bot-on-Bot Simulation", "Prompt Architecture", "Nivea India"],
  },
  {
    no: "02",
    role: "Product Management Intern",
    company: "Gen AI Labs",
    location: "USA (Remote)",
    period: "May 2025 – Jul 2025",
    vertical: "Agentic Private Markets & Diligence Automation (Reporting to Founder)",
    badge: "Agentic AI · B2B GTM",
    bullets: [
      "Authored 3 AI feature PRDs & humanized multi-agent personas based on 15+ competitor benchmarks, significantly boosting user adoption and trust metrics.",
      "Reduced deal memo review time by 30% while maintaining 98%+ LLM evaluation accuracy via systematic flag-correction and inline-reference UI systems.",
      "Shipped the primary marketing platform end-to-end, steering sprint roadmaps across a 6-member cross-functional team of devs and designers.",
      "Generated $90K+ B2B pipeline and closed a $36K ARR enterprise client by directing founder GTM strategy, investor decks, and product demos.",
    ],
    skills: ["Agentic Workflows", "PRDs", "LLM Evaluation", "Cross-Functional Sprints", "B2B Sales Collateral"],
  },
];

export const MANIFESTO = [
  {
    num: "01",
    title: "Discovery over assumptions",
    tag: "Validation",
    body: "Ideas are cheap; validated user demand is rare. I conduct structured qualitative IDIs and econometric modeling to eliminate non-starters before committing engineering payroll to unproven features.",
  },
  {
    num: "02",
    title: "Specs that engineers respect",
    tag: "Rigor",
    body: "I bridge product strategy directly into systems design, data models, and API constraints. I write specs with explicit edge cases, guardrails, and trade-offs so teams execute without ambiguity.",
  },
  {
    num: "03",
    title: "High velocity & relentless craft",
    tag: "Execution",
    body: "I don't just hand off a wireframe. I build functional prototypes, test edge cases, and use modern AI tools and code to ship production-ready software at startup speed.",
  },
];

export const PRODUCTS = [
  {
    no: "01",
    name: "Scalex",
    kind: "LegalTech B2B SaaS · Co-founder & CEO",
    status: "MVP Shipped",
    color: "#FF5A00",
    tags: ["B2B SaaS", "LegalTech", "0-to-1", "Founder"],
    problem: "Law firms in India lose 20+ hours weekly to manual case status tracking, fragmented document lifecycles, and archaic advocate scheduling.",
    built: "Shipped a 5-module, 17-feature B2B SaaS MVP in 5 weeks after conducting 40+ in-depth advocate interviews. Built automated case tracking, schedule alerts, and document pipelines.",
    tools: ["Next.js", "FastAPI", "PostgreSQL", "Figma", "User Research"],
    result: "Onboarded 30+ active users, secured a ₹25K paid pilot with an enterprise law firm, and built an ₹800K qualified enterprise pipeline.",
    link: "https://github.com/aniket-thakare-pm",
    pixel: ["..####..", ".######.", "###..###", "###..###", ".######.", "..####..", "..####..", ".######."],
  },
  {
    no: "02",
    name: "Dezine",
    kind: "Agency & Operations · Founder",
    status: "Scaled",
    color: "#2F6F5E",
    tags: ["Workflow Automation", "Operations", "LLMs", "Growth"],
    problem: "Creative service agencies suffer from client margin bleed, unscalable custom scoping, and manual asset turnaround bottlenecks.",
    built: "Restructured service offerings into 3 self-selecting tiers and engineered automated LLM asset-sourcing workflows with structured script generation.",
    tools: ["LLM Workflows", "Operations", "Figma", "Premiere Pro"],
    result: "Scaled to an 8-person paid team delivering 80+ projects with 3M+ views. Boosted net margins by +30% and cut asset retrieval turnaround by 50%.",
    link: "https://www.linkedin.com/in/aniket-a-thakare/",
    pixel: ["########", "#.#..#.#", "#.####.#", "##....##", "##....##", "#.####.#", "#.#..#.#", "########"],
  },
  {
    no: "03",
    name: "UBS Engine",
    kind: "AI Econometric Simulation · Solo Builder",
    status: "Locked",
    color: "#3B4A8C",
    tags: ["AI Econometrics", "Decision Science", "Python", "Next.js"],
    problem: "Teams burn $25k-$50k per sprint debating micro-flows via HiPPO intuition due to the high cost and latency of traditional user recruitment panels.",
    built: "Discrete choice simulation engine using McFadden Random Utility Logit modeling. Architected a 4-layer decoupled system separating semantic parsing from mathematical logit engines.",
    tools: ["Python", "Next.js", "TypeScript", "Econometrics"],
    result: "3.34% Grand MAE across 30 published consumer studies; 100% walk-forward empirical pass rate with zero LLM sycophancy bias.",
    link: "https://github.com/aniket-thakare-pm",
    pixel: ["...##...", ".######.", "##.##.##", "########", "###..###", ".######.", "..####..", "...##..."],
  },
  {
    no: "04",
    name: "LOCUS",
    kind: "Native Android App · Solo Builder",
    status: "Beta Live",
    color: "#C9A227",
    tags: ["Android", "Kotlin", "Jetpack Compose", "Local-First"],
    problem: "Users effortlessly bypass standard operating system timers without genuine friction, perpetuating habitual doom-scrolling.",
    built: "Local-first Android productivity app built with Kotlin, Jetpack Compose, and Room SQLite with zero-telemetry local storage and intentional behavioral slide contracts.",
    tools: ["Kotlin", "Jetpack Compose", "Room SQLite", "Android OS"],
    result: "Reduced daily distractive screen time 40%+ across 18 beta DAUs with zero-UI gesture session initiation (<1s).",
    link: "https://github.com/aniket-thakare-pm",
    pixel: ["..####..", ".#....#.", "#..##..#", "#.#..#.#", "#..##..#", "#......#", ".#....#.", "..####.."],
  },
  {
    no: "05",
    name: "FinTrack",
    kind: "Personal Ledger & Run-Rate · Solo Builder",
    status: "Live Core",
    color: "#A8452F",
    tags: ["Python", "SQLite", "Analytics", "Privacy"],
    problem: "Mainstream financial trackers require intrusive bank credential scraping or manual entry, failing to provide predictive run-rate visibility.",
    built: "Privacy-first offline financial ledger and forecasting layer using SQLite, automated transaction parsing, and multi-sector run-rate modeling.",
    tools: ["Python", "SQLite", "Pandas", "Figma"],
    result: "100% local, zero-cloud data leakage architecture with deterministic category run-rate forecasting.",
    link: "https://github.com/aniket-thakare-pm",
    pixel: ["########", "#......#", "#.#..#.#", "#.####.#", "#......#", "#.####.#", "#......#", "########"],
  },
];

export const SKILLS = [
  { id: "product", title: "Product Strategy", sub: "Qualitative IDIs · Opportunity Trees · TAM · RICE Triage", span: "lg:col-span-2 lg:row-span-2" },
  { id: "design", title: "Systems & Architecture", sub: "Data Models · API Constraints · Agile Sprints · Edge Cases", span: "lg:col-span-2" },
  { id: "video", title: "Quantitative Analytics", sub: "Metric Hierarchies · North Star Tracking · Funnels · Econometrics", span: "lg:col-span-1" },
  { id: "build", title: "Interactive Prototyping", sub: "Figma Systems · Next.js / Python Builds · Local-First Apps", span: "lg:col-span-1" },
];

export const ROLE_LINES = [
  ["Product manager who", "builds."],
  ["Data-backed specs &", "models."],
  ["0-to-1 discovery", "speed."],
  ["Uncompromising product", "craft."],
  ["Shipped live to", "production."],
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

export const CASE_STUDIES = [
  {
    no: "01",
    title: "Scaling Enterprise Voice AI & Autonomous QA",
    area: "Enterprise B2B SaaS / Conversational Voice AI",
    role: "Product Management Intern (Reporting to Deputy Director of Product)",
    result: "+67%",
    resultLabel: "Average call duration (24s to 40s+) across 500k+ audio logs",
    problem: "Enterprise voice calling bots suffered early drop-offs within 24s. Recurring prompt issues required tedious manual developer triage across 10+ live customer bots, and manual PM testing was heavily bottlenecking sprint releases.",
    research: "Queried 500,000+ enterprise call logs in SQL to map precise drop-off triggers. Found that 60% of recurring failures stemmed from edge-case prompt drift and absence of an automated self-learning feedback loop.",
    decisions: [
      "Replaced pure LLM processing with a hybrid deterministic classification pipeline, reducing recurring LLM API costs.",
      "Built an autonomous simulation bot for bot-on-bot QA testing across 30+ complex conversational flows, cutting engineering load by 40%.",
      "Authored a solo PRD for automated client analytics, slashing report generation from 2 hours to <5 minutes.",
    ],
    launched: "Prompt self-learning loop deployed across 10+ live enterprise bots (Nivea, Mahindra), a MECE 35-scenario simulation testing bot, and Nivea's dedicated self-serve analytics portal.",
    outcome: "Call duration surged from 24s to 40s+; recurring prompt failures decreased by 60%; engineering QA bandwidth load cut by 40-56%.",
    metrics: [
      ["Call Duration", "+67%"],
      ["QA Bandwidth Cut", "40%"],
      ["Report Generation", "<5 mins"],
    ],
    next: "Integrate acoustic sentiment detection into the real-time routing layer to dynamically adapt bot tone during high-frustration caller moments.",
  },
  {
    no: "02",
    title: "Reimagining Creative Control for Mobile Generative AI",
    area: "InterIIT Tech Meet 14.0 — National Gold Medal",
    role: "Product Development Lead / Product Strategist",
    result: "$725M",
    resultLabel: "Addressable mobile AI TAM (National 1st Place across all 23 IITs)",
    problem: "Single-shot generative AI tools produce flat JPEGs with zero granular post-generation control. Meanwhile, desktop Photoshop has a 15-minute barrier to boot and lacks mobile-first gestures for the next generation of visual creators.",
    research: "Conducted triangulated top-down and bottom-up market sizing across 48M global mobile creators, defining 3 distinct quantitative personas from studio pros to high-velocity prosumers.",
    decisions: [
      "Anchored product strategy on preserving Photoshop's core structural moat—the non-destructive layer stack—rather than adopting flat single-shot canvases.",
      "Applied a 3-factor RICE multi-criteria model to evaluate and prioritize the top 5 of 20+ proposed AI features, deprioritizing compute-heavy 3D mesh tools.",
      "Designed touch/stylus-native multimodal interfaces with contextual radial tool palettes to eliminate desktop menu bloat.",
    ],
    launched: "Comprehensive product strategy, interactive Figma prototypes, hybrid on-device/cloud compute architecture, and monetization roadmap for Photoshop 2030.",
    outcome: "Clinched the National Gold Medal (1st Place across all 23 IITs) evaluated by the Adobe leadership jury.",
    metrics: [
      ["Mobile AI TAM", "$725M"],
      ["National Rank", "1st / 23 IITs"],
      ["Filtered Features", "Top 5 / 20+"],
    ],
    next: "Explore tokenized on-device micro-inference caching to optimize battery consumption on mobile devices during complex multi-layer generative inpainting.",
  },
  {
    no: "03",
    title: "Unlocking Beauty & Personal Care in Creator Commerce",
    area: "Social E-Commerce / Creator Economy / Value Marketplace",
    role: "Lead Product Strategist & Quantitative Modeler (Strategix IIT KGP)",
    result: "₹14.57 Cr",
    resultLabel: "Quarterly net incremental NMV (~₹58 Cr annualized) with zero cash burn",
    problem: "While Beauty & Personal Care (BPC) represents ~32% of global creator commerce (TikTok Shop), it severely under-indexed on Meesho (content commerce was only 2.4% of NMV) due to high upfront product sampling costs and return fraud.",
    research: "Conducted 23 creator IDIs and 118 consumer surveys. Uncovered that micro-creators cannot afford ₹15k-₹20k inventory upfront, while sellers fear unboxing returns.",
    decisions: [
      "Created a reverse-escrow Creator Sampling Wallet funded by verified brand partners, eliminating creator capital requirements.",
      "Implemented gamified tiered commissions (Silver → Gold → Platinum) tied to net delivered GMV rather than gross order clicks.",
      "Built return-fraud mitigation guardrails with pre-dispatch sealed-tag video verification, keeping pilot default exposure under ₹2.25 Lakh.",
    ],
    launched: "13-page executive pitch deck, 7 technical appendix chapters, 11 high-fidelity interactive UI prototypes, and 6 standalone PRDs.",
    outcome: "Ongoing Semifinalist (Strategix IIT Kharagpur); model projects ₹14.57 Cr net incremental NMV/qtr and ₹30 Cr 12-month brand marketplace revenue.",
    metrics: [
      ["Incremental NMV", "₹14.57 Cr/qtr"],
      ["Annualized NMV", "~₹58 Cr"],
      ["Interviews & Surveys", "141+"],
    ],
    next: "Deploy live affiliate conversion tracking with dynamic localized vernacular voiceovers for Tier-2/Tier-3 regional creator audiences.",
  },
];

export const MARQUEE_WORDS = ["Shipped", "Designed", "Validated", "Modeled", "Prototyped", "Tested", "Iterated", "Shipped again"];
export const MARQUEE_TOOLS = ["Python", "SQL", "Next.js", "React", "FastAPI", "Kotlin", "Figma", "Jetpack Compose", "LLMs", "Pandas"];
