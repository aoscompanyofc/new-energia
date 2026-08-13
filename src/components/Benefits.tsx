import { benefits } from "../data/content";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { DynamicIcon, type IconName } from "./Icons";
import { Marquee } from "./Marquee";
import { PillButton } from "./PillButton";

const cardStyles = [
  "bg-white/5 text-white ring-1 ring-white/10",
  "bg-accent text-navy",
  "bg-white/[0.03] text-white border border-accent/70",
];

const iconBadgeStyles = [
  "bg-accent/10 ring-1 ring-accent/20",
  "bg-navy/10 ring-1 ring-navy/15",
  "bg-accent/10 ring-1 ring-accent/25",
];

export function Benefits() {
  const scope = useScrollReveal<HTMLElement>();

  return (
    <section id="servicos" ref={scope} className="bg-navy px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex justify-center" data-reveal>
          <PillButton href="/#contato" variant="outline" className="w-full max-w-md justify-between sm:w-auto">
            {benefits.eyebrow}
          </PillButton>
        </div>

        <h2
          data-reveal
          className="mx-auto mt-10 max-w-3xl text-center font-heading text-3xl font-medium leading-tight text-white sm:text-4xl md:text-[3.2rem]"
        >
          {benefits.title} <span className="text-accent">{benefits.titleHighlight}</span>
        </h2>

        <div className="relative left-1/2 mt-14 w-screen -translate-x-1/2" data-reveal>
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
                  <span
                    className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl shadow-[0_1px_0_0_rgba(255,255,255,0.06)_inset] ${
                      iconBadgeStyles[index % iconBadgeStyles.length]
                    }`}
                  >
                    <DynamicIcon
                      name={item.icon as IconName}
                      className={`h-7 w-7 ${index % 3 === 1 ? "text-navy" : "text-accent"}`}
                    />
                  </span>
                  <h3 className="mt-8 font-heading text-xl font-semibold">{item.title}</h3>
                  <p className={`mt-3 text-sm leading-relaxed ${index % 3 === 1 ? "text-navy/80" : "opacity-70"}`}>
                    {item.description}
                  </p>
                </div>
                <a
                  href={`/servicos/${item.key}`}
                  className={`mt-6 inline-flex items-center gap-2 text-sm font-semibold ${
                    index % 3 === 1 ? "text-navy" : "text-accent"
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
