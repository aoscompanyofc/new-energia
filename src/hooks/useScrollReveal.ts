import { useRef, type RefObject } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

/**
 * Fades + lifts every element matching `selector` inside the returned scope
 * as it enters the viewport. Skips entirely when reduced motion is preferred,
 * leaving elements at their natural, visible state (no autoAlpha:0 set).
 */
export function useScrollReveal<T extends HTMLElement>(
  selector = "[data-reveal]",
  vars: gsap.TweenVars = {},
): RefObject<T | null> {
  const scope = useRef<T>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useGSAP(
    () => {
      if (prefersReducedMotion) return;
      const targets = gsap.utils.toArray<HTMLElement>(selector, scope.current);
      if (!targets.length) return;

      gsap.set(targets, { autoAlpha: 0, y: 28, willChange: "transform, opacity" });

      targets.forEach((target, index) => {
        gsap.to(target, {
          autoAlpha: 1,
          y: 0,
          duration: 0.7,
          delay: (index % 6) * 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: target,
            start: "top 85%",
          },
          ...vars,
        });
      });
    },
    { scope, dependencies: [prefersReducedMotion] },
  );

  return scope;
}
