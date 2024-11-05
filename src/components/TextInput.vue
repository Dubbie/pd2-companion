<script setup>
defineProps({
  modelValue: {
    type: String,
    default: '',
  },
})

defineEmits(['update:modelValue'])
</script>

<template>
  <input
    :model-value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    class="appearance-none bg-transparent px-3 py-1.5 ring-1 ring-inset rounded-lg ring-white/15 focus:outline-none focus:ring-2 focus:ring-indigo-500"
  />
</template>
