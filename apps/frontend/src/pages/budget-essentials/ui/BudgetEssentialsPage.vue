<script setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { OnboardingProgress } from '@/widgets/onboarding-progress'
import { BudgetCategoryCard } from '@/widgets/budget-category-card'

const router = useRouter()

const iconTransport = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="3" width="16" height="14" rx="2"/><path d="M4 10h16"/><circle cx="8" cy="19" r="1.5"/><circle cx="16" cy="19" r="1.5"/><path d="M7 6h10"/></svg>`
const iconGroceries = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 7h12l-1.5 12a2 2 0 0 1-2 1.8H9.5a2 2 0 0 1-2-1.8L6 7z"/><path d="M9 7V5a3 3 0 0 1 6 0v2"/><circle cx="10" cy="12" r="0.8" fill="currentColor"/></svg>`
const iconBills = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 12l-8 8-8-8V4h8l8 8z"/><circle cx="8.5" cy="8.5" r="1.2"/></svg>`
const iconHealth = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 4h6l1 3h-8z"/><rect x="7" y="7" width="10" height="13" rx="2"/><path d="M12 11v5M9.5 13.5h5" stroke-width="1.5"/></svg>`

const saved = JSON.parse(localStorage.getItem('yuhlearn_budget') ?? '{}')
const essentials = reactive(saved.essentials ?? {
  transportation: '',
  groceries: '',
  bills: '',
  healthcare: '',
})

const categories = ref([
  { key: 'transportation', icon: iconTransport, title: 'Transportation', subtitle: 'Train tickets, car fuel etc' },
  { key: 'groceries', icon: iconGroceries, title: 'Groceries', subtitle: 'Monthly food shopping' },
  { key: 'bills', icon: iconBills, title: 'Bills', subtitle: 'monthly bills, utilities' },
  { key: 'healthcare', icon: iconHealth, title: 'Healthcare', subtitle: 'Fitness, insurance, beauty' },
])

function removeCategory(key) {
  categories.value = categories.value.filter((c) => c.key !== key)
  delete essentials[key]
}

function goBack() {
  router.push({ name: 'budget-income' })
}

function goNext() {
  const data = JSON.parse(localStorage.getItem('yuhlearn_budget') ?? '{}')
  data.essentials = { ...essentials }
  localStorage.setItem('yuhlearn_budget', JSON.stringify(data))
  router.push({ name: 'budget-treats' })
}

function close() {
  router.push({ name: 'home' })
}
</script>

<template>
  <div class="budget-essentials">
    <header class="budget-essentials__header">
      <div class="budget-essentials__logo">yuh</div>
      <div class="budget-essentials__actions">
        <button class="budget-essentials__icon" aria-label="Fullscreen">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>
          </svg>
        </button>
        <button class="budget-essentials__icon" aria-label="Download">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
        </button>
        <button class="budget-essentials__icon" aria-label="Close" @click="close">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
      </div>
    </header>

    <OnboardingProgress :phase="2" :step="2" :total="3" :minutes="4" />

    <div class="budget-essentials__content">
      <h1 class="budget-essentials__title">What are your essential monthly expenses?</h1>
      <p class="budget-essentials__desc">
        Total up the "must-haves" like rent, insurance, bills, and groceries, transportation.
      </p>

      <div class="budget-essentials__list">
        <BudgetCategoryCard
          v-for="cat in categories"
          :key="cat.key"
          :icon="cat.icon"
          :title="cat.title"
          :subtitle="cat.subtitle"
          v-model="essentials[cat.key]"
          @remove="removeCategory(cat.key)"
        />
      </div>

      <div class="budget-essentials__footer">
        <button class="budget-essentials__btn budget-essentials__btn--back" @click="goBack">
          <span class="budget-essentials__arrow">&#x2039;</span> Back
        </button>
        <button class="budget-essentials__btn budget-essentials__btn--next" @click="goNext">
          Next
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.budget-essentials {
  min-height: 100dvh;
  background: linear-gradient(180deg, #e8d9e8 0%, #fff 50%);
  display: flex;
  flex-direction: column;
}

.budget-essentials__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  padding-top: calc(env(safe-area-inset-top) + 16px);
}

.budget-essentials__logo {
  font-size: 24px;
  font-weight: 900;
  color: #1a1a2e;
  letter-spacing: -1px;
}

.budget-essentials__actions { display: flex; align-items: center; gap: 16px; }

.budget-essentials__icon {
  background: none; border: none; cursor: pointer; color: #1a1a2e;
  padding: 4px; display: flex; align-items: center; justify-content: center;
}
.budget-essentials__icon:active { opacity: 0.6; }

.budget-essentials__content {
  flex: 1;
  padding: 20px 24px 32px;
  display: flex;
  flex-direction: column;
}

.budget-essentials__title {
  font-size: 22px;
  font-weight: 800;
  color: #1a1a2e;
  margin: 0 0 12px;
  line-height: 1.3;
  text-align: center;
  letter-spacing: -0.3px;
}

.budget-essentials__desc {
  font-size: 14px;
  line-height: 1.5;
  color: #666;
  margin: 0 0 24px;
  text-align: center;
}

.budget-essentials__list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 32px;
}

.budget-essentials__footer {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: auto;
}

.budget-essentials__btn {
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

.budget-essentials__btn:active { transform: scale(0.97); }

.budget-essentials__arrow { font-size: 20px; line-height: 1; margin-top: -2px; }
</style>
