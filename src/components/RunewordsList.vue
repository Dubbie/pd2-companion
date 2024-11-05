<script setup>
import { RUNEWORDS } from '@/data/runewords'
import { IconSortAscending } from '@tabler/icons-vue'
import { computed, ref } from 'vue'
import TextInput from './TextInput.vue'
import RunewordLine from './RunewordLine.vue'

const runewords = ref(RUNEWORDS)
const search = ref('')

// Sorting
const sortKey = ref('level')
const sortOrder = ref('asc')

// Computed property for sorted and filtered runewords
const sortedRunewords = computed(() => {
  const filterAndSort = (runeword) => {
    const lowerCaseTitle = runeword.title.toLowerCase()
    const lowerCaseSearch = search.value.toLowerCase()
    return lowerCaseTitle.includes(lowerCaseSearch)
  }

  const sorted = runewords.value.filter(filterAndSort).sort((a, b) => {
    const orderMultiplier = sortOrder.value === 'asc' ? 1 : -1
    if (sortKey.value === 'level') {
      return orderMultiplier * (a.level - b.level)
    }
    const valA = a[sortKey.value].toString().toLowerCase()
    const valB = b[sortKey.value].toString().toLowerCase()
    return orderMultiplier * (valA < valB ? -1 : valA > valB ? 1 : 0)
  })

  return sorted
})

// Change sorting order
const changeSort = (key) => {
  if (sortKey.value === key) {
    sortOrder.value =
      sortOrder.value === 'asc' ? 'desc' : sortKey.value === 'desc' ? 'level' : 'asc'
  } else {
    sortKey.value = key
    sortOrder.value = 'asc'
  }
}
</script>

<template>
  <div>
    <!-- Search -->
    <div>
      <TextInput type="text" v-model="search" placeholder="Search..." class="text-sm w-full" />
    </div>

    <!-- RW list -->
    <div class="-mx-2">
      <!-- header for table -->
      <div
        class="grid grid-cols-12 text-sm font-semibold text-zinc-400 py-3 border-b border-white/10"
      >
        <div
          class="col-span-2 flex items-center justify-start gap-x-1 cursor-pointer px-2"
          @click="changeSort('title')"
        >
          <p>Name</p>
          <IconSortAscending
            v-if="sortKey === 'title'"
            :class="['size-4', sortOrder === 'desc' ? 'rotate-180' : '']"
            stroke-width="3"
          />
        </div>
        <p class="col-span-3 text-center">Runes</p>
        <p class="col-span-6 text-center">Item Types</p>
        <div
          class="col-span-1 flex items-center justify-end gap-x-1 cursor-pointer"
          @click="changeSort('level')"
        >
          <p class="text-center">Level</p>
          <IconSortAscending
            v-if="sortKey === 'level'"
            :class="['size-4', sortOrder === 'desc' ? 'rotate-180' : '']"
            stroke-width="3"
          />
        </div>
      </div>

      <!-- rw table -->
      <div class="divide-y divide-white/5">
        <RunewordLine
          v-for="runeword in sortedRunewords"
          :key="runeword.title"
          :runeword="runeword"
        />
      </div>
    </div>
  </div>
</template>
