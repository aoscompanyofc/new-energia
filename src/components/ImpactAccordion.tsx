import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { impactAccordion } from "../data/content";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { PlusIcon, MinusIcon } from "./Icons";

export function ImpactAccordion() {
  const scope = useScrollReveal<HTMLElement>();
  const [openIndex, setOpenIndex] = useState(0);
  const prefersReducedMotion = usePrefersReducedMotion();
  const panelRefs = useRef<Array<HTMLDivElement | null>>([]);

  useGSAP(() => {
    panelRefs.current.forEach((panel, index) => {
      if (!panel) return;
      const isOpen = index === openIndex;
      if (prefersReducedMotion) {
        panel.style.height = isOpen ? "auto" : "0px";
        panel.style.opacity = isOpen ? "1" : "0";
        return;
      }
      gsap.to(panel, {
        height: isOpen ? "auto" : 0,
        autoAlpha: isOpen ? 1 : 0,
        duration: 0.4,
        ease: "power2.inOut",
      });
    });
  }, [openIndex, prefersReducedMotion]);

  return (
    <section ref={scope} className="bg-navy px-5 py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-20">
        <div data-reveal>
          <h2 className="font-heading text-3xl font-medium leading-tight text-white sm:text-4xl md:text-[3rem]">
            {impactAccordion.title} <span className="text-accent">{impactAccordion.titleHighlight}</span>
          </h2>
        </div>

        <div data-reveal className="flex flex-col gap-3">
          {impactAccordion.items.map((item, index) => {
            const isOpen = index === openIndex;
            return (
              <div key={item.title} className={`rounded-xl border ${isOpen ? "border-accent" : "border-white/15"}`}>
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  <span className={`font-heading text-base sm:text-lg ${isOpen ? "text-accent" : "text-white"}`}>
                    {item.title}
                  </span>
                  <span className={isOpen ? "text-accent" : "text-white"}>
                    {isOpen ? <MinusIcon className="h-5 w-5" /> : <PlusIcon className="h-5 w-5" />}
                  </span>
                </button>
                <div
                  ref={(el) => {
                    panelRefs.current[index] = el;
                  }}
                  className="overflow-hidden px-6"
                  style={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                >
                  <p className="pb-5 text-sm leading-relaxed text-white/70">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
