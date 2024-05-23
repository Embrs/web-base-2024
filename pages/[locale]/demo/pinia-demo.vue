<script setup lang="ts">
// PiniaDemo 請填寫功能描述👈
const storeDemo = StoreDemo();
</script>

<template lang="pug">
#PiniaDemo
  p PiniaDemo
  p {{ storeDemo.count }}
  p {{ storeDemo.doubleCount }}
  el-button(type="primary" @click="storeDemo.Add") Add

  GlobalDemo
</template>

<style lang="scss" scoped>
// 佈局 ----
#PiniaDemo {
  // TODO
}

// 組件 ----
</style>
