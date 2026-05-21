"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Preference = "no-preference" | "reduce";

const MotionPreferenceContext = createContext<Preference>("no-preference");

export function MotionPreferenceProvider({ children }: { children: React.ReactNode }) {
  const [preference, setPreference] = useState<Preference>("no-preference");

  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setPreference(mql.matches ? "reduce" : "no-preference");
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);

  return (
    <MotionPreferenceContext.Provider value={preference}>
      {children}
    </MotionPreferenceContext.Provider>
  );
}

export function useMotionPreference() {
  return useContext(MotionPreferenceContext);
}
