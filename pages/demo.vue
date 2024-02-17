<script setup lang="ts">
// Demo 請填寫功能描述👈
const linkList = [
  { path: '/', label: 'To Home' },
  { path: '/demo/font-demo', label: 'Font Demo' },
  { path: '/demo/api-demo', label: 'Api Demo' },
  { path: '/demo/theme-demo', label: 'Theme Demo' },
  { path: '/demo/el-self-demo', label: 'El plus self' },
  { path: '/demo/i18n-demo', label: 'I18n Demo' },
  { path: '/demo/icon-demo', label: 'Icon Demo' },
  { path: '/demo/el-demo', label: 'El Demo' },
  { path: '/demo/params-demo/type-123/id-456', label: 'Params Demo' },
  { path: '/demo/cookie-demo', label: 'Cookie Demo' },
  { path: '/demo/err-demo', label: 'Error Demo' },
  { path: '/demo/pinia-demo', label: 'Pinia Demo' },
  { path: '/demo/rwd-demo', label: 'RWD Demo' },
  { path: '/demo/hls-demo', label: 'HlsDemo' },
  { path: '/sitemap.xml', label: 'SiteMap' }
];
</script>

<template lang="pug">
#Demo
  .row-item
    div(v-for="item of linkList" :key="item.path")
      ElButton
        NuxtLink(:to="item.path") {{ item.label }}
  div
    NuxtPage
</template>

<style lang="scss" scoped>
// 佈局 ----
#Demo {
  // TODO
  .row-item {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 4px;
  }
}

// 組件 ----
</style>
