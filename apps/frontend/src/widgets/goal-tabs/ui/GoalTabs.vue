<script setup>
const props = defineProps({
  goals: { type: Array, required: true },
  activeId: { type: String, default: null },
})

const emit = defineEmits(['select', 'close', 'add'])

function select(id) {
  emit('select', id)
}

function close(e, id) {
  e.stopPropagation()
  emit('close', id)
}

function add() {
  emit('add')
}
</script>

<template>
  <div class="goal-tabs">
    <div class="goal-tabs__scroll">
      <button
        v-for="goal in goals"
        :key="goal.id"
        class="goal-tabs__tab"
        :class="{ 'goal-tabs__tab--active': goal.id === activeId }"
        @click="select(goal.id)"
      >
        <span class="goal-tabs__icon">🎯</span>
        <span class="goal-tabs__label">{{ goal.name }}</span>
        <span
          class="goal-tabs__close"
          role="button"
          aria-label="Close tab"
          @click="close($event, goal.id)"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </span>
      </button>

      <button
        class="goal-tabs__add"
        aria-label="New goal"
        @click="add"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
          <line x1="12" y1="5" x2="12" y2="19"/>
          <line x1="5" y1="12" x2="19" y2="12"/>
        </svg>
      </button>
    </div>
  </div>
</template>

<style scoped>
.goal-tabs {
  position: relative;
  padding-top: 4px;
  margin-bottom: -1px; /* overlap so active tab merges with content */
}

.goal-tabs__scroll {
  display: flex;
  align-items: flex-end;
  gap: 2px;
  overflow-x: auto;
  overflow-y: hidden;
  scrollbar-width: none;
}

.goal-tabs__scroll::-webkit-scrollbar {
  display: none;
}

/* Browser-like tab */
.goal-tabs__tab {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  max-width: 180px;
  height: 36px;
  padding: 0 12px 0 14px;
  background: rgba(0, 0, 0, 0.04);
  color: var(--color-swiss-black-60);
  border: none;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  cursor: pointer;
  font-family: inherit;
  font-size: 13px;
  font-weight: 500;
  transition: background 0.15s ease, color 0.15s ease;
  white-space: nowrap;
}

.goal-tabs__tab:not(.goal-tabs__tab--active):hover {
  background: rgba(0, 0, 0, 0.08);
  color: var(--color-swiss-black);
}

.goal-tabs__tab--active {
  background: var(--color-swiss-white);
  color: var(--color-swiss-black);
  font-weight: 600;
  box-shadow: 0 -2px 6px rgba(0, 0, 0, 0.04);
}

/* Curved bottom corners (browser tab look) via pseudo-elements */
.goal-tabs__tab--active::before,
.goal-tabs__tab--active::after {
  content: '';
  position: absolute;
  bottom: 0;
  width: 12px;
  height: 12px;
  background: var(--color-swiss-white);
}

.goal-tabs__tab--active::before { left: -12px; }
.goal-tabs__tab--active::after { right: -12px; }

/* Inner mask to create rounded bottom corners */
.goal-tabs__tab--active > .goal-tabs__icon::before,
.goal-tabs__tab--active > .goal-tabs__icon::after {
  display: none;
}

.goal-tabs__tab--active .goal-tabs__corner-left,
.goal-tabs__tab--active .goal-tabs__corner-right {
  display: block;
}

.goal-tabs__tab--active::before {
  border-bottom-right-radius: 12px;
  box-shadow: 4px 4px 0 var(--color-swiss-white);
  background: transparent;
}

.goal-tabs__tab--active::after {
  border-bottom-left-radius: 12px;
  box-shadow: -4px 4px 0 var(--color-swiss-white);
  background: transparent;
}

.goal-tabs__icon {
  font-size: 14px;
  flex-shrink: 0;
}

.goal-tabs__label {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  min-width: 0;
}

.goal-tabs__close {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  flex-shrink: 0;
  color: inherit;
  opacity: 0.6;
  transition: background 0.15s ease, opacity 0.15s ease;
  cursor: pointer;
}

.goal-tabs__close:hover {
  background: rgba(0, 0, 0, 0.12);
  opacity: 1;
}

/* Add (+) tab */
.goal-tabs__add {
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  margin-left: 4px;
  margin-bottom: 2px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  color: var(--color-swiss-black-60);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.15s ease, color 0.15s ease;
}

.goal-tabs__add:hover {
  background: rgba(0, 0, 0, 0.06);
  color: var(--color-swiss-orange);
}

.goal-tabs__add:active {
  transform: scale(0.95);
}
</style>
