import { useEffect } from "react";
import Lenis from "lenis";
import { Header } from "@/components/site/Header";
import { Chapter } from "@/components/site/Chapter";
import { CaseStudies } from "@/components/site/CaseStudies";
import { Products } from "@/components/site/Products";
import { Leadership } from "@/components/site/Leadership";
import { Story } from "@/components/story/Story";
import { Skills } from "@/components/site/Skills";
import { Contact } from "@/components/site/Contact";
import { Arcade } from "@/components/site/Arcade";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.1, anchors: true });
    window.__lenis = lenis;
    let id;
    const raf = (t) => {
      lenis.raf(t);
      id = requestAnimationFrame(raf);
    };
    id = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(id);
      lenis.destroy();
      window.__lenis = null;
    };
  }, []);

  return (
    <div className="grain min-h-screen bg-[#F4F1EA] text-[#1C1917] overflow-x-clip" data-testid="home-page">
      <Header />
      <main>
        <Chapter />
        <CaseStudies />
        <Products />
        <Leadership />
        <Story />
        <Skills />
        <Contact />
        <Arcade />
      </main>
    </div>
  );
}
