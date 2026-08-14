import { ecosystem } from "../data/ecosystemContent";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { DynamicIcon } from "./Icons";
import { PillButton } from "./PillButton";
import logo from "../assets/logo/new-logo-white.webp";

export function EcosystemSection() {
  const scope = useScrollReveal<HTMLElement>();

  return (
    <section ref={scope} className="bg-navy px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-3xl text-center" data-reveal>
        <div className="flex justify-center">
          <PillButton href="/ecossistema" variant="outline" className="justify-between">
            {ecosystem.eyebrow}
          </PillButton>
        </div>
        <h2 className="mt-8 font-heading text-3xl font-medium leading-tight text-white sm:text-4xl">
          {ecosystem.title}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-white/70">{ecosystem.subtitle}</p>
      </div>

      <div className="mx-auto mt-16 grid max-w-6xl grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6" data-reveal>
        <div className="flex flex-col items-center justify-center rounded-2xl bg-accent/10 p-6 text-center ring-2 ring-accent/50 shadow-[0_0_40px_rgba(56,189,248,0.2)]">
          <img src={logo} alt="New" className="h-8 w-auto" />
          <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-white/70">{ecosystem.hubLabel}</p>
        </div>

        {ecosystem.nodes.map((node) => (
          <a
            key={node.key}
            href={node.href}
            target={node.external ? "_blank" : undefined}
            rel={node.external ? "noreferrer" : undefined}
            className="flex flex-col items-center rounded-2xl bg-white/5 p-6 text-center ring-1 ring-white/10 transition hover:-translate-y-0.5 hover:ring-accent/50"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 ring-1 ring-accent/25">
              <DynamicIcon name={node.icon} className="h-5 w-5 text-accent" />
            </span>
            <p className="mt-4 font-heading text-sm font-semibold text-white">{node.title}</p>
            <p className="mt-2 text-xs leading-relaxed text-white/55">{node.description}</p>
          </a>
        ))}
      </div>

      <div className="mt-14 flex justify-center" data-reveal>
        <PillButton as="a" href="/ecossistema">
          Ver ecossistema completo
        </PillButton>
      </div>
    </section>
  );
}
