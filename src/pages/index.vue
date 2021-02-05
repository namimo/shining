<script lang="ts">
import { defineComponent } from "vue"
import { useRouter } from "vue-router"
import { useHead } from "@vueuse/head"

export default defineComponent({
  setup: () => {
    useHead({
      title: "Iphone 12 PRO giveaway",
    })
    const router = useRouter()

    return { router }
  },
})
</script>

<template>
  <div class="flex flex-col items-center">
    <h1
      class="text-3xl font-bold leading-relaxed tracking-wider text-center text-transparent sm:text-5xl lg:text-6xl"
    >
      <span class="text-white"> iPhone 12 Pro </span>
      <br />
      <span class="inline-flex text-5xl text-lightBlue-500 lg:text-7xl">
        GIVE
        <span class="text-white">AWAY</span>
      </span>
    </h1>
    <picture>
      <source srcset="../assets/iphone.webp" type="image/webp" />
      <source srcset="../assets/iphone.png" type="image/png" />
      <img src="../assets/iphone.png" alt="iphone-stack" class="my-12 scale-up-center" />
    </picture>
    <button
      class="px-8 py-2.5 text-lg tracking-wide rounded-full bg-gradient-to-br from-lightBlue-500 to-gray-700 font-semi-bold lg:text-3xl focus:outline-none"
      @click="router.push(`/giveaway`)"
    >
      <span class="text-white"> PARTICIPATE NOW </span>
    </button>
  </div>
</template>
