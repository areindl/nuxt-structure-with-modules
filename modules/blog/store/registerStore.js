// This must be relative to .nuxt since it it registert at RUNTIME
import * as blogStore from '../modules/blog/store/blog.js'

export default async ({ store }) => {
  return await store.registerModule('blog', blogStore, {
    namespaced: blogStore.namespaced,
  })
}
