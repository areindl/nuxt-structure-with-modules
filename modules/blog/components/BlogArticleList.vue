<template>
  <div class="blog-article-list flex space-x-20">
    <div v-for="article in articles" :key="article.slug" class="w-1/3">
      <img
        class="rounded-lg w-full h-auto"
        :src="`https://picsum.photos/id/${article.photo}/500`"
      />
      <h3 class="font-bold mb-3 mt-3 text-2xl">{{ article.title }}</h3>
      <p class="text-gray-700">{{ article.teaser }}</p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {}
  },

  computed: {
    ...mapState('blog', ['articles']),
  },
}
</script>

<style lang="scss" scoped></style>
