<script lang="ts">
import { defineComponent } from "vue"
import Particles from "./components/Particles"
import Footer from "./components/Footer.vue"

export default defineComponent({
  components: { Particles, Footer },
  setup() {},
})
</script>

<template>
  <Particles />
  <main class="relative max-w-xl px-4 mx-auto my-8 sm:my-12 lg:my-16">
    <router-view />
  </main>
  <Footer />
</template>
