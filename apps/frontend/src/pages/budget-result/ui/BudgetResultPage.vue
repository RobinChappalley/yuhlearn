<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { OnboardingProgress } from '@/widgets/onboarding-progress'

const router = useRouter()

const data = JSON.parse(localStorage.getItem('yuhlearn_budget') ?? '{}')

const income = Number(data.income) || 0
const essentialsTotal = computed(() =>
  Object.values(data.essentials ?? {}).reduce((sum, v) => sum + (Number(v) || 0), 0)
)
const treatsTotal = computed(() =>
  Object.values(data.treats ?? {}).reduce((sum, v) => sum + (Number(v) || 0), 0)
)
const surplus = computed(() => income - essentialsTotal.value - treatsTotal.value)

const result = computed(() => {
  if (surplus.value > 0) {
    return {
      title: 'The Surplus',
      summary: 'You have a high',
      summaryBold: 'savings capacity',
      summaryEnd: ', you make much more than you spend',
      body: `You've got a great lifestyle and the income to support it, but you're currently living`,
      bodyBold1: 'without a safety net',
      bodyMid: '. Since you have a',
      bodyBold2: 'monthly surplus',
      bodyEnd: `, you're in the perfect position to build your financial strength. You just need to `,
      bodyBold3: 'choose your first priority',
      bodyEnd2: '.',
    }
  }
  return {
    title: 'The Balance',
    summary: 'Your budget is',
    summaryBold: 'balanced',
    summaryEnd: ', income and expenses are close.',
    body: `You're managing money well but have little room for saving.`,
    bodyBold1: 'trim your expenses',
    bodyMid: ' or boost your ',
    bodyBold2: 'income',
    bodyEnd: ' to start building your safety net.',
    bodyBold3: '',
    bodyEnd2: '',
  }
})

function finish() {
  localStorage.setItem('yuhlearn_budget_done', 'true')
  router.push({ name: 'goal-create', query: { mode: 'onboarding' } })
}

function close() {
  router.push({ name: 'home' })
}
</script>

<template>
  <div class="budget-result">
    <header class="budget-result__header">
      <div class="budget-result__logo">yuh</div>
      <div class="budget-result__actions">
        <button class="budget-result__icon" aria-label="Fullscreen">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>
          </svg>
        </button>
        <button class="budget-result__icon" aria-label="Download">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
        </button>
        <button class="budget-result__icon" aria-label="Close" @click="close">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
      </div>
    </header>

    <OnboardingProgress :phase="2" :step="3" :total="3" :minutes="4" />

    <div class="budget-result__content">
      <div class="budget-result__illustration">
        <img src="/illustrations/YuhPerson_DP_3d.svg" alt="Character climbing stairs" />
      </div>

      <p class="budget-result__label">Your Budget Check</p>
      <h1 class="budget-result__title">{{ result.title }}</h1>

      <p class="budget-result__summary">
        {{ result.summary }} <strong>{{ result.summaryBold }}</strong>{{ result.summaryEnd }}
      </p>

      <p class="budget-result__body">
        {{ result.body }} <strong>{{ result.bodyBold1 }}</strong>{{ result.bodyMid }}
        <strong>{{ result.bodyBold2 }}</strong>{{ result.bodyEnd }}<strong v-if="result.bodyBold3">{{ result.bodyBold3 }}</strong>{{ result.bodyEnd2 }}
      </p>

      <button class="budget-result__btn" @click="finish">Let's choose</button>
    </div>
  </div>
</template>

<style scoped>
.budget-result {
  min-height: 100dvh;
  background: linear-gradient(180deg, #e8d9e8 0%, #fff 60%);
  display: flex;
  flex-direction: column;
}

.budget-result__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  padding-top: calc(env(safe-area-inset-top) + 16px);
}

.budget-result__logo {
  font-size: 24px;
  font-weight: 900;
  color: #1a1a2e;
  letter-spacing: -1px;
}

.budget-result__actions { display: flex; align-items: center; gap: 16px; }

.budget-result__icon {
  background: none; border: none; cursor: pointer; color: #1a1a2e;
  padding: 4px; display: flex; align-items: center; justify-content: center;
}
.budget-result__icon:active { opacity: 0.6; }

.budget-result__content {
  flex: 1;
  padding: 20px 24px 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.budget-result__illustration {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  min-height: 200px;
}

.budget-result__illustration img {
  max-width: 220px;
  max-height: 30dvh;
  object-fit: contain;
}

.budget-result__label {
  font-size: 14px;
  font-weight: 600;
  color: #1a1a2e;
  margin: 0 0 8px;
}

.budget-result__title {
  font-size: 30px;
  font-weight: 800;
  color: #f2653a;
  margin: 0 0 20px;
  line-height: 1.2;
  letter-spacing: -0.5px;
}

.budget-result__summary {
  font-size: 15px;
  line-height: 1.5;
  color: #333;
  margin: 0 0 16px;
  max-width: 320px;
}

.budget-result__body {
  font-size: 14px;
  line-height: 1.6;
  color: #555;
  margin: 0 0 32px;
  max-width: 340px;
}

.budget-result__summary strong,
.budget-result__body strong {
  font-weight: 700;
  color: #1a1a2e;
}

.budget-result__btn {
  display: block;
  width: 100%;
  max-width: 260px;
  background: #f2653a;
  color: #fff;
  border: none;
  padding: 16px 32px;
  border-radius: 999px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.12s ease, opacity 0.12s ease;
  margin-top: auto;
}
.budget-result__btn:active { transform: scale(0.97); opacity: 0.92; }
</style>
