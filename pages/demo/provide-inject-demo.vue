<script setup lang="ts">
// ProvideInjectDemo 請填寫功能描述👈
import ProvideInjectDemoEl from '@/components/demo/provide-inject-demo-el.vue';

const demoData = ref({
  count: 0,
  Add: () => {
    console.log('add');
    demoData.value.count++;
  },
  Reduce: () => {
    OnReduce();
  }
});

const OnReduce = () => {
  console.log('reduce');
  demoData.value.count--;
};

provide('ProvideInjectDemo-aa', demoData);

const OnChange = () => {
  demoData.value.count = 789;
};
</script>

<template lang="pug">
#ProvideInjectDemo
  p ProvideInjectDemo -------------------------
  pre demoData {{ demoData }}
  ElButton(@click="OnChange") Change

  ProvideInjectDemoEl
</template>

<style lang="scss" scoped>
// 佈局 ----
#ProvideInjectDemo {
  // TODO
}

// 組件 ----
</style>
