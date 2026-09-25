import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'

const __dirname = import.meta.dirname

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@t': path.resolve(__dirname, 'src/types'),
      '@shared': path.resolve(__dirname, 'src/components/shared'),
      '@util': path.resolve(__dirname, 'src/components/util'),
    },
  },
})
