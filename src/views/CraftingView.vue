<script setup>
import CraftingWizard from '@/components/CraftingWizard.vue'
import PageTitle from '@/components/PageTitle.vue'
import TheContainer from '@/components/TheContainer.vue'
</script>

<template>
  <main>
    <TheContainer>
      <PageTitle>Crafting</PageTitle>
      <p class="text-sm">Use the wizard below to find the recipe for your item.</p>

      <div class="mt-8">
        <CraftingWizard />
      </div>
    </TheContainer>
  </main>
</template>
