import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/project-template-generator/', // 👈 Esto es muy importante para GitHub Pages
})
