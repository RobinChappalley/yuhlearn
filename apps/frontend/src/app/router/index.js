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
    path: '/assessment-result',
    name: 'assessment-result',
    component: () => import('@/pages/assessment-result/ui/AssessmentResultPage.vue'),
  },
  {
    path: '/personality-intro',
    name: 'personality-intro',
    component: () => import('@/pages/personality-intro/ui/PersonalityIntroPage.vue'),
  },
  {
    path: '/personality-quiz',
    name: 'personality-quiz',
    component: () => import('@/pages/personality-quiz/ui/PersonalityQuizPage.vue'),
  },
  {
    path: '/personality-result',
    name: 'personality-result',
    component: () => import('@/pages/personality-result/ui/PersonalityResultPage.vue'),
  },
  {
    path: '/budget-intro',
    name: 'budget-intro',
    component: () => import('@/pages/budget-intro/ui/BudgetIntroPage.vue'),
  },
  {
    path: '/budget-income',
    name: 'budget-income',
    component: () => import('@/pages/budget-income/ui/BudgetIncomePage.vue'),
  },
  {
    path: '/budget-essentials',
    name: 'budget-essentials',
    component: () => import('@/pages/budget-essentials/ui/BudgetEssentialsPage.vue'),
  },
  {
    path: '/budget-treats',
    name: 'budget-treats',
    component: () => import('@/pages/budget-treats/ui/BudgetTreatsPage.vue'),
  },
  {
    path: '/budget-result',
    name: 'budget-result',
    component: () => import('@/pages/budget-result/ui/BudgetResultPage.vue'),
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
  {
    path: '/goal-create',
    name: 'goal-create',
    component: () => import('@/pages/goal-create/ui/GoalCreatePage.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
