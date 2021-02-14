<script lang="ts">
import { defineComponent } from "vue"
import Particles from "./components/Particles.vue"
import Footer from "./components/Footer.vue"

export default defineComponent({
  components: { Particles, Footer },
  setup: () => {},
})
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <Particles />
    <main class="relative flex-grow max-w-xl px-4 py-8 mx-auto sm:py-12 lg:py-16">
      <router-view />
    </main>
    <Footer class="flex-shrink-0" />
  </div>
</template>

<style lang="postcss">
.button-primary {
  @apply inline-flex;
  @apply items-center;
  @apply justify-center;
  @apply px-12;
  @apply py-3;
  @apply text-lg;
  @apply tracking-wide;
  @apply rounded-full;
  @apply bg-gradient-to-br;
  @apply from-lightBlue-500;
  @apply to-gray-700;
  @apply font-semibold;
  @apply lg:text-3xl;
  @apply focus:outline-none;
}
</style>
