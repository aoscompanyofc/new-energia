import { founder } from "../data/content";
import { images } from "../data/images";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { CheckIcon } from "./Icons";

export function FounderSection() {
  const scope = useScrollReveal<HTMLElement>();

  return (
    <section ref={scope} className="relative overflow-hidden bg-navy px-5 py-24 lg:px-8">
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div data-reveal className="order-2 flex justify-center lg:order-1">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/25 blur-[80px]"
            />
            <img
              src={images.founder}
              alt={`${founder.name}, ${founder.role}`}
              width={700}
              height={1107}
              loading="lazy"
              className="relative h-[420px] w-auto object-contain drop-shadow-[0_30px_40px_rgba(0,0,0,0.45)] sm:h-[480px] lg:h-[560px]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-navy via-navy/70 to-transparent sm:h-24 lg:h-28"
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
