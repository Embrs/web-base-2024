<script setup lang="ts">
// LoadingPage
const nuxtApp = useNuxtApp();
const isFinish = ref(false);
const isHide = ref(false);

nuxtApp.hook('page:finish', () => {
  isHide.value = true;
  setTimeout(() => {
    isFinish.value = true;
  }, 600);
});
nuxtApp.hook('app:rendered', (e) => {
  if (e.ssrContext?.error) {
    isHide.value = true;
    isFinish.value = true;
  }
});
</script>

<template lang="pug">
#LoadingPage(v-if="!isFinish" :class="{'is-hide': isHide}")
  .todo Loading
</template>

<style lang="scss" scoped>

#LoadingPage {
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  opacity: 1;
  z-index: 9999;
  transition: opacity .4s ease;
}

// 組件 ----
.is-hide {
  opacity: 0 !important;
}
</style>
