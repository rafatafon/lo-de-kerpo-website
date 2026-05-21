import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Link } from "@/components/ui/link";
import { ROUTES } from "@/lib/routes";
import { SITE } from "@/content/site";

export default function HomePage() {
  return (
    <Section spacing="loose">
      <Container size="default">
        <p className="font-sans text-sm uppercase tracking-[0.2em] text-muted-foreground">
          Asados &amp; Más
        </p>
        <h1 className="mt-6 font-display text-5xl md:text-7xl leading-[1.05] tracking-tight text-foreground">
          {SITE.name}
        </h1>
        <p className="mt-8 max-w-prose text-lg leading-relaxed text-muted-foreground">
          {SITE.tagline}. Dos sucursales en Honduras: la original en Comayagua
          y la nueva en Tegucigalpa, abriendo en 2026.
        </p>
        <div className="mt-12 flex flex-wrap gap-4">
          <Link
            href={ROUTES.reservas}
            className="inline-flex items-center justify-center h-12 px-7 rounded-full bg-primary text-primary-foreground text-sm font-medium tracking-wide hover:bg-primary/90 transition-colors duration-200 no-underline hover:no-underline"
          >
            Reservar mesa
          </Link>
          <Link
            href={ROUTES.menu}
            className="inline-flex items-center justify-center h-12 px-7 rounded-full border border-foreground text-foreground text-sm font-medium tracking-wide hover:bg-foreground hover:text-background transition-colors duration-200 no-underline hover:no-underline"
          >
            Ver menú
          </Link>
        </div>
      </Container>
    </Section>
  );
}
