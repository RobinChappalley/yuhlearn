<script setup>
defineProps({
  reward: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="reward-card">
    <div class="reward-card__badge">🎉</div>
    <h2 class="reward-card__title">Boost unlocked!</h2>
    <p class="reward-card__detail">
      +{{ reward.boostPercent }}% interest for {{ reward.boostDurationDays }} days
    </p>
    <p class="reward-card__cap">Max CHF 500 interest</p>
  </div>
</template>

<style scoped>
.reward-card {
  background: linear-gradient(135deg, var(--color-swiss-orange-20), var(--color-swiss-lilac-20));
  border-radius: 20px;
  padding: var(--space-8) var(--space-6);
  text-align: center;
  box-shadow: var(--shadow-purple);
}

.reward-card__badge {
  font-size: 48px;
  line-height: 1;
  margin-bottom: var(--space-4);
}

.reward-card__title {
  font-size: var(--font-size-title-md);
  font-weight: 700;
  line-height: var(--line-height-title-md);
  color: var(--color-swiss-black);
  margin: 0 0 var(--space-3);
}

.reward-card__detail {
  font-size: var(--font-size-subtitle1);
  font-weight: 600;
  color: var(--color-swiss-orange);
  margin: 0 0 var(--space-2);
}

.reward-card__cap {
  font-size: var(--font-size-small);
  color: var(--color-swiss-black-60);
  margin: 0;
}
</style>
