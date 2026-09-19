import { index, route } from '@react-router/dev/routes';

/** @type {import('@react-router/dev/routes').RouteConfig} */
export default [
  index('pages/Home.jsx'),
  route('gallery', 'pages/Gallery.jsx'),
];
