import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { hero } from "../data/content";
import { images } from "../data/images";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import { useRef } from "react";
import { PillButton } from "./PillButton";

export function Hero() {
  const scope = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useGSAP(
    () => {
      if (prefersReducedMotion) return;
      const cards = gsap.utils.toArray<HTMLElement>("[data-hero-card]", scope.current);
      if (!cards.length) return;
      gsap.set(cards, { autoAlpha: 0, y: 32, willChange: "transform, opacity" });
      gsap.to(cards, {
        autoAlpha: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        delay: 0.3,
      });
    },
    { scope, dependencies: [prefersReducedMotion] },
  );

  return (
    <section id="home" ref={scope} className="relative overflow-hidden bg-navy pt-28 pb-40 sm:pt-36 sm:pb-48">
      <img
        src={images.heroBg}
        alt="Usina solar de grande porte vista do alto, ao entardecer"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/60 to-navy" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <h1 className="max-w-4xl font-heading text-4xl font-medium leading-[1.1] text-white sm:text-5xl md:text-6xl">
          {hero.titleLine1}{" "}
          <span className="font-semibold uppercase text-gold">{hero.titleHighlight}</span>
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
          {hero.subtitle}
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <PillButton href="/#contato">{hero.ctaPrimary}</PillButton>
          <PillButton href="/#contato" variant="outline">
            {hero.ctaSecondary}
          </PillButton>
        </div>

        <div className="mt-20 grid gap-5 sm:grid-cols-2">
          {hero.highlightCards.map((card) => (
            <div
              key={card.eyebrow}
              data-hero-card
              className="flex gap-5 rounded-2xl bg-navy/90 p-5 ring-1 ring-white/10 backdrop-blur-sm sm:p-6"
            >
              <img
                src={images[card.image as keyof typeof images]}
                alt=""
                width={112}
                height={112}
                loading="lazy"
                className="h-24 w-24 shrink-0 rounded-xl object-cover sm:h-28 sm:w-28"
              />
              <div>
                <p className="font-heading text-xs font-semibold uppercase tracking-wide text-white">
                  {card.eyebrow}
                </p>
                <p className="mt-2 text-sm text-white">
                  {card.title} <span className="text-gold">{card.highlight}</span>
                </p>
                <p className="mt-2 text-xs text-white/60">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
