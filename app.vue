<script setup lang="ts">

MixinWindowResize();
MixinInitMeta();
MixinLineCheck();
// MixinServiceWorker();

const storeI18n = StoreI18n();
const storeEnv = StoreEnv();

useAsyncData('app-init', async () => {
  await storeEnv.Init();
  return true;
});

onMounted(() => {
  storeI18n.BrowserLocaleInit();
});

</script>

<template lang="pug">
ElConfigProvider(:locale="storeI18n.elLocale")

  NuxtLoadingIndicator(color="#86D4A187")
  NuxtLayout
    NuxtPage
</template>

<style lang="scss">
html {
  // color: $text;
  // background-color: $bg;
}
</style>
