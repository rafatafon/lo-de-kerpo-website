export type ImageRef = {
  src: string;
  width: number;
  height: number;
  alt: string;
  blurDataURL?: string;
};

export type MenuBadge = "picante" | "nuevo" | "favorito";

export type MenuItem = {
  slug: string;
  name: string;
  description: string;
  priceHNL?: number;
  badges?: MenuBadge[];
  image?: ImageRef;
};

export type MenuCategory = {
  slug: string;
  title: string;
  description?: string;
  items: MenuItem[];
};

export type Weekday = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export type Hours = {
  day: Weekday;
  open: string;
  close: string;
};

export type BranchSlug = "comayagua" | "tegucigalpa";

export type Branch = {
  slug: BranchSlug;
  name: string;
  status: "open" | "opening-soon";
  opensOn?: string;
  address: { line1: string; city: string; country: "HN" };
  geo: { lat: number; lng: number };
  hours: Hours[];
  phone?: string;
  mapEmbedUrl: string;
  images?: { hero?: ImageRef; gallery?: ImageRef[] };
};

export type SocialLink = {
  label: string;
  href: string;
};

export type SiteContent = {
  name: string;
  tagline: string;
  description: string;
  socials: SocialLink[];
};

export type GalleryItem = ImageRef & {
  slug: string;
};

export type TimelineEvent = {
  year: string;
  title: string;
  description: string;
};
