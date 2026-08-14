import { founder } from "../data/content";
import { images } from "../data/images";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { CheckIcon } from "./Icons";

export function FounderSection() {
  const scope = useScrollReveal<HTMLElement>();

  return (
    <section ref={scope} className="relative overflow-hidden bg-navy px-5 py-24 lg:px-8">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/2 h-[560px] w-[560px] -translate-y-1/2 rounded-full bg-accent/20 blur-[120px]"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div data-reveal className="relative order-2 flex justify-center lg:order-1">
          <div
            aria-hidden="true"
            className="absolute bottom-0 h-[85%] w-[85%] rounded-full bg-gradient-to-t from-accent/25 via-accent/10 to-transparent blur-2xl"
          />
          <img
            src={images.founder}
            alt={`${founder.name}, ${founder.role}`}
            width={720}
            height={1080}
            loading="lazy"
            className="relative h-[420px] w-auto object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.45)] sm:h-[520px] lg:h-[600px]"
          />
        </div>

        <div data-reveal className="order-1 lg:order-2">
          <p className="font-heading text-sm font-medium uppercase tracking-[0.2em] text-accent">
            {founder.eyebrow}
          </p>
          <h2 className="mt-4 font-heading text-4xl font-medium leading-tight text-white sm:text-5xl">
            {founder.name}
          </h2>
          <p className="mt-2 text-base font-medium text-white/70">{founder.role}</p>
          <span aria-hidden="true" className="mt-6 block h-1 w-14 rounded-full bg-accent" />

          <ul className="mt-8 flex flex-col gap-4">
            {founder.credentials.map((credential) => (
              <li key={credential} className="flex items-start gap-3 text-base text-white/85">
                <span className="checkmark mt-0.5">
                  <CheckIcon className="h-3 w-3" />
                </span>
                {credential}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
