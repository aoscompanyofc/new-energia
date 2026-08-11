import { sobrePage } from "../data/content";
import { images } from "../data/images";
import { useScrollReveal } from "../hooks/useScrollReveal";

export function AboutIntro() {
  const scope = useScrollReveal<HTMLElement>();
  const { intro } = sobrePage;

  return (
    <section ref={scope} className="bg-white px-5 py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div data-reveal>
          <img
            src={images.aboutTeaser}
            alt="Usina solar da New Energia ao amanhecer, com galpão industrial ao fundo"
            width={900}
            height={700}
            loading="lazy"
            className="w-full rounded-3xl object-cover"
          />
        </div>

        <div data-reveal>
          <p className="font-heading text-sm font-medium uppercase tracking-wide text-navy/60">
            {intro.eyebrow}
          </p>
          <h2 className="mt-3 font-heading text-3xl font-medium leading-tight text-navy sm:text-4xl md:text-5xl">
            {intro.title}
          </h2>
          {intro.paragraphs.map((paragraph) => (
            <p key={paragraph} className="mt-6 text-base leading-relaxed text-navy/70">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
