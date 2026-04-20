<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useGoal } from '@/entities/goal'
import { useProgress } from '@/entities/progress'
import { GoalCard } from '@/widgets/goal-card'
import { FirstTile } from '@/widgets/first-tile'
import firsts from '@/data/firsts.json'

const router = useRouter()
const { goals, daysLeft, progressPercent: goalPercent } = useGoal()
const { isFirstComplete, progressPercent: firstPercent } = useProgress()

const primaryGoal = computed(() => goals.value[0] ?? null)

const levels = ['beginner', 'intermediate', 'advanced']

function firstsByLevel(level) {
  return firsts.firsts.filter((f) => f.level === level)
}

function isFirstLocked(first) {
  if (first.level === 'beginner') return false
  if (first.level === 'intermediate') {
    return !firstsByLevel('beginner').every((f) => isFirstComplete(f.id))
  }
  if (first.level === 'advanced') {
    return !firstsByLevel('intermediate').every((f) => isFirstComplete(f.id))
  }
  return true
}

function navigate(first) {
  if (isFirstLocked(first)) return
  router.push({ name: 'first-detail', params: { id: first.id } })
}
</script>

<template>
  <div class="home">
    <header class="home__header">
      <span class="home__logo">YuhLearn</span>
      <div class="home__avatar">YU</div>
    </header>

    <main class="home__content">
      <GoalCard
        v-if="primaryGoal"
        :goal="primaryGoal"
        :days-left="daysLeft(primaryGoal)"
        :progress-percent="goalPercent(primaryGoal)"
      />

      <template v-for="level in levels" :key="level">
        <section v-if="firstsByLevel(level).length" class="home__section">
          <h2 class="home__section-title">{{ level.charAt(0).toUpperCase() + level.slice(1) }}</h2>
          <div class="home__grid">
            <FirstTile
              v-for="first in firstsByLevel(level)"
              :key="first.id"
              :first="first"
              :locked="isFirstLocked(first)"
              :completed="isFirstComplete(first.id)"
              :progress-percent="firstPercent(first.id)"
              @click="navigate(first)"
            />
          </div>
        </section>
      </template>
    </main>
  </div>
</template>

<style scoped>
.home {
  min-height: 100dvh;
  background: var(--color-extra-light-grey);
  max-width: var(--max-width);
  margin: 0 auto;
}

.home__header {
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--space-4) var(--space-5);
  background: var(--color-swiss-white);
  border-bottom: 1px solid var(--color-medium-grey);
}

.home__logo {
  font-size: var(--font-size-title-xs);
  font-weight: 700;
  color: var(--color-swiss-orange);
}

.home__avatar {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: var(--color-swiss-orange);
  color: var(--color-swiss-white);
  font-size: var(--font-size-tiny);
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
}

.home__content {
  padding: var(--space-5);
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}

.home__section-title {
  font-size: var(--font-size-title-xs);
  font-weight: 700;
  color: var(--color-swiss-black);
  margin: 0 0 var(--space-4);
  line-height: var(--line-height-title-xs);
}

.home__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-4);
}
</style>
