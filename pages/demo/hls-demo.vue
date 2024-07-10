<script setup lang="ts">
// HlsDemo 請填寫功能描述👈
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
const videoPlayer = ref();

const myPlayer = ref();

onMounted(() => {
  myPlayer.value = videojs(videoPlayer.value, {
    poster: '//vjs.zencdn.net/v/oceans.png',
    controls: true,
    sources: [
      {
        src: 'http://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8',
        type: 'application/x-mpegURL'
      }
    ],
    controlBar: {
      remainingTimeDisplay: {
        displayNegative: false
      }
    },
    playbackRates: [0.5, 1, 1.5, 2]
  }, () => {
    myPlayer.value.log('play.....');
  });
});

onUnmounted(() => {
  if (myPlayer.value) {
    myPlayer.value.dispose();
  }
});

// npm install hls.js
// import Hls from 'hls.js';
// const elVideo = ref();
// const isPlaying = ref(false);

// const OnPlay = () => {
//   const el = elVideo.value;
//   el.play();
//   isPlaying.value = true;
// };

// const OnPause = () => {
//   const el = elVideo.value;
//   el.pause();
//   isPlaying.value = false;
// };

// onMounted(() => {
//   const el = elVideo.value;
//   const hls = new Hls();
//   hls.loadSource('/video/hls/hero/hero.m3u8'); // HLS视频源的URL
//   hls.attachMedia(el);
//   hls.on(Hls.Events.MANIFEST_PARSED, () => {
//     el.play();
//     isPlaying.value = true;
//   });
// });

</script>

<template lang="pug">
#HlsDemo
  video(ref="videoPlayer" class="video-js" style="margin: auto auto")
  //- p HlsDemo
  //- p https://www.volcengine.com/theme/4777923-R-7-1
  //- video(ref="elVideo" controls playsinline muted)
  //- ElButton(@click="OnPlay") Play
  //- ElButton(@click="OnPause") Pause
  //- div
    video(
      id="my_video_1"
      class="video-js vjs-default-skin"
      controls
      preload="auto"
      width="640"
      height="268"
      data-setup="{}"
    )
      source(
        src="http://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8"
        type="application/x-mpegURL"
      )
</template>

<style lang="scss" scoped>
// 佈局 ----
#HlsDemo {
  // TODO
}

// 組件 ----
</style>
