import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  define: {
    global: 'globalThis',
    'process.env': {},
  },
  resolve: {
    alias: {
      './runtimeConfig': './runtimeConfig.browser',
    },
  },
  optimizeDeps: {
    exclude: ['@aws-amplify/backend'],
  },
  ssr: {
    noExternal: ['@aws-amplify/ui-react'],
  },
})