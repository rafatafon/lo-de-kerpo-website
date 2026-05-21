import type { Branch } from "./types";

export const BRANCHES: Branch[] = [
  {
    slug: "comayagua",
    name: "Lo de Kerpo Comayagua",
    status: "open",
    address: {
      line1: "Calle Principal",
      city: "Comayagua",
      country: "HN",
    },
    geo: { lat: 14.4516, lng: -87.6371 },
    hours: [
      { day: 1, open: "11:00", close: "22:00" },
      { day: 2, open: "11:00", close: "22:00" },
      { day: 3, open: "11:00", close: "22:00" },
      { day: 4, open: "11:00", close: "22:00" },
      { day: 5, open: "11:00", close: "23:00" },
      { day: 6, open: "11:00", close: "23:00" },
      { day: 0, open: "11:00", close: "22:00" },
    ],
    mapEmbedUrl: "",
  },
  {
    slug: "tegucigalpa",
    name: "Lo de Kerpo Tegucigalpa",
    status: "opening-soon",
    opensOn: "2026-12-01",
    address: {
      line1: "Por confirmar",
      city: "Tegucigalpa",
      country: "HN",
    },
    geo: { lat: 14.0723, lng: -87.1921 },
    hours: [],
    mapEmbedUrl: "",
  },
];

export function getBranch(slug: Branch["slug"]): Branch | undefined {
  return BRANCHES.find((b) => b.slug === slug);
}
