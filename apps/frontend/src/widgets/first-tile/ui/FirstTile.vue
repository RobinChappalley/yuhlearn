<script setup>
defineProps({
  first: {
    type: Object,
    required: true,
  },
  locked: {
    type: Boolean,
    default: false,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  progressPercent: {
    type: Number,
    default: 0,
  },
})
</script>

<template>
  <div
    class="first-tile"
    :class="{
      'first-tile--locked': locked,
      'first-tile--completed': completed,
    }"
  >
    <div class="first-tile__ring-wrapper">
      <svg class="first-tile__ring" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle class="first-tile__ring-bg" cx="18" cy="18" r="15" />
        <circle
          v-if="!locked && progressPercent > 0 && !completed"
          class="first-tile__ring-fill"
          cx="18"
          cy="18"
          r="15"
          :stroke-dasharray="`${(progressPercent / 100) * 94.2} 94.2`"
          stroke-dashoffset="23.55"
        />
      </svg>
      <div class="first-tile__icon">
        <span v-if="completed">✓</span>
        <span v-else-if="locked">🔒</span>
        <span v-else>📘</span>
      </div>
    </div>
    <span class="first-tile__title">{{ first.title }}</span>
  </div>
</template>

<style scoped>
.first-tile {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-2);
  cursor: pointer;
  user-select: none;
}

.first-tile--locked {
  opacity: 0.45;
  cursor: not-allowed;
}

.first-tile__ring-wrapper {
  position: relative;
  width: 64px;
  height: 64px;
}

.first-tile__ring {
  width: 64px;
  height: 64px;
  transform: rotate(-90deg);
}

.first-tile__ring-bg {
  stroke: var(--color-medium-grey);
  stroke-width: 2.5;
  fill: none;
}

.first-tile__ring-fill {
  stroke: var(--color-swiss-orange);
  stroke-width: 2.5;
  fill: none;
  stroke-linecap: round;
  transition: stroke-dasharray 0.4s ease;
}

.first-tile--completed .first-tile__ring-bg {
  stroke: var(--color-app-green);
}

.first-tile__icon {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
}

.first-tile__title {
  font-size: var(--font-size-tiny);
  font-weight: 600;
  line-height: var(--line-height-tiny);
  color: var(--color-swiss-black);
  text-align: center;
  max-width: 64px;
}
</style>
