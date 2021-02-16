<script lang="ts">
import { defineComponent, onMounted } from "vue"
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
    onMounted(async () => {
      try {
        window.renderCaptcha = () => {
          window.grecaptcha.render("g-recaptcha", {
            sitekey: props.sitekey,
            callback: (token: string) => {
              emit("callback", token)
            },
            "error-callback": () => {
              emit("errorCallback")
            },
          })
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

    return {}
  },
})
</script>

<template>
  <div id="g-recaptcha" />
</template>
