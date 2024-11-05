<script setup>
import { ref, onMounted, watch, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import NavLink from './NavLink.vue'

const links = ref([
  { name: 'Home', to: '/' },
  { name: 'Crafting', to: '/crafting' },
  { name: 'Runewords', to: '/runewords' },
])

const padding = 10
const underlineLeft = ref(0)
const underlineWidth = ref(0)
const navContainerRef = ref(null) // Reference to the nav container
const route = useRoute() // Get the current route

const updateUnderline = (el) => {
  if (el) {
    const rect = el.getBoundingClientRect()
    const navRect = navContainerRef.value.getBoundingClientRect() // Get nav container's bounding rect
    underlineLeft.value = rect.left - navRect.left // Adjust based on container
    underlineWidth.value = rect.width

    underlineLeft.value += padding
    underlineWidth.value -= padding * 2
  }
}

const setActiveLink = () => {
  nextTick(() => {
    const activeLink = document.querySelector(`nav a[href="${route.path}"]`) // Find link matching current route
    if (activeLink) {
      updateUnderline(activeLink)
    }
  })
}

// Run on mounted
onMounted(() => {
  setActiveLink() // Update underline on initial load
})

// Watch route changes and update underline
watch(route, () => {
  setActiveLink()
})
</script>

<template>
  <div class="bg-zinc-950 border-b border-b-white/10">
    <div class="w-full max-w-6xl mx-auto px-4 sm:px-8">
      <header class="flex items-center justify-start gap-x-6">
        <RouterLink to="/">
          <p class="text-white font-black">PD2C</p>
        </RouterLink>

        <nav class="flex gap-x-1 py-3 relative" ref="navContainerRef">
          <NavLink v-for="link in links" :key="link.name" :to="link.to" class="relative">{{
            link.name
          }}</NavLink>

          <!-- Underline -->
          <div
            class="absolute bg-white h-[2px] bottom-0 transition-all duration-300"
            :style="{ left: `${underlineLeft}px`, width: `${underlineWidth}px` }"
          ></div>
        </nav>
      </header>
    </div>
  </div>
</template>
