// https://nuxt.com/docs/api/configuration/nuxt-config
const isDev = process.env.NODE_ENV === 'development'
const blogModulePath = isDev ? '~/modules/blog/src/module.ts' : '~/modules/blog/dist/module.mjs'

export default defineNuxtConfig({
  modules: [blogModulePath],

  app: {
    head: {
      meta: [
        {
          name: 'viewport',
          content:
            'viewport-fit=cover, width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
        },
      ],
    },
  },
})
