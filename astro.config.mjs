import { defineConfig } from 'astro/config';

//import vercel from "@astrojs/vercel/serverless";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  output: "static",
  //adapter: vercel(),
  site: 'https://xocialex.github.io',
  base: '/Astro-WP-REST-API',
  adapter: node({
    mode: "standalone"
  })
});