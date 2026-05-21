"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Container } from "./container";
import { Link } from "@/components/ui/link";
import { ROUTES, NAV_ITEMS } from "@/lib/routes";
import { SITE } from "@/content/site";
import { cn } from "@/lib/cn";

const PRIMARY_LINK_STYLES =
  "text-sm tracking-wide no-underline hover:no-underline transition-colors duration-200";

const CTA_STYLES =
  "inline-flex items-center justify-center h-9 px-4 md:px-5 rounded-full " +
  "bg-primary text-primary-foreground text-sm font-medium tracking-wide " +
  "hover:bg-primary/90 transition-colors duration-200 no-underline hover:no-underline " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const navItems = NAV_ITEMS.filter((item) => item.key !== "reservas");

  return (
    <header className="sticky top-0 z-50 bg-background/85 backdrop-blur-md border-b border-border">
      <Container
        size="wide"
        className="flex h-16 md:h-20 items-center justify-between"
      >
        <Link
          href={ROUTES.home}
          onClick={() => setOpen(false)}
          className="font-display text-lg md:text-xl tracking-wide text-foreground no-underline hover:no-underline"
        >
          {SITE.name}
        </Link>

        <nav aria-label="Navegación principal" className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const href = ROUTES[item.key];
            const active = pathname === href;
            return (
              <Link
                key={item.key}
                href={href}
                className={cn(
                  PRIMARY_LINK_STYLES,
                  active
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link href={ROUTES.reservas} className={CTA_STYLES}>
            Reservar
          </Link>
          <button
            type="button"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-full border border-border cursor-pointer transition-colors duration-200 hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <span className="sr-only">Menú</span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              aria-hidden="true"
            >
              {open ? (
                <>
                  <path d="M6 6l12 12" />
                  <path d="M6 18L18 6" />
                </>
              ) : (
                <>
                  <path d="M4 7h16" />
                  <path d="M4 17h16" />
                </>
              )}
            </svg>
          </button>
        </div>
      </Container>

      {open && (
        <nav
          aria-label="Navegación móvil"
          className="md:hidden border-t border-border bg-background"
        >
          <Container size="wide" className="flex flex-col py-6">
            {navItems.map((item) => {
              const href = ROUTES[item.key];
              const active = pathname === href;
              return (
                <Link
                  key={item.key}
                  href={href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "py-3 text-lg tracking-wide no-underline hover:no-underline transition-colors duration-200",
                    active
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </Container>
        </nav>
      )}
    </header>
  );
}
