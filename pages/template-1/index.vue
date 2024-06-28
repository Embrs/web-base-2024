<script setup lang="ts">
// Home 請填寫功能描述👈
import Carousel from '@/components/template/carousel.vue';
import ContactUsForm from '@/components/template/contact-us-form.vue';
import ContactInformation from '@/components/template/contact-information.vue';
definePageMeta({
  layout: 'layout-1'
});

</script>

<template lang="pug">
#Home
  p Home
  Carousel
  ContactUsForm
  ContactInformation
</template>

<style lang="scss" scoped>
// 佈局 ----
#Home {
  // TODO

}

// 組件 ----

</style>
