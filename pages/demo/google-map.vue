<script setup lang="ts">
// GoogleMap 請填寫功能描述👈
</script>

<template lang="pug">
#GoogleMap
  p GoogleMap
  NuxtLink(to="https://www.tsg.com.tw/blog-detail2-173-0-google-maps.htm#A") Link
  iframe(
    width="600"
    height="450"
    style="border:0;"
    allowfullscreen
    loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4555.691428765585!2d120.67172968615088!3d24.11619968657177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693dd1a80bbeb5%3A0x766cd394034d11ed!2z6ZuF5YW45aic5pW45L2N5pW05ZCI6KGM6Yq3!5e0!3m2!1szh-TW!2stw!4v1718782931310!5m2!1szh-TW!2stw"
  )

</template>

<style lang="scss" scoped>
// 佈局 ----
#GoogleMap {
  padding: 10px;
}

// 組件 ----
</style>
