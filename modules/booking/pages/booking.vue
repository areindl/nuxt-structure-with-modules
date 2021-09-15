<template>
  <div>
    <h2 class="font-bold text-4xl mb-5">Booking</h2>

    <div class="text-gray-800 font-bold text-2xl mb-10">Your Cart</div>

    <div v-for="(item, index) in cart" :key="index" class="text-xl w-56">
      <img
        src="https://picsum.photos/id/1023/400"
        class="rounded w-full h-auto"
      /><span>{{ item.title }}</span>
    </div>
    <nuxt-link
      to="booking/checkout"
      class="
        mt-4
        inline-block
        bg-green-500
        hover:bg-green-700
        text-white
        font-bold
        py-2
        px-4
        rounded
      "
      >Proceed to Booking</nuxt-link
    >
  </div>
</template>

<script>
import { mapState } from 'vuex'
import * as bookingStore from '../store/booking'

export default {
  name: 'Booking',

  async asyncData({ store }) {
    return await store.registerModule('booking', bookingStore, {
      namespaced: bookingStore.namespaced,
    })
  },

  computed: {
    ...mapState('booking', ['cart']),
  },

  beforeDestroy() {
    return this.$store.unregisterModule('booking')
  },
}
</script>
