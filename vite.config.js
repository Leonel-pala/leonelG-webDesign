import Inspect from 'vite-plugin-inspect';
import { resolve } from 'path';

export default {
  plugins: [Inspect()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        moreDetailsService: resolve(__dirname, 'moreDetailsService.html'),
        moreDetailsPage: resolve(__dirname, 'moreDetailsPage.html'),
      },
    },
  },
};
