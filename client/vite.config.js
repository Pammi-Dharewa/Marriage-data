import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      'd66d-117-217-223-225.ngrok-free.app',
      'ef14-103-184-87-57.ngrok-free.app',
      // Add other allowed hosts if needed
    ],
  }
})
