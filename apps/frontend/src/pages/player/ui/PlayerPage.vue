<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { YoutubePlayer } from '@/widgets/youtube-player'
import firsts from '@/data/firsts.json'

const route = useRoute()
const router = useRouter()

const first = computed(() => firsts.firsts.find((f) => f.id === route.params.id) ?? null)
const videos = computed(() => first.value?.videos.filter((v) => v.youtubeId) ?? [])
</script>

<template>
  <div class="player">
    <button class="player__back" @click="router.push({ name: 'first-detail', params: { id: route.params.id } })">←</button>

    <div class="player__feed">
      <div v-for="video in videos" :key="video.id" class="player__item">
        <YoutubePlayer :video-id="video.youtubeId" />
        <div class="player__item-info">
          <p class="player__item-first">{{ first?.title }}</p>
          <p class="player__item-title">{{ video.title }}</p>
        </div>
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
  scrollbar-width: none;
}

.player__feed::-webkit-scrollbar {
  display: none;
}

.player__item {
  position: relative;
  height: 100dvh;
  scroll-snap-align: start;
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
</style>
