import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // Absolute base so nested client-side routes (e.g. /services/metal-roofing-sydney)
  // and trailing-slash URLs still resolve /assets/* correctly.
  base: '/',
  plugins: [react()],
})
