import type { Metadata } from "next";
import { env } from "@/lib/env";

type BuildMetadataInput = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
};

export function buildMetadata({
  title,
  description,
  path = "/",
  image,
}: BuildMetadataInput): Metadata {
  const url = new URL(path, env.siteUrl).toString();
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      locale: "es_HN",
      type: "website",
      images: image ? [{ url: image }] : undefined,
    },
  };
}
