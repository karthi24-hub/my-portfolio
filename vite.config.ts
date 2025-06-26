import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './', // ✅ Needed for correct path resolution on Vercel
  plugins: [react()],
});
