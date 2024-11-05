<script setup>
import { ITEM_TYPES } from '@/constants'
import { RadioGroup, RadioGroupOption } from '@headlessui/vue'

defineProps({
  modelValue: String,
})

const itemTypes = [
  { value: ITEM_TYPES.NECK, label: 'Amulet', image: 'neck.webp' },
  { value: ITEM_TYPES.RING, label: 'Ring', image: 'ring.png' },
  { value: ITEM_TYPES.BELT, label: 'Belt', image: 'belt.png' },
  { value: ITEM_TYPES.GLOVES, label: 'Gloves', image: 'glov.png' },
  { value: ITEM_TYPES.BOOTS, label: 'Boots', image: 'boot.webp' },
  { value: ITEM_TYPES.HELMET, label: 'Helmet', image: 'helm.webp' },
  { value: ITEM_TYPES.BODY, label: 'Body Armour', image: 'body.png' },
  { value: ITEM_TYPES.SHIELD, label: 'Shield', image: 'shld.webp' },
  { value: ITEM_TYPES.WEAP, label: 'Weapon', image: 'weap.webp' },
]
</script>

<template>
  <div>
    <RadioGroup
      :model-value="modelValue"
      @update:model-value="$emit('update:modelValue', $event)"
      as="div"
      class="flex gap-4 w-full justify-stretch"
    >
      <RadioGroupOption
        v-for="itemType in itemTypes"
        :key="itemType"
        :value="itemType.value"
        v-slot="{ checked }"
        as="div"
        class="w-full"
      >
        <div
          class="h-full cursor-pointer select-none flex flex-col items-center justify-center rounded-xl"
          :class="{
            'ring-1 ring-zinc-600 bg-white/5 text-white': checked,
            'hover:bg-white/5 hover:text-white': !checked,
          }"
        >
          <img
            :src="`/pd2-companion/images/item-types/${itemType.image}`"
            alt=""
            class="block py-3"
          />
          <p class="text-sm font-semibold py-2">{{ itemType.label }}</p>
        </div>
      </RadioGroupOption>
    </RadioGroup>
  </div>
</template>
