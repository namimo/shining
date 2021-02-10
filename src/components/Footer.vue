<script lang="ts">
import { defineComponent } from "vue"
import Modal from "./Modal.vue"

export default defineComponent({
  components: { Modal },
  setup: () => {
    const footerInfo = {
      "privacy&Polices": [
        {
          title: `What information do we collect?`,
          content: `The website collects your personal information such as your name, email address and
              country detail only if you choose to opt in for the giveaway. You can choose not
              to include some of the information requested, but some of it is required (usually name
              and email address as a minimum so that we can contact the winner.) You have the right
              to not provide the information requested or can simply not enter our giveaway if you
              do not wish to provide us with your personal information.`,
        },
        {
          title: `How is the information used?`,
          content: `The personal information we collect is used to contact you in the event that you are
              selected to win a prize from the giveaway, in addition to sending you special offers
              and other marketing material. You have the option to opt-out of receiving special
              offers and marketing material by unchecking the appropriate box when registering for
              the giveaway. If you do not opt-out, you may receive emails about sales or special
              offers no more than once per week. You can also opt-out of these emails within the
              footer of each email.`,
        },
        {
          title: `Is this information sold or shared?`,
          content: `We do not sell or otherwise share the information you provide to us via giveaway. This
              information is only used internally to compile anonymous statistics about our user
              base, to contact the winner and to create a contact list for sending special offers
              and marketing material.`,
        },
        {
          title: `How is the information secured?`,
          content: `The personal information we collect is secured behind SSL encryption and firewall
              technology where it is inaccessible to unauthorized parties.`,
        },
      ],
    }

    return { footerInfo }
  },
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
            <button class="focus:outline-none" @click="toggle">Privacy & Policy</button>
          </template>
          <template #body>
            <h2 class="text-3xl text-gray-800 uppercase sm:text-4xl">Privacy & Policy</h2>
            <hr class="my-4" />
            <div class="flex flex-col space-y-6">
              <div class="space-y-2" v-for="p in footerInfo['privacy&Polices']" :key="p?.title">
                <h3 class="text-2xl font-semibold text-gray-700">{{ p?.title }}</h3>
                <p class="leading-relaxed text-gray-600">
                  {{ p?.content }}
                </p>
              </div>
            </div>

            <p class="mt-10 text-sm text-gray-400">
              If you have any questions or concerns, please contact us via the email address
              provided below.
            </p>
          </template>
        </Modal>
        <Modal>
          <template #button="{ toggle }">
            <button class="focus:outline-none" @click="toggle">Prizes</button>
          </template>
          <template #body>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit esse debitis iste rem est
            assumenda enim facilis quos. Ut, voluptas.
          </template>
        </Modal>
        <Modal>
          <template #button="{ toggle }">
            <button class="focus:outline-none" @click="toggle">Terms & Condition</button>
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
