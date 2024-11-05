<script setup>
import PageTitle from '@/components/PageTitle.vue'
import TheCard from '@/components/TheCard.vue'
import TheContainer from '@/components/TheContainer.vue'
</script>

<template>
  <main>
    <TheContainer>
      <PageTitle>PD2 Companion</PageTitle>

      <p class="text-sm">
        You can find some useful information throughout your journey in Project Diablo 2.
      </p>

      <div class="mt-8">
        <p class="mb-2">Useful links:</p>
        <div class="grid grid-cols-2 gap-4">
          <RouterLink to="/crafting">
            <TheCard class="hover:bg-white/5">
              <p class="text-white font-semibold">Crafting helper</p>
              <p class="text-xs">Forgot which items you need for a specific craft?</p>
            </TheCard>
          </RouterLink>

          <RouterLink to="/runewords">
            <TheCard class="hover:bg-white/5">
              <p class="text-white font-semibold">Runewords</p>
              <p class="text-xs">Browse the list of available runewords.</p>
            </TheCard>
          </RouterLink>
        </div>
      </div>
    </TheContainer>
  </main>
</template>
