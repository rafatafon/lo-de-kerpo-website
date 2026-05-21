// KEEP IN SYNC with the motion-* @theme tokens in src/app/globals.css.
// CSS uses milliseconds; GSAP uses seconds. Easing names approximate the bezier curves declared in CSS.
export const MOTION = {
  duration: {
    fast: 0.2,
    base: 0.5,
    slow: 0.9,
  },
  ease: {
    out: "power3.out",
    inOut: "power2.inOut",
  },
} as const;

export type MotionDuration = keyof typeof MOTION.duration;
export type MotionEase = keyof typeof MOTION.ease;
