<script setup>
defineProps({
  show: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div
    v-show="show"
    class="absolute top-1/2 -translate-y-1/2 left-full bg-black text-sm text-center whitespace-nowrap p-4 z-10"
  >
    <slot />
  </div>
</template>
