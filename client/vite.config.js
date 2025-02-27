import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      '87b4-212-102-51-246.ngrok-free.app',
      '9b4e-103-184-87-57.ngrok-free.app',
      // Add other allowed hosts if needed
    ],
  }
})
