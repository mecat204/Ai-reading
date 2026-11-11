import { defineConfig } from 'astro/config';

const isGitHubActions = process.env.GITHUB_ACTIONS === 'true';

export default defineConfig({
  site: 'https://YOUR-GITHUB-NAME.github.io',
  base: isGitHubActions ? '/ai-reading-atlas/' : '/',
  server: {
    host: '0.0.0.0',
    port: 4002,
  },
  output: 'static',
});
