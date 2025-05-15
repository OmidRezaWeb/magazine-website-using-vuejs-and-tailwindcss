import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../page/HomeView.vue'
import UserLayout from '@/layout/UserLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: UserLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: HomeView,
        },
        {
          path: '/about',
          name: 'about',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../page/AboutView.vue'),
        },
      ],
    },
  ],
})

export default router
