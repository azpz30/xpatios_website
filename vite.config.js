import { defineConfig } from 'vite'
import { reactRouter } from '@react-router/dev/vite'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  // Absolute base so nested routes (e.g. /services/metal-roofing-sydney)
  // and trailing-slash URLs still resolve /assets/* correctly.
  base: '/',
  // Tailwind v4 via its Vite plugin rather than PostCSS: faster, and it avoids
  // Vite's postcss-import trying to resolve `@import "tailwindcss"` as a file.
  plugins: [tailwindcss(), reactRouter()],
})
