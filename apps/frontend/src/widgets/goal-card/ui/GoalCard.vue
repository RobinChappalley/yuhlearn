<script setup>
defineProps({
  goal: {
    type: Object,
    required: true,
  },
  daysLeft: {
    type: Number,
    required: true,
  },
  progressPercent: {
    type: Number,
    required: true,
  },
})
</script>

<template>
  <div class="goal-card">
    <div class="goal-card__header">
      <span class="goal-card__name">{{ goal.name }}</span>
      <span class="goal-card__days">{{ daysLeft }}d left</span>
    </div>
    <div class="goal-card__amounts">
      <span class="goal-card__current">{{ goal.currency }} {{ goal.currentAmount.toLocaleString() }}</span>
      <span class="goal-card__target">/ {{ goal.targetAmount.toLocaleString() }}</span>
    </div>
    <div class="goal-card__bar-track">
      <div class="goal-card__bar-fill" :style="{ width: progressPercent + '%' }"></div>
    </div>
    <div class="goal-card__percent">{{ progressPercent }}%</div>
  </div>
</template>

<style scoped>
.goal-card {
  background: var(--color-swiss-white);
  border-radius: 16px;
  padding: var(--space-5) var(--space-6);
  box-shadow: var(--shadow-purple);
  width: 100%;
}

.goal-card__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--space-2);
}

.goal-card__name {
  font-size: var(--font-size-title-xs);
  font-weight: 700;
  line-height: var(--line-height-title-xs);
  color: var(--color-swiss-black);
}

.goal-card__days {
  font-size: var(--font-size-small);
  font-weight: 600;
  color: var(--color-swiss-black-60);
}

.goal-card__amounts {
  margin-bottom: var(--space-4);
}

.goal-card__current {
  font-size: var(--font-size-title-md);
  font-weight: 700;
  line-height: var(--line-height-title-md);
  color: var(--color-swiss-black);
}

.goal-card__target {
  font-size: var(--font-size-body-big);
  font-weight: 400;
  color: var(--color-swiss-black-60);
  margin-left: var(--space-1);
}

.goal-card__bar-track {
  height: 6px;
  background: var(--color-medium-grey);
  border-radius: 99px;
  overflow: hidden;
  margin-bottom: var(--space-2);
}

.goal-card__bar-fill {
  height: 100%;
  background: var(--color-swiss-orange);
  border-radius: 99px;
  transition: width 0.4s ease;
}

.goal-card__percent {
  font-size: var(--font-size-small);
  font-weight: 600;
  color: var(--color-swiss-orange);
  text-align: right;
}
</style>
