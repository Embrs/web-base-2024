<script setup lang="ts">
// ServerApiDemo 請填寫功能描述👈
const ClickTest = async () => {
  console.log('ClickTest');
  // const res = await $fetch('/nuxt/demo-query', { query: { param1: 123, param2: 456 } });
  const res = await $fetch('/nuxt/123', { method: 'post', body: { aa: 123, bb: 456 } });
  console.log('res', res);
};
// useAsyncData('init', async () => {
//   await ClickTest();
//   return true;
// });

</script>

<template lang="pug">
#ServerApiDemo
  p ServerApiDemo
  ElButton(@click="ClickTest") Test
</template>

<style lang="scss" scoped>
// 佈局 ----
#ServerApiDemo {
  padding: 10px;
}

// 組件 ----
</style>
