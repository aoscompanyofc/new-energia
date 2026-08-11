import { useRef, type ReactNode } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

type MarqueeProps = {
  children: ReactNode;
  speed?: number;
  className?: string;
  reverse?: boolean;
};

/**
 * Infinite, GSAP-driven horizontal marquee. Renders the children twice so
 * the loop is seamless, animates `xPercent` only, and pauses entirely when
 * the user prefers reduced motion or hovers/focuses the track.
 */
export function Marquee({ children, speed = 40, className = "", reverse = false }: MarqueeProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useGSAP(
    () => {
      if (prefersReducedMotion || !trackRef.current) return;
      const track = trackRef.current;
      const distance = track.scrollWidth / 2;
      const duration = distance / speed;

      const tween = gsap.fromTo(
        track,
        { xPercent: reverse ? -50 : 0 },
        {
          xPercent: reverse ? 0 : -50,
          duration,
          ease: "none",
          repeat: -1,
        },
      );

      const pause = () => tween.pause();
      const resume = () => tween.play();
      track.addEventListener("mouseenter", pause);
      track.addEventListener("mouseleave", resume);
      track.addEventListener("focusin", pause);
      track.addEventListener("focusout", resume);

      return () => {
        track.removeEventListener("mouseenter", pause);
        track.removeEventListener("mouseleave", resume);
        track.removeEventListener("focusin", pause);
        track.removeEventListener("focusout", resume);
      };
    },
    { scope: trackRef, dependencies: [prefersReducedMotion, speed, reverse] },
  );

  return (
    <div className={`overflow-hidden ${className}`}>
      <div ref={trackRef} className="flex w-max will-change-transform">
        <div className="flex shrink-0">{children}</div>
        <div className="flex shrink-0" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
