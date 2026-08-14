import { about } from "../data/content";
import { images } from "../data/images";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { CheckIcon } from "./Icons";
import { PillButton } from "./PillButton";

export function About() {
  const scope = useScrollReveal<HTMLElement>();

  return (
    <section id="sobre" ref={scope} className="bg-white px-5 py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div data-reveal>
          <img
            src={images.homeAboutTeaser}
            alt="Close-up de painéis solares da New Energia"
            width={900}
            height={700}
            loading="lazy"
            className="w-full rounded-3xl object-cover"
          />
        </div>

        <div data-reveal>
          <p className="font-heading text-sm font-medium uppercase tracking-wide text-navy/60">
            {about.eyebrow}
          </p>
          <h2 className="mt-3 font-heading text-3xl font-medium leading-tight text-navy sm:text-4xl md:text-5xl">
            {about.title}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-navy/70">{about.paragraph}</p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {about.bullets.map((bullet) => (
              <li key={bullet} className="flex items-center gap-3 text-sm text-navy/80">
                <span className="checkmark">
                  <CheckIcon className="h-3 w-3" />
                </span>
                {bullet}
              </li>
            ))}
          </ul>

          <div className="mt-9">
            <PillButton href="/sobre">{about.cta}</PillButton>
          </div>
        </div>
      </div>
    </section>
  );
}
