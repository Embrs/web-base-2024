<script setup lang="ts">
// ImgDemo 請填寫功能描述👈
import testimg from '@/assets/img/test.png';

</script>

<template lang="pug">
#ImgDemo
  p ImgDemo
  .title ElImagePlus
  p 跟外框ㄧ樣尺寸 (外 300px x 200px, 內 100% x 100%)
  .img-box
    ElImagePlus(:src="testimg" :preview-src-list="[testimg]")

  p 跟外框ㄧ樣尺寸 (外 100% x 200px, 內 100% x 100%)
  .img-box-2
    ElImagePlus(:src="testimg")

  p 自定義寬高比率 (外 300px x 200px, 內 40% x 30%)
  .img-box
    ElImagePlus(
      :src="testimg"
      width="40"
      height="30"
    )
  p 自定義寬高 300px x 200px 小於等於100 為百分比，大於100 為固定px
  ElImagePlus(
    :src="testimg"
    width="300"
    height="200"
  )

  p 外框等比縮放
  .img-box-3
    ElImagePlus(:src="testimg")

  p 自我等比縮放，useScale 等比縮放 40% x 30%
  ElImagePlus(
    :src="testimg"
    useScale
    width="40"
    height="30"
  )
  //- ClientOnly
  //-   ElImageViewerPlus(ref="elElImageViewerPlus" :imgList="[testimg]")
</template>

<style lang="scss" scoped>
// 佈局 ----
#ImgDemo {
  width: 100%;
  padding: 10px;
}
.title {
  @include fs(30px);
  font-weight: 900;
  color: #304fa4
}
.img-box {
  @include wh(300px, 200px);
  background-color: #eee;
}
.img-box-2 {
  @include wh(100%, 200px);
}
.img-box-3 {
  width: w-ratio(300px, 1024px);
  height: w-ratio(200px, 1024px);
}
// 組件 ----
</style>
