import { toast } from "sonner";
import { OWNER } from "@/data/content";

export const bookCall = () => {
  if (/^https?:\/\//.test(OWNER.calendar)) window.open(OWNER.calendar, "_blank", "noopener");
  else toast("Calendar link coming soon", { description: "Add your booking link in src/data/content.js" });
};

export const emailMe = () => {
  if (OWNER.email.includes("@") && !OWNER.email.startsWith("[")) window.location.href = `mailto:${OWNER.email}`;
  else toast("Email address coming soon", { description: "Add your email in src/data/content.js" });
};

export const scrollToContact = (e) => {
  if (e && typeof e.preventDefault === "function") {
    e.preventDefault();
  }
  const contactEl = document.getElementById("contact");
  if (!contactEl) return;

  // Calculate target so bottom of viewport aligns exactly with the bottom line of Contact section
  const contactBottom = contactEl.offsetTop + contactEl.offsetHeight;
  const targetY = Math.max(0, contactBottom - window.innerHeight);

  if (window.__lenis) {
    window.__lenis.scrollTo(targetY, {
      duration: 1.4,
      easing: (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2),
    });
  } else {
    window.scrollTo({ top: targetY, behavior: "smooth" });
  }
};
