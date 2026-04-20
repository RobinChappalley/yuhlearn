import { ref } from 'vue'
import firsts from '@/data/firsts.json'

const LS_KEY = 'yuhlearn_progress'

function loadAll() {
  try {
    const raw = localStorage.getItem(LS_KEY)
    return raw ? JSON.parse(raw) : {}
  } catch {
    return {}
  }
}

function saveAll(all) {
  localStorage.setItem(LS_KEY, JSON.stringify(all))
}

function emptyProgress(firstId) {
  return {
    firstId,
    completedTiles: [],
    quizPassed: false,
    completed: false,
    completedAt: null,
  }
}

const all = ref(loadAll())

export function useProgress() {

  function getProgress(firstId) {
    return all.value[firstId] ?? emptyProgress(firstId)
  }

  function markTileComplete(firstId, tileId) {
    const p = { ...getProgress(firstId) }
    if (!p.completedTiles.includes(tileId)) {
      p.completedTiles = [...p.completedTiles, tileId]
    }
    all.value = { ...all.value, [firstId]: p }
    saveAll(all.value)
  }

  function markQuizPassed(firstId) {
    const p = { ...getProgress(firstId) }
    p.quizPassed = true
    p.completed = true
    p.completedAt = new Date().toISOString()
    all.value = { ...all.value, [firstId]: p }
    saveAll(all.value)
  }

  function isTileLocked(firstId, tileId) {
    const first = firsts.firsts.find((f) => f.id === firstId)
    if (!first) return true

    const allTiles = [...first.videos.map((v) => v.id), 'test']
    const tileIndex = allTiles.indexOf(tileId)
    if (tileIndex === 0) return false

    if (tileId === 'test') {
      const p = getProgress(firstId)
      return first.videos.some((v) => !p.completedTiles.includes(v.id))
    }

    const prevTileId = allTiles[tileIndex - 1]
    const p = getProgress(firstId)
    return !p.completedTiles.includes(prevTileId)
  }

  function isFirstComplete(firstId) {
    return getProgress(firstId).completed === true
  }

  function tilesCompletedCount(firstId) {
    return getProgress(firstId).completedTiles.length
  }

  function totalTilesCount(firstId) {
    const first = firsts.firsts.find((f) => f.id === firstId)
    if (!first) return 0
    return first.videos.length + 1
  }

  function progressPercent(firstId) {
    const total = totalTilesCount(firstId)
    if (!total) return 0
    return Math.round((tilesCompletedCount(firstId) / total) * 100)
  }

  return {
    getProgress,
    markTileComplete,
    markQuizPassed,
    isTileLocked,
    isFirstComplete,
    tilesCompletedCount,
    totalTilesCount,
    progressPercent,
  }
}
