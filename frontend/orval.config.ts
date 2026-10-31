import { defineConfig } from 'orval';

export default defineConfig({
  affiliateSupportApi: {
    input: '../docs/api/affiliate-support-api.yaml',
    output: {
      target: './api/client.ts',
      client: 'fetch',
      mode: 'single',
    },
  },
});