<script lang="ts">
import { defineComponent, onMounted } from "vue"

export default defineComponent({
  props: {
    sitekey: {
      type: String,
      required: true,
    },
  },
  emits: ["callback"],
  setup(props, { emit }) {
    const renderRecaptcha = () => {
      grecaptcha.render("g-recaptcha", {
        sitekey: props.sitekey,
        callback: (token: string) => {
          emit("callback", token)
        },
      })
    }

    onMounted(() => {
      if (window.grecaptcha === null) {
        new Promise((resolve) => {
          window.recaptchaReady = function () {
            resolve()
          }

          const doc = window.document
          const scriptId = "recaptcha-script"
          const scriptTag = doc.createElement("script")
          scriptTag.id = scriptId
          scriptTag.setAttribute(
            "src",
            "https://www.google.com/recaptcha/api.js?onload=recaptchaReady&render=explicit",
          )
          doc.head.appendChild(scriptTag)
        }).then(() => {
          renderRecaptcha()
        })
      } else {
        renderRecaptcha()
      }
    })
  },
})
</script>

<template>
  <div id="g-recaptcha" />
</template>
