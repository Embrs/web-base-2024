<script setup lang="ts">
// CCStep 請填寫功能描述👈

interface CCStep {
  c1: string,
  c2: string
}

// 資料 --------------------------------------------------------------------------------------------
const params = defineModel({
  type: Object as () => CCStep,
  required: true
});

const elForm = ref();

const rules = computed(() => {
  return {
    c1: [{ required: true, message: '請輸入', trigger: 'change' }],
    c2: [{ required: true, message: '請輸入', trigger: 'change' }]
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
#CCStep
  ElForm(
    ref="elForm"
    :model="params"
    :rules="rules"
    size="large"
    label-width="88px"
    @submit.prevent
  )
    ElFormItem(label="c1" prop="c1")
      ElInput(
        v-model.trim="params.c1"
        maxlength="200"
      )
    ElFormItem(label="c2" prop="c2")
      ElInput(
        v-model.trim="params.c2"
        maxlength="200"
      )

</template>

<style lang="scss" scoped>
// 佈局 ----
#CCStep {
  // TODO
  padding: 10px;
  background-color: #ccc;
}

// 組件 ----
</style>
