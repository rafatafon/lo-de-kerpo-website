import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { buildMetadata } from "@/lib/seo/metadata";
import { SEO_DEFAULTS } from "@/content/seo";
import { ROUTES } from "@/lib/routes";

export const metadata = buildMetadata({
  ...SEO_DEFAULTS.reservas,
  path: ROUTES.reservas,
});

export default function ReservasPage() {
  return (
    <Section spacing="loose">
      <Container size="narrow">
        <h1 className="font-display text-4xl md:text-6xl tracking-tight text-foreground">
          {SEO_DEFAULTS.reservas.title}
        </h1>
        <p className="mt-6 max-w-prose text-lg leading-relaxed text-muted-foreground">
          {SEO_DEFAULTS.reservas.description}
        </p>
      </Container>
    </Section>
  );
}
