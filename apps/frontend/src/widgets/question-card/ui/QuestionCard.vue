<script setup>
import AnswerOption from './AnswerOption.vue'

const props = defineProps({
  question: {
    type: Object,
    required: true,
  },
  answeredState: {
    type: String,
    default: null,
  },
  selectedAnswerId: {
    type: String,
    default: null,
  },
})

const emit = defineEmits(['answer'])

const isAnswered = () => props.answeredState !== null
</script>

<template>
  <div class="question-card">
    <p class="question-card__text">{{ question.question }}</p>
    <div class="question-card__options">
      <AnswerOption
        v-for="a in question.answers"
        :key="a.id"
        :answer="a"
        :state="selectedAnswerId === a.id ? answeredState : null"
        :disabled="isAnswered()"
        @select="emit('answer', question.id, a.id)"
      />
    </div>
  </div>
</template>

<style scoped>
.question-card {
  background: var(--color-swiss-white);
  border-radius: 16px;
  padding: var(--space-6);
  box-shadow: var(--shadow-purple);
  width: 100%;
}

.question-card__text {
  font-size: var(--font-size-title-xs);
  font-weight: 700;
  line-height: var(--line-height-title-xs);
  color: var(--color-swiss-black);
  margin: 0 0 var(--space-6);
}

.question-card__options {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}
</style>
