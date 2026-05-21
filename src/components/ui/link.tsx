import NextLink from "next/link";
import { cn } from "@/lib/cn";

type LinkProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  href: string;
};

function isExternal(href: string): boolean {
  return (
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:")
  );
}

export function Link({ href, className, children, ...props }: LinkProps) {
  const styles = cn(
    "underline-offset-4 hover:underline transition-colors duration-200",
    className,
  );

  if (isExternal(href)) {
    return (
      <a
        href={href}
        className={styles}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <NextLink href={href} className={styles} {...props}>
      {children}
    </NextLink>
  );
}
