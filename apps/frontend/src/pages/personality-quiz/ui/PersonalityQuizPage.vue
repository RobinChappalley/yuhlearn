<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import personalityQuizData from '@/data/personality-quiz.json'

const router = useRouter()
const quiz = personalityQuizData.personalityQuiz
const questions = quiz.questions
const answerOptions = quiz.answers

const currentIndex = ref(0)
const answers = ref({})

const currentQuestion = computed(() => questions[currentIndex.value] ?? null)
const currentStep = computed(() => currentIndex.value + 1)
const totalSteps = quiz.totalSteps
const isLast = computed(() => currentIndex.value === questions.length - 1)
const hasAnsweredCurrent = computed(() => currentQuestion.value?.id in answers.value)

function selectAnswer(answerId) {
  if (!currentQuestion.value) return
  answers.value[currentQuestion.value.id] = answerId
  if (isLast.value) {
    submitQuiz()
  } else {
    setTimeout(() => {
      currentIndex.value++
    }, 250)
  }
}

function goBack() {
  if (currentIndex.value > 0) {
    currentIndex.value--
  }
}

function close() {
  router.push({ name: 'home' })
}

function submitQuiz() {
  localStorage.setItem('yuhlearn_personality_answers', JSON.stringify(answers.value))
  router.push({ name: 'personality-result' })
}
</script>

<template>
  <div class="personality-quiz">
    <!-- Header -->
    <header class="personality-quiz__header">
      <div class="personality-quiz__logo">yuh</div>
      <div class="personality-quiz__actions">
        <button class="personality-quiz__icon" aria-label="Fullscreen">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>
          </svg>
        </button>
        <button class="personality-quiz__icon" aria-label="Download">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
        </button>
        <button class="personality-quiz__icon" aria-label="Close" @click="close">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
      </div>
    </header>

    <!-- Progress -->
    <div class="personality-quiz__progress">
      <div class="personality-quiz__meta">
        <span class="personality-quiz__steps">Steps {{ currentStep }} / {{ totalSteps }}</span>
        <span class="personality-quiz__time">{{ quiz.estimatedMinutes }} mins</span>
      </div>
      <div class="personality-quiz__bars">
        <div
          v-for="n in 3"
          :key="n"
          class="personality-quiz__bar"
          :class="{ 'personality-quiz__bar--active': n <= Math.ceil((currentStep / totalSteps) * 3) }"
        />
      </div>
    </div>

    <!-- Question -->
    <div class="personality-quiz__content">
      <Transition name="question" mode="out-in">
        <div v-if="currentQuestion" :key="currentQuestion.id" class="personality-quiz__question">
          <h2 class="personality-quiz__text">{{ currentQuestion.text }}</h2>

          <div class="personality-quiz__options">
            <button
              v-for="option in answerOptions"
              :key="option.id"
              class="personality-quiz__option"
              :class="{ 'personality-quiz__option--selected': answers[currentQuestion.id] === option.id }"
              @click="selectAnswer(option.id)"
            >
              {{ option.text }}
            </button>
          </div>
        </div>
      </Transition>
    </div>

    <!-- Back button -->
    <div class="personality-quiz__footer">
      <button
        v-if="currentStep > 1"
        class="personality-quiz__back"
        @click="goBack"
      >
        <span class="personality-quiz__back-arrow">&#x2039;</span>
        Back
      </button>
    </div>
  </div>
</template>

<style scoped>
.personality-quiz {
  min-height: 100dvh;
  background: linear-gradient(180deg, #f0eef7 0%, #fff 40%);
  display: flex;
  flex-direction: column;
}

/* Header */
.personality-quiz__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  padding-top: calc(env(safe-area-inset-top) + 16px);
}

.personality-quiz__logo {
  font-size: 24px;
  font-weight: 900;
  color: #1a1a2e;
  letter-spacing: -1px;
}

.personality-quiz__actions {
  display: flex;
  align-items: center;
  gap: 16px;
}

.personality-quiz__icon {
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

.personality-quiz__icon:active {
  opacity: 0.6;
}

/* Progress */
.personality-quiz__progress {
  padding: 0 24px 24px;
}

.personality-quiz__meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.personality-quiz__steps {
  font-size: 13px;
  font-weight: 700;
  color: #1a1a2e;
}

.personality-quiz__time {
  font-size: 12px;
  font-weight: 600;
  color: #f2653a;
  background: rgba(242, 101, 58, 0.08);
  padding: 4px 10px;
  border-radius: 99px;
}

.personality-quiz__bars {
  display: flex;
  gap: 8px;
}

.personality-quiz__bar {
  flex: 1;
  height: 4px;
  border-radius: 4px;
  background: #e8e8ed;
  transition: background 0.3s ease;
}

.personality-quiz__bar--active {
  background: #f2653a;
}

/* Content */
.personality-quiz__content {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 32px 24px 16px;
}

.personality-quiz__question {
  width: 100%;
  max-width: 400px;
}

.personality-quiz__text {
  font-size: 28px;
  font-weight: 700;
  color: #1a1a2e;
  text-align: center;
  margin: 0 0 40px;
  line-height: 1.25;
  letter-spacing: -0.5px;
}

.personality-quiz__options {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.personality-quiz__option {
  display: block;
  width: 100%;
  padding: 18px 24px;
  border-radius: 14px;
  border: none;
  background: #f5f5f7;
  color: #333;
  font-size: 16px;
  font-weight: 500;
  text-align: left;
  cursor: pointer;
  transition: background 0.15s ease, color 0.15s ease, transform 0.12s ease;
}

.personality-quiz__option:active {
  transform: scale(0.98);
}

.personality-quiz__option--selected {
  background: #f2653a;
  color: #fff;
  font-weight: 600;
}

/* Footer */
.personality-quiz__footer {
  padding: 16px 24px 32px;
  display: flex;
  justify-content: center;
}

.personality-quiz__back {
  display: inline-flex;
  align-items: center;
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
}

.personality-quiz__back:active {
  transform: scale(0.97);
  opacity: 0.92;
}

.personality-quiz__back-arrow {
  font-size: 20px;
  line-height: 1;
  margin-top: -2px;
}

/* Transitions */
.question-enter-active,
.question-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.question-enter-from {
  opacity: 0;
  transform: translateX(16px);
}

.question-leave-to {
  opacity: 0;
  transform: translateX(-16px);
}
</style>
