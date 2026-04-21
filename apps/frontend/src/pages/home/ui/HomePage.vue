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

function createGoal() {
  router.push({ name: 'goal-create' })
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

      <button
        v-if="primaryGoal"
        class="home__add-goal"
        @click="createGoal"
      >
        <span class="home__add-goal-icon">+</span>
        <span class="home__add-goal-text">Nouvel objectif</span>
      </button>

      <div
        v-else
        class="home__create-goal-card"
        @click="createGoal"
      >
        <div class="home__create-goal-icon">🎯</div>
        <h3 class="home__create-goal-title">Crée ton premier objectif</h3>
        <p class="home__create-goal-desc">Fixe-toi un but d'épargne et atteins-le étape par étape.</p>
        <button class="home__create-goal-btn">Commencer</button>
      </div>

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

.home__add-goal {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  background: var(--color-swiss-white);
  border: 2px dashed var(--color-swiss-orange-40);
  border-radius: 16px;
  padding: var(--space-4) var(--space-5);
  cursor: pointer;
  transition: border-color 0.15s ease, background 0.15s ease;
}

.home__add-goal:active {
  background: var(--color-swiss-orange-20);
  border-color: var(--color-swiss-orange);
}

.home__add-goal-icon {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-swiss-orange);
  color: var(--color-swiss-white);
  border-radius: 50%;
  font-size: 16px;
  font-weight: 700;
}

.home__add-goal-text {
  font-size: var(--font-size-body-big);
  font-weight: 600;
  color: var(--color-swiss-orange);
}

.home__create-goal-card {
  background: linear-gradient(135deg, var(--color-swiss-lilac) 0%, var(--color-swiss-dusk-pink) 100%);
  border-radius: 16px;
  padding: var(--space-6);
  text-align: center;
  cursor: pointer;
  transition: transform 0.15s ease;
}

.home__create-goal-card:active {
  transform: scale(0.98);
}

.home__create-goal-icon {
  font-size: 48px;
  margin-bottom: var(--space-4);
}

.home__create-goal-title {
  font-size: var(--font-size-title-sm);
  font-weight: 700;
  color: var(--color-swiss-black);
  margin: 0 0 var(--space-2);
  line-height: var(--line-height-title-sm);
}

.home__create-goal-desc {
  font-size: var(--font-size-body);
  color: var(--color-swiss-black-60);
  margin: 0 0 var(--space-5);
  line-height: var(--line-height-body);
}

.home__create-goal-btn {
  display: inline-block;
  background: var(--color-swiss-orange);
  color: var(--color-swiss-white);
  border: none;
  padding: var(--space-3) var(--space-6);
  border-radius: 999px;
  font-size: var(--font-size-body-big);
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.12s ease, opacity 0.12s ease;
}

.home__create-goal-btn:active {
  transform: scale(0.97);
  opacity: 0.92;
}
</style>
