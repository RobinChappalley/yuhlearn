import { ref } from 'vue'
import yuhMock from '@/data/yuh-mock.json'

const LS_KEY = 'yuhlearn_goals'

function loadFromStorage() {
  try {
    const raw = localStorage.getItem(LS_KEY)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

function saveToStorage(goals) {
  localStorage.setItem(LS_KEY, JSON.stringify(goals))
}

function mergeWithMock(stored) {
  return yuhMock.pockets.map((pocket) => {
    const existing = stored?.find((g) => g.pocketId === pocket.id)
    if (existing) return existing
    return {
      id: pocket.id,
      pocketId: pocket.id,
      name: pocket.name,
      targetAmount: pocket.targetAmount,
      currentAmount: pocket.currentAmount,
      currency: pocket.currency,
      startDate: pocket.startDate,
      endDate: pocket.endDate,
      createdAt: new Date().toISOString(),
    }
  })
}

const _stored = loadFromStorage()
const _merged = mergeWithMock(_stored)
if (!_stored) saveToStorage(_merged)

const goals = ref(_merged)

export function useGoal() {

  function daysLeft(goal) {
    const end = new Date(goal.endDate)
    const now = new Date()
    const diff = Math.ceil((end - now) / (1000 * 60 * 60 * 24))
    return Math.max(0, diff)
  }

  function progressPercent(goal) {
    if (!goal.targetAmount) return 0
    return Math.min(100, Math.round((goal.currentAmount / goal.targetAmount) * 100))
  }

  return { goals, daysLeft, progressPercent }
}
