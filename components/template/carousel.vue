<script setup lang="ts">
// Carousel 輪播幻燈片
// https://element-plus.org/zh-CN/component/carousel.html

const elElCarousel = ref();
let startPoint = 0;

const TouchStart = (e: TouchEvent | MouseEvent) => {
  startPoint = (e as TouchEvent).changedTouches?.[0]?.pageX || (e as MouseEvent).pageX;
};

const TouchEnd = (e: TouchEvent | MouseEvent) => {
  const endPoint = (e as TouchEvent).changedTouches?.[0]?.pageX || (e as MouseEvent).pageX;
  const move = endPoint - startPoint;
  OnMove(move);
};

const OnMove = (move: number) => {
  if (startPoint === 0) return;
  if (move > 150) {
    elElCarousel.value.prev();
  } else if (move < -150) {
    elElCarousel.value.next();
  }
  startPoint = 0;
};

</script>

<template lang="pug">
#Carousel
  ElCarousel(
    ref="elElCarousel"
    height="50vh"
    interval="3000"
    motion-blur
    @touchstart="TouchStart"
    @touchend="TouchEnd"
    @mousedown="TouchStart"
    @mouseup="TouchEnd"
    @mouseleave="TouchEnd"
  )
    ElCarouselItem.carousel-item(v-for="index in 4" :key="index")
      p {{ index }}

</template>

<style lang="scss" scoped>
// 佈局 ----
#Carousel {
  // TODO
  .carousel-item {
    @include center;
    @include fs(30px);
    user-select: none;
    color: white;
    background-color: #aaa;
  }
}

// 組件 ----
// 隱藏箭頭
:deep(.el-carousel__arrow) {
  display: none;
}
// 隱藏指標
:deep(.el-carousel__indicators) {
  display: none;
}
</style>
