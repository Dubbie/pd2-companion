<script setup>
import { RECIPES } from '@/constants'
import { IconPlus } from '@tabler/icons-vue'
import { computed } from 'vue'

const props = defineProps({
  itemType: {
    type: String,
    required: true,
  },
})

const itemTypeRecipes = computed(() => RECIPES[props.itemType])

const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

const formatGem = (gem) => {
  return 'P.' + capitalize(gem)
}

const getGemClass = (gem) => {
  return {
    ruby: 'text-red-400',
    amethyst: 'text-purple-400',
    topaz: 'text-yellow-300',
    sapphire: 'text-blue-400',
    emerald: 'text-green-400',
    diamond: 'text-white',
    skull: 'text-zinc-400',
  }[gem]
}
</script>

<template>
  <div class="grid grid-cols-3 gap-8">
    <div
      v-for="(recipe, index) in itemTypeRecipes"
      :key="recipe.type"
      class="text-center"
      :class="{
        'col-start-2': index === itemTypeRecipes.length - 1,
      }"
    >
      <p class="text-lg font-semibold text-white mb-1">{{ capitalize(recipe.type) }}</p>

      <div class="flex items-center justify-center text-sm gap-x-1">
        <p class="text-yellow-400 font-semibold">{{ capitalize(recipe.rune) }}</p>
        <IconPlus class="size-3 text-zinc-500" stroke-width="4" />
        <p class="font-semibold" :class="getGemClass(recipe.gem)">{{ formatGem(recipe.gem) }}</p>
      </div>

      <div class="h-px w-1/4 mx-auto bg-zinc-700 my-2"></div>

      <div class="text-sm text-center">
        <p v-for="mod in recipe.mods" :key="mod">{{ mod }}</p>
      </div>
    </div>
  </div>
</template>
