import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

let registered = false;

export function registerGSAP() {
  if (registered || typeof window === "undefined") return;

  gsap.registerPlugin(ScrollTrigger, SplitText);
  gsap.defaults({ ease: "power3.out" });

  // Geist swaps in after first paint; ScrollTrigger positions calculated against the pre-swap layout would drift.
  document.fonts?.ready.then(() => ScrollTrigger.refresh());

  registered = true;
}
