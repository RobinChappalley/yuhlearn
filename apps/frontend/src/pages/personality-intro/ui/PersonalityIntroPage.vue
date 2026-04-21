<script setup>
import { useRouter } from 'vue-router'
import { OnboardingProgress } from '@/widgets/onboarding-progress'

const router = useRouter()

function startQuiz() {
  router.push({ name: 'personality-quiz' })
}

function close() {
  router.push({ name: 'home' })
}
</script>

<template>
  <div class="personality-intro">
    <!-- Header -->
    <header class="personality-intro__header">
      <div class="personality-intro__logo">yuh</div>
      <div class="personality-intro__actions">
        <button class="personality-intro__icon" aria-label="Fullscreen">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>
          </svg>
        </button>
        <button class="personality-intro__icon" aria-label="Download">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
        </button>
        <button class="personality-intro__icon" aria-label="Close" @click="close">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
      </div>
    </header>

    <OnboardingProgress
      :phase="1"
      :step="1"
      :total="18"
      :minutes="9"
    />

    <!-- Illustration -->
    <div class="personality-intro__illustration">
      <img
        src="/illustrations/People-2.png"
        alt="Money personality characters"
        class="personality-intro__img"
      />
    </div>

    <!-- Content -->
    <div class="personality-intro__content">
      <h1 class="personality-intro__title">
        The Money <span class="personality-intro__highlight">Personality</span>
      </h1>
      <p class="personality-intro__desc">
        How do you really feel about your wallet?<br />
        It's time for a <strong>quick mindset audit</strong>.
      </p>
      <p class="personality-intro__sub">
        This step will help you understand what matters<br />
        to you when it comes to finances.
      </p>

      <button class="personality-intro__btn" @click="startQuiz">
        Take the Quiz
      </button>
    </div>
  </div>
</template>

<style scoped>
.personality-intro {
  min-height: 100dvh;
  background: linear-gradient(180deg, #f0eef7 0%, #fff 50%);
  display: flex;
  flex-direction: column;
}

/* Header */
.personality-intro__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  padding-top: calc(env(safe-area-inset-top) + 16px);
}

.personality-intro__logo {
  font-size: 24px;
  font-weight: 900;
  color: #1a1a2e;
  letter-spacing: -1px;
}

.personality-intro__actions {
  display: flex;
  align-items: center;
  gap: 16px;
}

.personality-intro__icon {
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

.personality-intro__icon:active {
  opacity: 0.6;
}

/* Progress */
.personality-intro__progress {
  padding: 0 24px 16px;
}

.personality-intro__meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.personality-intro__steps {
  font-size: 13px;
  font-weight: 700;
  color: #1a1a2e;
}

.personality-intro__time {
  font-size: 12px;
  font-weight: 600;
  color: #f2653a;
  background: rgba(242, 101, 58, 0.08);
  padding: 4px 10px;
  border-radius: 99px;
}

.personality-intro__bars {
  display: flex;
  gap: 8px;
}

.personality-intro__bar {
  flex: 1;
  height: 4px;
  border-radius: 4px;
  background: #e8e8ed;
  transition: background 0.3s ease;
}

.personality-intro__bar--active {
  background: #f2653a;
}

/* Illustration */
.personality-intro__illustration {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 24px;
  min-height: 200px;
}

.personality-intro__img {
  max-width: 100%;
  max-height: 45dvh;
  object-fit: contain;
}

/* Content */
.personality-intro__content {
  padding: 0 32px 32px;
  text-align: center;
}

.personality-intro__title {
  font-size: 28px;
  font-weight: 800;
  color: #1a1a2e;
  margin: 0 0 20px;
  line-height: 1.2;
  letter-spacing: -0.5px;
}

.personality-intro__highlight {
  color: #f2653a;
}

.personality-intro__desc {
  font-size: 16px;
  line-height: 1.6;
  color: #444;
  margin: 0 0 16px;
}

.personality-intro__desc strong {
  font-weight: 700;
  color: #1a1a2e;
}

.personality-intro__sub {
  font-size: 15px;
  line-height: 1.5;
  color: #666;
  margin: 0 0 32px;
}

.personality-intro__btn {
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
}

.personality-intro__btn:active {
  transform: scale(0.97);
  opacity: 0.92;
}
</style>
