<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  to: {
    type: [String, Object],
    required: true,
  },
})
</script>

<template>
  <RouterLink :to="to" v-slot="{ isActive }">
    <div
      class="px-2.5 py-1.5 text-sm font-semibold rounded-lg hover:bg-white/10"
      :class="{
        'text-white': isActive,
        'text-white/40 hover:text-white': !isActive,
      }"
    >
      <slot />
    </div>
  </RouterLink>
</template>
