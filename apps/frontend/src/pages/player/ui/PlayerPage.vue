<script setup>
import { computed, ref, onMounted, onBeforeUnmount } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { YoutubePlayer } from '@/widgets/youtube-player'
import firsts from '@/data/firsts.json'

const route = useRoute()
const router = useRouter()

const first = computed(() => firsts.firsts.find((f) => f.id === route.params.id) ?? null)
const videos = computed(() => first.value?.videos.filter((v) => v.videoID) ?? [])

const playerRefs = ref([])
const itemRefs = ref([])
const activeIndex = ref(0)
const isMuted = ref(false) // On part avec le son activé (comportement TikTok/Insta)
const isHolding = ref(false)
const showMuteHint = ref(false)
const showUnmuteHint = ref(false) // Si l'autoplay avec son est bloqué

let observer = null
let longPressTimer = null
let hasActivated = false
let pointerStart = null

const LONG_PRESS_MS = 200
const MOVE_THRESHOLD_PX = 10

function getPlayer(index) {
  return playerRefs.value[index]
}

function applySoundState(player) {
  if (!player) return
  if (isMuted.value) {
    player.mute()
  } else {
    // Tente d'activer le son. Si le navigateur refuse, on retombe en muted.
    try {
      player.unmute()
    } catch {
      isMuted.value = true
      player.mute()
      showUnmuteHint.value = true
    }
  }
}

function activateVideo(index) {
  if (index === activeIndex.value && hasActivated) return
  hasActivated = true

  // Pause + mute la vidéo précédente
  if (index !== activeIndex.value) {
    const prev = getPlayer(activeIndex.value)
    prev?.pause()
    prev?.mute()
  }

  activeIndex.value = index
  isHolding.value = false

  const player = getPlayer(index)
  player?.playFromStart()
  applySoundState(player)
}

function clearLongPress() {
  if (longPressTimer) {
    clearTimeout(longPressTimer)
    longPressTimer = null
  }
}

function onTapStart(e) {
  pointerStart = { x: e.clientX, y: e.clientY }
  longPressTimer = setTimeout(() => {
    longPressTimer = null
    isHolding.value = true
    getPlayer(activeIndex.value)?.pause()
  }, LONG_PRESS_MS)
}

function onPointerMove(e) {
  if (!pointerStart) return
  const dx = Math.abs(e.clientX - pointerStart.x)
  const dy = Math.abs(e.clientY - pointerStart.y)
  // Si l'utilisateur bouge (scroll), on annule le long press
  if (dx > MOVE_THRESHOLD_PX || dy > MOVE_THRESHOLD_PX) {
    clearLongPress()
  }
}

function onTapEnd() {
  pointerStart = null

  if (isHolding.value) {
    // Relâchement d'un long press : on reprend la lecture, on ne touche pas au son
    isHolding.value = false
    getPlayer(activeIndex.value)?.play()
    return
  }

  if (longPressTimer) {
    // Tap court : toggle son
    clearLongPress()
    toggleMute()
  }
}

function onTapCancel() {
  clearLongPress()
  pointerStart = null
  if (isHolding.value) {
    isHolding.value = false
    getPlayer(activeIndex.value)?.play()
  }
}

function toggleMute() {
  const player = getPlayer(activeIndex.value)
  isMuted.value = !isMuted.value
  if (isMuted.value) {
    player?.mute()
  } else {
    player?.unmute()
  }
  showUnmuteHint.value = false
  showMuteHint.value = true
  setTimeout(() => { showMuteHint.value = false }, 1200)
}

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && entry.intersectionRatio >= 0.6) {
        const index = Number(entry.target.dataset.index)
        activateVideo(index)
      }
    })
  }, { threshold: 0.6 })

  itemRefs.value.forEach((el) => el && observer.observe(el))
})

onBeforeUnmount(() => {
  observer?.disconnect()
  clearLongPress()
})
</script>

<template>
  <div class="player">
    <button
      class="player__back"
      @click="router.push({ name: 'first-detail', params: { id: route.params.id } })"
    >←</button>

    <div class="player__feed">
      <div
        v-for="(video, index) in videos"
        :key="video.id"
        :ref="(el) => { itemRefs[index] = el }"
        :data-index="index"
        class="player__item"
        @pointerdown="onTapStart"
        @pointermove="onPointerMove"
        @pointerup="onTapEnd"
        @pointercancel="onTapCancel"
        @pointerleave="onTapCancel"
      >
        <YoutubePlayer
          :ref="(el) => { playerRefs[index] = el }"
          :video-id="video.videoID"
        />

        <Transition name="hint">
          <div v-if="showMuteHint && activeIndex === index" class="player__hint">
            {{ isMuted ? '🔇' : '🔊' }}
          </div>
        </Transition>

        <Transition name="hint">
          <div v-if="showUnmuteHint && activeIndex === index" class="player__unmute-hint">
            🔇 Tap pour activer le son
          </div>
        </Transition>

        <div class="player__item-info">
          <p class="player__item-first">{{ first?.title }}</p>
          <p class="player__item-title">{{ video.title }}</p>
        </div>

        <div v-if="isHolding && activeIndex === index" class="player__paused">▐▐</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.player {
  height: 100dvh;
  background: #000;
  overflow: hidden;
}

.player__back {
  position: fixed;
  top: calc(env(safe-area-inset-top) + 16px);
  left: 16px;
  z-index: 10;
  background: rgba(0, 0, 0, 0.5);
  border: none;
  color: #fff;
  font-size: 20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(4px);
}

.player__feed {
  height: 100dvh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  overscroll-behavior: none;
  scrollbar-width: none;
}

.player__feed::-webkit-scrollbar { display: none; }

.player__item {
  position: relative;
  height: 100dvh;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  cursor: pointer;
  user-select: none;
  touch-action: pan-y; /* autorise le scroll vertical, bloque le reste */
}

.player__item-info {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: var(--space-6) var(--space-5);
  background: linear-gradient(transparent, rgba(0,0,0,0.7));
  pointer-events: none;
}

.player__item-first {
  font-size: var(--font-size-small);
  font-weight: 600;
  color: rgba(255,255,255,0.7);
  margin: 0 0 var(--space-1);
}

.player__item-title {
  font-size: var(--font-size-title-xs);
  font-weight: 700;
  color: #fff;
  margin: 0;
}

.player__hint {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 48px;
  pointer-events: none;
}

.player__unmute-hint {
  position: absolute;
  top: calc(env(safe-area-inset-top) + 70px);
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0,0,0,0.6);
  color: #fff;
  padding: 8px 14px;
  border-radius: 20px;
  font-size: 14px;
  pointer-events: none;
  backdrop-filter: blur(4px);
}

.player__paused {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 40px;
  color: rgba(255,255,255,0.8);
  pointer-events: none;
}

.hint-enter-active, .hint-leave-active { transition: opacity 0.2s ease; }
.hint-enter-from, .hint-leave-to { opacity: 0; }
</style>
