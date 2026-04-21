import { ref, computed } from 'vue'
import firsts from '@/data/firsts.json'

export function useQuiz(firstId) {
  const first = firsts.firsts.find((f) => f.id === firstId)
  const allQuestions = first?.quiz?.questions ?? []

  const queue = ref([...allQuestions])
  const currentIndex = ref(0)
  const wrongIds = ref([])
  const answers = ref({})
  const phase = ref('quiz')
  const done = ref(false)

  const currentQuestion = computed(() => queue.value[currentIndex.value] ?? null)

  const progress = computed(() => ({
    current: currentIndex.value + 1,
    total: queue.value.length,
  }))

  function answer(questionId, answerId) {
    const q = queue.value.find((q) => q.id === questionId)
    if (!q) return

    const correct = answerId === q.correct
    answers.value[questionId] = { answerId, correct }

    if (!correct && !wrongIds.value.includes(questionId)) {
      wrongIds.value.push(questionId)
    }

    setTimeout(() => advance(), 800)
  }

  function advance() {
    if (currentIndex.value < queue.value.length - 1) {
      currentIndex.value++
    } else {
      if (wrongIds.value.length > 0 && phase.value === 'quiz') {
        const retryIds = wrongIds.value.slice()
        phase.value = 'retry'
        queue.value = allQuestions.filter((q) => retryIds.includes(q.id))
        wrongIds.value = []
        currentIndex.value = 0
        retryIds.forEach((id) => {
          delete answers.value[id]
        })
      } else {
        done.value = true
      }
    }
  }

  function isAnswered(questionId) {
    return questionId in answers.value
  }

  function getAnswerState(questionId) {
    const a = answers.value[questionId]
    if (!a) return null
    return a.correct ? 'correct' : 'wrong'
  }

  return {
    currentQuestion,
    progress,
    phase,
    done,
    answer,
    isAnswered,
    getAnswerState,
  }
}
