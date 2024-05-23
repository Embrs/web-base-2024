<script setup lang="ts">
// PiniaDemo 請填寫功能描述👈
import StoreDemoEl from '@/components/demo/store-demo-el.vue';
const storeDemo = StoreDemo();
</script>

<template lang="pug">
#PiniaDemo
  p PiniaDemo
  p {{ storeDemo.count }}
  p {{ storeDemo.doubleCount }}
  el-button(type="primary" @click="storeDemo.Add") Add

  StoreDemoEl
</template>

<style lang="scss" scoped>
// 佈局 ----
#PiniaDemo {
  // TODO
}

// 組件 ----
</style>
