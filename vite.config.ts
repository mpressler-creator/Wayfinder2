import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  root: '.',              // ensure Vite looks in the repo root
  publicDir: 'public',    // ensure Vite uses your public folder
  plugins: [react()],
  build: {
    outDir: 'dist'
  }
})

