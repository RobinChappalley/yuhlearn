<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { OnboardingProgress } from '@/widgets/onboarding-progress'

const router = useRouter()

const saved = JSON.parse(localStorage.getItem('yuhlearn_budget') ?? '{}')
const income = ref(saved.income ?? '')

function goBack() {
  router.push({ name: 'budget-intro' })
}

function goNext() {
  const data = JSON.parse(localStorage.getItem('yuhlearn_budget') ?? '{}')
  data.income = Number(income.value) || 0
  localStorage.setItem('yuhlearn_budget', JSON.stringify(data))
  router.push({ name: 'budget-essentials' })
}

function close() {
  router.push({ name: 'home' })
}
</script>

<template>
  <div class="budget-income">
    <header class="budget-income__header">
      <div class="budget-income__logo">yuh</div>
      <div class="budget-income__actions">
        <button class="budget-income__icon" aria-label="Fullscreen">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>
          </svg>
        </button>
        <button class="budget-income__icon" aria-label="Download">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
        </button>
        <button class="budget-income__icon" aria-label="Close" @click="close">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
      </div>
    </header>

    <OnboardingProgress :phase="2" :step="1" :total="3" :minutes="4" />

    <div class="budget-income__content">
      <h1 class="budget-income__title">What is your total monthly income?</h1>
      <p class="budget-income__desc">
        Add up everything: your salary, side hustles, and even pocket money from granny
      </p>

      <div class="budget-income__input-wrap">
        <input
          v-model="income"
          type="number"
          inputmode="numeric"
          placeholder="Enter amount"
          class="budget-income__input"
        />
        <span class="budget-income__currency">CHF</span>
      </div>

      <div class="budget-income__footer">
        <button class="budget-income__btn budget-income__btn--back" @click="goBack">
          <span class="budget-income__arrow">&#x2039;</span> Back
        </button>
        <button
          class="budget-income__btn budget-income__btn--next"
          :disabled="!income"
          @click="goNext"
        >
          Next
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.budget-income {
  min-height: 100dvh;
  background: linear-gradient(180deg, #e8d9e8 0%, #fff 50%);
  display: flex;
  flex-direction: column;
}

.budget-income__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  padding-top: calc(env(safe-area-inset-top) + 16px);
}

.budget-income__logo {
  font-size: 24px;
  font-weight: 900;
  color: #1a1a2e;
  letter-spacing: -1px;
}

.budget-income__actions { display: flex; align-items: center; gap: 16px; }

.budget-income__icon {
  background: none; border: none; cursor: pointer; color: #1a1a2e;
  padding: 4px; display: flex; align-items: center; justify-content: center;
}
.budget-income__icon:active { opacity: 0.6; }

.budget-income__content {
  flex: 1;
  padding: 20px 24px 32px;
  display: flex;
  flex-direction: column;
}

.budget-income__title {
  font-size: 24px;
  font-weight: 800;
  color: #1a1a2e;
  margin: 0 0 16px;
  line-height: 1.3;
  text-align: center;
  letter-spacing: -0.3px;
}

.budget-income__desc {
  font-size: 14px;
  line-height: 1.5;
  color: #666;
  margin: 0 0 32px;
  text-align: center;
}

.budget-income__input-wrap {
  position: relative;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  padding: 16px 20px;
  display: flex;
  align-items: center;
  margin-bottom: auto;
}

.budget-income__input {
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-size: 16px;
  font-weight: 500;
  color: #1a1a2e;
}

.budget-income__input::placeholder { color: #999; }

.budget-income__currency {
  font-size: 14px;
  font-weight: 700;
  color: #1a1a2e;
  margin-left: 8px;
}

.budget-income__footer {
  display: flex;
  justify-content: center;
  gap: 12px;
  padding-top: 24px;
}

.budget-income__btn {
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
  min-width: 140px;
}

.budget-income__btn:disabled { opacity: 0.5; cursor: not-allowed; }
.budget-income__btn:not(:disabled):active { transform: scale(0.97); }

.budget-income__arrow { font-size: 20px; line-height: 1; margin-top: -2px; }
</style>
