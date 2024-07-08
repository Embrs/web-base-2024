<script setup lang="ts">
// FontDemo 請填寫功能描述👈
</script>

<template lang="pug">
#FontDemo
  p FontDemo
  .hh1 H1
  .hh2 H2
  .hh3 H3
  .hh4 H4
  .hh5 H5
  .hh6 H6

  h4.title Default
  .s-2px size-2px
  .s-4px size-4px
  .s-6px size-6px
  .s-8px size-8px
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
.hh1 {
  @include fs('h1');
}
.hh2 {
  @include fs('h2');
}
.hh3 {
  @include fs('h3');
}
.hh4 {
  @include fs('h4');
}
.hh5 {
  @include fs('h5');
}
.hh6 {
  @include fs('h6');
}
.s-2px {
  @include fs(12px);
}
.s-4px {
  @include fs(14px);
}
.s-6px {
  @include fs(16px);
}
.s-8px {
  @include fs(18px);
}
</style>
