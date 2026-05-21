"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { MOTION, type MotionDuration } from "@/lib/gsap/motion-tokens";

type FadeInProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: MotionDuration;
  y?: number;
};

export function FadeIn({
  children,
  className,
  delay = 0,
  duration = "base",
  y = 24,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(ref.current, {
          opacity: 0,
          y,
          duration: MOTION.duration[duration],
          ease: MOTION.ease.out,
          delay,
        });
      });
      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(ref.current, { opacity: 1, y: 0 });
      });
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
