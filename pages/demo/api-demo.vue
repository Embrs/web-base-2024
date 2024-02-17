<script setup lang="ts">
// ApiDemo 請填寫功能描述👈

// 資料 --------------------------------------------------------------------------------------------
// const props = defineProps({}); const val = computed(() => {}); definePageMeta({})
const apiResData = ref<GetDemoRes['data']>();

// Api ---------------------------------------------------------------------------------------------
/**  說明 API */
const ApiGetDemo = async (): Promise<boolean> => {
  const res = await api.GetDemo();
  if (res.is_success) {
    apiResData.value = res.data;
    return true;
  }
  ElMessage({
    showClose: true,
    message: 'error text',
    type: 'error'
  });
  return false;
};

// 對外事件 -----------------------------------------------------------------------------------------
// const emit = defineEmits(["update:modelValue","on-change"]);
useAsyncData('init', async () => {
  await ApiGetDemo();
  return true;
});
</script>

<template lang="pug">
#ApiDemo
  p ApiDemo
  ElButton(type="primary" @click="ApiDemo") Send Api
  pre {{ apiResData }}
</template>

<style lang="scss" scoped>
// 佈局 ----
#ApiDemo {
  // TODO
}

// 組件 ----
</style>
