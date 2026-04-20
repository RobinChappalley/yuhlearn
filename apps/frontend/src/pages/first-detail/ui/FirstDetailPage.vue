<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useProgress } from '@/entities/progress'
import { ModuleTile } from '@/widgets/module-tile'
import firsts from '@/data/firsts.json'

const route = useRoute()
const router = useRouter()
const { isTileLocked, getProgress } = useProgress()

const first = computed(() => firsts.firsts.find((f) => f.id === route.params.id) ?? null)

const tiles = computed(() => {
  if (!first.value) return []
  const videoTiles = first.value.videos.map((v) => ({ ...v, type: 'video' }))
  return [...videoTiles, { id: 'test', type: 'test', title: 'Test your knowledge' }]
})

function isTileCompleted(tileId) {
  if (!first.value) return false
  if (tileId === 'test') return getProgress(first.value.id).quizPassed
  return getProgress(first.value.id).completedTiles.includes(tileId)
}

function handleTileTap(tile) {
  if (tile.type === 'test') {
    router.push({ name: 'quiz', params: { id: first.value.id } })
  } else {
    if (isTileLocked(first.value.id, tile.id)) return
    router.push({ name: 'video-player', params: { id: first.value.id, tileId: tile.id || 'feed' } })
  }
}
</script>

<template>
  <div v-if="first" class="detail">
    <header class="detail__header">
      <button class="detail__back" @click="router.push('/')">←</button>
      <span class="detail__title">{{ first.title }}</span>
    </header>

    <div class="detail__desc">{{ first.description }}</div>

    <div class="detail__grid">
      <ModuleTile
        v-for="(tile, index) in tiles"
        :key="tile.id"
        :tile="tile"
        :index="index"
        :locked="isTileLocked(first.id, tile.id)"
        :completed="isTileCompleted(tile.id)"
        @click="handleTileTap(tile)"
      />
    </div>
  </div>

  <div v-else class="detail__error">First not found.</div>
</template>

<style scoped>
.detail {
  min-height: 100dvh;
  background: var(--color-extra-light-grey);
  max-width: var(--max-width);
  margin: 0 auto;
}

.detail__header {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  padding: var(--space-4) var(--space-5);
  background: var(--color-swiss-white);
  border-bottom: 1px solid var(--color-medium-grey);
  position: sticky;
  top: 0;
  z-index: 10;
}

.detail__back {
  background: none;
  border: none;
  font-size: 22px;
  cursor: pointer;
  color: var(--color-swiss-black);
  padding: 0;
  line-height: 1;
}

.detail__title {
  font-size: var(--font-size-title-xs);
  font-weight: 700;
  color: var(--color-swiss-black);
}

.detail__desc {
  padding: var(--space-5);
  font-size: var(--font-size-body-big);
  color: var(--color-swiss-black-60);
  line-height: var(--line-height-body-big);
}

.detail__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-4);
  padding: 0 var(--space-5) var(--space-8);
}

.detail__error {
  padding: var(--space-8);
  text-align: center;
  color: var(--color-swiss-black-60);
}
</style>
