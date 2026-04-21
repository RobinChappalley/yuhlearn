<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const slides = [
  {
    emoji: '💰',
    title: 'Master your money',
    desc: 'Learn essential financial skills through bite-sized videos and interactive quizzes.',
  },
  {
    emoji: '🎯',
    title: 'Set your goals',
    desc: 'Track your progress and unlock new levels as you complete each learning path.',
  },
  {
    emoji: '🚀',
    title: 'Start today',
    desc: 'Take control of your financial future, one short lesson at a time.',
  },
]

const current = ref(0)
const isLast = computed(() => current.value === slides.length - 1)

function next() {
  if (isLast.value) {
    finish()
  } else {
    current.value++
  }
}

function skip() {
  finish()
}

function finish() {
  localStorage.setItem('yuhlearn_onboarding_seen', 'true')
  router.push({ name: 'home' })
}
</script>

<template>
  <div class="onboarding">
    <button class="onboarding__skip" @click="skip">Skip</button>

    <div class="onboarding__slides" :style="{ transform: `translateX(-${current * 100}%)` }">
      <div
        v-for="(slide, index) in slides"
        :key="index"
        class="onboarding__slide"
      >
        <div class="onboarding__emoji">{{ slide.emoji }}</div>
        <h1 class="onboarding__title">{{ slide.title }}</h1>
        <p class="onboarding__desc">{{ slide.desc }}</p>
      </div>
    </div>

    <div class="onboarding__footer">
      <div class="onboarding__dots">
        <span
          v-for="(_, index) in slides"
          :key="index"
          class="onboarding__dot"
          :class="{ 'onboarding__dot--active': index === current }"
          @click="current = index"
        />
      </div>

      <button class="onboarding__btn" @click="next">
        {{ isLast ? 'Get Started' : 'Next' }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.onboarding {
  height: 100dvh;
  background: var(--color-swiss-white);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
}

.onboarding__skip {
  position: absolute;
  top: calc(env(safe-area-inset-top) + 16px);
  right: 20px;
  background: none;
  border: none;
  font-size: var(--font-size-body);
  color: var(--color-swiss-black-60);
  cursor: pointer;
  z-index: 10;
  padding: 8px;
}

.onboarding__slides {
  display: flex;
  flex: 1;
  transition: transform 0.3s ease;
  width: 300%;
}

.onboarding__slide {
  width: 33.333%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--space-8) var(--space-6);
  text-align: center;
}

.onboarding__emoji {
  font-size: 80px;
  line-height: 1;
  margin-bottom: var(--space-6);
}

.onboarding__title {
  font-size: var(--font-size-title-m);
  font-weight: 700;
  color: var(--color-swiss-black);
  margin: 0 0 var(--space-3);
  line-height: var(--line-height-title);
}

.onboarding__desc {
  font-size: var(--font-size-body-big);
  color: var(--color-swiss-black-60);
  line-height: var(--line-height-body-big);
  max-width: 280px;
  margin: 0;
}

.onboarding__footer {
  padding: var(--space-6) var(--space-5) calc(var(--space-6) + env(safe-area-inset-bottom));
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-5);
}

.onboarding__dots {
  display: flex;
  gap: 8px;
}

.onboarding__dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--color-medium-grey);
  cursor: pointer;
  transition: background 0.2s ease, width 0.2s ease;
}

.onboarding__dot--active {
  background: var(--color-swiss-orange, #f97316);
  width: 24px;
  border-radius: 4px;
}

.onboarding__btn {
  width: 100%;
  max-width: 320px;
  background: var(--color-swiss-orange, #f97316);
  color: #fff;
  border: none;
  padding: var(--space-4) var(--space-6);
  border-radius: 12px;
  font-size: var(--font-size-body-big);
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.1s ease;
}

.onboarding__btn:active {
  transform: scale(0.98);
}
</style>
