<script setup lang="ts">
import OpenGroup from '@/components/open-group/index.vue'; // 不能放進app.vue會壞掉
// layout1
import LoadingPage from '@/components/layout/loading-page.vue';
</script>

<template lang="pug">
#layout1
  LoadingPage
  slot
  ClientOnly
    OpenGroup
</template>

<style lang="scss">

// 佈局
#layout1 {
  max-width: 100vw;
  min-height: 100vh;
}

</style>
