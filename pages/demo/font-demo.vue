<script setup lang="ts">
// FontDemo 請填寫功能描述👈
</script>

<template lang="pug">
#FontDemo
  p FontDemo
  .h1 H1
  .h2 H2
  .h3 H3
  .h4 H4
  .h5 H5
  .h6 H6

  h4.title Default
  .size-12px size-12px
  .size-14px size-14px
  .size-16px size-16px
  .size-18px size-18px
</template>

<style lang="scss" scoped>
// 佈局 ----
#FontDemo {
  // TODO
}

// 組件 ----
.title {
  color: #4a95aa
}
.h1 {
  @include fs('h1');
}
.h2 {
  @include fs('h2');
}
.h3 {
  @include fs('h3');
}
.h4 {
  @include fs('h4');
}
.h5 {
  @include fs('h5');
}
.h6 {
  @include fs('h6');
}
.size-12px {
  @include fs(12px);
}
.size-14px {
  @include fs(14px);
}
.size-16px {
  @include fs(16px);
}
.size-18px {
  @include fs(18px);
}
</style>
