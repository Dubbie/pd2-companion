import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/crafting',
      name: 'crafting',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CraftingView.vue'),
    },
    {
      path: '/runewords',
      name: 'runewords',
      component: () => import('../views/RunewordView.vue'),
    },
  ],
})

export default router
