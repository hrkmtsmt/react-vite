import path from 'path';
import { loadEnv } from 'vite';
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import checker from 'vite-plugin-checker';

const srcDir = path.join(__dirname, 'src/');
const envDir = path.join(__dirname, '.env/');
const publicDir = path.join(__dirname, 'public/');

export default defineConfig(({ mode }) => {
  return {
    publicDir,
    envDir,
    plugins: [
      react(),
      checker({
        typescript: true,
        eslint: {
          lintCommand: `eslint "${srcDir}/**/*.{ts,tsx}"`
        }
      })
    ],
    test: {
      environment: 'jsdom'
    },
    resolve: {
      alias: {
        '@src/': srcDir
      }
    },
    define: { 'process.env': loadEnv(mode, envDir) }
  };
});
