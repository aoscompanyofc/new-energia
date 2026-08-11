import { useScrollReveal } from "../hooks/useScrollReveal";
import { ChevronIcon } from "./Icons";

export type Step = { number: string; title: string; description: string };
export type ExtraStepCard = { title: string; items: string[] };

type HowItWorksProps = {
  title: string;
  intro?: string;
  steps: Step[];
  extraCard?: ExtraStepCard;
  extraCardPosition?: "first" | "last";
};

function ExtraCard({ card }: { card: ExtraStepCard }) {
  return (
    <div data-reveal className="rounded-2xl bg-navy p-6">
      <h3 className="font-heading text-base font-semibold text-white">{card.title}</h3>
      <ul className="mt-3 flex flex-col gap-2">
        {card.items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm leading-relaxed text-white/70">
            <span className="checkmark mt-0.5 shrink-0">
              <ChevronIcon className="h-3 w-3" />
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function HowItWorks({ title, intro, steps, extraCard, extraCardPosition = "last" }: HowItWorksProps) {
  const scope = useScrollReveal<HTMLElement>();

  return (
    <section ref={scope} className="bg-white px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 data-reveal className="max-w-3xl font-heading text-2xl font-medium leading-tight text-navy sm:text-3xl">
          {title}
        </h2>
        {intro && <p data-reveal className="mt-4 max-w-3xl text-sm leading-relaxed text-navy/65">{intro}</p>}

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {extraCard && extraCardPosition === "first" && <ExtraCard card={extraCard} />}

          {steps.map((step) => (
            <div
              key={step.number}
              data-reveal
              className="relative flex flex-col justify-between rounded-2xl bg-navy p-6"
              style={{ minHeight: "150px" }}
            >
              <div>
                <h3 className="font-heading text-base font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{step.description}</p>
              </div>
              <span className="absolute bottom-5 right-5 flex h-9 w-9 items-center justify-center rounded-full bg-accent font-heading text-sm font-semibold text-navy">
                {step.number}
              </span>
            </div>
          ))}

          {extraCard && extraCardPosition === "last" && <ExtraCard card={extraCard} />}
        </div>
      </div>
    </section>
  );
}
