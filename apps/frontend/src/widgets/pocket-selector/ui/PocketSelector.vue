<script setup>
defineProps({
  goals: {
    type: Array,
    required: true,
  },
  selectedId: {
    type: String,
    default: null,
  },
})

defineEmits(['select'])
</script>

<template>
  <div class="pocket-selector">
    <button
      v-for="goal in goals"
      :key="goal.id"
      class="pocket-selector__item"
      :class="{ 'pocket-selector__item--selected': selectedId === goal.id }"
      @click="$emit('select', goal.id)"
    >
      <span class="pocket-selector__name">{{ goal.name }}</span>
      <span class="pocket-selector__amount">{{ goal.currency }} {{ goal.currentAmount.toLocaleString() }}</span>
    </button>
  </div>
</template>

<style scoped>
.pocket-selector {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  width: 100%;
}

.pocket-selector__item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--space-4) var(--space-5);
  background: var(--color-swiss-white);
  border: 1.5px solid var(--color-medium-grey);
  border-radius: 12px;
  font-family: var(--font-family);
  cursor: pointer;
  transition: border-color 0.15s ease, background 0.15s ease;
}

.pocket-selector__item--selected {
  border-color: var(--color-swiss-orange);
  background: var(--color-swiss-orange-20);
}

.pocket-selector__name {
  font-size: var(--font-size-body-big);
  font-weight: 600;
  color: var(--color-swiss-black);
}

.pocket-selector__amount {
  font-size: var(--font-size-body);
  font-weight: 400;
  color: var(--color-swiss-black-60);
}
</style>
