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
      <div className="absolute inset-0 bg-gradient-to-b from-navy/95 via-navy/85 to-navy" />
      <div
        aria-hidden="true"
        className="absolute -left-24 top-0 h-[480px] w-[480px] rounded-full bg-accent/35 blur-[110px]"
      />
      <div
        aria-hidden="true"
        className="absolute -right-32 bottom-24 h-[380px] w-[380px] rounded-full bg-accent/25 blur-[110px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <h1 className="max-w-4xl font-heading text-4xl font-medium leading-[1.1] text-white sm:text-5xl md:text-6xl">
          {hero.titleLine1}{" "}
          <span className="font-semibold uppercase text-accent">{hero.titleHighlight}</span>
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

        <p data-hero-card className="mt-20 font-heading text-xs font-semibold uppercase tracking-wide text-accent">
          {hero.investmentOpportunitiesLabel}
        </p>
        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          {hero.highlightCards.map((card) => (
            <a
              key={card.eyebrow}
              href={card.href}
              target={card.external ? "_blank" : undefined}
              rel={card.external ? "noreferrer" : undefined}
              data-hero-card
              className="group flex items-center gap-4 rounded-2xl bg-white/[0.06] p-4 ring-1 ring-white/15 backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white/[0.09] hover:ring-accent/50"
            >
              <img
                src={images[card.image as keyof typeof images]}
                alt=""
                width={112}
                height={112}
                loading="lazy"
                className="h-14 w-14 shrink-0 rounded-xl object-cover ring-1 ring-white/10"
              />
              <div className="min-w-0">
                <p className="font-heading text-[11px] font-semibold uppercase tracking-wide text-white/70">
                  {card.eyebrow}
                </p>
                <p className="mt-1 line-clamp-2 text-sm leading-snug text-white">
                  {card.title} <span className="text-accent">{card.highlight}</span>
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
