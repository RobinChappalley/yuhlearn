<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { AssessmentCard } from '@/widgets/assessment-card'
import { OnboardingProgress } from '@/widgets/onboarding-progress'
import assessments from '@/data/assessments.json'

const router = useRouter()

const assessment = assessments.assessments.find((a) => a.id === 'big-three')
const questions = assessment?.questions ?? []

const currentIndex = ref(0)
const answers = ref({})

const currentQuestion = computed(() => questions[currentIndex.value] ?? null)
const totalSteps = computed(() => questions.length)
const currentStep = computed(() => currentIndex.value + 1)
const isLast = computed(() => currentIndex.value === questions.length - 1)
const allAnswered = computed(() => Object.keys(answers.value).length === questions.length)

function handleSelect(answerId) {
  if (!currentQuestion.value) return
  answers.value[currentQuestion.value.id] = answerId
  if (isLast.value) {
    submit()
  } else {
    currentIndex.value++
  }
}

function goBack() {
  if (currentIndex.value > 0) {
    currentIndex.value--
  }
}

function submit() {
  const results = questions.map((q) => ({
    questionId: q.id,
    correct: answers.value[q.id] === q.correct,
  }))
  const score = results.filter((r) => r.correct).length
  localStorage.setItem('yuhlearn_bigthree_score', score.toString())
  localStorage.setItem('yuhlearn_bigthree_done', 'true')
  router.push({ name: 'assessment-result' })
}

function close() {
  router.push({ name: 'home' })
}
</script>

<template>
  <div class="assessment">
    <!-- Header -->
    <header class="assessment__header">
      <div class="assessment__logo">yuh</div>
      <div class="assessment__actions">
        <button class="assessment__icon" aria-label="Fullscreen">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>
          </svg>
        </button>
        <button class="assessment__icon" aria-label="Download">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
        </button>
        <button class="assessment__icon" aria-label="Close" @click="close">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
      </div>
    </header>

    <OnboardingProgress
      :phase="0"
      :step="currentStep"
      :total="4"
      :minutes="15"
    />

    <!-- Content -->
    <div class="assessment__content">
      <AssessmentCard
        v-if="currentQuestion"
        :key="currentQuestion.id"
        :question="currentQuestion"
        :selected-answer-id="answers[currentQuestion.id] ?? null"
        @select="handleSelect"
        @back="goBack"
      />

      <div v-else-if="allAnswered" class="assessment__done">
        <p>Quiz completed! Redirecting...</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.assessment {
  min-height: 100dvh;
  background: linear-gradient(180deg, #f0eef7 0%, #fff 40%);
  display: flex;
  flex-direction: column;
}

.assessment__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  padding-top: calc(env(safe-area-inset-top) + 16px);
}

.assessment__logo {
  font-size: 24px;
  font-weight: 900;
  color: #1a1a2e;
  letter-spacing: -1px;
}

.assessment__actions {
  display: flex;
  align-items: center;
  gap: 16px;
}

.assessment__icon {
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

.assessment__icon:active {
  opacity: 0.6;
}

.assessment__content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.assessment__done {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-size: 17px;
  color: #666;
}

/* Page transition */
.assessment__content > * {
  animation: fadeIn 0.25s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
