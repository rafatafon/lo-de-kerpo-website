import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { buildMetadata } from "@/lib/seo/metadata";
import { SEO_DEFAULTS } from "@/content/seo";
import { ROUTES } from "@/lib/routes";

export const metadata = buildMetadata({
  ...SEO_DEFAULTS.galeria,
  path: ROUTES.galeria,
});

export default function GaleriaPage() {
  return (
    <Section spacing="loose">
      <Container>
        <h1 className="font-display text-4xl md:text-6xl tracking-tight text-foreground">
          {SEO_DEFAULTS.galeria.title}
        </h1>
        <p className="mt-6 max-w-prose text-lg leading-relaxed text-muted-foreground">
          {SEO_DEFAULTS.galeria.description}
        </p>
      </Container>
    </Section>
  );
}
