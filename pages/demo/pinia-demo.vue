<script setup lang="ts">
// PiniaDemo 請填寫功能描述👈
import StoreDemoEl from '@/components/demo/store-demo-el.vue';
const storeDemo = StoreDemo();
const storeEnv = StoreEnv();

</script>

<template lang="pug">
#PiniaDemo
  p PiniaDemo
  p {{ storeDemo.count }}
  p {{ storeDemo.doubleCount }}
  p {{ storeDemo.test }}
  pre {{ storeEnv.env.googleRecaptchaSiteKey }}
  el-button(type="primary" @click="storeDemo.Add") Add
  el-button(type="primary" @click="storeDemo.test++") useState
  StoreDemoEl
</template>

<style lang="scss" scoped>
// 佈局 ----
#PiniaDemo {
  // TODO
}

// 組件 ----
</style>
