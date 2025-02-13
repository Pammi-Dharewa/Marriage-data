import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      'd7e0-103-184-87-59.ngrok-free.app',
      'fec1-91-207-174-11.ngrok-free.app',
      // Add other allowed hosts if needed
    ],
  }
})
