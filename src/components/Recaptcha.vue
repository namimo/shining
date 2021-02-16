<script lang="ts">
import { defineComponent, onMounted, ref } from "vue"
import { useScriptTag } from "@vueuse/core"

declare global {
  interface Window {
    renderCaptcha: () => void
  }
}

export default defineComponent({
  props: {
    sitekey: {
      type: String,
      required: true,
    },
  },
  emits: ["callback", "errorCallback"],
  setup(props, { emit }) {
    const element = ref<HTMLElement | null>(null)

    onMounted(async () => {
      try {
        window.renderCaptcha = () => {
          if (!element.value) {
            emit("errorCallback")
            return
          }
          window.grecaptcha.render(element.value, {
            sitekey: props.sitekey,
            callback: (token: string) => {
              emit("callback", token)
            },
            "error-callback": () => {
              emit("errorCallback")
            },
          })
        }

        if (window.grecaptcha) {
          window.renderCaptcha()
          return
        }

        const {
          load,
        } = useScriptTag(
          "https://www.google.com/recaptcha/api.js?onload=renderCaptcha&render=explicit",
          (_el) => {},
          { async: true, defer: true, manual: true },
        )
        await load()
      } catch (error) {
        emit("errorCallback")
      }
    })

    return { element }
  },
})
</script>

<template>
  <div ref="element" />
</template>
