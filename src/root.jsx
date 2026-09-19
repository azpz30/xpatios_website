import React from 'react';
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from 'react-router';
import styles from './style';
import { Navbar } from './components';
import './index.css';

const TITLE = 'Patios, Carports & Metal Roofing Sydney | XPatios';
const DESCRIPTION =
  'Patios, carports, decking, fencing and Colorbond metal roofing built across Sydney. Engineer-led, Stratco-backed workmanship. Get your free quote today.';
const URL = 'https://xpatios.com.au/';
const OG_IMAGE = 'https://xpatios.com.au/og-image.jpg';
const OG_IMAGE_ALT =
  'Freestanding Colorbond patio with decking and downlights, built by XPatios in Sydney';

// Replaces index.html. `meta`/`links` are route-level, so each service page can
// override the title and description without touching this file.
export const meta = () => [
  { title: TITLE },
  { name: 'description', content: DESCRIPTION },
  { property: 'og:type', content: 'website' },
  { property: 'og:site_name', content: 'XPatios and Metal Roofing' },
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
  { rel: 'canonical', href: URL },
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
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function Root() {
  return (
    <div className="bg-white w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-white ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
