<script setup lang="ts">
// WaveDemo 請填寫功能描述👈
</script>

<template lang="pug">
#WaveDemo
  p WaveDemo
  .box(v-wave="{color: 'red', initialOpacity: 0.5, easing: 'ease-in'}")
</template>

<style lang="scss" scoped>
// 佈局 ----
#WaveDemo {
  padding: 10px;
}

// 組件 ----
.box {
  @include wh(100px, 100px);
  box-shadow: 0 0 16px 13px #00000012
}
</style>
