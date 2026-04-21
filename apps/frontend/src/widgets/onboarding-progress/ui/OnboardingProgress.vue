<script setup>
const props = defineProps({
  phase: { type: Number, required: true }, // 0, 1, 2
  step: { type: Number, required: true }, // current step within phase
  total: { type: Number, required: true }, // total steps in current phase
  minutes: { type: Number, default: 15 },
})

const totalPhases = 3

function barFill(index) {
  if (index < props.phase) return 1 // completed phase: full
  if (index > props.phase) return 0 // future phase: empty
  // current phase: fraction
  if (props.total <= 1) return 1
  return props.step / props.total
}
</script>

<template>
  <div class="onboarding-progress">
    <div class="onboarding-progress__meta">
      <span class="onboarding-progress__steps">Steps {{ step }} / {{ total }}</span>
      <span class="onboarding-progress__time">{{ minutes }} mins</span>
    </div>
    <div class="onboarding-progress__bars">
      <div
        v-for="n in totalPhases"
        :key="n - 1"
        class="onboarding-progress__bar"
      >
        <div
          class="onboarding-progress__fill"
          :style="{ transform: `scaleX(${barFill(n - 1)})` }"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.onboarding-progress {
  padding: 0 24px 16px;
}

.onboarding-progress__meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.onboarding-progress__steps {
  font-size: 13px;
  font-weight: 700;
  color: #1a1a2e;
}

.onboarding-progress__time {
  font-size: 12px;
  font-weight: 600;
  color: #f2653a;
  background: rgba(242, 101, 58, 0.08);
  padding: 4px 10px;
  border-radius: 99px;
}

.onboarding-progress__bars {
  display: flex;
  gap: 8px;
}

.onboarding-progress__bar {
  flex: 1;
  height: 4px;
  border-radius: 4px;
  background: #e8e8ed;
  overflow: hidden;
}

.onboarding-progress__fill {
  height: 100%;
  width: 100%;
  background: #f2653a;
  border-radius: 4px;
  transform-origin: left;
  transition: transform 0.4s ease;
}
</style>
