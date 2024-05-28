<script setup lang="ts">
MixinWindowResize();
MixinInitMeta();
MixinLineCheck();
const storeI18n = StoreI18n();

</script>

<template lang="pug">
ElConfigProvider(:locale="storeI18n.elLocale")
  NuxtLoadingIndicator(color="#86D4A187")
  NuxtLayout
    NuxtPage
</template>

<style lang="scss">
html {
  // color: $t-dark;
  // background-color: $bg;
}
</style>
