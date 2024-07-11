<script setup lang="ts">
// Header 請填寫功能描述👈
const linklist = [
  { name: '關於', link: '/about' },
  { name: '最新消息', link: '/news' },
  { name: '商品', link: '/product' },
  { name: '購物車', link: '/cart' },
  { name: '聯絡我們', link: '/contact-us' },
  { name: '服務介紹', link: '/service' },
  { name: 'Demo', link: '/demo' }
];
</script>

<template lang="pug">
#Header
  .link-area(class="max-w-padding-1000px-10px")
    .left-area
      p Header
    .right-area(class="item-row-10px-end")
      NuxtLink(
        v-for="item of linklist" :key="item.name"
        :to="item.link" :alt="item.name" :title="item.name"
      ) {{ item.name }}
</template>

<style lang="scss" scoped>
// 佈局 ----
#Header {
  background-color: #eee;
  .link-area {
    // @include max-w-padding(1000px, 20px);
    display: grid;
    grid-template-columns: auto 1fr;
  }
  // TODO
}

// 組件 ----
</style>
