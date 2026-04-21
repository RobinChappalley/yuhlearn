<script setup>
import { useRouter } from 'vue-router'
import { OnboardingProgress } from '@/widgets/onboarding-progress'

const router = useRouter()

function finish() {
  router.push({ name: 'setup-complete' })
}

function close() {
  router.push({ name: 'home' })
}
</script>

<template>
  <div class="setup-checkpoint">
    <header class="setup-checkpoint__header">
      <div class="setup-checkpoint__logo">yuh</div>
      <div class="setup-checkpoint__actions">
        <button class="setup-checkpoint__icon" aria-label="Fullscreen">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>
          </svg>
        </button>
        <button class="setup-checkpoint__icon" aria-label="Download">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
        </button>
        <button class="setup-checkpoint__icon" aria-label="Close" @click="close">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
      </div>
    </header>

    <OnboardingProgress
      :phase="2"
      :step="4"
      :total="5"
      :minutes="15"
    />

    <div class="setup-checkpoint__content">
      <div class="setup-checkpoint__check">✓</div>
      <p class="setup-checkpoint__label">Test your money knowledge</p>
      <h1 class="setup-checkpoint__title">See you later in Level 1</h1>

      <div class="setup-checkpoint__tiles">
        <div class="setup-checkpoint__tile setup-checkpoint__tile--locked">
          <span class="setup-checkpoint__tile-lock">🔒</span>
          <span class="setup-checkpoint__tile-label">Understanding Budgeting</span>
        </div>
        <div class="setup-checkpoint__tile setup-checkpoint__tile--locked">
          <span class="setup-checkpoint__tile-lock">🔒</span>
          <span class="setup-checkpoint__tile-label">Saving for Goals</span>
        </div>
        <div class="setup-checkpoint__tile setup-checkpoint__tile--locked">
          <span class="setup-checkpoint__tile-lock">🔒</span>
          <span class="setup-checkpoint__tile-label">Debt Management</span>
        </div>
      </div>

      <button class="setup-checkpoint__btn" @click="finish">
        Continue
      </button>
    </div>
  </div>
</template>

<style scoped>
.setup-checkpoint {
  min-height: 100dvh;
  background: linear-gradient(180deg, #f0eef7 0%, #fff 40%);
  display: flex;
  flex-direction: column;
}

.setup-checkpoint__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  padding-top: calc(env(safe-area-inset-top) + 16px);
}

.setup-checkpoint__logo {
  font-size: 24px;
  font-weight: 900;
  color: #1a1a2e;
  letter-spacing: -1px;
}

.setup-checkpoint__actions {
  display: flex;
  align-items: center;
  gap: 16px;
}

.setup-checkpoint__icon {
  background: none;
  border: none;
  cursor: pointer;
  color: #1a1a2e;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.15s ease;
}

.setup-checkpoint__icon:active {
  opacity: 0.6;
}

.setup-checkpoint__content {
  flex: 1;
  padding: 40px 24px 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.setup-checkpoint__check {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: #34c759;
  color: #fff;
  font-size: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.setup-checkpoint__label {
  font-size: 14px;
  font-weight: 600;
  color: #666;
  margin: 0 0 8px;
}

.setup-checkpoint__title {
  font-size: 26px;
  font-weight: 800;
  color: #1a1a2e;
  margin: 0 0 32px;
  line-height: 1.2;
  letter-spacing: -0.5px;
}

.setup-checkpoint__tiles {
  width: 100%;
  max-width: 320px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 32px;
}

.setup-checkpoint__tile {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);
}

.setup-checkpoint__tile--locked {
  opacity: 0.7;
}

.setup-checkpoint__tile-lock {
  font-size: 18px;
}

.setup-checkpoint__tile-label {
  font-size: 15px;
  font-weight: 500;
  color: #333;
}

.setup-checkpoint__btn {
  display: block;
  width: 100%;
  max-width: 320px;
  background: #f2653a;
  color: #fff;
  border: none;
  padding: 16px;
  border-radius: 999px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.12s ease, opacity 0.12s ease;
}

.setup-checkpoint__btn:active {
  transform: scale(0.97);
  opacity: 0.92;
}
</style>
