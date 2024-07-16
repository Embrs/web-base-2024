<script setup lang="ts">
import WebWorkerDemo from '@/components/demo/web-worker-demo?worker';
// WebWorkerDemo 請填寫功能描述👈
const wk = ref<Worker>();
const val = ref<number>();

const Init = () => {
  wk.value = new WebWorkerDemo();
  wk.value.onmessage = (e) => {
    console.log('on', e);
    val.value = e.data;
  };
};

const Send = () => {
  if (!wk.value) return;
  wk.value.postMessage(100);
};

onMounted(() => {
  Init();
});

</script>

<template lang="pug">
#WebWorkerDemo
  p WebWorkerDemo
  p https://medium.com/@yinte1222/nuxt3-%E5%A6%82%E4%BD%95%E5%9C%A8nuxt%E4%B8%AD%E4%BD%BF%E7%94%A8web-worker-d411e52d6b25

  ElButton(@click="Send") 送出
  pre {{ val }}
</template>

<style lang="scss" scoped>
// 佈局 ----
#WebWorkerDemo {
  padding: 10px;
}

// 組件 ----
</style>
