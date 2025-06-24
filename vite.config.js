import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Basic-Ecommerce-Webpage/', // this MUST match the repo name
  plugins: [react()],
});
