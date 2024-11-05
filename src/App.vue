<script setup>
import { RouterView } from 'vue-router'
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'
</script>

<template>
  <div class="min-h-svh bg-zinc-900 text-zinc-400 flex flex-col">
    <TheHeader />

    <div class="py-6">
      <RouterView />
    </div>

    <TheFooter class="flex-1" />
  </div>
</template>
