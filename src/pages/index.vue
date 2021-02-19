<script setup lang="ts">
import { ref } from "vue"
import { useHead } from "@vueuse/head"
import Timer from "../components/Timer.vue"

useHead({
  title: "Iphone 12 PRO giveaway",
})

let endDate = "Feb 21, 2021"

const isImageLoaded = ref(false)
</script>

<template>
  <div class="flex flex-col items-center text-center text-white">
    <h1 class="text-3xl font-bold leading-relaxed tracking-wider sm:text-5xl lg:text-6xl">
      iPhone 12 Pro
      <span class="block text-5xl text-lightBlue-500 lg:text-7xl"> GIVEAWAY </span>
    </h1>
    <div class="relative my-12">
      <picture>
        <source srcset="../assets/iphone.webp" type="image/webp" />
        <img
          src="../assets/iphone.png"
          alt="iphone-stack"
          class="scale-up-center"
          @load="isImageLoaded = true"
        />
      </picture>
      <Timer v-if="isImageLoaded" :endDate="endDate" />
    </div>
    <router-link class="button-primary" to="/giveaway">PARTICIPATE NOW</router-link>
  </div>
</template>
