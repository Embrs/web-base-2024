<script setup lang="ts">
// HlsDemo 請填寫功能描述👈
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
const elVideo = ref();
const hlsUrl = 'http://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8';
const OnPlay = () => {
  const el = elVideo.value;
  el.play();
};

const OnPause = () => {
  const el = elVideo.value;
  el.pause();
};
onMounted(() => {
  elVideo.value = videojs(elVideo.value, {
    poster: '//vjs.zencdn.net/v/oceans.png',
    controls: false, // 控制列
    autoplay: true, // 自動撥放
    muted: true, // 靜音
    loop: true, // 循環
    sources: [{ src: hlsUrl, type: 'application/x-mpegURL' }],
    controlBar: {
      remainingTimeDisplay: {
        displayNegative: false
      }
    }
  }, () => {
    elVideo.value.log('play.....');
  });
});

onUnmounted(() => {
  if (elVideo.value) {
    elVideo.value.dispose();
  }
});

</script>

<template lang="pug">
#HlsDemo
  .video-box
    video(
      ref="elVideo"
      class="video-js"
      autoplay
      muted
      loop
      :x5-playsinline="true"
      :playsinline="true"
      :webkit-playsinline="true"
      :x-webkit-airplay="true"
      :src="hlsUrl"
      type="application/x-mpegURL"
      data-object-fit
      data-wf-ignore
    )

  ElButton(@click="OnPlay") Play
  ElButton(@click="OnPause") Pause
</template>

<style lang="scss" scoped>
// 佈局 ----
#HlsDemo {
  // TODO
}

// 組件 ----
.video-box {
  height: 400px;
  .video-js {
    width: 100% !important;
    height: 100% !important;
    background-color: transparent;
  }
}
</style>
