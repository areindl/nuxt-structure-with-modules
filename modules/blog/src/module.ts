import { defineNuxtModule, createResolver } from '@nuxt/kit'

// Module options TypeScript interface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    // Usually the npm package name of your module - in this case a local modal
    name: 'blog-module',
    // The key in `nuxt.config` that holds the
    configKey: 'blog-module',
    // Compatibility constraints
    compatibility: {
      // Semver version of supported nuxt versions
      nuxt: '^3.3.0',
    },
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  setup (options, nuxt) {
    const { resolve } = createResolver(import.meta.url)

    // Auto register components
    nuxt.hook('components:dirs', (dirs) => {
      dirs.push(resolve('./runtime/components'))
    })

    // Auto register composables
    nuxt.hook('imports:dirs', (dirs) => {
      dirs.push(resolve('./runtime/composables'))
    })

    // Auto register pages
    nuxt.hook('pages:extend', (pages) => {
      pages.push({
        name: 'blog',
        path: '/blog',
        file: resolve('./runtime/pages/blog.vue'),
      })
    })
  },
})