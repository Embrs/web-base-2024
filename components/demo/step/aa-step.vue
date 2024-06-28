<script setup lang="ts">
// AAStep 請填寫功能描述👈

interface AAStep {
  a1: string,
  a2: string
}

// 資料 --------------------------------------------------------------------------------------------
const params = defineModel({
  type: Object as () => AAStep,
  required: true
});

const elForm = ref();

const rules = computed(() => {
  return {
    a1: [{ required: true, message: '請輸入', trigger: 'change' }],
    a2: [{ required: true, message: '請輸入', trigger: 'change' }]
  };
});

// 接收事件 -----------------------------------------------------------------------------------------
// 資料驗證
const FormValidate = ():Promise<boolean> => elForm.value.validate((_isPass: Boolean) => _isPass);
// 流程 --------------------------------------------------------------------------------------------

// 函式 --------------------------------------------------------------------------------------------

// Api ---------------------------------------------------------------------------------------------

// 生命週期 -----------------------------------------------------------------------------------------
// onMounted(()=>{});

// 對外事件 -----------------------------------------------------------------------------------------
// const emit = defineEmits(['update:modelValue','on-change']);

// Ref 輸出 ----------------------------------------------------------------------------------------
defineExpose({ FormValidate });
</script>

<template lang="pug">
#AAStep
  ElForm(
    ref="elForm"
    :model="params"
    :rules="rules"
    size="large"
    label-width="88px"
    @submit.prevent
  )
    ElFormItem(label="a1" prop="a1")
      ElInput(
        v-model.trim="params.a1"
        maxlength="200"
      )
    ElFormItem(label="a2" prop="a2")
      ElInput(
        v-model.trim="params.a2"
        maxlength="200"
      )

</template>

<style lang="scss" scoped>
// 佈局 ----
#AAStep {
  // TODO
  padding: 10px;
  background-color: #aaa;
}

// 組件 ----
</style>
