import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      'f38f-117-202-145-249.ngrok-free.app',
      'e591-103-184-87-57.ngrok-free.app',
      // Add other allowed hosts if needed
    ],
  }
})
