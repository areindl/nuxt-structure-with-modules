<template>
  <div class="container mx-auto">
    <h3 class="text-center font-bold gray-700 uppercase mt-48 text-4xl">
      Welcome to Anton's Bike Tours 🚵🏼‍♂️
    </h3>
    <nav class="mx-auto mt-10 text-center space-x-5 text-xl">
      <nuxt-link to="/blog" class="hover:text-green-600">Blog</nuxt-link>
      <nuxt-link to="/booking" class="hover:text-green-600">Booking</nuxt-link>
    </nav>

    <main class="mt-10">
      <Nuxt />
    </main>
  </div>
</template>
