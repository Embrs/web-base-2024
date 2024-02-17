<script setup lang="ts">
// layout
import LoadingPage from '@/components/layout/loading-page.vue';
</script>

<template lang="pug">
#layout
  LoadingPage
  //- p layout
  //- pre(v-for="i of 100" :key="i") {{ "123231212123231212312aa123231212312aa123231212312aa123231212312aa123231212312aa123231212312aa312aa" }}
  //- // TODO check
  slot
</template>

<style lang="scss">

// 佈局
#layout {
  max-width: 100vw;
  min-height: 100vh;
}

</style>
