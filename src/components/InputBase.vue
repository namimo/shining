<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  props: {
    label: { type: String },
    modelValue: { type: String },
  },
  inheritAttrs: false,
})
</script>

<template>
  <label class="block text-left">
    <span class="block font-medium">{{ $props.label }}</span>
    <div class="mt-2">
      <input
        type="text"
        class="block w-full px-3 py-2 leading-normal text-black bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        v-bind="$attrs"
        :value="$props.modelValue"
        @input="(e) => $emit('update:modelValue', e.target.value)"
      />
    </div>
  </label>
</template>
