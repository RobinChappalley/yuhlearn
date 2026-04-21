<script setup>
import { computed, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useQuiz } from '@/features/take-quiz'
import { useProgress } from '@/entities/progress'
import { QuestionCard } from '@/widgets/question-card'
import firsts from '@/data/firsts.json'

const route = useRoute()
const router = useRouter()
const firstId = route.params.id

const first = computed(() => firsts.firsts.find((f) => f.id === firstId) ?? null)

const { currentQuestion, progress, done, answer, isAnswered, getAnswerState } = useQuiz(firstId)
const { markQuizPassed } = useProgress()

const selectedAnswer = ref(null)

function handleAnswer(questionId, answerId) {
  if (isAnswered(questionId)) return
  selectedAnswer.value = answerId
  answer(questionId, answerId)
}

watch(done, (isDone) => {
  if (isDone) {
    markQuizPassed(firstId)
    setTimeout(() => {
      router.push({ name: 'reward', params: { id: firstId } })
    }, 600)
  }
})

watch(currentQuestion, () => {
  selectedAnswer.value = null
})
</script>

<template>
  <div class="quiz">
    <header class="quiz__header">
      <button class="quiz__back" @click="router.push({ name: 'first-detail', params: { id: firstId } })">←</button>
      <div class="quiz__meta">
        <span class="quiz__title">{{ first?.title }}</span>
        <span class="quiz__label">Test</span>
      </div>
      <span class="quiz__progress">{{ progress.current }} / {{ progress.total }}</span>
    </header>

    <div class="quiz__content">
      <Transition name="slide" mode="out-in">
        <QuestionCard
          v-if="currentQuestion && !done"
          :key="currentQuestion.id"
          :question="currentQuestion"
          :answered-state="isAnswered(currentQuestion.id) ? getAnswerState(currentQuestion.id) : null"
          :selected-answer-id="selectedAnswer"
          @answer="handleAnswer"
        />
        <div v-else-if="done" class="quiz__done">
          <p>All correct! ✅</p>
        </div>
      </Transition>
    </div>
  </div>
</template>

<style scoped>
.quiz {
  min-height: 100dvh;
  background: var(--color-extra-light-grey);
  max-width: var(--max-width);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}

.quiz__header {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-4) var(--space-5);
  background: var(--color-swiss-white);
  border-bottom: 1px solid var(--color-medium-grey);
  position: sticky;
  top: 0;
  z-index: 10;
}

.quiz__back {
  background: none;
  border: none;
  font-size: 22px;
  cursor: pointer;
  color: var(--color-swiss-black);
  padding: 0;
  line-height: 1;
  flex-shrink: 0;
}

.quiz__meta {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.quiz__title {
  font-size: var(--font-size-body);
  font-weight: 600;
  color: var(--color-swiss-black-60);
  line-height: 1;
}

.quiz__label {
  font-size: var(--font-size-title-xs);
  font-weight: 700;
  color: var(--color-swiss-black);
  line-height: var(--line-height-title-xs);
}

.quiz__progress {
  font-size: var(--font-size-body);
  font-weight: 600;
  color: var(--color-swiss-black-60);
  flex-shrink: 0;
}

.quiz__content {
  flex: 1;
  padding: var(--space-6) var(--space-5);
  display: flex;
  align-items: flex-start;
  justify-content: center;
}

.quiz__done {
  text-align: center;
  font-size: var(--font-size-title-sm);
  font-weight: 700;
  color: var(--color-app-green);
  padding-top: var(--space-12);
}

.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.slide-enter-from {
  opacity: 0;
  transform: translateX(24px);
}

.slide-leave-to {
  opacity: 0;
  transform: translateX(-24px);
}
</style>
