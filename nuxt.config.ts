// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  /* Modules are automatically imported from the modules directory
    See: https://nuxt.com/docs/guide/directory-structure/modules
  */

  app: {
    head: {
      // Loading Tailwind CSS from CDN for the styling of the demo
      script: [{ src: 'https://cdn.tailwindcss.com' }],
      meta: [
        {
          name: 'viewport',
          content:
            'viewport-fit=cover, width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
        },
      ],
    },
  },

  devtools: {
    enabled: true,
  },
})
