import { benefits } from "../data/content";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { DynamicIcon, type IconName } from "./Icons";
import { Marquee } from "./Marquee";
import { PillButton } from "./PillButton";

const cardStyles = [
  "bg-white/5 text-white ring-1 ring-white/10",
  "bg-gold text-navy",
  "bg-transparent text-white ring-1 ring-gold/60",
];

export function Benefits() {
  const scope = useScrollReveal<HTMLElement>();

  return (
    <section ref={scope} className="bg-navy px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex justify-center" data-reveal>
          <PillButton href="#contato" variant="outline" className="w-full max-w-md justify-between sm:w-auto">
            {benefits.eyebrow}
          </PillButton>
        </div>

        <h2
          data-reveal
          className="mx-auto mt-10 max-w-3xl text-center font-heading text-3xl font-medium leading-tight text-white sm:text-4xl md:text-[3.2rem]"
        >
          {benefits.title} <span className="text-gold">{benefits.titleHighlight}</span>
        </h2>

        <div className="mt-14" data-reveal>
          <Marquee speed={45}>
            {benefits.items.map((item, index) => (
              <article
                key={item.title}
                className={`mx-3 flex w-[300px] shrink-0 flex-col justify-between rounded-2xl p-7 ${
                  cardStyles[index % cardStyles.length]
                }`}
                style={{ minHeight: "300px" }}
              >
                <div>
                  <DynamicIcon
                    name={item.icon as IconName}
                    className={`h-9 w-9 ${index % 3 === 1 ? "text-navy" : "text-gold"}`}
                  />
                  <h3 className="mt-8 font-heading text-xl font-semibold">{item.title}</h3>
                  <p className={`mt-3 text-sm leading-relaxed ${index % 3 === 1 ? "text-navy/80" : "opacity-70"}`}>
                    {item.description}
                  </p>
                </div>
                <a
                  href="#contato"
                  className={`mt-6 inline-flex items-center gap-2 text-sm font-semibold ${
                    index % 3 === 1 ? "text-navy" : "text-gold"
                  }`}
                >
                  Saiba Mais
                  <span aria-hidden="true">&rarr;</span>
                </a>
              </article>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
