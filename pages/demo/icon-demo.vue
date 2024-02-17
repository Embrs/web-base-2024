<script setup lang="ts">
// IconDemo 請填寫功能描述👈
// assets/icons 底下的SVG檔案
// 結合 components/global/svg-icon/index.vue 組件
</script>

<template lang="pug">
#IconDemo
  h1 IconDemo
  a(href="https://icones.js.org/" target="_blank") Link
  p Icon(name="" size="24")
  Icon(name="uil:github")
  Icon(name="material-symbols-light:10k-rounded" size="100")
  Icon(name="meteocons:hurricane-fill")
  Icon(name="🚀")
  Icon(name="IconDemo1")
  Icon(name="IconDemo2")
  p IconCSS 用 CSS 圖示代替 SVG 圖示來減少 DOM 大小並提高效能的方法
  IconCSS(name="uil:twitter")

</template>

<style lang="scss" scoped>
// 佈局 ----
#IconDemo {
  // color: red;
  @include column;
}

// 組件 ----
.box {
  width: 100px !important;
  height: 100px !important;
}
</style>
