import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // Naya plugin import kiya

export default defineConfig({
  plugins: [react(), tailwindcss()], // Plugin add kiya
})