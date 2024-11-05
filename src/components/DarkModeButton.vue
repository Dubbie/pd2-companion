<script setup>
import { useDarkMode } from '@/composables/useDarkMode'
import { IconMoonFilled } from '@tabler/icons-vue'

const { isDark, toggleDarkMode } = useDarkMode()
</script>

<template>
  <button @click="toggleDarkMode" class="flex items-center justify-center">
    <IconMoonFilled
      class="size-6"
      :class="{
        'text-zinc-600 hover:text-zinc-500': isDark,
        'text-zinc-300 hover:text-zinc-400': !isDark,
      }"
    />
  </button>
</template>
