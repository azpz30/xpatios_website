/** @type {import('@react-router/dev/config').Config} */
export default {
  // Keep the existing src/ layout rather than moving everything into app/.
  appDirectory: 'src',

  // No server runtime: build to static HTML + client JS.
  ssr: false,

  // Routes pre-rendered to real HTML at build time. This is the whole point —
  // it replaces the 453-byte empty shell with indexable markup per route.
  // Add each new service/suburb page here as it lands.
  async prerender() {
    return ['/', '/gallery'];
  },
};
