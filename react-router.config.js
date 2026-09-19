import { services } from './src/constants/services.js';

// Every static route in the sitemap (docs/06-INFORMATION-ARCHITECTURE.md §1),
// plus one URL per service — derived from services.js, never hardcoded here.
const STATIC_ROUTES = [
  '/',
  '/about',
  '/services',
  '/gallery',
  '/projects',
  '/contact',
  '/quote',
  '/thank-you',
];

/** @type {import('@react-router/dev/config').Config} */
export default {
  // Keep the existing src/ layout rather than moving everything into app/.
  appDirectory: 'src',

  // No server runtime: build to static HTML + client JS.
  ssr: false,

  // Routes pre-rendered to real HTML at build time. This is the whole point —
  // it replaces the 453-byte empty shell with indexable markup per route.
  // A route missing here silently falls back to the SPA shell at build time
  // and loses all its SEO value, so service URLs are mapped straight off
  // `services` — adding an 8th service to services.js prerenders its page
  // automatically, no change needed here.
  async prerender() {
    return [...STATIC_ROUTES, ...services.map((service) => `/services/${service.slug}`)];
  },
};
