import { index, route } from '@react-router/dev/routes';

/** @type {import('@react-router/dev/routes').RouteConfig} */
export default [
  index('pages/Home.jsx'),
  route('about', 'pages/About.jsx'),
  route('services', 'pages/Services.jsx'),
  // Single dynamic route serving all seven services — the service list
  // itself lives only in src/constants/services.js. See
  // react-router.config.js for how these get prerendered.
  route('services/:slug', 'pages/ServiceDetail.jsx'),
  route('gallery', 'pages/Gallery.jsx'),
  route('projects', 'pages/Projects.jsx'),
  route('contact', 'pages/Contact.jsx'),
  route('quote', 'pages/Quote.jsx'),
  route('thank-you', 'pages/ThankYou.jsx'),
];
