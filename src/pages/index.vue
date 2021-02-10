<script lang="ts">
import { defineComponent } from "vue"
import { useRouter } from "vue-router"
import { useHead } from "@vueuse/head"
import Timer from "../components/Timer.vue"
import Button from "../components/Button.vue"

export default defineComponent({
  components: { Timer, Button },
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
    <div class="relative my-12">
      <picture>
        <source srcset="../assets/iphone.webp" type="image/webp" />
        <img src="../assets/iphone.png" alt="iphone-stack" class="scale-up-center" />
      </picture>
      <Timer />
    </div>
    <Button @click="router.push(`/giveaway`)">
      <span class="text-white"> PARTICIPATE NOW </span>
    </Button>
  </div>
</template>
