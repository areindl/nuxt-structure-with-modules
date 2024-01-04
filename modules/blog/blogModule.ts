import { defineNuxtModule } from '@nuxt/kit'
import { resolve, join } from 'pathe'
import type { Nuxt } from '@nuxt/schema'

export default defineNuxtModule({
  meta: {
    // Usually the npm package name of your module - in this case a local modal
    name: 'blog-module',
    // The key in `nuxt.config` that holds the
    configKey: 'blog-module',
    // Compatibility constraints
    compatibility: {
      // Semver version of supported nuxt versions
      nuxt: '^3.9.0',
    },
  },
  setup(options: any, nuxt: Nuxt) {
    // Auto register components
    nuxt.hook('components:dirs', (dirs) => {
      dirs.push({
        path: join(__dirname, 'components'),
      })
    })

    // Auto register composables
    nuxt.hook('imports:dirs', (dirs) => {
      dirs.push(resolve(__dirname, './composables'))
    })

    // Auto register pages
    nuxt.hook('pages:extend', (pages) => {
      pages.push({
        name: 'blog',
        path: '/blog',
        file: resolve(__dirname, './pages/blog.vue'),
      })
    })
  },
})
