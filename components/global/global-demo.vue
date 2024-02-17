<script setup lang="ts">
// GlobalDemo 請填寫功能描述👈
const storeDemoObj = StoreDemo();

</script>

<template lang="pug">
#GlobalDemo
  p GlobalDemo
  p {{ storeDemoObj.count }}
  p {{ storeDemoObj.doubleCount }}
</template>
