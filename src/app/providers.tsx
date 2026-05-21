"use client";

import { useEffect } from "react";
import { registerGSAP } from "@/lib/gsap/register";
import { MotionPreferenceProvider } from "@/lib/gsap/use-motion-preference";

export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    registerGSAP();
  }, []);

  return <MotionPreferenceProvider>{children}</MotionPreferenceProvider>;
}
