import { clientsCarousel } from "../data/content";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { Marquee } from "./Marquee";

export function ClientsCarousel() {
  const scope = useScrollReveal<HTMLElement>();

  return (
    <section ref={scope} className="bg-white px-5 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2
          data-reveal
          className="mb-10 text-center font-heading text-2xl font-medium text-navy sm:text-3xl"
        >
          {clientsCarousel.title}
        </h2>
        <div data-reveal>
          <Marquee speed={30}>
            {clientsCarousel.logos.map((logo) => (
              <div
                key={logo}
                className="mx-6 flex h-20 w-52 shrink-0 items-center justify-center rounded-xl border border-navy/10 px-6 text-center font-heading text-sm font-medium text-navy/60"
              >
                {logo}
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
