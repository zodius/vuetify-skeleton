import { createRouter, createWebHistory } from 'vue-router'

import Base from '@/layouts/Base.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Base',
      component: Base,
      redirect: '/home',
      children: [
        {
          path: '/home',
          name: 'Home',
          component: () => import('@/components/HelloWorld.vue')
        }
      ]
    },
  ]
})

export default router
