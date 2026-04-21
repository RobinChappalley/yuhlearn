<script setup>
import { useRouter } from 'vue-router'
import { OnboardingProgress } from '@/widgets/onboarding-progress'

const router = useRouter()

function start() {
  router.push({ name: 'setup-checkpoint' })
}

function close() {
  router.push({ name: 'home' })
}
</script>

<template>
  <div class="setup-dashboard">
    <!-- Header -->
    <header class="setup-dashboard__header">
      <div class="setup-dashboard__logo">yuh</div>
      <div class="setup-dashboard__actions">
        <button class="setup-dashboard__icon" aria-label="Fullscreen">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>
          </svg>
        </button>
        <button class="setup-dashboard__icon" aria-label="Download">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
        </button>
        <button class="setup-dashboard__icon" aria-label="Close" @click="close">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
      </div>
    </header>

    <OnboardingProgress
      :phase="2"
      :step="3"
      :total="5"
      :minutes="15"
    />

    <!-- Content -->
    <div class="setup-dashboard__content">
      <h1 class="setup-dashboard__title">You're set up to learn!</h1>

      <!-- Completed items -->
      <div class="setup-dashboard__items">
        <div class="setup-dashboard__item">
          <div class="setup-dashboard__item-icon">
            <img src="/illustrations/People.png" alt="Firsts" class="setup-dashboard__item-img" />
          </div>
          <span class="setup-dashboard__item-label">The 5 Firsts</span>
          <span class="setup-dashboard__item-check">✓</span>
        </div>
        <div class="setup-dashboard__item">
          <div class="setup-dashboard__item-icon setup-dashboard__item-icon--small">📝</div>
          <span class="setup-dashboard__item-label">Big Three Assessment</span>
          <span class="setup-dashboard__item-check">✓</span>
        </div>
        <div class="setup-dashboard__item">
          <div class="setup-dashboard__item-icon setup-dashboard__item-icon--small">🧠</div>
          <span class="setup-dashboard__item-label">Personality Quiz</span>
          <span class="setup-dashboard__item-check">✓</span>
        </div>
      </div>

      <!-- Level 1 -->
      <div class="setup-dashboard__level">
        <h2 class="setup-dashboard__level-title">Level 1</h2>
        <div class="setup-dashboard__tiles">
          <div class="setup-dashboard__tile setup-dashboard__tile--locked">
            <span class="setup-dashboard__tile-lock">🔒</span>
            <span class="setup-dashboard__tile-label">Understanding Budgeting</span>
          </div>
          <div class="setup-dashboard__tile setup-dashboard__tile--locked">
            <span class="setup-dashboard__tile-lock">🔒</span>
            <span class="setup-dashboard__tile-label">Saving for Goals</span>
          </div>
          <div class="setup-dashboard__tile setup-dashboard__tile--locked">
            <span class="setup-dashboard__tile-lock">🔒</span>
            <span class="setup-dashboard__tile-label">Debt Management</span>
          </div>
          <div class="setup-dashboard__tile setup-dashboard__tile--locked">
            <span class="setup-dashboard__tile-lock">🔒</span>
            <span class="setup-dashboard__tile-label">Investing Basics</span>
          </div>
          <div class="setup-dashboard__tile setup-dashboard__tile--locked">
            <span class="setup-dashboard__tile-lock">🔒</span>
            <span class="setup-dashboard__tile-label">Financial Planning</span>
          </div>
        </div>
      </div>

      <button class="setup-dashboard__btn" @click="start">
        Continue
      </button>
    </div>
  </div>
</template>

<style scoped>
.setup-dashboard {
  min-height: 100dvh;
  background: linear-gradient(180deg, #f0eef7 0%, #fff 40%);
  display: flex;
  flex-direction: column;
}

/* Header */
.setup-dashboard__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  padding-top: calc(env(safe-area-inset-top) + 16px);
}

.setup-dashboard__logo {
  font-size: 24px;
  font-weight: 900;
  color: #1a1a2e;
  letter-spacing: -1px;
}

.setup-dashboard__actions {
  display: flex;
  align-items: center;
  gap: 16px;
}

.setup-dashboard__icon {
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

.setup-dashboard__icon:active {
  opacity: 0.6;
}

/* Content */
.setup-dashboard__content {
  flex: 1;
  padding: 0 24px 32px;
}

.setup-dashboard__title {
  font-size: 24px;
  font-weight: 800;
  color: #1a1a2e;
  margin: 0 0 20px;
  line-height: 1.2;
  letter-spacing: -0.5px;
  text-align: center;
}

/* Items */
.setup-dashboard__items {
  display: flex;
  gap: 12px;
  margin-bottom: 24px;
  overflow-x: auto;
  padding-bottom: 8px;
}

.setup-dashboard__item {
  flex: 1;
  min-width: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px 12px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  position: relative;
}

.setup-dashboard__item-icon {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.setup-dashboard__item-icon--small {
  font-size: 28px;
}

.setup-dashboard__item-img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.setup-dashboard__item-label {
  font-size: 12px;
  font-weight: 600;
  color: #333;
  text-align: center;
  line-height: 1.3;
}

.setup-dashboard__item-check {
  position: absolute;
  top: 8px;
  right: 8px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #34c759;
  color: #fff;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Level */
.setup-dashboard__level {
  margin-bottom: 24px;
}

.setup-dashboard__level-title {
  font-size: 18px;
  font-weight: 700;
  color: #1a1a2e;
  margin: 0 0 12px;
}

.setup-dashboard__tiles {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.setup-dashboard__tile {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);
}

.setup-dashboard__tile--locked {
  opacity: 0.7;
}

.setup-dashboard__tile-lock {
  font-size: 18px;
}

.setup-dashboard__tile-label {
  font-size: 15px;
  font-weight: 500;
  color: #333;
}

.setup-dashboard__btn {
  display: block;
  width: 100%;
  background: #f2653a;
  color: #fff;
  border: none;
  padding: 16px;
  border-radius: 999px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.12s ease, opacity 0.12s ease;
  text-align: center;
}

.setup-dashboard__btn:active {
  transform: scale(0.97);
  opacity: 0.92;
}
</style>
