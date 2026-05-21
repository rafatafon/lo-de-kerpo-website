import type { RouteKey } from "@/lib/routes";

type SeoDefault = {
  title?: string;
  description: string;
};

export const SEO_DEFAULTS: Record<RouteKey, SeoDefault> = {
  home: {
    description:
      "Asados y más por el Chef Kerpo. Dos sucursales: Comayagua y Tegucigalpa.",
  },
  menu: {
    title: "Menú",
    description:
      "Conozca nuestro menú: parrillas, entradas, acompañamientos y más.",
  },
  historia: {
    title: "Historia",
    description: "La historia detrás de Lo de Kerpo y el Chef Kerpo.",
  },
  sucursales: {
    title: "Sucursales",
    description: "Visite Lo de Kerpo en Comayagua o Tegucigalpa.",
  },
  galeria: {
    title: "Galería",
    description: "Fotografías de nuestras parrillas, platos y locales.",
  },
  reservas: {
    title: "Reservas",
    description: "Reserve su mesa en Lo de Kerpo en línea.",
  },
};
