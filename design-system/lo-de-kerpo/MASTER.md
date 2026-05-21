# Design System Master File

> **LOGIC:** When building a specific page, first check `design-system/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file.
> If not, strictly follow the rules below.

---

**Project:** Lo de Kerpo
**Generated:** 2026-05-21 11:19:43
**Category:** Hotel/Hospitality

---

## Brand Story (Required Reading)

Before applying any of the design rules below to user-facing copy or imagery, read **[`docs/brand/chef-kerpo.md`](../../docs/brand/chef-kerpo.md)** — the canonical biographical reference for Chef Kerpo Gabriel de León. It covers his "del campo a la parrilla" arc, voice & tone rules, words to use and avoid, and open questions to verify with the client. Visual decisions made without that context will miss the brand.

---

## Refinements Applied (2026-05-21)

The script's defaults were tuned to fit Lo de Kerpo's brand and the project's technical constraints. Deviations and reasoning below; everything not listed here is adopted as-is.

### Style: `Liquid Glass` → Editorial photographic minimalism

Liquid Glass targets premium SaaS, branding experiences, and luxury portfolios. Lo de Kerpo is a family-owned Honduran grill with chef-driven hospitality — glassy/iridescent reads cold and techy, and the script itself flagged Liquid Glass with ⚠ Moderate-Poor performance + ⚠ text contrast caveats.

Adopt **editorial photographic minimalism** instead:

- Generous whitespace, oversized display type, full-bleed food and chef photography.
- Restrained UI: thin borders, subtle separators, no glass blur or chromatic effects.
- GSAP animations: scroll-driven reveals on type and imagery (ScrollTrigger + SplitText), magnetic CTAs, parallax on hero photography. Motion is subtle, intentional, fast.

The script's "Key Effects" (morphing, fluid blur) do **not** apply.

### Background: `#FEF2F2` (pink-cream) → `#FAF8F4` (warm linen)

Pink-cream backgrounds tinted toward red read bakery, not steakhouse. Warm linen keeps red as a CTA accent rather than a surface tint.

### Card surface: `#FEF2F2` → `#FFFFFF`

Cards sit on the linen background; pure white card surface gives the editorial "magazine page" feel and improves photo-card contrast.

### Page Pattern: `Minimal Single Column` → multi-page editorial site

The script's pattern is for a one-page conversion-driven landing. Lo de Kerpo is multi-page (Home / Menu / Historia / Sucursales / Galería / Reservas). The principles it embodies — whitespace, large typography, mobile-first, no nav clutter — carry over to every page; the single-CTA structural pattern applies only to the **home hero**.

### Component CSS examples below: indicative, not authoritative

The CSS snippets in "Component Specs" are illustrative. Actual components live in `src/components/ui/` and use Tailwind v4 utilities (with tokens defined in `src/app/globals.css`) — not hand-rolled CSS classes.

### Adopted as-is

- Typography pairing (Playfair Display SC for display + Karla for body)
- Primary `#DC2626`, accent `#A16207`, foreground `#1A1A1A` (script suggested `#450A0A`; we use a near-black for better readability on linen)
- Spacing scale, shadow scale
- Anti-patterns and Pre-Delivery Checklist

---

## Global Rules

### Color Palette

| Role | Hex | CSS Variable |
|------|-----|--------------|
| Primary | `#DC2626` | `--color-primary` |
| On Primary | `#FFFFFF` | `--color-on-primary` |
| Secondary | `#F87171` | `--color-secondary` |
| Accent/CTA | `#A16207` | `--color-accent` |
| Background | `#FEF2F2` | `--color-background` |
| Foreground | `#450A0A` | `--color-foreground` |
| Muted | `#F0EDF1` | `--color-muted` |
| Border | `#FECACA` | `--color-border` |
| Destructive | `#DC2626` | `--color-destructive` |
| Ring | `#DC2626` | `--color-ring` |

