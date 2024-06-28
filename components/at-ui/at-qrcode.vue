<script setup lang="ts">
// AtQRCode QRCode 生成
// https://github.com/scholtz/qrcode-vue3
import QRCodeVue3 from 'qrcode-vue3';

// 資料 --------------------------------------------------------------------------------------------
const props = defineProps({
  src: {
    type: String,
    required: true
  },
  centerImgSrc: {
    type: String,
    default: ''
  },
  size: {
    type: Number,
    default: 250
  }
});

const qrOptions = {
  typeNumber: 0, mode: 'Byte', errorCorrectionLevel: 'H'
};

// 影像選項
const imageOptions = {
  hideBackgroundDots: true, imageSize: 0.4, margin: 0
};

// 背景色
const backgroundOptions = {
  color: 'transparent'
};

const dostOptions = {
  type: 'rounded', // 'rounded' 'dots' 'classy' 'classy-rounded' 'square' 'extra-rounded'
  color: '#54555A',
  gradient: { // 漸層
    type: 'radial', // 'linear' 'radial' // 線性或放射
    rotation: 0, // 角度
    colorStops: [
      { offset: 0, color: '#BCBCBC' },
      { offset: 1, color: '#707070' }
    ]
  }
};

// 角方形選項
const cornersSquareOptions = {
  type: 'extra-rounded', // 'dot' 'square' 'extra-rounded'
  color: '#707070'
  // gradient: {}
};

//  角點選項
const cornersDotOptions = {
  type: 'extra-rounded', // 'dot' 'square' 'extra-rounded'
  color: '#707070'
  // gradient: {}
};

</script>

<template lang="pug">
#AtQRCode
  ClientOnly
    QRCodeVue3(
      v-if="props.src"
      :width="props.size"
      :height="props.size"
      :value="props.src"
      :image="props.centerImgSrc"
      :backgroundOptions="backgroundOptions"
      :qrOptions="qrOptions"
      :imageOptions="imageOptions"
      :dotsOptions="dostOptions"
      :cornersSquareOptions="cornersSquareOptions"
      :cornersDotOptions="cornersDotOptions"
      fileExt="png"
      :download="false"
      myclass="my-qur"
      imgclass="img-qr"
      downloadButton="my-button"
      :downloadOptions="{ name: 'vqr', extension: 'png' }"
    )
</template>

<style lang="scss" scoped>
// 佈局 ----
#AtQRCode {
  @include row;
}

// 組件 ----
</style>
