<template>
  <div>
    <h3>Index Page</h3>
    <nuxt-link :to="{ name: 'blog' }">Open Blog Module</nuxt-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {}
  },
})
</script>

<style scoped></style>
