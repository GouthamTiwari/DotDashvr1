import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite configuration for DotDash
// Keep AdSense env variables (will work once added in .env.local)
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.ADSENSE_CLIENT_ID': JSON.stringify(process.env.ADSENSE_CLIENT_ID),
    'process.env.ADSENSE_SLOT_ID': JSON.stringify(process.env.ADSENSE_SLOT_ID),
  }
})
