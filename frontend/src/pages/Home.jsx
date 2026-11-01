import { useEffect } from "react";
import Lenis from "lenis";
import { Header } from "@/components/site/Header";
import { Chapter } from "@/components/site/Chapter";
import { Manifesto } from "@/components/site/Manifesto";
import { Products } from "@/components/site/Products";
import { Skills } from "@/components/site/Skills";
import { Marquee } from "@/components/site/Marquee";
import { Contact } from "@/components/site/Contact";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.1, anchors: true });
    let id;
    const raf = (t) => {
      lenis.raf(t);
      id = requestAnimationFrame(raf);
    };
    id = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(id);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="grain min-h-screen bg-[#F4F1EA] text-[#1C1917] overflow-x-clip" data-testid="home-page">
      <Header />
      <main>
        <Chapter />
        <Marquee />
        <Manifesto />
        <Products />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}
