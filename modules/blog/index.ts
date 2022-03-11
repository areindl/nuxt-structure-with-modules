import { defineNuxtModule, addComponentsDir, useNuxt } from '@nuxt/kit'

import path from 'path'

export default defineNuxtModule({
  // Default configuration options for your module
  defaults: {},
  hooks: {
    'pages:extend'(pages) {
      pages.push({
        name: 'blog',
        path: '/blog',
        file: path.resolve(__dirname, 'pages/blog.vue'),
      })
    },

    'components:dirs'(dirs) {
      // Add ./components dir to the list
      dirs.push({
        path: path.resolve(__dirname, 'components'),
      })
    },
  },
  async setup(moduleOptions, nuxt) {
    // -- Add your module logic here --
  },
})
