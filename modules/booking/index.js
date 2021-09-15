const path = require('path')

// moduleOptions can pass config params from nuxt.config.js
module.exports = function registerModule(moduleOptions) {
  // Automatically register all components of the module
  this.nuxt.hook('components:dirs', (dirs) => {
    // Add ./components dir to the list
    dirs.push({
      path: path.resolve(__dirname, 'components'),
    })
  })

  // Add module routes to global router list
  this.extendRoutes((routes) => {
    routes.unshift({
      name: 'booking',
      path: '/booking',
      component: path.resolve(__dirname, 'pages/booking.vue'),
    })
  })
}
