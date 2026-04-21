<script setup>
import { useRouter } from 'vue-router'
import { OnboardingProgress } from '@/widgets/onboarding-progress'

const router = useRouter()

function start() {
  router.push({ name: 'budget-income' })
}

function close() {
  router.push({ name: 'home' })
}
</script>

<template>
  <div class="budget-intro">
    <header class="budget-intro__header">
      <div class="budget-intro__logo">yuh</div>
      <div class="budget-intro__actions">
        <button class="budget-intro__icon" aria-label="Fullscreen">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>
          </svg>
        </button>
        <button class="budget-intro__icon" aria-label="Download">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
        </button>
        <button class="budget-intro__icon" aria-label="Close" @click="close">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
      </div>
    </header>

    <OnboardingProgress :phase="2" :step="1" :total="3" :minutes="4" />

    <div class="budget-intro__content">
      <div class="budget-intro__illustration">
        <img src="/illustrations/Spending breakdown.png" alt="Spending breakdown" />
      </div>

      <h1 class="budget-intro__title">
        The <span class="budget-intro__highlight">Budget</span> Check
      </h1>

      <p class="budget-intro__desc">
        Ready to get into the nitty-gritty? It's time to roll up your sleeves and build that financial six-pack by seeing where your money actually goes.
      </p>

      <button class="budget-intro__btn" @click="start">Let's go</button>
    </div>
  </div>
</template>

<style scoped>
.budget-intro {
  min-height: 100dvh;
  background: linear-gradient(180deg, #d9ecf5 0%, #e8d9e8 60%, #fff 100%);
  display: flex;
  flex-direction: column;
}

.budget-intro__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  padding-top: calc(env(safe-area-inset-top) + 16px);
}

.budget-intro__logo {
  font-size: 24px;
  font-weight: 900;
  color: #1a1a2e;
  letter-spacing: -1px;
}

.budget-intro__actions { display: flex; align-items: center; gap: 16px; }

.budget-intro__icon {
  background: none; border: none; cursor: pointer; color: #1a1a2e;
  padding: 4px; display: flex; align-items: center; justify-content: center;
  transition: opacity 0.15s ease;
}
.budget-intro__icon:active { opacity: 0.6; }

.budget-intro__content {
  flex: 1;
  padding: 20px 24px 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.budget-intro__illustration {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
}

.budget-intro__illustration img {
  max-width: 220px;
  max-height: 35dvh;
  object-fit: contain;
}

.budget-intro__title {
  font-size: 28px;
  font-weight: 800;
  color: #1a1a2e;
  margin: 0 0 16px;
  line-height: 1.2;
  letter-spacing: -0.5px;
}

.budget-intro__highlight { color: #f2653a; }

.budget-intro__desc {
  font-size: 15px;
  line-height: 1.6;
  color: #555;
  margin: 0 0 32px;
  max-width: 320px;
}

.budget-intro__btn {
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
}
.budget-intro__btn:active { transform: scale(0.97); opacity: 0.92; }
</style>
