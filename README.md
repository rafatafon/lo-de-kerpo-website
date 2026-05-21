# Lo de Kerpo — Website

Official website for [Lo de Kerpo Asados y Más](https://www.google.com/maps/place/Lo+de+Kerpo+Asados+y+Mas), the grill restaurant by Chef Kerpo. Two locations: Comayagua (original) and Tegucigalpa (new branch, opened 2026).

Built and maintained by [Archimedes Systems](https://archimedes.systems).

---

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** [Vercel](https://vercel.com/)
- **Reservations:** OpenTable widget integration

---

## Getting Started

### Prerequisites

- Node.js 20 or later
- [pnpm](https://pnpm.io/) 9 or later

### Installation

```bash
git clone https://github.com/<your-org>/lo-de-kerpo-website.git
cd lo-de-kerpo-website
pnpm install
```

### Environment Variables

Copy `.env.example` to `.env.local` and fill in your values:

```bash
cp .env.example .env.local
```

Required variables:

| Variable                      | Description                                  |
| ----------------------------- | -------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`        | Production site URL (e.g. https://lodekerpo.com) |
| `NEXT_PUBLIC_OPENTABLE_RID`   | OpenTable restaurant ID for the reservation widget |
| `NEXT_PUBLIC_GA_ID`           | Google Analytics measurement ID (optional)   |

### Running Locally

```bash
pnpm dev      # Start dev server at http://localhost:3000
pnpm build    # Production build
pnpm start    # Run production build locally
pnpm lint     # Run ESLint
```

---

## Project Structure

```
.
├── app/                  # Next.js App Router pages
│   ├── page.tsx          # Home
│   ├── menu/             # Menu
│   ├── historia/         # Brand story
│   ├── sucursales/       # Both branches (Comayagua + Tegucigalpa)
│   ├── galeria/          # Photo gallery
│   ├── reservas/         # Reservations (OpenTable widget)
│   ├── layout.tsx
│   └── globals.css
├── components/           # Shared React components
├── lib/                  # Utilities, constants
├── content/              # Menu data, branch info (static)
├── public/               # Static assets, images
└── README.md
```

---

## Content Updates

Menu items, branch info, and copy live in `content/` as static data files. To update:

1. Edit the relevant file in `content/`.
2. Commit and push to `main`.
3. Vercel deploys the change automatically.

For new photography, drop images into `public/images/` and reference them from the relevant content file.

---

## Deployment

The site auto-deploys to Vercel on push to `main`.

- **Production:** `https://lodekerpo.com` (or your production domain)
- **Preview:** Each pull request gets its own preview URL.

To deploy manually:

```bash
pnpm build
vercel --prod
```

---

## Brand Notes

- **Voice & tone:** Warm, family-owned, Honduran hospitality. Chef-driven storytelling — Chef Kerpo is central to the brand.
- **Audience:** Local diners in Comayagua and Tegucigalpa, plus visitors discovering the restaurant for the first time.
- **Language:** Spanish (neutral Latin American). English secondary if added later.

---

## License

Proprietary. All rights reserved to Lo de Kerpo Asados y Más.

---

Built by [Archimedes Systems](https://archimedes.systems) · [hello@archimedes.systems](mailto:hello@archimedes.systems)