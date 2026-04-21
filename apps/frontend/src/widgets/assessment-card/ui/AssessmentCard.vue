<script setup>
const props = defineProps({
  question: { type: Object, required: true },
  selectedAnswerId: { type: String, default: null },
  canGoBack: { type: Boolean, default: false },
})

const emit = defineEmits(['select', 'back'])

function select(answerId) {
  emit('select', answerId)
}
</script>

<template>
  <div class="assessment-card">
    <!-- Title -->
    <h1 class="assessment-card__title">Take the Big Three Quiz</h1>

    <!-- Question text (rendered with bold spans for emphasis) -->
    <p class="assessment-card__text" v-html="question.text" />

    <!-- Options -->
    <div class="assessment-card__options">
      <button
        v-for="answer in question.answers"
        :key="answer.id"
        class="assessment-card__option"
        :class="{ 'assessment-card__option--selected': selectedAnswerId === answer.id }"
        @click="select(answer.id)"
      >
        {{ answer.text }}
      </button>
    </div>

    <!-- Back button -->
    <div class="assessment-card__footer">
      <button
        v-if="canGoBack"
        class="assessment-card__back"
        @click="emit('back')"
      >
        <span class="assessment-card__back-arrow">&#x2039;</span>
        Back
      </button>
    </div>
  </div>
</template>

<style scoped>
.assessment-card {
  padding: 0 24px 24px;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.assessment-card__title {
  font-size: 26px;
  font-weight: 800;
  color: #1a1a2e;
  text-align: center;
  margin: 0 0 24px;
  line-height: 1.2;
  letter-spacing: -0.5px;
}

.assessment-card__text {
  font-size: 17px;
  line-height: 1.5;
  color: #333;
  text-align: center;
  margin: 0 0 32px;
}

.assessment-card__text :deep(strong) {
  font-weight: 700;
  color: #1a1a2e;
}

.assessment-card__options {
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 24px;
}

.assessment-card__option {
  display: block;
  width: 100%;
  padding: 16px 20px;
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

.assessment-card__option:active {
  transform: scale(0.98);
}

.assessment-card__option--selected {
  background: #f2653a;
  color: #fff;
  font-weight: 600;
}

.assessment-card__footer {
  margin-top: auto;
  display: flex;
  justify-content: center;
  padding-top: 16px;
}

.assessment-card__back {
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

.assessment-card__back:active {
  transform: scale(0.97);
  opacity: 0.92;
}

.assessment-card__back-arrow {
  font-size: 20px;
  line-height: 1;
  margin-top: -2px;
}
</style>
