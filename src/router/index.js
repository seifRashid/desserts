import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DessertsView from '@/views/DessertsView.vue'
import GSapLandingPage from '@/views/GSapLandingPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/desserts',
      name: 'desserts',
      component: DessertsView
    },
    {
      path: '/gsap-landing-page',
      name: 'gsap-landing-page',
      component: GSapLandingPage
    },
    {
      path: '/solar-system',
      name: 'solar-system',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/SolarSystem.vue')
    }
  ]
})

export default router
