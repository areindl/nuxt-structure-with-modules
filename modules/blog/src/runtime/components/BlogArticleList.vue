<template>
  <div class="blog-article-list flex space-x-20">
    <div
      v-for="article in articles"
      v-if="articles.length"
      :key="article.id"
      class="w-1/3"
    >
      <img
        class="rounded-lg w-full h-auto"
        :src="`https://picsum.photos/id/${article.id}/500`"
      />
      <h3 class="font-bold mb-3 mt-3 text-2xl">{{ article.title }}</h3>
      <p class="text-gray-700">{{ article.body }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
// useArticles is auto-imported by the module
// import { useArticles } from '../composables/useArticles'
const { articles } = await useArticles()
</script>
