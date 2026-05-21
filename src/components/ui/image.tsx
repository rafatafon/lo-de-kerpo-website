import NextImage, { type ImageProps as NextImageProps } from "next/image";
import { cn } from "@/lib/cn";

type AspectRatio = "square" | "portrait" | "landscape" | "wide";

const ASPECT: Record<AspectRatio, string> = {
  square: "aspect-square",
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  wide: "aspect-[16/9]",
};

type ImageProps = Omit<NextImageProps, "fill"> & {
  aspect?: AspectRatio;
  containerClassName?: string;
};

export function Image({
  aspect,
  className,
  containerClassName,
  alt,
  ...props
}: ImageProps) {
  if (!aspect) {
    return <NextImage alt={alt} className={cn(className)} {...props} />;
  }
  return (
    <div className={cn("relative overflow-hidden", ASPECT[aspect], containerClassName)}>
      <NextImage
        alt={alt}
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className={cn("object-cover", className)}
        {...props}
      />
    </div>
  );
}
