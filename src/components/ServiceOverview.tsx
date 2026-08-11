import type { ServiceKey } from "../data/content";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { CheckIcon, ChevronIcon } from "./Icons";
import { ServiceSidebar } from "./ServiceSidebar";

export type ProblemItem = { title: string; description: string };
export type InfoItem = { title: string; text: string };

export type ServiceBlock =
  | { type: "problems"; heading: string; items: ProblemItem[] }
  | { type: "checklist"; heading?: string; intro?: string; items: string[]; style?: "check" | "arrow" | "dot" }
  | { type: "infoList"; heading?: string; intro?: string; items: InfoItem[] }
  | { type: "highlightBox"; heading?: string; items: string[] };

type ServiceOverviewProps = {
  activeKey?: ServiceKey;
  image: string;
  imageAlt: string;
  heading: string;
  leadParagraph?: string;
  paragraphs: string[];
  blocks: ServiceBlock[];
  closingNote?: string;
};

function Bullet({ style = "arrow" }: { style?: "check" | "arrow" | "dot" }) {
  if (style === "dot") {
    return <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-navy/50" />;
  }
  return (
    <span className="checkmark shrink-0">
      {style === "check" ? <CheckIcon className="h-3 w-3" /> : <ChevronIcon className="h-3 w-3" />}
    </span>
  );
}

function Block({ block }: { block: ServiceBlock }) {
  if (block.type === "problems") {
    return (
      <div className="mt-10">
        <h3 className="font-heading text-xl font-semibold text-navy">{block.heading}</h3>
        <ul className="mt-5 flex flex-col gap-5">
          {block.items.map((item) => (
            <li key={item.title} className="flex gap-3">
              <Bullet style="check" />
              <div>
                <p className="font-heading text-sm font-semibold text-navy">{item.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-navy/65">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  if (block.type === "checklist") {
    return (
      <div className="mt-8">
        {block.heading && <h3 className="font-heading text-xl font-semibold text-navy">{block.heading}</h3>}
        {block.intro && <p className="mt-3 text-sm leading-relaxed text-navy/65">{block.intro}</p>}
        <ul className="mt-4 flex flex-col gap-3">
          {block.items.map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-navy/70">
              <Bullet style={block.style} />
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  if (block.type === "infoList") {
    return (
      <div className="mt-8">
        {block.heading && <h3 className="font-heading text-xl font-semibold text-navy">{block.heading}</h3>}
        {block.intro && <p className="mt-3 text-sm leading-relaxed text-navy/65">{block.intro}</p>}
        <div className="mt-4 flex flex-col gap-4">
          {block.items.map((item) => (
            <div key={item.title}>
              <p className="font-heading text-sm font-semibold text-navy">{item.title}</p>
              <p className="mt-1 text-sm leading-relaxed text-navy/65">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="mt-8 rounded-2xl bg-navy p-6">
      {block.heading && <h3 className="font-heading text-base font-semibold text-white">{block.heading}</h3>}
      <ul className="mt-4 flex flex-col gap-3">
        {block.items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-white/80">
            <span className="checkmark shrink-0">
              <ChevronIcon className="h-3 w-3" />
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ServiceOverview({
  activeKey,
  image,
  imageAlt,
  heading,
  leadParagraph,
  paragraphs,
  blocks,
  closingNote,
}: ServiceOverviewProps) {
  const scope = useScrollReveal<HTMLElement>();

  const content = (
    <div data-reveal>
      <img
        src={image}
        alt={imageAlt}
        width={900}
        height={520}
        loading="lazy"
        className="w-full rounded-2xl object-cover"
      />
      <h2 className="mt-8 font-heading text-2xl font-medium leading-tight text-navy sm:text-3xl">{heading}</h2>
      {leadParagraph && <p className="mt-4 text-sm font-semibold leading-relaxed text-navy/85">{leadParagraph}</p>}
      {paragraphs.map((paragraph) => (
        <p key={paragraph} className="mt-4 text-sm leading-relaxed text-navy/70">
          {paragraph}
        </p>
      ))}
      {blocks.map((block, index) => (
        <Block key={index} block={block} />
      ))}
      {closingNote && <p className="mt-6 text-sm italic leading-relaxed text-navy/50">{closingNote}</p>}
    </div>
  );

  if (!activeKey) {
    return (
      <section ref={scope} className="bg-white px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-3xl">{content}</div>
      </section>
    );
  }

  return (
    <section ref={scope} className="bg-white px-5 py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[2fr_1fr] lg:gap-14">
        {content}
        <div data-reveal>
          <ServiceSidebar activeKey={activeKey} />
        </div>
      </div>
    </section>
  );
}
