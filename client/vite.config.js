import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      'ba55-103-184-87-59.ngrok-free.app',
      '4c11-117-217-220-193.ngrok-free.app',
      // Add other allowed hosts if needed
    ],
  }
})
