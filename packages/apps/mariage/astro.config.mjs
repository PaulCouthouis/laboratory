import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import svelte from '@astrojs/svelte'
import vercel from '@astrojs/vercel/serverless'

import image from '@astrojs/image'

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    svelte(),
    image({
      serviceEntryPoint: '@astrojs/image/sharp',
    }),
  ],
  output: 'server',
  adapter: vercel(),
})
