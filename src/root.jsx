import React from 'react';
import { Links, Meta, Outlet, ScrollRestoration, Scripts, useLocation } from 'react-router';
import { Navbar } from './components';
import './index.css';

const TITLE = 'Patios, Carports & Metal Roofing Sydney | Xpatios';
const DESCRIPTION =
  'Patios, carports, decking, fencing and Colorbond metal roofing built across Sydney. Engineer-led, Stratco-backed workmanship. Get your free quote today.';
const URL = 'https://xpatios.com.au/';
const OG_IMAGE = 'https://xpatios.com.au/og-image.jpg';
const OG_IMAGE_ALT =
  'Freestanding Colorbond patio with decking and downlights, built by Xpatios in Sydney';

// Replaces index.html. `meta`/`links` are route-level, so each service page can
// override the title and description without touching this file.
export const meta = () => [
  { title: TITLE },
  { name: 'description', content: DESCRIPTION },
  { property: 'og:type', content: 'website' },
  { property: 'og:site_name', content: 'Xpatios and Metal Roofing' },
  { property: 'og:locale', content: 'en_AU' },
  { property: 'og:url', content: URL },
  { property: 'og:title', content: TITLE },
  { property: 'og:description', content: DESCRIPTION },
  { property: 'og:image', content: OG_IMAGE },
  { property: 'og:image:width', content: '1200' },
  { property: 'og:image:height', content: '630' },
  { property: 'og:image:alt', content: OG_IMAGE_ALT },
  { name: 'twitter:card', content: 'summary_large_image' },
  { name: 'twitter:title', content: TITLE },
  { name: 'twitter:description', content: DESCRIPTION },
  { name: 'twitter:image', content: OG_IMAGE },
  { name: 'twitter:image:alt', content: OG_IMAGE_ALT },
];

export const links = () => [
  // NOTE: no canonical here. React Router CONCATENATES links() across every
  // matched route, so a canonical declared at root cannot be overridden or
  // removed by a child — it emitted a second, wrong canonical pointing at "/"
  // on every non-home page. Canonicals are set per-page via `meta`
  // (see src/pages/pageMeta.js), because meta receives route params and
  // replaces by key rather than concatenating.
  { rel: 'icon', type: 'image/jpeg', href: '/xpatios.jpg' },
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
];

export function Layout({ children }) {
  return (
    <html lang="en-AU">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <Meta />
        <Links />
      </head>
      <body className="bg-paper text-body">
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

// Navbar is a fixed, full-bleed header that manages its own inner
// `Container` for alignment — wrapping it here would clip its edge-to-edge
// background. Page content below is left unconstrained for the same
// reason: `Section` (see components/ui/Section.jsx) already wraps its own
// children in a `Container`, so nesting another padded `Container` around
// `Outlet` would double every section's gutters. Full-bleed elements like
// the hero use the `.full-bleed` utility to break out regardless.
// Keep in sync with ROUTES_WITH_DARK_HERO in Navbar.jsx.
const ROUTES_WITH_DARK_HERO = new Set(['/']);

export default function Root() {
  const { pathname } = useLocation();
  const overDarkHero = ROUTES_WITH_DARK_HERO.has(pathname);

  return (
    <>
      <Navbar />
      {/* The header is fixed, so it's out of flow. Pages that open with a
          full-bleed hero deliberately sit underneath it; every other page
          needs its own clearance or its first element hides behind the bar. */}
      <main className={overDarkHero ? undefined : 'pt-20 md:pt-24'}>
        <Outlet />
      </main>
    </>
  );
}
