<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const score = parseInt(localStorage.getItem('yuhlearn_bigthree_score') ?? '0', 10)
const total = 3

const level = computed(() => {
  if (score === 0) return { label: 'Your financial literacy level', title: 'The newbie' }
  if (score === 1) return { label: 'Your financial literacy level', title: 'The beginner' }
  if (score === 2) return { label: 'Your financial literacy level', title: 'The learner' }
  return { label: 'Your financial literacy level', title: 'The expert' }
})

function next() {
  router.push({ name: 'personality-intro' })
}

function close() {
  router.push({ name: 'home' })
}
</script>

<template>
  <div class="assessment-result">
    <!-- Header -->
    <header class="assessment-result__header">
      <div class="assessment-result__logo">yuh</div>
      <div class="assessment-result__actions">
        <button class="assessment-result__icon" aria-label="Fullscreen">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>
          </svg>
        </button>
        <button class="assessment-result__icon" aria-label="Download">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
        </button>
        <button class="assessment-result__icon" aria-label="Close" @click="close">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
      </div>
    </header>

    <!-- Progress -->
    <div class="assessment-result__progress">
      <div class="assessment-result__meta">
        <span class="assessment-result__steps">Steps 4 / 4</span>
        <span class="assessment-result__time">10 mins</span>
      </div>
      <div class="assessment-result__bars">
        <div class="assessment-result__bar assessment-result__bar--active" />
        <div class="assessment-result__bar" />
        <div class="assessment-result__bar" />
      </div>
    </div>

    <!-- Illustration -->
    <div class="assessment-result__illustration">
      <img
        src="/illustrations/YuhPerson_DP_3b.svg"
        alt="Confused character"
        class="assessment-result__img"
      />
      <div class="assessment-result__bubble">
        I'm a bit confused ...
      </div>
    </div>

    <!-- Content -->
    <div class="assessment-result__content">
      <p class="assessment-result__label">{{ level.label }}</p>
      <h1 class="assessment-result__title">{{ level.title }}</h1>

      <p class="assessment-result__desc">
        You got <strong>{{ score }}/{{ total }} correct</strong>. Like <strong>25%</strong> of under-30s, you're
        just getting started. Finance is a skill, not a personality
        trait, so don't worry.
      </p>
      <p class="assessment-result__sub">
        Ready to explore your relationship with money and
        find your next move?
      </p>

      <button class="assessment-result__btn" @click="next">
        Next
      </button>
    </div>
  </div>
</template>

<style scoped>
.assessment-result {
  min-height: 100dvh;
  background: linear-gradient(180deg, #f0eef7 0%, #fff 40%);
  display: flex;
  flex-direction: column;
}

/* Header */
.assessment-result__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  padding-top: calc(env(safe-area-inset-top) + 16px);
}

.assessment-result__logo {
  font-size: 24px;
  font-weight: 900;
  color: #1a1a2e;
  letter-spacing: -1px;
}

.assessment-result__actions {
  display: flex;
  align-items: center;
  gap: 16px;
}

.assessment-result__icon {
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

.assessment-result__icon:active {
  opacity: 0.6;
}

/* Progress */
.assessment-result__progress {
  padding: 0 24px 16px;
}

.assessment-result__meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.assessment-result__steps {
  font-size: 13px;
  font-weight: 700;
  color: #1a1a2e;
}

.assessment-result__time {
  font-size: 12px;
  font-weight: 600;
  color: #f2653a;
  background: rgba(242, 101, 58, 0.08);
  padding: 4px 10px;
  border-radius: 99px;
}

.assessment-result__bars {
  display: flex;
  gap: 8px;
}

.assessment-result__bar {
  flex: 1;
  height: 4px;
  border-radius: 4px;
  background: #e8e8ed;
}

.assessment-result__bar--active {
  background: #f2653a;
}

/* Illustration */
.assessment-result__illustration {
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px 24px;
  min-height: 180px;
}

.assessment-result__img {
  max-width: 100%;
  max-height: 35dvh;
  object-fit: contain;
}

.assessment-result__bubble {
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
.assessment-result__content {
  padding: 0 32px 32px;
  text-align: center;
}

.assessment-result__label {
  font-size: 14px;
  font-weight: 700;
  color: #1a1a2e;
  margin: 0 0 8px;
}

.assessment-result__title {
  font-size: 32px;
  font-weight: 800;
  color: #f2653a;
  margin: 0 0 20px;
  line-height: 1.2;
  letter-spacing: -0.5px;
}

.assessment-result__desc {
  font-size: 15px;
  line-height: 1.5;
  color: #444;
  margin: 0 0 12px;
}

.assessment-result__desc strong {
  font-weight: 700;
  color: #1a1a2e;
}

.assessment-result__sub {
  font-size: 14px;
  line-height: 1.5;
  color: #666;
  margin: 0 0 32px;
}

.assessment-result__btn {
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
  min-width: 160px;
}

.assessment-result__btn:active {
  transform: scale(0.97);
  opacity: 0.92;
}
</style>
