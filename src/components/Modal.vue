<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref, watch } from "vue"

export default defineComponent({
  setup: () => {
    const isOpen = ref(false)

    const toggle = () => {
      isOpen.value = !isOpen.value
    }

    const escEvent = (e: KeyboardEvent) => {
      if (isOpen.value && e.key === "Escape") {
        toggle()
      }
    }

    watch(isOpen, () => {
      const body = document.getElementsByTagName("body")[0]
      if (isOpen && body) {
        body.style.overflow = isOpen.value ? "hidden" : "auto"
      }
    })

    onMounted(() => {
      window.addEventListener("keyup", escEvent)
    })
    onUnmounted(() => {
      window.removeEventListener("keydown", escEvent)
    })

    return { isOpen, toggle }
  },
})
</script>

<template>
  <slot name="button" :toggle="toggle" />
  <teleport to="body">
    <transition leave-active-class="duration-200 ease-in">
      <div class="fixed inset-0 z-20 overflow-y-auto" v-show="isOpen">
        <div
          class="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0"
        >
          <transition
            enter-active-class="duration-300 ease-out"
            enter-from-class="opacity-0"
            enter-to-class="opacity-100"
            leave-active-class="duration-200 ease-in"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
          >
            <div class="fixed inset-0 transition-opacity" v-show="isOpen">
              <div class="absolute inset-0 bg-gray-900 opacity-50" @click="toggle"></div>
            </div>
          </transition>
          <!-- This element is to trick the browser into centering the modal contents. -->
          <span class="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
          <transition
            enter-active-class="duration-300 ease-out"
            enter-from-class="translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"
            enter-to-class="translate-y-0 opacity-100 sm:scale-100"
            leave-active-class="duration-200 ease-in"
            leave-from-class="translate-y-0 opacity-100 sm:scale-100"
            leave-to-class="translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"
          >
            <div
              class="relative z-30 inline-block p-4 text-left align-bottom transition-all transform bg-white rounded shadow-xl sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full sm:p-6"
              v-if="isOpen"
            >
              <div class="absolute top-0 right-0 m-3">
                <button class="p-2 text-black rounded-full focus:outline-none" @click="toggle">
                  <span class="sr-only">Close</span>
                  <fa-regular-times-circle class="w-6 h-6 sm:w-8 sm:h-8" />
                </button>
              </div>
              <slot name="body" />
            </div>
          </transition>
        </div>
      </div>
    </transition>
  </teleport>
</template>
