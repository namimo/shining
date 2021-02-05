<script lang="ts">
import { defineComponent } from "vue"
import Modal from "./Modal.vue"

export default defineComponent({
  components: { Modal },
  setup: () => {},
})
</script>
<template>
  <footer class="relative max-w-xl px-4 py-8 mx-auto">
    <div class="flex flex-col items-center text-sm text-white md:text-base">
      <p class="inline-flex items-center">
        <fa-solid-copyright class="mr-2" /> Copyright {{ new Date().getFullYear() }} - All Rights
        Reserved.
      </p>
      <div class="inline-flex mt-2 space-x-4 underline">
        <Modal>
          <template #button="{ toggle }">
            <button class="focus:outline-none" @click="toggle">Disclamer</button>
          </template>
          <template #body>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit esse debitis iste rem est
            assumenda enim facilis quos. Ut, voluptas.
          </template>
        </Modal>
        <Modal>
          <template #button="{ toggle }">
            <button class="focus:outline-none" @click="toggle">About</button>
          </template>
          <template #body>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit esse debitis iste rem est
            assumenda enim facilis quos. Ut, voluptas.
          </template>
        </Modal>
        <Modal>
          <template #button="{ toggle }">
            <button class="focus:outline-none" @click="toggle">Terms & Policy</button>
          </template>
          <template #body>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit esse debitis iste rem est
            assumenda enim facilis quos. Ut, voluptas.
          </template>
        </Modal>
      </div>
    </div>
  </footer>
</template>
