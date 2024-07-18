<script setup lang="ts">
// ErrDemo 請填寫功能描述👈
const ClickSendErr = () => {
  throw showError({ statusCode: 404, statusMessage: 'Page Not Found' });
};
</script>

<template lang="pug">
#ErrDemo
  p ErrDemo
  ElButton(@click="ClickSendErr") To 404
</template>

<style lang="scss" scoped>
// 佈局 ----
#ErrDemo {
  padding: 10px;
}

// 組件 ----
</style>
