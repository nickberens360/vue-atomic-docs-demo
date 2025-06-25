import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    ...(import.meta.env.VITE_ENABLE_ATOMIC_DOCS !== 'true' ? [] : [
      {
        path: '/atomic-docs/:pathMatch(.*)*',
        name: 'componentDocsHandler',
        component: { render: () => null } // Empty component
      }
    ])
  ],
})

export default router