import angular from '@analogjs/vite-plugin-angular';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vitest/config';

const workspaceRoot = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  resolve: {
    mainFields: ['module'],
    alias: {
      src: resolve(workspaceRoot, 'src'),
    },
  },
  plugins: [angular()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['src/test-setup.ts'],
    include: ['src/**/*.spec.ts'],
  },
});
