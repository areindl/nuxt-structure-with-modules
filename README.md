# 🙋🏽‍♂️ Domain-Driven Design & Nuxt - Using Nuxt Modules to structure large Nuxt Apps

#### ⚡️ Talk at NUXT NATION by Anton Reindl

In my talk in 2021, I introduced Domain Driven Design and talked about structuring apps according to domain modules. I and demonstrated how to use Nuxt 2 modules to create independent submodules including Vuex modules and routes.

The original Nuxt 2 example can be found in a legacy [here](https://github.com/areindl/nuxt-structure-with-modules/tree/nuxt-v2).

### 🚀 Nuxt 3

I reimplemented the example of "Anton's Biketours" in Nuxt 3.  This example implements a fresh Nuxt 3 with an landing page ( `pages/index.vue` ) and one domain-module module, namely the blog-module imported from `.modules/blog` . The module has its own components, composable and pages folder to better separate the domain from the rest of the app.

I also recommend to look at the [documentation](https://v3.nuxtjs.org).

## Scope

```bash
npm install
```

## Development

Start the development server on [http://localhost:3000](http://localhost:3000)

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/docs/deployment).

### 📚 Resources

* [x] [Slides of this Talk](https://github.com/areindl/nuxt-structure-with-modules/blob/c7e3ea69f3e5aa66ccefdb0089322e78ae243b51/static/slides.pdf)
* [x] Blog post [Domain-Driven Design in Nuxt Apps](https://vueschool.io/articles/vuejs-tutorials/domain-driven-design-in-nuxt-apps/) by Filip Rakowski
* [x] Recommended DDD-Books:
  + [x] Domain-Driven Design: Tackling Complexity in the Heart of Software - by Eric Evans
  + [x] Implementing Domain-Driven Design by Vaughn Vernon
  + [x] Domain-Driven Design Distilled by Vaughn Vernon
