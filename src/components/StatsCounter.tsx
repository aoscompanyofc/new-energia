import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { stats } from "../data/content";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

export function StatsCounter() {
  const scope = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useGSAP(
    () => {
      const numberEls = gsap.utils.toArray<HTMLElement>("[data-stat-value]", scope.current);
      if (!numberEls.length) return;

      const format = (el: HTMLElement, value: number) =>
        `${el.dataset.numberLabel ? el.dataset.numberLabel + " " : ""}${el.dataset.prefix ?? ""}${value}${el.dataset.suffix ?? ""}`;

      if (prefersReducedMotion) {
        numberEls.forEach((el) => {
          el.textContent = format(el, Number(el.dataset.target));
        });
        return;
      }

      numberEls.forEach((el) => {
        const target = Number(el.dataset.target);
        const counter = { value: 0 };
        gsap.to(counter, {
          value: target,
          duration: 1.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
          },
          onUpdate: () => {
            el.textContent = format(el, Math.round(counter.value));
          },
        });
      });

      const items = gsap.utils.toArray<HTMLElement>("[data-reveal]", scope.current);
      gsap.set(items, { autoAlpha: 0, y: 24 });
      gsap.to(items, {
        autoAlpha: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: scope.current,
          start: "top 85%",
        },
      });
    },
    { scope, dependencies: [prefersReducedMotion] },
  );

  return (
    <section ref={scope} className="bg-navy px-5 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center font-heading text-2xl font-medium text-white sm:text-3xl">
          {stats.title}
        </h2>
        <div className="mt-10 grid grid-cols-2 gap-y-10 border-t border-white/15 pt-10 lg:grid-cols-4">
          {stats.items.map((item) => (
            <div key={item.label} data-reveal className="text-center">
              <p
                data-stat-value
                data-target={item.value}
                data-prefix={item.prefix}
                data-suffix={item.suffix}
                data-number-label={item.numberLabel}
                className="font-heading text-4xl font-semibold text-white sm:text-5xl"
              >
                {(item.numberLabel ? item.numberLabel + " " : "") + item.prefix + "0" + item.suffix}
              </p>
              <p className="mt-2 text-sm text-white/60">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
