<script setup>
defineProps({
  tile: {
    type: Object,
    required: true,
  },
  index: {
    type: Number,
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
})
</script>

<template>
  <div
    class="module-tile"
    :class="{
      'module-tile--locked': locked,
      'module-tile--completed': completed,
      'module-tile--test': tile.type === 'test',
    }"
  >
    <div class="module-tile__badge">{{ index + 1 }}</div>

    <div class="module-tile__icon">
      <span v-if="completed">✓</span>
      <span v-else-if="locked">🔒</span>
      <span v-else-if="tile.type === 'test'">📝</span>
      <span v-else>▶</span>
    </div>

    <span class="module-tile__label">
      {{ tile.type === 'test' ? 'Test' : tile.title }}
    </span>
  </div>
</template>

<style scoped>
.module-tile {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  background: var(--color-swiss-white);
  border-radius: 12px;
  padding: var(--space-4) var(--space-2);
  min-height: 96px;
  position: relative;
  cursor: pointer;
  box-shadow: var(--shadow-purple);
  transition: opacity 0.3s ease, background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
}

.module-tile--locked {
  background: var(--color-light-grey);
  cursor: not-allowed;
  box-shadow: none;
  background-image: repeating-linear-gradient(
    45deg,
    transparent,
    transparent 4px,
    var(--color-medium-grey) 4px,
    var(--color-medium-grey) 5px
  );
}

.module-tile--completed {
  border: 2px solid var(--color-app-green);
}

.module-tile--test {
  background: var(--color-swiss-orange-20);
}

.module-tile--test.module-tile--locked {
  background: var(--color-light-grey);
}

.module-tile__badge {
  position: absolute;
  top: var(--space-2);
  left: var(--space-2);
  font-size: var(--font-size-tiny);
  font-weight: 700;
  color: var(--color-swiss-black-60);
  line-height: 1;
}

.module-tile__icon {
  font-size: 28px;
  line-height: 1;
}

.module-tile__label {
  font-size: var(--font-size-tiny);
  font-weight: 600;
  color: var(--color-swiss-black);
  text-align: center;
  line-height: var(--line-height-tiny);
  max-width: 80px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
