export const env = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  openTableRid: process.env.NEXT_PUBLIC_OPENTABLE_RID ?? "",
  gaId: process.env.NEXT_PUBLIC_GA_ID,
  isProduction: process.env.VERCEL_ENV === "production",
} as const;
