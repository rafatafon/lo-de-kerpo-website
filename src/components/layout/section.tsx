import { cn } from "@/lib/cn";

type SectionSpacing = "tight" | "default" | "loose";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  spacing?: SectionSpacing;
};

const SPACING: Record<SectionSpacing, string> = {
  tight: "py-12 md:py-16",
  default: "py-20 md:py-28",
  loose: "py-28 md:py-40",
};

export function Section({ children, className, id, spacing = "default" }: SectionProps) {
  return (
    <section id={id} className={cn(SPACING[spacing], className)}>
      {children}
    </section>
  );
}
