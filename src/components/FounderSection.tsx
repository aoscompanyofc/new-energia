import { founder } from "../data/content";
import { images } from "../data/images";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { CheckIcon } from "./Icons";

export function FounderSection() {
  const scope = useScrollReveal<HTMLElement>();

  return (
    <section ref={scope} className="relative overflow-hidden bg-navy px-5 py-24 lg:px-8">
      <svg
        aria-hidden="true"
        viewBox="0 0 400 400"
        className="pointer-events-none absolute -left-24 -top-20 h-[520px] w-[520px] -rotate-6 text-white/[0.06] sm:h-[640px] sm:w-[640px]"
      >
        <g stroke="currentColor" strokeWidth="16" strokeLinecap="round" fill="none">
          <line x1="40" y1="360" x2="150" y2="40" />
          <line x1="110" y1="360" x2="220" y2="40" />
          <line x1="180" y1="360" x2="290" y2="40" />
        </g>
      </svg>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div data-reveal className="order-2 flex justify-center lg:order-1">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-accent/25 via-accent/10 to-transparent blur-2xl"
            />
            <img
              src={images.founder}
              alt={`${founder.name}, ${founder.role}`}
              width={800}
              height={1200}
              loading="lazy"
              className="relative h-[420px] w-[280px] rounded-3xl object-cover shadow-2xl ring-1 ring-white/10 sm:h-[480px] sm:w-[320px] lg:h-[560px] lg:w-[373px]"
            />
          </div>
        </div>

        <div data-reveal className="order-1 lg:order-2">
          <p className="font-heading text-xs font-medium uppercase tracking-[0.2em] text-white/50">
            {founder.eyebrow}
          </p>
          <h2 className="mt-4 font-heading text-4xl font-medium leading-tight text-white sm:text-5xl">
            {founder.name}
          </h2>
          <p className="mt-2 text-base text-white/60">{founder.role}</p>
          <span aria-hidden="true" className="mt-6 block h-px w-14 bg-white/20" />

          <ul className="mt-8 flex flex-col gap-4">
            {founder.credentials.map((credential) => (
              <li key={credential} className="flex items-start gap-3 text-base text-white/80">
                <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-accent" />
                {credential}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
