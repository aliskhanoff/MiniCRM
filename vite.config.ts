import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: '.tests.ts',
    include: [
      './frontend/**/*.{test,spec}.{ts,tsx}',
      './desktop/**/*.{test,spec}.{ts,tsx}',
      './backend/**/*.{test,spec}.{ts,tsx}',
    ],
  },
});
