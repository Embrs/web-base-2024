<script setup lang="ts">
// ParamsDemo 請填寫功能描述👈
</script>

<template lang="pug">
#ParamsDemo
  H2 ParamsDemo
  p {{ $route.params.type }}
  p {{ $route.params.id }}
</template>

<style lang="scss" scoped>
// 佈局 ----
#ParamsDemo {
  // TODO
}

// 組件 ----
</style>
