import { portfolio } from "../data/content";
import { images } from "../data/images";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { Marquee } from "./Marquee";
import { PillButton } from "./PillButton";

export function PortfolioShowcase() {
  const scope = useScrollReveal<HTMLElement>();

  return (
    <section id="portfolio" ref={scope} className="bg-white px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div data-reveal className="max-w-xl">
            <p className="font-heading text-sm font-medium text-navy/60">{portfolio.eyebrow}</p>
            <h2 className="mt-3 font-heading text-3xl font-medium leading-tight text-navy sm:text-4xl md:text-5xl">
              {portfolio.title} <span className="text-accent">{portfolio.titleHighlight}</span>
            </h2>
          </div>
          <div data-reveal>
            <PillButton href="/#contato">{portfolio.cta}</PillButton>
          </div>
        </div>
      </div>

      <div className="relative left-1/2 mt-14 w-screen -translate-x-1/2" data-reveal>
        <Marquee speed={40}>
          {portfolio.projects.map((project) => (
            <article
              key={project.name}
              className="group relative mx-3 w-[320px] shrink-0 overflow-hidden rounded-2xl bg-navy"
            >
              <span className="absolute left-4 top-4 z-10 rounded-full bg-white px-3 py-1 text-xs font-semibold text-navy">
                {project.power}
              </span>
              <img
                src={images[project.image as keyof typeof images]}
                alt={project.name}
                width={700}
                height={500}
                loading="lazy"
                className="h-52 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="font-heading text-base font-semibold text-white">{project.name}</h3>
                <p className="mt-2 text-xs text-white/60">Quantidade de módulos: {project.modules}</p>
                <p className="text-xs text-white/60">Geração média: {project.generation}</p>
                <a href="/#contato" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent">
                  Saiba mais
                  <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </article>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
