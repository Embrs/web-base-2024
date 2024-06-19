<script setup lang="ts">
// EmailDemo 請填寫功能描述👈
// Gmail 設定 https://www.webdesigntooler.com/google-smtp-send-mail
const $mail = useMail();

const elForm = ref();
const isSending = ref(false);

const testParams = ref({
  from: 'from from',
  subject: 'title title',
  text: 'content content'
});

const rules = computed(() => {
  return {
    from: [
      { required: true, message: '請輸入信箱', trigger: 'change' }
      // {
      //   type: 'email',
      //   message: '信箱格式錯誤',
      //   trigger: ['blur', 'change']
      // }
    ],
    subject: [{ required: true, message: '請輸入 subject', trigger: 'change' }],
    text: [{ required: true, message: '請輸入 text', trigger: 'change' }]
  };
});

// -----------------------------------------------------------------------------------------------
const ClickSend = async () => {
  // 表單驗證
  if (!await FormValidate()) return;
  // 送出
  SendMail();
};

// -----------------------------------------------------------------------------------------------
// 表單驗證
const FormValidate = ():Promise<boolean> => elForm.value.validate((_isPass: Boolean) => _isPass);

// -----------------------------------------------------------------------------------------------
// 送出信件
const SendMail = async () => { // 這裡要對應到自己的 javascript 名稱
  isSending.value = true;
  try {
    await $mail.send(testParams.value);
    ElMessage.success('您已成功送出信件，我們會盡快安排專員為您服務');
  } catch (error) {
    ElMessage.error('寄送信件失敗');
  }
  isSending.value = false;
};

</script>

<template lang="pug">
#EmailDemo
  p EmailDemo
  ElForm(
    ref="elForm"
    :model="testParams"
    :rules="rules"
    label-width="100px"
    @submit.prevent
  )
    ElFormItem(label="from" prop="from")
      ElInput(
        v-model.trim="testParams.from"
        style="width:300px"
        placeholder="E-mail"
        maxlength="100"
      )
    ElFormItem(label="subject" prop="subject")
      ElInput(
        v-model.trim="testParams.subject"
        style="width:300px"
        placeholder="subject"
        maxlength="100"
      )
    ElFormItem(label="text" prop="text")
      ElInput(
        v-model="testParams.text"
        style="width:300px"
        placeholder="text"
        maxlength="1000"
        :rows="10"
        type="textarea"
      )
    ElFormItem(label=" ")
      ElButton(type="primary" style="width:300px" :loading="isSending" @click="ClickSend") 送出
</template>

<style lang="scss" scoped>
// 佈局 ----
#EmailDemo {
  // TODO
}

// 組件 ----
</style>
