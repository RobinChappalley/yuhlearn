<script setup>
defineProps({
  answer: {
    type: Object,
    required: true,
  },
  state: {
    type: String,
    default: null,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})

defineEmits(['select'])
</script>

<template>
  <button
    class="answer-option"
    :class="{
      'answer-option--correct': state === 'correct',
      'answer-option--wrong': state === 'wrong',
      'answer-option--disabled': disabled,
    }"
    :disabled="disabled"
    @click="!disabled && $emit('select', answer.id)"
  >
    {{ answer.text }}
  </button>
</template>

<style scoped>
.answer-option {
  width: 100%;
  padding: var(--space-4) var(--space-5);
  background: var(--color-swiss-white);
  border: 1.5px solid var(--color-medium-grey);
  border-radius: 12px;
  font-family: var(--font-family);
  font-size: var(--font-size-body-big);
  font-weight: 400;
  color: var(--color-swiss-black);
  text-align: left;
  cursor: pointer;
  transition: background 0.15s ease, border-color 0.15s ease;
  line-height: var(--line-height-body-big);
}

.answer-option:active:not(:disabled) {
  background: var(--color-extra-light-grey);
}

.answer-option--correct {
  background: var(--color-app-green-20);
  border-color: var(--color-app-green);
  color: var(--color-app-green-dark1);
  font-weight: 600;
}

.answer-option--wrong {
  background: var(--color-app-red-20);
  border-color: var(--color-app-red);
  color: var(--color-app-red-dark1);
  font-weight: 600;
}

.answer-option--disabled {
  cursor: not-allowed;
  opacity: 0.7;
}
</style>
