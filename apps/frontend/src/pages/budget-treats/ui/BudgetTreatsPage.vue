<script setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { OnboardingProgress } from '@/widgets/onboarding-progress'
import { BudgetCategoryCard } from '@/widgets/budget-category-card'

const router = useRouter()

const iconShopping = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8h12l-1 12a2 2 0 0 1-2 1.8H9a2 2 0 0 1-2-1.8L6 8z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/></svg>`
const iconRestaurants = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3v8a2 2 0 0 0 2 2v8"/><path d="M16 3v18"/><path d="M6 3v6a2 2 0 0 0 2 2"/><path d="M10 3v6"/></svg>`
const iconEntertainment = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="6" width="18" height="12" rx="3"/><polygon points="10,9 16,12 10,15" fill="currentColor" stroke="none"/></svg>`

const saved = JSON.parse(localStorage.getItem('yuhlearn_budget') ?? '{}')
const treats = reactive(saved.treats ?? {
  shopping: '',
  restaurants: '',
  entertainment: '',
})

const categories = ref([
  { key: 'shopping', icon: iconShopping, title: 'Shopping', subtitle: 'Clothes and accessories' },
  { key: 'restaurants', icon: iconRestaurants, title: 'Restaurants & bars', subtitle: 'Dinner, nights out' },
  { key: 'entertainment', icon: iconEntertainment, title: 'Entertainement', subtitle: 'Games, streaming, others' },
])

function removeCategory(key) {
  categories.value = categories.value.filter((c) => c.key !== key)
  delete treats[key]
}

function goBack() {
  router.push({ name: 'budget-essentials' })
}

function goNext() {
  const data = JSON.parse(localStorage.getItem('yuhlearn_budget') ?? '{}')
  data.treats = { ...treats }
  localStorage.setItem('yuhlearn_budget', JSON.stringify(data))
  router.push({ name: 'budget-result' })
}

function close() {
  router.push({ name: 'home' })
}
</script>

<template>
  <div class="budget-treats">
    <header class="budget-treats__header">
      <div class="budget-treats__logo">yuh</div>
      <div class="budget-treats__actions">
        <button class="budget-treats__icon" aria-label="Fullscreen">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>
          </svg>
        </button>
        <button class="budget-treats__icon" aria-label="Download">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
        </button>
        <button class="budget-treats__icon" aria-label="Close" @click="close">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
      </div>
    </header>

    <OnboardingProgress :phase="2" :step="3" :total="3" :minutes="4" />

    <div class="budget-treats__content">
      <h1 class="budget-treats__title">How much do you spend on "treats"?</h1>
      <p class="budget-treats__desc">
        Total up the "nice-to-haves" like restaurants and bars, streaming services, and shopping.
      </p>

      <div class="budget-treats__list">
        <BudgetCategoryCard
          v-for="cat in categories"
          :key="cat.key"
          :icon="cat.icon"
          :title="cat.title"
          :subtitle="cat.subtitle"
          v-model="treats[cat.key]"
          @remove="removeCategory(cat.key)"
        />
      </div>

      <div class="budget-treats__footer">
        <button class="budget-treats__btn" @click="goBack">
          <span class="budget-treats__arrow">&#x2039;</span> Back
        </button>
        <button class="budget-treats__btn" @click="goNext">
          Next
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.budget-treats {
  min-height: 100dvh;
  background: linear-gradient(180deg, #e8d9e8 0%, #fff 50%);
  display: flex;
  flex-direction: column;
}

.budget-treats__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  padding-top: calc(env(safe-area-inset-top) + 16px);
}

.budget-treats__logo {
  font-size: 24px;
  font-weight: 900;
  color: #1a1a2e;
  letter-spacing: -1px;
}

.budget-treats__actions { display: flex; align-items: center; gap: 16px; }

.budget-treats__icon {
  background: none; border: none; cursor: pointer; color: #1a1a2e;
  padding: 4px; display: flex; align-items: center; justify-content: center;
}
.budget-treats__icon:active { opacity: 0.6; }

.budget-treats__content {
  flex: 1;
  padding: 20px 24px 32px;
  display: flex;
  flex-direction: column;
}

.budget-treats__title {
  font-size: 22px;
  font-weight: 800;
  color: #1a1a2e;
  margin: 0 0 12px;
  line-height: 1.3;
  text-align: center;
  letter-spacing: -0.3px;
}

.budget-treats__desc {
  font-size: 14px;
  line-height: 1.5;
  color: #666;
  margin: 0 0 24px;
  text-align: center;
}

.budget-treats__list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 32px;
}

.budget-treats__footer {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: auto;
}

.budget-treats__btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: #f2653a;
  color: #fff;
  border: none;
  padding: 14px 32px;
  border-radius: 999px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.12s ease, opacity 0.12s ease;
  min-width: 130px;
}

.budget-treats__btn:active { transform: scale(0.97); }

.budget-treats__arrow { font-size: 20px; line-height: 1; margin-top: -2px; }
</style>
