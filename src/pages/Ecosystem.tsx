import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ecosystem } from "../data/ecosystemContent";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { DynamicIcon } from "../components/Icons";
import { PillButton } from "../components/PillButton";
import { FinalCTA } from "../components/FinalCTA";
import logo from "../assets/logo/new-logo-white.webp";

function NodeCard({ node }: { node: (typeof ecosystem.nodes)[number] }) {
  const content = (
    <>
      <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 ring-1 ring-accent/25">
        <DynamicIcon name={node.icon} className="h-5 w-5 text-accent" />
      </span>
      <h3 className="mt-3 font-heading text-sm font-semibold text-white">{node.title}</h3>
      <p className="mt-1 text-xs leading-relaxed text-white/60">{node.description}</p>
    </>
  );

  const className =
    "block w-full rounded-2xl bg-navy/90 p-4 text-center ring-1 ring-white/10 backdrop-blur transition hover:-translate-y-0.5 hover:ring-accent/50";

  if (node.external) {
    return (
      <a href={node.href} target="_blank" rel="noreferrer" className={className}>
        {content}
      </a>
    );
  }
  return (
    <Link to={node.href} className={className}>
      {content}
    </Link>
  );
}

export default function Ecosystem() {
  const scope = useScrollReveal<HTMLElement>();

  return (
    <>
      <Helmet>
        <title>Ecossistema | New Energia</title>
        <meta name="description" content={ecosystem.subtitle} />
      </Helmet>

      <section className="bg-navy px-5 pb-16 pt-32 sm:pt-40 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex justify-center">
            <PillButton href="/#contato" variant="outline" className="justify-between">
              {ecosystem.eyebrow}
            </PillButton>
          </div>
          <h1 className="mt-8 font-heading text-3xl font-medium leading-tight text-white sm:text-4xl md:text-5xl">
            {ecosystem.title}
          </h1>
          <p className="mt-5 text-base leading-relaxed text-white/70">{ecosystem.subtitle}</p>
        </div>
      </section>

      <section ref={scope} className="bg-navy px-5 pb-24 lg:px-8">
        <div className="mx-auto max-w-5xl">
          {/* Diagrama radial — desktop */}
          <div data-reveal className="relative mx-auto hidden aspect-square w-full max-w-[760px] lg:block">
            <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid meet">
              <defs>
                <filter id="ecoGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="0.6" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <g filter="url(#ecoGlow)">
                {ecosystem.nodes.map((node) => (
                  <line
                    key={node.key}
                    x1="50"
                    y1="50"
                    x2={node.x}
                    y2={node.y}
                    stroke="#38bdf8"
                    strokeOpacity="0.55"
                    strokeWidth="0.35"
                  />
                ))}
                {ecosystem.nodes.map((node) => (
                  <circle key={`dot-${node.key}`} cx={node.x} cy={node.y} r="0.8" fill="#38bdf8" />
                ))}
              </g>
            </svg>

            <div className="absolute left-1/2 top-1/2 z-10 flex h-44 w-44 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-navy text-center ring-2 ring-accent/40 shadow-[0_0_70px_rgba(56,189,248,0.35)]">
              <img src={logo} alt="New Engenharia e Energia" className="h-9 w-auto" />
              <p className="mt-2 max-w-[9rem] text-[11px] leading-snug text-white/60">{ecosystem.hubLabel}</p>
            </div>

            {ecosystem.nodes.map((node) => (
              <div
                key={node.key}
                className="absolute z-10 w-44"
                style={{ left: `${node.x}%`, top: `${node.y}%`, transform: "translate(-50%, -50%)" }}
              >
                <NodeCard node={node} />
              </div>
            ))}
          </div>

          {/* Lista empilhada — mobile/tablet */}
          <div data-reveal className="grid gap-4 sm:grid-cols-2 lg:hidden">
            {ecosystem.nodes.map((node) => (
              <NodeCard key={node.key} node={node} />
            ))}
          </div>

          <div
            data-reveal
            className="mt-16 grid gap-6 rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4 lg:p-8"
          >
            {ecosystem.features.map((feature) => (
              <div key={feature.label} className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full ring-1 ring-accent/40">
                  <DynamicIcon name={feature.icon} className="h-4 w-4 text-accent" />
                </span>
                <span className="text-sm font-medium text-white/85">{feature.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA
        title={ecosystem.purpose.title}
        text={ecosystem.purpose.text}
        cta="Fale com a New"
      />
    </>
  );
}
