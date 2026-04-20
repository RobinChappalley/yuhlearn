<script setup>
defineProps({
  videoId: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="yt-video">
    <iframe
      :src="`https://www.youtube.com/embed/${videoId}?autoplay=1&playsinline=1&rel=0&mute=1`"
      :key="videoId"
      allowfullscreen
      frameborder="0"
    />
  </div>
</template>

<style scoped>
.yt-video {
  width: 100%;
  height: 100dvh;
  background: #000;
}

.yt-video iframe {
  width: 100%;
  height: 100%;
  display: block;
  border: none;
}
</style>
