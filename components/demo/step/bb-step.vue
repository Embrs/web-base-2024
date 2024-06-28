<script setup lang="ts">
// BBStep 請填寫功能描述👈

interface BBStep {
  b1: string,
  b2: string
}

// 資料 --------------------------------------------------------------------------------------------
const params = defineModel({
  type: Object as () => BBStep,
  required: true
});

const elForm = ref();

const rules = computed(() => {
  return {
    b1: [{ required: true, message: '請輸入', trigger: 'change' }],
    b2: [{ required: true, message: '請輸入', trigger: 'change' }]
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
#BBStep
  ElForm(
    ref="elForm"
    :model="params"
    :rules="rules"
    size="large"
    label-width="88px"
    @submit.prevent
  )
    ElFormItem(label="b1" prop="b1")
      ElInput(
        v-model.trim="params.b1"
        maxlength="200"
      )
    ElFormItem(label="b2" prop="b2")
      ElInput(
        v-model.trim="params.b2"
        maxlength="200"
      )

</template>

<style lang="scss" scoped>
// 佈局 ----
#BBStep {
  // TODO
  padding: 10px;
  background-color: #bbb;
}

// 組件 ----
</style>
