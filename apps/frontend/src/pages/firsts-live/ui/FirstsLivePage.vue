<script setup>
import { useRouter } from 'vue-router'
import { OnboardingProgress } from '@/widgets/onboarding-progress'

const router = useRouter()

function start() {
  router.push({ name: 'setup-dashboard' })
}

function close() {
  router.push({ name: 'home' })
}
</script>

<template>
  <div class="firsts-live">
    <!-- Header -->
    <header class="firsts-live__header">
      <div class="firsts-live__logo">yuh</div>
      <div class="firsts-live__actions">
        <button class="firsts-live__icon" aria-label="Fullscreen">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>
          </svg>
        </button>
        <button class="firsts-live__icon" aria-label="Download">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
        </button>
        <button class="firsts-live__icon" aria-label="Close" @click="close">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
      </div>
    </header>

    <OnboardingProgress
      :phase="2"
      :step="2"
      :total="5"
      :minutes="15"
    />

    <!-- Content -->
    <div class="firsts-live__content">
      <div class="firsts-live__celebration">🎉</div>
      <h1 class="firsts-live__title">The 5 Firsts are live!</h1>

      <p class="firsts-live__subtitle">Let's start learning with...</p>

      <div class="firsts-live__illustration">
        <img
          src="/illustrations/People-1.png"
          alt="Character"
          class="firsts-live__img"
        />
        <div class="firsts-live__bubble">Let's go!</div>
      </div>

      <button class="firsts-live__btn" @click="start">
        Start Now!
      </button>
    </div>
  </div>
</template>

<style scoped>
.firsts-live {
  min-height: 100dvh;
  background: linear-gradient(180deg, #f0eef7 0%, #fff 40%);
  display: flex;
  flex-direction: column;
}

/* Header */
.firsts-live__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  padding-top: calc(env(safe-area-inset-top) + 16px);
}

.firsts-live__logo {
  font-size: 24px;
  font-weight: 900;
  color: #1a1a2e;
  letter-spacing: -1px;
}

.firsts-live__actions {
  display: flex;
  align-items: center;
  gap: 16px;
}

.firsts-live__icon {
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

.firsts-live__icon:active {
  opacity: 0.6;
}

/* Content */
.firsts-live__content {
  flex: 1;
  padding: 32px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.firsts-live__celebration {
  font-size: 48px;
  margin-bottom: 16px;
}

.firsts-live__title {
  font-size: 28px;
  font-weight: 800;
  color: #1a1a2e;
  margin: 0 0 8px;
  line-height: 1.2;
  letter-spacing: -0.5px;
}

.firsts-live__subtitle {
  font-size: 16px;
  color: #666;
  margin: 0 0 24px;
}

.firsts-live__illustration {
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 200px;
}

.firsts-live__img {
  max-width: 200px;
  max-height: 35dvh;
  object-fit: contain;
}

.firsts-live__bubble {
  position: absolute;
  top: 10%;
  right: -20px;
  background: #fff;
  color: #f2653a;
  font-size: 14px;
  font-weight: 600;
  padding: 10px 16px;
  border-radius: 16px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
}

.firsts-live__btn {
  display: inline-block;
  background: #f2653a;
  color: #fff;
  border: none;
  padding: 16px 40px;
  border-radius: 999px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.12s ease, opacity 0.12s ease;
  letter-spacing: 0.2px;
  min-width: 200px;
}

.firsts-live__btn:active {
  transform: scale(0.97);
  opacity: 0.92;
}
</style>
