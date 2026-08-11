import { sobrePage } from "../data/content";
import { images } from "../data/images";
import { useScrollReveal } from "../hooks/useScrollReveal";

export function MissionVision() {
  const scope = useScrollReveal<HTMLElement>();
  const { quemSomos } = sobrePage;

  return (
    <section ref={scope} className="bg-white px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div data-reveal>
            <p className="font-heading text-sm font-medium uppercase tracking-wide text-navy/60">
              {quemSomos.eyebrow}
            </p>
            <h2 className="mt-3 font-heading text-3xl font-medium leading-tight text-navy sm:text-4xl">
              {quemSomos.title}
            </h2>
            {quemSomos.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mt-6 text-base leading-relaxed text-navy/70">
                {paragraph}
              </p>
            ))}
          </div>

          <div data-reveal className="flex flex-col gap-6 sm:flex-row sm:items-start">
            <img
              src={images.aboutTeam}
              alt="Equipe técnica da New Energia em campo"
              width={220}
              height={220}
              loading="lazy"
              className="h-40 w-40 shrink-0 rounded-2xl object-cover sm:h-48 sm:w-48"
            />
            <div>
              <h3 className="font-heading text-lg font-semibold text-navy">{quemSomos.impactLabel}</h3>
              <ul className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-3">
                {quemSomos.impactItems.map((item) => (
                  <li key={item} className="border-t border-navy/10 pt-3 text-sm leading-snug text-navy/70">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          <div data-reveal className="rounded-2xl border border-navy/10 p-8">
            <span className="font-heading text-3xl font-semibold text-navy/20">{quemSomos.mission.number}</span>
            <h3 className="mt-4 font-heading text-xl font-semibold text-navy">{quemSomos.mission.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-navy/70">{quemSomos.mission.text}</p>
          </div>
          <div data-reveal className="rounded-2xl bg-accent p-8">
            <span className="font-heading text-3xl font-semibold text-navy/30">{quemSomos.vision.number}</span>
            <h3 className="mt-4 font-heading text-xl font-semibold text-navy">{quemSomos.vision.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-navy/80">{quemSomos.vision.text}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
