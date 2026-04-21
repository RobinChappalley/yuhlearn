import { ref } from 'vue'

const LS_KEY = 'yuhlearn_rewards'

function loadAll() {
  try {
    const raw = localStorage.getItem(LS_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

function saveAll(rewards) {
  localStorage.setItem(LS_KEY, JSON.stringify(rewards))
}

const rewards = ref(loadAll())

export function useReward() {

  function hasReward(firstId) {
    return rewards.value.some((r) => r.firstId === firstId)
  }

  function claimReward(firstId, pocketId, rewardConfig) {
    if (hasReward(firstId)) return

    const now = new Date()
    const expiresAt = new Date(now)
    expiresAt.setDate(expiresAt.getDate() + (rewardConfig?.boostDurationDays ?? 14))

    const reward = {
      id: `reward-${firstId}-${Date.now()}`,
      firstId,
      pocketId,
      boostPercent: rewardConfig?.boostPercent ?? 1,
      durationDays: rewardConfig?.boostDurationDays ?? 14,
      maxInterestChf: 500,
      unlockedAt: now.toISOString(),
      expiresAt: expiresAt.toISOString(),
    }

    rewards.value = [...rewards.value, reward]
    saveAll(rewards.value)
    return reward
  }

  function getActiveReward(pocketId) {
    const now = new Date()
    return rewards.value.find(
      (r) => r.pocketId === pocketId && new Date(r.expiresAt) > now,
    ) ?? null
  }

  return { rewards, hasReward, claimReward, getActiveReward }
}
