<template>
  <div>
    <h3 class="font-bold text-xl mb-10">
      Nuxt 3 Modules for Domain Driven Design
    </h3>
    <nuxt-link class="hover:underline" :to="{ name: 'blog' }"
      >Open Blog Module</nuxt-link
    >
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
