<script setup lang="ts">
// AnimateCssDemo 請填寫功能描述👈
const isShow = ref(false);
const ClickBox = (e: MouseEvent) => {
  const el = e.target as HTMLElement;
  if (!el) return;
  el.classList.remove('animate__animated', 'animate__rubberBand');
  setTimeout(() => {
    el.classList.add('animate__animated', 'animate__rubberBand');
  }, 1);
};

</script>

<template lang="pug">
#AnimateCssDemo
  p AnimateCssDemo
  NuxtLink(to="https://animate.style/" target="_blank") 教學連結
  .box(@click="ClickBox") Click
  .box.animation-text Loaded
  ElButton(
    class="animate__animated animate__bounce"
    @click="isShow = !isShow"
  ) Click
  transition(
    enter-active-class="animate__animated animate__rubberBand"
    leave-active-class="animate__animated animate__bounceOutRight"
    mode="out-in"
  )
    .box(v-if="isShow")
    .box.green(v-else)
</template>

<style lang="scss" scoped>
// 佈局 ----
#AnimateCssDemo {
  @include col(10px);
  padding: 10px;
}

// 組件 ----
.box {
  @include wh(100px, 100px);
  background-color: red;
}
.green {
  background-color: green !important;
}

.animation-text {
  animation: rubberBand; /* referring directly to the animation's @keyframe declaration */
  animation-duration: 1s; /* don't forget to set a duration! */
}
</style>
