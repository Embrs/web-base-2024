<script setup lang="ts">
// HlsDemo 請填寫功能描述👈
import Hls from 'hls.js';
const elVideo = ref();
const isPlaying = ref(false);

const OnPlay = () => {
  const el = elVideo.value;
  el.play();
  isPlaying.value = true;
};

const OnPause = () => {
  const el = elVideo.value;
  el.pause();
  isPlaying.value = false;
};

onMounted(() => {
  const el = elVideo.value;
  const hls = new Hls();
  hls.loadSource('/video/hls/hero/hero.m3u8'); // HLS视频源的URL
  hls.attachMedia(el);
  hls.on(Hls.Events.MANIFEST_PARSED, () => {
    el.play();
    isPlaying.value = true;
  });
});
</script>

<template lang="pug">
#HlsDemo
  p HlsDemo
  p https://www.volcengine.com/theme/4777923-R-7-1
  video(ref="elVideo" controls playsinline muted)
  ElButton(@click="OnPlay") Play
  ElButton(@click="OnPause") Pause
</template>

<style lang="scss" scoped>
// 佈局 ----
#HlsDemo {
  // TODO
}

// 組件 ----
</style>
