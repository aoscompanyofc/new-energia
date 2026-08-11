import { servicesCards } from "../data/content";
import { images } from "../data/images";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { DynamicIcon, type IconName } from "./Icons";

export function ServicesCards() {
  const scope = useScrollReveal<HTMLElement>();

  return (
    <section id="servicos" ref={scope} className="bg-navy px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p data-reveal className="font-heading text-sm font-medium text-gold">
          {servicesCards.eyebrow}
        </p>
        <h2
          data-reveal
          className="mt-3 max-w-2xl font-heading text-3xl font-medium leading-tight text-white sm:text-4xl md:text-[3.2rem]"
        >
          {servicesCards.title} <span className="text-gold">{servicesCards.titleHighlight}</span>{" "}
          {servicesCards.titleEnd}
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {servicesCards.cards.map((card) => (
            <article
              key={card.title}
              data-reveal
              className="overflow-hidden rounded-2xl bg-white/[0.04] ring-1 ring-white/10"
            >
              <div className="relative">
                <img
                  src={images[card.image as keyof typeof images]}
                  alt={card.title}
                  width={700}
                  height={500}
                  loading="lazy"
                  className="h-48 w-full object-cover"
                />
                <span className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-gold">
                  <DynamicIcon name={card.icon as IconName} className="h-6 w-6 text-navy" />
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-heading text-lg font-semibold text-white">{card.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65">{card.description}</p>
                <a href="/#contato" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold">
                  {card.cta}
                  <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
