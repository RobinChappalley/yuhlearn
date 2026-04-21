<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { OnboardingProgress } from '@/widgets/onboarding-progress'
import personalityQuizData from '@/data/personality-quiz.json'

const router = useRouter()
const quiz = personalityQuizData.personalityQuiz

// Simple scoring: calculate dominant trait
const answers = JSON.parse(localStorage.getItem('yuhlearn_personality_answers') ?? '{}')
const personality = computed(() => {
  // Default to socialite for demo; real scoring would sum trait values
  return quiz.results.socialite
})

function goHome() {
  localStorage.setItem('yuhlearn_personality_done', 'true')
  router.push({ name: 'home' })
}

function close() {
  router.push({ name: 'home' })
}
</script>

<template>
  <div class="personality-result">
    <!-- Header -->
    <header class="personality-result__header">
      <div class="personality-result__logo">yuh</div>
      <div class="personality-result__actions">
        <button class="personality-result__icon" aria-label="Fullscreen">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>
          </svg>
        </button>
        <button class="personality-result__icon" aria-label="Download">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
        </button>
        <button class="personality-result__icon" aria-label="Close" @click="close">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
      </div>
    </header>

    <OnboardingProgress
      :phase="1"
      :step="18"
      :total="18"
      :minutes="5"
    />

    <!-- Illustration -->
    <div class="personality-result__illustration">
      <img
        :src="personality.illustration"
        :alt="personality.title"
        class="personality-result__img"
      />
      <div class="personality-result__bubble">
        {{ personality.speechBubble }}
      </div>
    </div>

    <!-- Content -->
    <div class="personality-result__content">
      <p class="personality-result__label">{{ personality.label }}</p>
      <h1 class="personality-result__title">{{ personality.title }}</h1>
      <p class="personality-result__desc">{{ personality.description }}</p>
      <p class="personality-result__detail">{{ personality.detail }}</p>

      <button class="personality-result__btn" @click="goHome">
        Next
      </button>
    </div>
  </div>
</template>

<style scoped>
.personality-result {
  min-height: 100dvh;
  background: linear-gradient(180deg, #f0eef7 0%, #fff 40%);
  display: flex;
  flex-direction: column;
}

/* Header */
.personality-result__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  padding-top: calc(env(safe-area-inset-top) + 16px);
}

.personality-result__logo {
  font-size: 24px;
  font-weight: 900;
  color: #1a1a2e;
  letter-spacing: -1px;
}

.personality-result__actions {
  display: flex;
  align-items: center;
  gap: 16px;
}

.personality-result__icon {
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

.personality-result__icon:active {
  opacity: 0.6;
}

/* Progress */
.personality-result__progress {
  padding: 0 24px 16px;
}

.personality-result__meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.personality-result__steps {
  font-size: 13px;
  font-weight: 700;
  color: #1a1a2e;
}

.personality-result__time {
  font-size: 12px;
  font-weight: 600;
  color: #f2653a;
  background: rgba(242, 101, 58, 0.08);
  padding: 4px 10px;
  border-radius: 99px;
}

.personality-result__bars {
  display: flex;
  gap: 8px;
}

.personality-result__bar {
  flex: 1;
  height: 4px;
  border-radius: 4px;
  background: #e8e8ed;
  transition: background 0.3s ease;
}

.personality-result__bar--active {
  background: #f2653a;
}

/* Illustration */
.personality-result__illustration {
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px 24px;
  min-height: 180px;
}

.personality-result__img {
  max-width: 100%;
  max-height: 40dvh;
  object-fit: contain;
}

.personality-result__bubble {
  position: absolute;
  top: 16px;
  right: 24px;
  background: #fff;
  color: #f2653a;
  font-size: 14px;
  font-weight: 600;
  padding: 10px 16px;
  border-radius: 16px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
}

/* Content */
.personality-result__content {
  padding: 0 32px 32px;
  text-align: center;
}

.personality-result__label {
  font-size: 14px;
  font-weight: 700;
  color: #1a1a2e;
  margin: 0 0 8px;
}

.personality-result__title {
  font-size: 32px;
  font-weight: 800;
  color: #f2653a;
  margin: 0 0 20px;
  line-height: 1.2;
  letter-spacing: -0.5px;
}

.personality-result__desc {
  font-size: 15px;
  line-height: 1.5;
  color: #444;
  margin: 0 0 12px;
}

.personality-result__detail {
  font-size: 14px;
  line-height: 1.5;
  color: #666;
  margin: 0 0 32px;
}

.personality-result__btn {
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

.personality-result__btn:active {
  transform: scale(0.97);
  opacity: 0.92;
}
</style>
