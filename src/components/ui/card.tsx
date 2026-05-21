import { forwardRef } from "react";
import { cn } from "@/lib/cn";

type CardProps = React.HTMLAttributes<HTMLDivElement>;

export const Card = forwardRef<HTMLDivElement, CardProps>(function Card(
  { className, children, ...props },
  ref,
) {
  return (
    <div
      ref={ref}
      className={cn(
        "rounded-2xl bg-surface border border-border overflow-hidden",
        "transition-[box-shadow,transform] duration-300 ease-out",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
});
