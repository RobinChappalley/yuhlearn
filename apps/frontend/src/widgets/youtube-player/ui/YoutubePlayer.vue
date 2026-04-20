<script setup>
import { onMounted, onBeforeUnmount, ref, watch } from 'vue'

const props = defineProps({
  videoId: {
    type: String,
    required: true,
  },
  autoplay: {
    type: Boolean,
    default: true,
  },
})

const emit = defineEmits(['ended', 'ready'])

const containerId = `yt-player-${Math.random().toString(36).slice(2)}`
let player = null

function onPlayerReady() {
  emit('ready')
  if (props.autoplay) player.playVideo()
}

function onPlayerStateChange(event) {
  if (event.data === window.YT?.PlayerState?.ENDED) {
    emit('ended')
  }
}

function createPlayer() {
  player = new window.YT.Player(containerId, {
    videoId: props.videoId,
    playerVars: {
      autoplay: props.autoplay ? 1 : 0,
      playsinline: 1,
      controls: 1,
      modestbranding: 1,
      rel: 0,
    },
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange,
    },
  })
}

function loadYTApi() {
  return new Promise((resolve) => {
    if (window.YT && window.YT.Player) {
      resolve()
      return
    }
    const tag = document.createElement('script')
    tag.src = 'https://www.youtube.com/iframe_api'
    const firstScript = document.getElementsByTagName('script')[0]
    firstScript.parentNode.insertBefore(tag, firstScript)
    window.onYouTubeIframeAPIReady = () => resolve()
  })
}

onMounted(async () => {
  await loadYTApi()
  createPlayer()
})

watch(() => props.videoId, (newId) => {
  if (player && player.loadVideoById) {
    player.loadVideoById(newId)
  }
})

onBeforeUnmount(() => {
  if (player && player.destroy) player.destroy()
})
</script>

<template>
  <div class="yt-wrapper">
    <div :id="containerId" class="yt-frame"></div>
  </div>
</template>

<style scoped>
.yt-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}

.yt-frame {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}
</style>
