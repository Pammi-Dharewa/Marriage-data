import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    allowedHosts: ['6017-2409-4042-4c1e-fcec-40a-6e64-1873-2bf0.ngrok-free.app'],
   },
})
