<script setup lang="ts">
// RwdDemo 請填寫功能描述👈
</script>

<template lang="pug">
#RwdDemo
  p RwdDemo
</template>

<style lang="scss" scoped>
// 佈局 ----
#RwdDemo {
  @include rwd-pc {
    color: blue;
  }

  @include rwd-mobile {
    color: red;
  }
}

// 組件 ----
</style>
