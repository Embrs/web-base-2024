<script setup lang="ts">
// ProvideInjectDemoEl 請填寫功能描述👈

const demoData = inject('ProvideInjectDemo-aa') as Ref<{ count: number, Add: Function, Reduce: Function }>;
const OnChange = () => {
  demoData.value.count = 456;
};
const OnAddFn = () => {
  demoData.value.Add();
};
const OnReduceFn = () => {
  demoData.value.Reduce();
};
</script>

<template lang="pug">
#ProvideInjectDemoEl
  p ProvideInjectDemoEl -------------------------
  ElButton(@click="OnChange") Change
  ElButton(@click="OnAddFn") Add Fn
  ElButton(@click="OnReduceFn") Reduce Fn
</template>

<style lang="scss" scoped>
// 佈局 ----
#ProvideInjectDemoEl {
  // TODO
}

// 組件 ----
</style>
