import { Container } from "./container";
import { Link } from "@/components/ui/link";
import { ROUTES, NAV_ITEMS } from "@/lib/routes";
import { SITE } from "@/content/site";
import { BRANCHES } from "@/content/branches";
import { formatHour } from "@/lib/format";
import type { Hours } from "@/content/types";

function summarizeHours(hours: Hours[]): string {
  if (hours.length === 0) return "";
  const first = hours[0];
  const allSame =
    hours.length === 7 &&
    hours.every((h) => h.open === first.open && h.close === first.close);
  if (allSame) {
    return `Todos los días · ${formatHour(first.open)}–${formatHour(first.close)}`;
  }
  return `${hours.length} días por semana`;
}

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border bg-muted/40">
      <Container
        size="wide"
        className="py-16 md:py-20 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8"
      >
        <div className="md:col-span-4">
          <Link
            href={ROUTES.home}
            className="font-display text-xl tracking-wide text-foreground no-underline hover:no-underline"
          >
            {SITE.name}
          </Link>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground max-w-xs">
            {SITE.tagline}
          </p>
        </div>

        <div className="md:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {BRANCHES.map((branch) => (
            <div key={branch.slug}>
              <h3 className="font-display text-base text-foreground">
                {branch.name}
              </h3>
              {branch.status === "opening-soon" ? (
                <p className="mt-2 text-sm text-muted-foreground">Próximamente</p>
              ) : (
                <>
                  <address className="not-italic mt-2 text-sm text-muted-foreground">
                    <p>{branch.address.line1}</p>
                    <p>
                      {branch.address.city}, {branch.address.country}
                    </p>
                  </address>
                  {branch.hours.length > 0 && (
                    <p className="mt-2 text-sm text-muted-foreground">
                      {summarizeHours(branch.hours)}
                    </p>
                  )}
                </>
              )}
            </div>
          ))}
        </div>

        <nav
          aria-label="Mapa del sitio"
          className="md:col-span-3 flex flex-col gap-2"
        >
          <h3 className="font-display text-base text-foreground mb-1">
            Explorar
          </h3>
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.key}
              href={ROUTES[item.key]}
              className="text-sm text-muted-foreground hover:text-foreground no-underline hover:no-underline transition-colors duration-200 w-fit"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </Container>

      <div className="border-t border-border">
        <Container
          size="wide"
          className="py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3"
        >
          <p className="text-xs text-muted-foreground">
            © {year} {SITE.name}. Todos los derechos reservados.
          </p>
          <p className="text-xs text-muted-foreground">
            Hecho por{" "}
            <Link
              href="https://archimedes.systems"
              className="text-muted-foreground hover:text-foreground no-underline hover:underline"
            >
              Archimedes Systems
            </Link>
          </p>
        </Container>
      </div>
    </footer>
  );
}
