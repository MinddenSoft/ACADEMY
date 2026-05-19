import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/ACADEMY/office-ia-academy/',
  plugins: [react(), tailwindcss()],
})
