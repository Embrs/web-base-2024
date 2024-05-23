<script setup lang="ts">
// I18nDemo 請填寫功能描述👈

const storeI18n = StoreI18n();

const ClickShowLog = () => {
  console.log('t', i18n('welcome'));
};
</script>

<template lang="pug">
#I18nDemo
  p I18nDemo
  ElButton(type="primary" @click="storeI18n.ChangeLocale('tw')") Tw
  ElButton(type="primary" @click="storeI18n.ChangeLocale('en')") En
  ElButton(type="primary" @click="storeI18n.ChangeLocale('jp')") Jp
  ElButton(type="primary" @click="ClickShowLog") Show Log
  p {{ i18n('welcome') }}
  //- p {{ $t('welcome') }}
</template>

<style lang="scss" scoped>
// 佈局 ----
#I18nDemo {
  // TODO
}

// 組件 ----
</style>
