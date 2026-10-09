// Shared per-route `meta` builder.
//
// React Router (framework mode) does NOT merge a route's `meta` export with
// its ancestors' — see node_modules/react-router …/components.js `Meta()`:
// a route that defines its own `meta` function fully replaces the closest
// ancestor's array (routes that don't define one just inherit the nearest
// ancestor's array unchanged). So every leaf page below root.jsx has to
// re-supply the sitewide OG/Twitter defaults itself, not just the bits
// that differ, or it silently loses them. This helper keeps that
// boilerplate in one place instead of copy-pasted per page.
//
// Canonical is emitted here (as a meta `tagName: 'link'` entry) rather than
// via a route-level `links` export, for two reasons:
//   1. `links()` is invoked with no arguments in this React Router version
//      (see node_modules/react-router/dist/.../ssr/links.js — `module?.links?.()`),
//      so a route like `/services/:slug` has no way to read `params` there
//      and build a per-slug href. `meta()` *does* receive `params`.
//   2. Unlike `meta`, `links` from every matched route are concatenated,
//      not replaced. root.jsx's own `links()` unconditionally emits a
//      canonical pointing at "/" (now removed — links() concatenates across
//      matched routes and cannot be overridden by a child), so canonicals
//      are emitted here via `meta`, which receives route params and
//      correct tag onto the page; it doesn't fix the duplicate from root.
//
// This only covers title/description/canonical/OG/Twitter/robots — no
// JSON-LD. Structured data (schema.org) is owned by a separate workstream.
import { site } from '../constants/site';

const OG_IMAGE = `${site.url}/og-image.jpg`;
const OG_IMAGE_ALT =
  'Freestanding Colorbond patio with decking and downlights, built by Xpatios in Sydney';

/**
 * @param {object} args
 * @param {string} args.title - Full <title>, already including the site suffix if wanted.
 * @param {string} args.description
 * @param {string} [args.path] - Route path beginning with "/", e.g. "/about".
 * @param {boolean} [args.noindex]
 */
export function pageMeta({ title, description, path = '/', noindex = false }) {
  const url = `${site.url}${path}`;

  const tags = [
    { title },
    { name: 'description', content: description },
    { tagName: 'link', rel: 'canonical', href: url },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: site.tradingName },
    { property: 'og:locale', content: 'en_AU' },
    { property: 'og:url', content: url },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:image', content: OG_IMAGE },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: OG_IMAGE_ALT },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: OG_IMAGE },
    { name: 'twitter:image:alt', content: OG_IMAGE_ALT },
  ];

  if (noindex) {
    tags.push({ name: 'robots', content: 'noindex' });
  }

  return tags;
}
