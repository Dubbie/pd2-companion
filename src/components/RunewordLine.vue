<script setup>
import { RUNEWORD_DESCRIPTIONS } from '@/data/runewordDescriptions'
import { ref } from 'vue'
import ItemTooltip from './ItemTooltip.vue'

defineProps({
  runeword: {
    type: Object,
    required: true,
  },
})

const descriptions = RUNEWORD_DESCRIPTIONS

// Show tooltip
const showingTooltip = ref(false)

// Format tooltip
const getFormattedTooltip = (description) => {
  let text = description

  // remove newlines at beginning and end
  text = text.trim()

  // format the mods (numbers) in the item stats ( regexr.com/6ki7f )
  text = text.replace(
    /\+?[0-9]+(-[0-9]+)?%?/g,
    '<span class="font-semibold text-blue-300">$&</span>',
  )

  // replace newlines by html equivalents
  text = text.replace(/\n/g, '<br/>')

  return text
}
</script>

<template>
  <div class="grid grid-cols-12 items-center hover:bg-white/5">
    <!-- Name of the rw -->
    <div class="col-span-2">
      <div class="inline-block relative">
        <p
          class="inline-block text-sm font-semibold text-unique px-2 py-1 cursor-pointer"
          @mouseenter="showingTooltip = true"
          @mouseleave="showingTooltip = false"
        >
          {{ runeword.title }}
        </p>

        <ItemTooltip :show="showingTooltip">
          <div>
            <!-- Name -->
            <p class="font-semibold text-unique">{{ runeword.title }}</p>

            <!-- Item types -->
            <p class="text-zinc-400 text-sm mb-2">{{ runeword.ttypes.join(', ') }}</p>

            <!-- Mods -->
            <div
              class="text-blue-400"
              v-html="getFormattedTooltip(descriptions[runeword.title])"
            ></div>
          </div>
        </ItemTooltip>
      </div>
    </div>

    <!-- Runes here -->
    <div class="col-span-3">
      <div class="flex justify-center font-medium text-sm">
        <template v-for="(rune, index) in runeword.runes" :key="index">
          <span v-if="index > 0" class="text-zinc-600 mx-2">•</span>
          <span class="text-yellow-400">{{ rune }}</span>
        </template>
      </div>
    </div>

    <!-- Item types -->
    <div class="col-span-6">
      <div class="flex justify-center font-medium text-zinc-500 text-sm">
        <template v-for="(itemType, index) in runeword.ttypes" :key="itemType">
          <span v-if="index > 0" class="mx-1">/</span>
          <span>{{ itemType }}</span>
        </template>
      </div>
    </div>

    <!-- Level -->
    <div class="col-span-1">
      <p class="text-sm font-semibold text-right px-2">
        {{ runeword.level }}
      </p>
    </div>
  </div>
</template>
