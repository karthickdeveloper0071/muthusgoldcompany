import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          motion: ['framer-motion'],
          icons: ['react-icons'],
        },
        assetFileNames: 'assets/[name].[ext]',
      },
    },
    reportCompressedSize: true,
    chunkSizeWarningLimit: 1000,
    assetsDir: 'assets',
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion', 'react-icons'],
  },
  server: {
    port: 3000,
    open: true,
    mimeTypes: {
      'application/javascript': ['js', 'mjs']
    }
  },
  preview: {
    port: 4173,
    open: true,
  },
})