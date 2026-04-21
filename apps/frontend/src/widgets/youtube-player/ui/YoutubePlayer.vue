<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  videoId: { type: String, required: true },
})

const emit = defineEmits(['ready'])

const videoRef = ref(null)
const muted = ref(true)

// Support both Cloudinary URLs and legacy YouTube IDs
const src = props.videoId.startsWith('http')
  ? props.videoId
  : `https://www.youtube.com/embed/${props.videoId}`

function play()  { videoRef.value?.play() }
function playFromStart() {
  if (videoRef.value) {
    videoRef.value.currentTime = 0
    videoRef.value.play()
  }
}
function pause() { videoRef.value?.pause() }
function mute()  { if (videoRef.value) { videoRef.value.muted = true; muted.value = true } }
function unmute() { if (videoRef.value) { videoRef.value.muted = false; muted.value = false } }
function toggleMute() { muted.value ? unmute() : mute() }

defineExpose({ play, playFromStart, pause, mute, unmute, toggleMute })

onMounted(() => {
  emit('ready')
  // Autoplay muted (browser policy)
  if (videoRef.value) {
    videoRef.value.muted = true
    videoRef.value.play().catch(() => {})
  }
})
</script>

<template>
  <div class="video-player">
    <video
      ref="videoRef"
      :src="src"
      class="video-player__element"
      playsinline
      loop
      preload="auto"
    />
  </div>
</template>

<style scoped>
.video-player {
  width: 100%;
  height: 100%;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.video-player__element {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
