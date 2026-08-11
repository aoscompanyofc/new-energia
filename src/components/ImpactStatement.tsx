import { sobrePage } from "../data/content";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { CheckIcon } from "./Icons";

export function ImpactStatement() {
  const scope = useScrollReveal<HTMLElement>();
  const { impact } = sobrePage;

  return (
    <section ref={scope} className="bg-navy px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <p data-reveal className="font-heading text-sm font-medium text-accent">
          {impact.eyebrow}
        </p>
        <h2 data-reveal className="mt-4 font-heading text-3xl font-medium leading-tight text-white sm:text-4xl">
          {impact.title}
        </h2>
        <p data-reveal className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70">
          {impact.paragraph}
        </p>

        <p data-reveal className="mt-8 font-heading text-sm font-semibold text-white">
          {impact.listLabel}
        </p>
        <ul data-reveal className="mx-auto mt-4 flex max-w-xl flex-col gap-3 text-left">
          {impact.items.map((item) => (
            <li key={item} className="flex items-center gap-3 text-sm text-white/80">
              <span className="checkmark">
                <CheckIcon className="h-3 w-3" />
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
