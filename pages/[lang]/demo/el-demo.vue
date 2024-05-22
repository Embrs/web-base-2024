<script setup lang="ts">
// ElDemo 請填寫功能描述👈
import Arrow from '@/components/arrow.vue';

const cities = [
  {
    value: 'Beijing',
    label: 'Beijing'
  },
  {
    value: 'Shanghai',
    label: 'Shanghai'
  },
  {
    value: 'Nanjing',
    label: 'Nanjing'
  },
  {
    value: 'Chengdu',
    label: 'Chengdu'
  },
  {
    value: 'Shenzhen',
    label: 'Shenzhen'
  },
  {
    value: 'Guangzhou',
    label: 'Guangzhou'
  }
];
</script>

<template lang="pug">
#ElDemo
  p ElDemo
  p 箭頭 替換
  ElSelect(
    placeholder="Select"
    :suffix-icon="Arrow"
  )
    ElOption(
      v-for="item in cities"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    )

  ElInput
    template(#suffix)
      p $
</template>

<style lang="scss" scoped>
// 佈局 ----
#ElDemo {
  // TODO
}

// 組件 ----
</style>
