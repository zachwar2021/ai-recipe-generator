import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  define: {
    global: 'globalThis',
    'process.env': {},
    'process.browser': true,
  },
  optimizeDeps: {
    exclude: ['@aws-amplify/backend', 'aws-cdk-lib', '@aws-cdk'],
  },
  build: {
    rollupOptions: {
      external: ['@aws-amplify/backend', 'aws-cdk-lib'],
    },
  },
})