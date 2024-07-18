<script setup lang="ts">
// StepDemo 請填寫功能描述👈
import AAStep from '@/components/demo/step/aa-step.vue';
import BBStep from '@/components/demo/step/bb-step.vue';
import CCStep from '@/components/demo/step/cc-step.vue';
// 資料 --------------------------------------------------------------------------------------------
interface StepDemo {
  a1: string,
  a2: string,
  b1: string,
  b2: string,
  c1: string,
  c2: string
}
const elStepCom = ref();

const params = ref<StepDemo>({
  a1: '',
  a2: '',
  b1: '',
  b2: '',
  c1: '',
  c2: ''
});

const currentStep = ref<1|2|3>(1);
const stepMap = {
  1: AAStep,
  2: BBStep,
  3: CCStep
};

// 接收事件 -----------------------------------------------------------------------------------------
const ClickBack = () => {
  if (currentStep.value > 1) {
    currentStep.value--;
  }
};

const ClickNext = async () => {
  if (!await elStepCom.value.FormValidate()) return;
  if (currentStep.value < 3) {
    currentStep.value++;
  }
};
// 流程 --------------------------------------------------------------------------------------------

// 函式 --------------------------------------------------------------------------------------------

// Api ---------------------------------------------------------------------------------------------

// 生命週期 -----------------------------------------------------------------------------------------
// onMounted(()=>{});

// 對外事件 -----------------------------------------------------------------------------------------
// const emit = defineEmits(['update:modelValue','on-change']);

// Ref 輸出 ----------------------------------------------------------------------------------------
// defineExpose({ ... })

</script>

<template lang="pug">
#StepDemo
  .info-area
    pre {{ params }}
  .step-area
    transition(name="page" mode="out-in")
      component(:is="stepMap[currentStep]" ref="elStepCom" v-model="params")
  .btn-area
    ElButton(v-show="currentStep > 1" type="primary" @click="ClickBack") Back
    ElButton(v-show="currentStep < 3" type="primary" @click="ClickNext") Next
</template>

<style lang="scss" scoped>
// 佈局 ----
#StepDemo {
  @include wh;
  display: grid;
  grid-template-rows: auto 1fr auto;
  padding: 10px;

  .btn-area {
    @include row;
  }
}

// 組件 ----
</style>
