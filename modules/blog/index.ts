import { defineNuxtModule, addComponentsDir, useNuxt } from '@nuxt/kit'

import path from 'path'

export default defineNuxtModule({
  // Default configuration options for your module
  defaults: {},
  hooks: {
    // ROUTES
    'pages:extend'(pages) {
      pages.push({
        name: 'blog',
        path: '/blog',
        file: path.resolve(__dirname, './pages/blog.vue'),
      })
    },

    // COMPONENTS
    'components:dirs'(dirs) {
      // Add ./components dir to the list
      dirs.push({
        path: path.resolve(__dirname, './components'),
      })
    },

    // COMPOSABLES
    'autoImports:dirs'(dirs) {
      dirs.push(path.resolve(__dirname, './composables'))
    },
  },
  async setup(moduleOptions, nuxt) {
    // -- Add your module logic here --
  },
})
