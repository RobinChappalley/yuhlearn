<script setup>
const props = defineProps({
  icon: { type: String, required: true },
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  modelValue: { type: [Number, String], default: '' },
  removable: { type: Boolean, default: true },
})

const emit = defineEmits(['update:modelValue', 'remove'])

function onInput(e) {
  emit('update:modelValue', e.target.value)
}
</script>

<template>
  <div class="category-card">
    <div class="category-card__header">
      <div class="category-card__icon" v-html="icon" />
      <div class="category-card__info">
        <h3 class="category-card__title">{{ title }}</h3>
        <p class="category-card__subtitle">{{ subtitle }}</p>
      </div>
      <button
        v-if="removable"
        class="category-card__close"
        aria-label="Remove"
        @click="emit('remove')"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="18" y1="6" x2="6" y2="18"/>
          <line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>
    </div>
    <div class="category-card__amount">
      <span class="category-card__label">Budget amount</span>
      <div class="category-card__input-wrap">
        <input
          :value="modelValue"
          type="number"
          inputmode="numeric"
          placeholder="000.00"
          class="category-card__input"
          @input="onInput"
        />
        <span class="category-card__currency">CHF</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.category-card {
  background: #fff;
  border-radius: 14px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  overflow: hidden;
}

.category-card__header {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  border-bottom: 1px solid #f0f0f4;
}

.category-card__icon {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #f2653a;
  flex-shrink: 0;
}

.category-card__icon :deep(svg) { width: 28px; height: 28px; }

.category-card__info { flex: 1; min-width: 0; }

.category-card__title {
  font-size: 15px;
  font-weight: 700;
  color: #1a1a2e;
  margin: 0 0 2px;
}

.category-card__subtitle {
  font-size: 12px;
  color: #888;
  margin: 0;
}

.category-card__close {
  background: none;
  border: none;
  color: #999;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.category-card__close:active { opacity: 0.6; }

.category-card__amount {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
}

.category-card__label {
  font-size: 14px;
  color: #888;
}

.category-card__input-wrap {
  display: flex;
  align-items: center;
  gap: 6px;
}

.category-card__input {
  border: none;
  outline: none;
  background: transparent;
  font-size: 15px;
  font-weight: 500;
  color: #1a1a2e;
  text-align: right;
  width: 80px;
}

.category-card__input::placeholder { color: #c0c0c8; }

.category-card__currency {
  font-size: 13px;
  font-weight: 700;
  color: #1a1a2e;
}
</style>