**Color Notes:** Appetizing red + warm gold [Accent adjusted from #CA8A04 for WCAG 3:1]

### Typography

- **Heading Font:** Playfair Display SC
- **Body Font:** Karla
- **Mood:** restaurant, menu, culinary, elegant, foodie, hospitality
- **Google Fonts:** [Playfair Display SC + Karla](https://fonts.google.com/share?selection.family=Karla:wght@300;400;500;600;700|Playfair+Display+SC:wght@400;700)

**CSS Import:**
```css
@import url('https://fonts.googleapis.com/css2?family=Karla:wght@300;400;500;600;700&family=Playfair+Display+SC:wght@400;700&display=swap');
```

### Spacing Variables

| Token | Value | Usage |
|-------|-------|-------|
| `--space-xs` | `4px` / `0.25rem` | Tight gaps |
| `--space-sm` | `8px` / `0.5rem` | Icon gaps, inline spacing |
| `--space-md` | `16px` / `1rem` | Standard padding |
| `--space-lg` | `24px` / `1.5rem` | Section padding |
| `--space-xl` | `32px` / `2rem` | Large gaps |
| `--space-2xl` | `48px` / `3rem` | Section margins |
| `--space-3xl` | `64px` / `4rem` | Hero padding |

### Shadow Depths

| Level | Value | Usage |
|-------|-------|-------|
| `--shadow-sm` | `0 1px 2px rgba(0,0,0,0.05)` | Subtle lift |
| `--shadow-md` | `0 4px 6px rgba(0,0,0,0.1)` | Cards, buttons |
| `--shadow-lg` | `0 10px 15px rgba(0,0,0,0.1)` | Modals, dropdowns |
| `--shadow-xl` | `0 20px 25px rgba(0,0,0,0.15)` | Hero images, featured cards |

---

## Component Specs

### Buttons

```css
/* Primary Button */
.btn-primary {
  background: #A16207;
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 200ms ease;
  cursor: pointer;
}

.btn-primary:hover {
  opacity: 0.9;
  transform: translateY(-1px);
}

/* Secondary Button */
.btn-secondary {
  background: transparent;
  color: #DC2626;
  border: 2px solid #DC2626;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 200ms ease;
  cursor: pointer;
}
```

### Cards

```css
.card {
  background: #FEF2F2;
  border-radius: 12px;
  padding: 24px;
  box-shadow: var(--shadow-md);
  transition: all 200ms ease;
  cursor: pointer;
}

.card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}
```

### Inputs

```css
.input {
  padding: 12px 16px;
  border: 1px solid #E2E8F0;
  border-radius: 8px;
  font-size: 16px;
  transition: border-color 200ms ease;
}

.input:focus {
  border-color: #DC2626;
  outline: none;
  box-shadow: 0 0 0 3px #DC262620;
}
```

### Modals

```css
.modal-overlay {
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
}

.modal {
  background: white;
  border-radius: 16px;
  padding: 32px;
  box-shadow: var(--shadow-xl);
  max-width: 500px;
  width: 90%;
}
```

---

## Style Guidelines

**Style:** Liquid Glass

**Keywords:** Flowing glass, morphing, smooth transitions, fluid effects, translucent, animated blur, iridescent, chromatic aberration

**Best For:** Premium SaaS, high-end e-commerce, creative platforms, branding experiences, luxury portfolios

**Key Effects:** Morphing elements (SVG/CSS), fluid animations (400-600ms curves), dynamic blur (backdrop-filter), color transitions

### Page Pattern

**Pattern Name:** Minimal Single Column

- **Conversion Strategy:** Single CTA focus. Large typography. Lots of whitespace. No nav clutter. Mobile-first.
- **CTA Placement:** Center, large CTA button
- **Section Order:** 1. Hero headline, 2. Short description, 3. Benefit bullets (3 max), 4. CTA, 5. Footer

---

## Anti-Patterns (Do NOT Use)

- ❌ Poor photos
- ❌ Complex booking

### Additional Forbidden Patterns

- ❌ **Emojis as icons** — Use SVG icons (Heroicons, Lucide, Simple Icons)
- ❌ **Missing cursor:pointer** — All clickable elements must have cursor:pointer
- ❌ **Layout-shifting hovers** — Avoid scale transforms that shift layout
- ❌ **Low contrast text** — Maintain 4.5:1 minimum contrast ratio
- ❌ **Instant state changes** — Always use transitions (150-300ms)
- ❌ **Invisible focus states** — Focus states must be visible for a11y

---

## Pre-Delivery Checklist

Before delivering any UI code, verify:

- [ ] No emojis used as icons (use SVG instead)
- [ ] All icons from consistent icon set (Heroicons/Lucide)
- [ ] `cursor-pointer` on all clickable elements
- [ ] Hover states with smooth transitions (150-300ms)
- [ ] Light mode: text contrast 4.5:1 minimum
- [ ] Focus states visible for keyboard navigation
- [ ] `prefers-reduced-motion` respected
- [ ] Responsive: 375px, 768px, 1024px, 1440px
- [ ] No content hidden behind fixed navbars
- [ ] No horizontal scroll on mobile
