import { useState } from "react";
import { faqData, type ServiceKey } from "../data/content";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { MinusIcon, PlusIcon } from "./Icons";

const serviceOrder: ServiceKey[] = ["usinas", "bess", "mobilidade", "desconto", "eficiencia", "om", "gere"];

export function FAQ() {
  const scope = useScrollReveal<HTMLElement>();
  const [activeService, setActiveService] = useState<ServiceKey>("usinas");
  const [openIndex, setOpenIndex] = useState(0);

  const activeFaq = faqData[activeService];

  return (
    <section ref={scope} className="bg-white px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <p data-reveal className="text-center font-heading text-sm font-medium uppercase tracking-wide text-navy/50">
          FAQs
        </p>
        <h2 data-reveal className="mt-3 text-center font-heading text-3xl font-medium text-navy sm:text-4xl">
          Perguntas Frequentes
        </h2>

        <div data-reveal className="mt-8 flex flex-wrap justify-center gap-2">
          {serviceOrder.map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => {
                setActiveService(key);
                setOpenIndex(0);
              }}
              className={`rounded-full px-4 py-2 text-xs font-medium transition ${
                activeService === key ? "bg-navy text-white" : "bg-navy/5 text-navy/60 hover:bg-navy/10"
              }`}
            >
              {faqData[key].label}
            </button>
          ))}
        </div>

        <div data-reveal className="mt-10 flex flex-col gap-3">
          {activeFaq.items.map((item, index) => {
            const isOpen = index === openIndex;
            return (
              <div key={item.q} className="overflow-hidden rounded-xl bg-navy">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  <span className={`font-heading text-sm sm:text-base ${isOpen ? "text-accent" : "text-white"}`}>
                    {item.q}
                  </span>
                  <span className={isOpen ? "text-accent" : "text-white"}>
                    {isOpen ? <MinusIcon className="h-4 w-4" /> : <PlusIcon className="h-4 w-4" />}
                  </span>
                </button>
                {isOpen && (
                  <p className="px-6 pb-5 text-sm leading-relaxed text-white/70">{item.a}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
