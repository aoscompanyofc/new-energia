import { useState } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { MinusIcon, PlusIcon } from "./Icons";

type ServiceFAQProps = {
  items: { q: string; a: string }[];
};

export function ServiceFAQ({ items }: ServiceFAQProps) {
  const scope = useScrollReveal<HTMLElement>();
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section ref={scope} className="bg-white px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <p data-reveal className="font-heading text-sm font-medium uppercase tracking-wide text-navy/50">
          FAQs
        </p>
        <h2 data-reveal className="mt-3 font-heading text-3xl font-medium text-navy sm:text-4xl">
          Perguntas Frequentes
        </h2>

        <div data-reveal className="mt-8 flex flex-col gap-3">
          {items.map((item, index) => {
            const isOpen = index === openIndex;
            return (
              <div key={item.q} className="overflow-hidden rounded-xl bg-navy">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  <span className={`font-heading text-sm sm:text-base ${isOpen ? "text-gold" : "text-white"}`}>
                    {item.q}
                  </span>
                  <span className={isOpen ? "text-gold" : "text-white"}>
                    {isOpen ? <MinusIcon className="h-4 w-4" /> : <PlusIcon className="h-4 w-4" />}
                  </span>
                </button>
                {isOpen && <p className="px-6 pb-5 text-sm leading-relaxed text-white/70">{item.a}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
