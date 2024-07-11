<script setup lang="ts">
// ContactUsForm 聯絡我們表

// 資料 --------------------------------------------------------------------------------------------
// const props = defineProps({}); definePageMeta({})
const mixinGoogleRecaptcha = MixinGoogleRecaptcha();
const $mail = useMail(); // mail server send
const elMarketForm = ref();
const isSending = ref(false);

const formParams = ref<any>({
  name: '', // 姓名
  company: '', // 公司
  job_title: '', // 部門職稱
  budget: '', // 每月廣告預算
  item: '', // 諮詢項目
  email: '', // 聯絡信箱
  phone: '', // 聯絡電話
  content: '', // 備註
  status: 1,
  recaptcha_token: ''
});
const rules = computed(() => {
  return {
    name: [
      { required: true, message: '請輸入您的姓名', trigger: 'change' }
    ],
    company: [
      { required: true, message: '請填寫您任職的公司', trigger: 'change' }
    ],
    job_title: [
      { required: true, message: '請填寫您任職的職位', trigger: 'change' }
    ],
    budget: [
      { required: true, message: ' ', trigger: 'change' }
    ],
    item: [
      { required: true, message: ' ', trigger: 'change' }
    ],
    email: [
      { required: true, message: '請填寫您的聯絡信箱', trigger: 'change' },
      { type: 'email', message: '信箱格式錯誤', trigger: ['blur'] }
    ],
    phone: [
      { required: true, message: '請填寫您的聯絡電話', trigger: 'change' }
    ],
    content: [{ required: false }]
  };
});

// 接收事件 -----------------------------------------------------------------------------------------
const ClickSubmit = lodash.debounce(async () => {
  isSending.value = true;
  await SendFlow();
  isSending.value = false;
}, 400, { leading: true, trailing: false });

// 流程 --------------------------------------------------------------------------------------------
const SendFlow = async () => {
  if (!await CheckForm()) return;
  if (!await ApiCreateContact()) {
    ElMessage.error('寄送信件失敗');
    return;
  }
  if (!await SendMail()) {
    ElMessage.error('寄送信件失敗');
    return;
  }
  ElMessage.success('您已成功送出信件，我們會盡快安排專員為您服務');
};

// 函式 --------------------------------------------------------------------------------------------
const CheckForm = async () => {
  return await elMarketForm.value.validate((_pass: boolean) => _pass);
};

const SendMail = async () => {
  try {
    await $mail.send({
      from: 'usermail@google.com',
      subject: 'test',
      text: `
        姓名：${formParams.value.name}
        公司：${formParams.value.company}
        部門職稱：${formParams.value.job_title}
        每月廣告預算：${formParams.value.budget}
        諮詢項目：${formParams.value.item}
        聯絡信箱：${formParams.value.email}
        聯絡電話：${formParams.value.phone}
        備註：${formParams.value.content}
      `
    });
    return true;
  } catch (error) {
    return false;
  }
};

// Api ---------------------------------------------------------------------------------------------
/**  聯絡我們建立 */
const ApiCreateContact = async (): Promise<boolean> => {
  // const token = await mixinGoogleRecaptcha.UseRecaptcha();
  // formParams.value.recaptcha_token = token;
  // const res = await api.CreateContact(formParams.value);
  // if (res.status.is_success) {
  //   return true;
  // }
  // if (res.status.message) ElMessage.error(res.status.message);
  return false;
};

</script>

<template lang="pug">
#ContactUsForm
  .from-area
    ElForm(
      ref="elMarketForm"
      :model="formParams"
      :rules="rules"
      label-position="top"
      size="large"
      require-asterisk-position="right"
    )
      ElFormItem(label="姓名" prop="name")
        ElInput(
          v-model.trim="formParams.name"
          placeholder="我們如何稱呼您"
          maxlength="200"
        )
      .web-row
        ElFormItem(label="公司" prop="company")
          ElInput(
            v-model.trim="formParams.company"
            placeholder="您所在的公司"
            maxlength="200"
          )
        ElFormItem(label="部門職稱" prop="job_title")
          ElInput(
            v-model.trim="formParams.job_title"
            placeholder="您的職位"
            maxlength="200"
          )
      .web-row
        //- ElFormItem(label="每月廣告預算" prop="budget")
        //-   ElSelect(
        //-     v-model="formParams.budget"
        //-     placeholder="請選擇廣告預算"
        //-     style="width: 100%"
        //-   )
        //-     ElOption(
        //-       v-for="item in formOption.monthlyAdvertisingBudget"
        //-       :key="item"
        //-       :label="item"
        //-       :value="item"
        //-     )
        //- ElFormItem(label="行銷諮詢項目" prop="item")
        //-   ElSelect(
        //-     v-model="formParams.item"
        //-     placeholder="請選擇服務項目"
        //-     style="width: 100%"
        //-   )
        //-     ElOption(
        //-       v-for="item in formOption.marketingConsultingProject"
        //-       :key="item"
        //-       :label="item"
        //-       :value="item"
        //-     )
      ElFormItem(label="聯絡信箱" prop="email")
        ElInput(
          v-model.trim="formParams.email"
          placeholder="請輸入內容"
          maxlength="200"
        )
      ElFormItem(label="聯絡電話" prop="phone")
        ElInput(
          v-model.trim="formParams.phone"
          placeholder="請輸入內容"
          maxlength="20"
        )
      ElFormItem(label="備註" prop="content")
        ElInput(
          v-model="formParams.content"
          placeholder="針對諮詢的項目所要補充的內容"
          :rows="2"
          type="textarea"
          maxlength="500"
          show-word-limit
          resize="none"
        )
  .btn-area
    ElButton(type="primary" size="medium" :loading="isSending" @click="ClickSubmit") {{ '送出' }}
</template>

<style lang="scss" scoped>
// 佈局 ----
#ContactUsForm {
  min-height: 100%;
  display: grid;
  grid-template-rows: auto 1fr;
  @include rwd-mobile {
    width: 100%;
  }
  @include rwd-pc {
    @include max-w-padding(500px, 60px);
  }
}
// 組件 ----
</style>
