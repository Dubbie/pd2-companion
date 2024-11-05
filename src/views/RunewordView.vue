<script setup>
import PageTitle from '@/components/PageTitle.vue'
import RunewordsList from '@/components/RunewordsList.vue'
import TheContainer from '@/components/TheContainer.vue'
</script>

<template>
  <main>
    <TheContainer>
      <PageTitle>Runewords</PageTitle>

      <p class="text-sm">You can find all the available runewords here.</p>

      <RunewordsList class="mt-8" />
    </TheContainer>
  </main>
</template>
