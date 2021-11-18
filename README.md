# 🙋🏽‍♂️ Domain-Driven Design & Nuxt - Using Nuxt Modules to structure large Nuxt Apps

#### ⚡️ Talk at NUXT NATION 2021 by Anton Reind

In this talk I will introduce Domain Driven Design and talk about structuring apps according to domain modules, and demonstrate how to use Nuxt modules to create independent submodules including Vuex modules and routes.

## 👨🏼‍💻 Demo

1. This Nuxt.js-app is a barebone create-nuxt-app installation
2. As a showcase example, the app adds two modules: a blog module and a shop module
3. The modules are implemented as a [Nuxt Module](https://nuxtjs.org/docs/2.x/directory-structure/modules#write-your-own-module) with their individual routing, store, etc.

### 📚 Resources

- [x] [Slides of this Talk](static/slides.pdf)
- [x] Blog post [Domain-Driven Design in Nuxt Apps](https://vueschool.io/articles/vuejs-tutorials/domain-driven-design-in-nuxt-apps/) by Filip Rakowski
- [x] Recommended DDD-Books:
  - [x] Domain-Driven Design: Tackling Complexity in the Heart of Software - by Eric Evans
  - [x] Implementing Domain-Driven Design by Vaughn Vernon
  - [x] Domain-Driven Design Distilled by Vaughn Vernon

## 👨🏽‍💼 Demo Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work in Nuxt.js, check out the [documentation](https://nuxtjs.org).
