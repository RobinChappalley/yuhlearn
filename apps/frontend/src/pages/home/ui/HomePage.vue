<script setup>
import { computed, ref, watch, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
import { useGoal } from '@/entities/goal'
import { useProgress } from '@/entities/progress'
import { GoalCard } from '@/widgets/goal-card'
import { GoalTabs } from '@/widgets/goal-tabs'
import { FirstTile } from '@/widgets/first-tile'
import firsts from '@/data/firsts.json'

const router = useRouter()
const { goals, daysLeft, progressPercent: goalPercent, removeGoal } = useGoal()
const { isFirstComplete, progressPercent: firstPercent } = useProgress()

const activeGoalId = ref(goals.value[0]?.id ?? null)

const activeGoal = computed(
  () => goals.value.find((g) => g.id === activeGoalId.value) ?? goals.value[0] ?? null
)

// If active goal disappears (closed) or goals list changes, keep a valid selection
watch(goals, (list) => {
  if (!list.find((g) => g.id === activeGoalId.value)) {
    activeGoalId.value = list[0]?.id ?? null
  }
}, { deep: true })

function selectGoal(id) {
  activeGoalId.value = id
}

// Delete confirmation modal
const CONFIRM_DELAY = 5
const pendingDeleteId = ref(null)
const countdown = ref(CONFIRM_DELAY)
let countdownTimer = null

const pendingDeleteGoal = computed(
  () => goals.value.find((g) => g.id === pendingDeleteId.value) ?? null
)

function closeGoal(id) {
  pendingDeleteId.value = id
  countdown.value = CONFIRM_DELAY
  clearInterval(countdownTimer)
  countdownTimer = setInterval(() => {
    countdown.value--
    if (countdown.value <= 0) {
      clearInterval(countdownTimer)
    }
  }, 1000)
}

function cancelDelete() {
  pendingDeleteId.value = null
  clearInterval(countdownTimer)
}

function confirmDelete() {
  if (countdown.value > 0 || !pendingDeleteId.value) return
  removeGoal(pendingDeleteId.value)
  pendingDeleteId.value = null
}

onBeforeUnmount(() => clearInterval(countdownTimer))

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
      <div v-if="activeGoal" class="home__goals">
        <GoalTabs
          :goals="goals"
          :active-id="activeGoalId"
          @select="selectGoal"
          @close="closeGoal"
          @add="createGoal"
        />
        <GoalCard
          :goal="activeGoal"
          :days-left="daysLeft(activeGoal)"
          :progress-percent="goalPercent(activeGoal)"
        />
      </div>

      <div
        v-else
        class="home__create-goal-card"
        @click="createGoal"
      >
        <div class="home__create-goal-icon">🎯</div>
        <h3 class="home__create-goal-title">Create your first goal</h3>
        <p class="home__create-goal-desc">Set a savings target and reach it step by step.</p>
        <button class="home__create-goal-btn">Get started</button>
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

    <!-- Delete confirmation modal -->
    <Transition name="modal">
      <div
        v-if="pendingDeleteGoal"
        class="home__modal-backdrop"
        @click.self="cancelDelete"
      >
        <div class="home__modal" role="dialog" aria-modal="true">
          <div class="home__modal-icon">⚠️</div>
          <h3 class="home__modal-title">Delete this goal?</h3>
          <p class="home__modal-desc">
            You're about to delete <strong>{{ pendingDeleteGoal.name }}</strong>. This is a big step — all progress linked to this goal will be lost and can't be recovered.
          </p>
          <div class="home__modal-actions">
            <button class="home__modal-btn home__modal-btn--cancel" @click="cancelDelete">
              Cancel
            </button>
            <button
              class="home__modal-btn home__modal-btn--confirm"
              :disabled="countdown > 0"
              @click="confirmDelete"
            >
              <span v-if="countdown > 0">Delete ({{ countdown }}s)</span>
              <span v-else>Delete</span>
            </button>
          </div>
        </div>
      </div>
    </Transition>
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

.home__goals {
  display: flex;
  flex-direction: column;
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

/* Delete confirmation modal */
.home__modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(26, 26, 46, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-5);
  z-index: 100;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
}

.home__modal {
  background: var(--color-swiss-white);
  border-radius: 20px;
  padding: var(--space-6);
  max-width: 360px;
  width: 100%;
  text-align: center;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);
}

.home__modal-icon {
  font-size: 48px;
  margin-bottom: var(--space-3);
}

.home__modal-title {
  font-size: var(--font-size-title-sm);
  font-weight: 700;
  color: var(--color-swiss-black);
  margin: 0 0 var(--space-3);
  line-height: var(--line-height-title-sm);
}

.home__modal-desc {
  font-size: var(--font-size-body);
  line-height: var(--line-height-body);
  color: var(--color-swiss-black-60);
  margin: 0 0 var(--space-6);
}

.home__modal-desc strong {
  color: var(--color-swiss-black);
  font-weight: 700;
}

.home__modal-actions {
  display: flex;
  gap: var(--space-3);
}

.home__modal-btn {
  flex: 1;
  padding: var(--space-4) var(--space-4);
  border: none;
  border-radius: 999px;
  font-size: var(--font-size-body-big);
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.12s ease, opacity 0.12s ease, background 0.15s ease;
  font-family: inherit;
}

.home__modal-btn--cancel {
  background: var(--color-extra-light-grey);
  color: var(--color-swiss-black);
}

.home__modal-btn--cancel:active {
  transform: scale(0.97);
}

.home__modal-btn--confirm {
  background: #e63946;
  color: var(--color-swiss-white);
}

.home__modal-btn--confirm:disabled {
  background: #f0a5ac;
  cursor: not-allowed;
}

.home__modal-btn--confirm:not(:disabled):active {
  transform: scale(0.97);
  opacity: 0.92;
}

/* Modal transition */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.2s ease;
}

.modal-enter-active .home__modal,
.modal-leave-active .home__modal {
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .home__modal,
.modal-leave-to .home__modal {
  transform: scale(0.92);
  opacity: 0;
}
</style>
