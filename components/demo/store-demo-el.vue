<script setup lang="ts">
// StoreDemoEl 請填寫功能描述👈
const storeDemo = StoreDemo();

</script>

<template lang="pug">
#StoreDemoEl
  p storeDemo
  p {{ storeDemo.count }}
  p {{ storeDemo.doubleCount }}
</template>
