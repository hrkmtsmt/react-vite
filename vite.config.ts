import path from 'path';
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

const srcDir = path.join(__dirname, 'src/');
const publicDir = path.join(__dirname, 'public/');
const envDir = path.join(__dirname, '.env/');

export default defineConfig({
  root: srcDir,
  publicDir,
  envDir,
  plugins: [react()],
	test: {
		environment: 'jsdom',
	},
  resolve: {
    alias: {
      '@src/': srcDir
    }
  },
});

