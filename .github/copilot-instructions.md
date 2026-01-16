# AI Coding Instructions for Susanne Rusch Website

## Project Overview

Next.js 16 website for a psychotherapy and music therapy practice in Vienna. German-language content (de_AT locale) with a focus on SEO, accessibility, and professional presentation. Uses App Router with TypeScript, pnpm for package management, and deploys to Vercel.

## Architecture & Key Patterns

### SEO-First Structure

- **Central SEO system**: Use `createPageMetadata()` from [app/lib/seo.ts](app/lib/seo.ts) for ALL pages
- **Metadata pattern**: Every page exports `metadata` using `createPageMetadata({ title, description, canonical })`
- **Example**: [app/psychotherapie/page.tsx](app/psychotherapie/page.tsx#L6-L11) shows proper SEO setup
- **Site URL**: Use `SITE_URL` from [app/lib/site.ts](app/lib/site.ts) for absolute URLs
- **Structured data**: Root layout includes JSON-LD for MedicalBusiness and Person schemas

### Component Organization

- **File naming**: PascalCase for component files (`KontaktButton.tsx`), kebab-case for directories (`navbar/`)
- **CSS Modules**: Each component has companion `.module.css` file with same name
- **Client components**: Mark with `'use client'` only when needed (e.g., [Navbar.tsx](app/components/navbar/Navbar.tsx) for interactivity)
- **Shared components**: Place in `app/components/` with optional subdirectory for multi-file components

### Page Structure Pattern

Standard page template follows this structure:

```tsx
import { createPageMetadata } from '../lib/seo';

export const metadata = createPageMetadata({
  title: 'Page Title',
  description: 'SEO description',
  canonical: '/page-path',
});

export default function PageName() {
  return <main className={styles.page}>...</main>;
}
```

### Styling Conventions

- **CSS Variables**: Use color scheme from [globals.css](app/globals.css) (`--color1` through `--color6`, `--suslcolor`)
- **Primary color**: `--color1: #2c6981` (teal blue) - use class `.blue` for inline text emphasis
- **Typography**: Lora for headings/quotes, Noto Sans JP for body (configured in [layout.tsx](app/layout.tsx#L59-L66))
- **Responsive images**: Always use Next.js `<Image>` with `sizes` prop for responsive optimization

### Navigation & Routing

- **Nav items**: Defined in [Navbar.tsx](app/components/navbar/Navbar.tsx#L17-L23) - update both desktop and mobile versions
- **Active link styling**: `isActive()` function checks pathname; active pages get `linkActive` class
- **KontaktButton**: Reusable CTA component linking to `/kontakt` - accepts children, onClick, style, className props

## Development Workflows

### Commands

```bash
pnpm dev          # Start dev server (port 3000)
pnpm build        # Production build
pnpm start        # Run production build locally
pnpm lint         # Run ESLint (uses flat config from eslint.config.mjs)
```

### Environment & Deployment

- **Production URL**: `https://psychotherapie-rusch.at` (from [vercel.json](vercel.json))
- **WWW redirect**: Automatic redirect from www subdomain to apex domain (configured in Vercel)
- **Robots control**: SEO indexing only enabled in production (`isProd` check in [layout.tsx](app/layout.tsx#L11))
- **Analytics**: Vercel Analytics and Speed Insights integrated in root layout

## Project-Specific Conventions

### German Content Standards

- Use formal "Sie" form throughout
- Proper German typography: `Mag.ᵃ` (not `Mag.a`), correct umlauts (ä, ö, ü)
- Address format: "Hannovergasse 16/3, 1200 Wien"
- Phone: "+43 680 1528926" (format consistently with country code)

### Path Aliases

- Use `@/` prefix for imports from project root (configured in [tsconfig.json](tsconfig.json#L24-L26))
- Example: `import susanne from '@/public/images/susanne-rusch-psychotherapie.webp'`

### Image Optimization

- Store images in `public/images/`
- Use WebP format for photos
- Always provide meaningful alt text in German
- Set `priority` for above-the-fold images (e.g., hero image, logo)

### Metadata Separation Pattern

For complex metadata, use separate file (see [app/kontakt/metadata.ts](app/kontakt/metadata.ts)):

```tsx
// metadata.ts
export const pageMetadata = createPageMetadata({...});

// page.tsx
import { pageMetadata } from './metadata';
export const metadata = pageMetadata;
```

## Integration Points

### External Services

- **Google Maps**: Remote pattern configured in [next.config.ts](next.config.ts#L4-L9) for map images
- **Professional directories**: Schema.org sameAs links to psyonline.at, jugendberatung.at, musiktherapie.at
- **Vercel Analytics**: Tracks pageviews, Web Vitals (configured in root layout)

### Type Safety

- Strict TypeScript enabled
- React 19.2.3 with new JSX transform (`jsx: "react-jsx"` in tsconfig)
- Use proper typing for Next.js Metadata exports

## Common Tasks

### Adding a New Page

1. Create `app/newpage/page.tsx` with metadata using `createPageMetadata()`
2. Add corresponding `page.module.css` for styling
3. Update nav items in [Navbar.tsx](app/components/navbar/Navbar.tsx#L17-L23) if needed
4. Add to sitemap if public page (see [app/sitemap.ts](app/sitemap.ts))

### Modifying Global Styles

- Color scheme changes: Update CSS variables in [globals.css](app/globals.css#L1-L20)
- Font changes: Modify imports and variables in [layout.tsx](app/layout.tsx#L59-L66)

### SEO Updates

- Metadata defaults: Edit [layout.tsx](app/layout.tsx#L67-L96)
- Per-page SEO: Use `createPageMetadata()` with custom values
- Structured data: Update JSON-LD in [layout.tsx](app/layout.tsx#L29-L57)
