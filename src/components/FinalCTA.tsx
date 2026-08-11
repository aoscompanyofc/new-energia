import { finalCta } from "../data/content";
import { images } from "../data/images";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { PillButton } from "./PillButton";

export function FinalCTA() {
  const scope = useScrollReveal<HTMLElement>();

  return (
    <section ref={scope} className="relative overflow-hidden px-5 py-28 lg:px-8">
      <img
        src={images.finalCta}
        alt="Técnico da New Energia em campo, próximo a uma usina solar"
        width={1920}
        height={900}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-navy/70" />
      <div className="relative mx-auto max-w-3xl">
        <h2 data-reveal className="font-heading text-3xl font-medium leading-tight text-white sm:text-4xl md:text-5xl">
          {finalCta.title}
        </h2>
        <p data-reveal className="mt-5 max-w-xl text-base leading-relaxed text-white/80">
          {finalCta.text}
        </p>
        <div data-reveal className="mt-9">
          <PillButton href="#contato">{finalCta.cta}</PillButton>
        </div>
      </div>
    </section>
  );
}
