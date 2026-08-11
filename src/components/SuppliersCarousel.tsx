import { suppliersCarousel } from "../data/content";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { Marquee } from "./Marquee";

export function SuppliersCarousel() {
  const scope = useScrollReveal<HTMLElement>();

  return (
    <section ref={scope} className="bg-white px-5 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2
          data-reveal
          className="mb-10 text-center font-heading text-2xl font-medium text-navy sm:text-3xl"
        >
          {suppliersCarousel.title}
        </h2>
        <div data-reveal>
          <Marquee speed={35} reverse>
            {suppliersCarousel.logos.map((logo) => (
              <div
                key={logo}
                className="mx-6 flex h-16 w-40 shrink-0 items-center justify-center text-center font-heading text-base font-semibold text-navy/50"
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
