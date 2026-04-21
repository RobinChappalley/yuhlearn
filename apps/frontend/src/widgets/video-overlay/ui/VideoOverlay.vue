<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  firstTitle: {
    type: String,
    required: true,
  },
  hasPrev: {
    type: Boolean,
    default: false,
  },
  hasNext: {
    type: Boolean,
    default: false,
  },
})

defineEmits(['back', 'prev', 'next'])
</script>

<template>
  <div class="overlay">
    <button class="overlay__back" @click="$emit('back')" aria-label="Back">
      ←
    </button>

    <div class="overlay__nav">
      <button
        v-if="hasPrev"
        class="overlay__nav-btn"
        @click="$emit('prev')"
        aria-label="Previous"
      >
        ↑
      </button>
      <button
        v-if="hasNext"
        class="overlay__nav-btn"
        @click="$emit('next')"
        aria-label="Next"
      >
        ↓
      </button>
    </div>

    <div class="overlay__info">
      <p class="overlay__first-name">{{ firstTitle }}</p>
      <p class="overlay__title">{{ title }}</p>
    </div>
  </div>
</template>

<style scoped>
.overlay {
  position: absolute;
  inset: 0;
  pointer-events: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: var(--space-5);
}

.overlay__back,
.overlay__nav-btn {
  pointer-events: all;
  background: rgba(0, 0, 0, 0.4);
  color: var(--color-swiss-white);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(4px);
}

.overlay__nav {
  pointer-events: all;
  position: absolute;
  right: var(--space-5);
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.overlay__info {
  pointer-events: none;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.6));
  padding: var(--space-5);
  margin: calc(-1 * var(--space-5));
  margin-top: auto;
}

.overlay__first-name {
  font-size: var(--font-size-small);
  font-weight: 600;
  color: rgba(255, 255, 255, 0.75);
  margin: 0 0 var(--space-1);
}

.overlay__title {
  font-size: var(--font-size-title-xs);
  font-weight: 700;
  color: var(--color-swiss-white);
  margin: 0;
  line-height: var(--line-height-title-xs);
}
</style>
