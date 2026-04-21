import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'landing',
    beforeEnter: () => {
      const seen = localStorage.getItem('yuhlearn_onboarding_seen')
      return seen ? { name: 'home' } : { name: 'onboarding' }
    },
  },
  {
    path: '/onboarding',
    name: 'onboarding',
    component: () => import('@/pages/onboarding/ui/OnboardingPage.vue'),
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/pages/home/ui/HomePage.vue'),
  },
  {
    path: '/first/:id',
    name: 'first-detail',
    component: () => import('@/pages/first-detail/ui/FirstDetailPage.vue'),
  },
  {
    path: '/first/:id/video/:tileId?',
    name: 'video-player',
    component: () => import('@/pages/player/ui/PlayerPage.vue'),
  },
  {
    path: '/assessment',
    name: 'assessment',
    component: () => import('@/pages/assessment/ui/AssessmentPage.vue'),
  },
  {
    path: '/first/:id/quiz',
    name: 'quiz',
    component: () => import('@/pages/quiz/ui/QuizPage.vue'),
  },
  {
    path: '/first/:id/reward',
    name: 'reward',
    component: () => import('@/pages/reward/ui/RewardPage.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
