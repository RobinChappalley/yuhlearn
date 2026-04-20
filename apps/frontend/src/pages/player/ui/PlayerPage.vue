<script setup>
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useProgress } from '@/entities/progress'
import { YoutubePlayer } from '@/widgets/youtube-player'
import { VideoOverlay } from '@/widgets/video-overlay'
import firsts from '@/data/firsts.json'

const route = useRoute()
const router = useRouter()
const { markTileComplete } = useProgress()

const first = computed(() => firsts.firsts.find((f) => f.id === route.params.id) ?? null)
const videos = computed(() => first.value?.videos ?? [])

const currentIndex = computed(() =>
  videos.value.findIndex((v) => v.id === route.params.tileId),
)
const currentVideo = computed(() => videos.value[currentIndex.value] ?? null)

const showToast = ref(false)

function onVideoEnded() {
  if (!first.value || !currentVideo.value) return
  markTileComplete(first.value.id, currentVideo.value.id)

  const isLast = currentIndex.value === videos.value.length - 1
  if (isLast) {
    showToast.value = true
    setTimeout(() => {
      showToast.value = false
    }, 3000)
  } else {
    goNext()
  }
}

function goNext() {
  const next = videos.value[currentIndex.value + 1]
  if (next) {
    router.replace({ name: 'video-player', params: { id: first.value.id, tileId: next.id } })
  }
}

function goPrev() {
  const prev = videos.value[currentIndex.value - 1]
  if (prev) {
    router.replace({ name: 'video-player', params: { id: first.value.id, tileId: prev.id } })
  }
}

function goBack() {
  router.push({ name: 'first-detail', params: { id: first.value.id } })
}
</script>

<template>
  <div class="player">
    <YoutubePlayer
      v-if="currentVideo"
      :video-id="currentVideo.youtubeId"
      :autoplay="true"
      @ended="onVideoEnded"
    />

    <VideoOverlay
      v-if="currentVideo && first"
      :title="currentVideo.title"
      :first-title="first.title"
      :has-prev="currentIndex > 0"
      :has-next="currentIndex < videos.length - 1"
      @back="goBack"
      @prev="goPrev"
      @next="goNext"
    />

    <Transition name="toast">
      <div v-if="showToast" class="player__toast">
        Test unlocked 🎉
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.player {
  position: fixed;
  inset: 0;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;
}

.player__toast {
  position: absolute;
  bottom: var(--space-10);
  left: 50%;
  transform: translateX(-50%);
  background: var(--color-swiss-orange);
  color: var(--color-swiss-white);
  font-size: var(--font-size-body-big);
  font-weight: 600;
  padding: var(--space-3) var(--space-6);
  border-radius: 99px;
  white-space: nowrap;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.toast-enter-active,
.toast-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(12px);
}
</style>
