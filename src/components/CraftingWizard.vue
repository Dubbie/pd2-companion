<script setup>
import { reactive } from 'vue'
import ItemTypeSelector from './ItemTypeSelector.vue'
import CraftingRecipes from './CraftingRecipes.vue'

const data = reactive({
  itemType: null,
})
</script>

<template>
  <div>
    <div>
      <p class="mb-6 text-lg font-semibold text-white">What type of item are you crafting?</p>

      <ItemTypeSelector v-model="data.itemType" />
    </div>

    <transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 translate-y-10"
      enter-to-class="opacity-100 translate-y-0"
    >
      <div v-if="data.itemType" class="mt-6">
        <CraftingRecipes :item-type="data.itemType" />
      </div>
    </transition>
  </div>
</template>
