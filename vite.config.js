import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
    base: "/DSA-450-Tracker1/",
    plugins: [react()],
    build: {
        chunkSizeWarningLimit: 1600,
    },
})
