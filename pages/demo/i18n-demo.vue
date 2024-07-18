<script setup lang="ts">
// I18nDemo 請填寫功能描述👈

const storeI18n = StoreI18n();
const date = ref('');

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
  ElDatePicker(
    v-model="date"
    type="datetime"
    format="YYYY-MM-DD HH:mm:ss"
    value-format="YYYY-MM-DD HH:mm:ss"
    :placeholder="i18n('placeholderDate')"
    :editable="false"
  )
</template>

<style lang="scss" scoped>
// 佈局 ----
#I18nDemo {
  padding: 10px;
}

// 組件 ----
</style>
