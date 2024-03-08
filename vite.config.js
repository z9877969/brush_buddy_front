import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { globalStylesOptions } from './global.styles';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      modules: '/src/modules',
      hooks: '/src/hooks',
      pages: '/src/pages',
      redux: '/src/redux',
      shared: '/src/shared',
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: globalStylesOptions,
      },
    },
  },
});
