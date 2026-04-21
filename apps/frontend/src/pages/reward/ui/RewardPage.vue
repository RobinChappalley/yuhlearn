<script setup>
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useGoal } from '@/entities/goal'
import { useReward } from '@/features/claim-reward'
import { RewardCard } from '@/widgets/reward-card'
import { PocketSelector } from '@/widgets/pocket-selector'
import firsts from '@/data/firsts.json'

const route = useRoute()
const router = useRouter()
const firstId = route.params.id

const first = computed(() => firsts.firsts.find((f) => f.id === firstId) ?? null)
const rewardConfig = computed(() => first.value?.reward ?? null)

const { goals } = useGoal()
const { claimReward, hasReward } = useReward()

const selectedPocketId = ref(null)
const claimed = ref(hasReward(firstId))

function claim() {
  if (!selectedPocketId.value || !rewardConfig.value) return
  claimReward(firstId, selectedPocketId.value, rewardConfig.value)
  claimed.value = true
}
</script>

<template>
  <div class="reward">
    <header class="reward__header">
      <button class="reward__back" @click="router.push('/')">←</button>
      <span class="reward__header-title">{{ first?.title }}</span>
    </header>

    <div class="reward__content">
      <div class="reward__celebration" aria-hidden="true">
        <span class="reward__star reward__star--1">⭐</span>
        <span class="reward__star reward__star--2">✨</span>
        <span class="reward__star reward__star--3">🌟</span>
      </div>

      <RewardCard v-if="rewardConfig" :reward="rewardConfig" />

      <template v-if="!claimed">
        <p class="reward__section-label">Apply to which pocket?</p>
        <PocketSelector
          :goals="goals"
          :selected-id="selectedPocketId"
          @select="(id) => (selectedPocketId = id)"
        />

        <button
          class="reward__cta"
          :class="{ 'reward__cta--disabled': !selectedPocketId }"
          :disabled="!selectedPocketId"
          @click="claim"
        >
          Claim boost
        </button>
      </template>

      <template v-else>
        <div class="reward__success">
          <p class="reward__success-text">Boost applied! 🎉</p>
          <button class="reward__home-btn" @click="router.push('/')">Back to Home</button>
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped>
.reward {
  min-height: 100dvh;
  background: var(--color-extra-light-grey);
  max-width: var(--max-width);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}

.reward__header {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  padding: var(--space-4) var(--space-5);
  background: var(--color-swiss-white);
  border-bottom: 1px solid var(--color-medium-grey);
}

.reward__back {
  background: none;
  border: none;
  font-size: 22px;
  cursor: pointer;
  color: var(--color-swiss-black);
  padding: 0;
  line-height: 1;
}

.reward__header-title {
  font-size: var(--font-size-title-xs);
  font-weight: 700;
  color: var(--color-swiss-black);
}

.reward__content {
  flex: 1;
  padding: var(--space-6) var(--space-5);
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
}

.reward__celebration {
  display: flex;
  justify-content: center;
  gap: var(--space-4);
  animation: pop 0.6s ease both;
}

.reward__star {
  font-size: 36px;
  display: inline-block;
}

.reward__star--1 { animation: bounce 1.2s ease infinite 0s; }
.reward__star--2 { animation: bounce 1.2s ease infinite 0.2s; }
.reward__star--3 { animation: bounce 1.2s ease infinite 0.4s; }

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

@keyframes pop {
  from { transform: scale(0.5); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}

.reward__section-label {
  font-size: var(--font-size-subtitle2);
  font-weight: 600;
  color: var(--color-swiss-black);
  margin: 0;
}

.reward__cta {
  width: 100%;
  padding: var(--space-4);
  background: var(--color-swiss-orange);
  color: var(--color-swiss-white);
  border: none;
  border-radius: 12px;
  font-family: var(--font-family);
  font-size: var(--font-size-subtitle2);
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s ease;
}

.reward__cta--disabled {
  background: var(--color-swiss-black-20);
  cursor: not-allowed;
}

.reward__success {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-6);
  padding-top: var(--space-6);
}

.reward__success-text {
  font-size: var(--font-size-title-sm);
  font-weight: 700;
  color: var(--color-app-green);
  margin: 0;
  line-height: var(--line-height-title-sm);
}

.reward__home-btn {
  padding: var(--space-4) var(--space-8);
  background: var(--color-swiss-black);
  color: var(--color-swiss-white);
  border: none;
  border-radius: 12px;
  font-family: var(--font-family);
  font-size: var(--font-size-subtitle2);
  font-weight: 600;
  cursor: pointer;
}
</style>
