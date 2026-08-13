import { ecosystem } from "../data/ecosystemContent";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { DynamicIcon } from "./Icons";
import { PillButton } from "./PillButton";
import logo from "../assets/logo/new-logo-white.webp";

const MIN_HEIGHT = "min-h-[92px]";

export function EcosystemSection() {
  const scope = useScrollReveal<HTMLElement>();

  return (
    <section ref={scope} className="overflow-hidden bg-navy px-5 py-24 lg:px-8">
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

      {/* Linha do tempo horizontal — lg+ */}
      <div className="relative mt-20 hidden lg:block" data-reveal>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-accent/0 via-accent/40 to-accent/0"
        />
        <div className="mx-auto flex max-w-6xl items-start justify-between gap-3">
          <div className="flex w-32 shrink-0 flex-col items-center text-center">
            <div className={`flex ${MIN_HEIGHT} items-end justify-center pb-3`}>
              <span className="text-xs font-semibold uppercase tracking-wide text-white/70">
                {ecosystem.hubLabel}
              </span>
            </div>
            <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-navy ring-2 ring-accent/50 shadow-[0_0_30px_rgba(56,189,248,0.35)]">
              <img src={logo} alt="New" className="h-6 w-auto" />
            </div>
            <div className={MIN_HEIGHT} />
          </div>

          {ecosystem.nodes.map((node, index) => {
            const isUp = index % 2 === 0;
            const label = (
              <div key={node.key} className="px-1">
                <p className="font-heading text-sm font-semibold text-white">{node.title}</p>
                <p className="mt-1 text-xs leading-relaxed text-white/55">{node.description}</p>
              </div>
            );

            return (
              <div key={node.key} className="flex w-32 shrink-0 flex-col items-center text-center">
                <div className={`flex ${MIN_HEIGHT} items-end justify-center pb-3`}>{isUp ? label : null}</div>
                <span className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full bg-navy ring-1 ring-accent/40">
                  <DynamicIcon name={node.icon} className="h-4 w-4 text-accent" />
                </span>
                <div className={`flex ${MIN_HEIGHT} items-start justify-center pt-3`}>{!isUp ? label : null}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lista conectada vertical — mobile/tablet */}
      <div className="relative mx-auto mt-16 max-w-md lg:hidden" data-reveal>
        <div aria-hidden="true" className="absolute bottom-2 left-[22px] top-2 w-px bg-gradient-to-b from-accent/0 via-accent/40 to-accent/0" />
        <div className="flex flex-col gap-8">
          <div className="relative flex items-center gap-4">
            <span className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy ring-2 ring-accent/50">
              <img src={logo} alt="New" className="h-4 w-auto" />
            </span>
            <span className="text-sm font-semibold uppercase tracking-wide text-white/70">{ecosystem.hubLabel}</span>
          </div>
          {ecosystem.nodes.map((node) => (
            <div key={node.key} className="relative flex items-start gap-4">
              <span className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy ring-1 ring-accent/40">
                <DynamicIcon name={node.icon} className="h-4 w-4 text-accent" />
              </span>
              <div>
                <p className="font-heading text-sm font-semibold text-white">{node.title}</p>
                <p className="mt-1 text-xs leading-relaxed text-white/55">{node.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 flex justify-center" data-reveal>
        <PillButton as="a" href="/ecossistema">
          Ver ecossistema completo
        </PillButton>
      </div>
    </section>
  );
}
