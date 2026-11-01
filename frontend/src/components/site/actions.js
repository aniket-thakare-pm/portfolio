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
