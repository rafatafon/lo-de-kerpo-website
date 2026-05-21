import { cn } from "@/lib/cn";

type ContainerSize = "narrow" | "default" | "wide";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  size?: ContainerSize;
};

const SIZES: Record<ContainerSize, string> = {
  narrow: "max-w-3xl",
  default: "max-w-5xl",
  wide: "max-w-7xl",
};

export function Container({ children, className, size = "default" }: ContainerProps) {
  return (
    <div className={cn("mx-auto w-full px-6 md:px-10", SIZES[size], className)}>
      {children}
    </div>
  );
}
