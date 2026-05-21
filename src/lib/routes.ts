export const ROUTES = {
  home: "/",
  menu: "/menu",
  historia: "/historia",
  sucursales: "/sucursales",
  galeria: "/galeria",
  reservas: "/reservas",
} as const;

export type RouteKey = keyof typeof ROUTES;
export type Route = (typeof ROUTES)[RouteKey];

export const NAV_ITEMS: ReadonlyArray<{ key: Exclude<RouteKey, "home">; label: string }> = [
  { key: "menu", label: "Menú" },
  { key: "historia", label: "Historia" },
  { key: "sucursales", label: "Sucursales" },
  { key: "galeria", label: "Galería" },
  { key: "reservas", label: "Reservas" },
];
