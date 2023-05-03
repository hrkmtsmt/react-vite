import path from 'path';
import { loadEnv } from 'vite';
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

const srcDir = path.join(__dirname, 'src/');
const envDir = path.join(__dirname, '.env/');
const publicDir = path.join(__dirname, 'public/');

export default defineConfig(({ mode }) => {

  return {
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
    define: { 'process.env': loadEnv(mode, envDir) },
  }
});

