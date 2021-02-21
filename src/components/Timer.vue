<script lang="ts">
import { defineComponent, ref, onBeforeUnmount, computed } from "vue"

const second = 1000
const minute = second * 60
const hour = minute * 60
const day = hour * 24

export default defineComponent({
  props: {
    endDate: {
      type: String,
      required: true,
    },
  },
  setup: (props) => {
    const now = ref(new Date().getTime())
    const endDate = ref(new Date(props.endDate).getTime())
    const difference = computed(() => endDate.value - now.value)

    let timer: number
    timer = setInterval(() => {
      now.value = new Date().getTime()
    }, 1000)

    onBeforeUnmount(() => {
      clearInterval(timer)
    })

    return { difference, second, minute, hour, day }
  },
})
</script>

<template>
  <div class="absolute inset-0 w-full h-full">
    <div class="flex items-center justify-center w-full h-full px-4 sm:px-6 lg:px-8">
      <div
        class="w-full p-6 rounded-lg shadow-xl bg-gradient-to-b to-coolGray-900 from-lightBlue-500"
      >
        <div
          class="px-5 py-3 mx-auto -mt-10 text-lg font-semibold tracking-wide text-center text-red-500 uppercase bg-white rounded-lg shadow-md sm:text-2xl"
        >
          Expires On
        </div>
        <div
          class="mt-3 text-2xl font-medium tracking-tighter md:py-3 md:text-5xl"
          v-if="difference > 0"
        >
          {{ Math.floor(difference / day)
          }}<span class="ml-1 text-lg md:text-3xl text-lightBlue-400">D</span> :
          {{ Math.floor((difference % day) / hour)
          }}<span class="ml-1 text-lg md:text-3xl text-lightBlue-400">H</span> :
          {{ Math.floor((difference % hour) / minute)
          }}<span class="ml-1 text-lg md:text-3xl text-lightBlue-400">M</span> :
          {{ Math.floor((difference % minute) / second)
          }}<span class="ml-1 text-lg md:text-3xl text-lightBlue-400">S</span>
        </div>
        <div class="mt-3 text-2xl font-medium tracking-wide md:py-3 md:text-5xl" v-else>
          EXPIRED
        </div>
      </div>
    </div>
  </div>
</template>
