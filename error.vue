<script setup lang="ts">
// 去 layout/error.vue 編輯
const props = defineProps({
  error: {
    type: Object as () => { statusCode: Number, statusMessage: string },
    required: true
  }
});
</script>

<template lang="pug">
NuxtLayout(name="error" :error="props.error")

</template>
