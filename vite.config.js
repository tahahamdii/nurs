import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // other server settings
    hmr: {
      overlay: true // or set to false as mentioned in the error message
    }
  }
})
