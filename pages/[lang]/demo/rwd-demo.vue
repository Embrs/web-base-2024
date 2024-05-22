<script setup lang="ts">
// RwdDemo 請填寫功能描述👈
</script>

<template lang="pug">
#RwdDemo
  p RwdDemo
  p RwdDemo
</template>

<style lang="scss" scoped>
// 佈局 ----
#RwdDemo {
  @include rwd-limit(20px, 40px, 60px);
  @include rwd-pc-big {
    color: red;
  }
  @include rwd-pc {
    color: blue;
  }
  @include rwd-mobile {
    color: green;
  }
  @include wh;
  display: flex;
  justify-content: space-between;
}

// 組件 ----
</style>
