<script setup lang="ts">
// Main 請填寫功能描述👈

</script>

<template lang="pug">
#Main
  p Main
  .test-box
  ElButton
    NuxtLink(to="/demo") To Demo
</template>

<style lang="scss" scoped>
// 佈局
#Main {
  background-color: var(--color-background);
  .test-box {
    background-color: #333;
    @include ratio-wh(200px, 400px, 1024px, true);
  }
}
</style>
