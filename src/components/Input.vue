<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  props: {
    label: { type: String },
    modelValue: { type: String, required: true },
  },
  inheritAttrs: false,
})
</script>

<template>
  <label class="block text-left">
    <span class="block text-sm font-medium" v-if="$props.label">{{ $props.label }}</span>
    <div class="mt-1">
      <input
        class="block w-full px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        v-bind="$attrs"
        :value="$props.modelValue"
        @input="(e) => $emit('update:modelValue', e.target.value)"
      />
    </div>
  </label>
</template>
