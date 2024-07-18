<script setup lang="ts">
// GoogleForm 請填寫功能描述👈
// https://medium.com/misa-design-%E5%A0%AF%E8%88%9C%E8%A8%AD%E8%A8%88/%E5%8F%AA%E6%87%82%E5%89%8D%E7%AB%AF%E4%B9%9F%E5%8F%AF%E4%BB%A5%E5%81%9A%E5%87%BA%E8%83%BD%E7%B7%9A%E4%B8%8A%E5%82%B3%E9%80%81%E7%9A%84%E8%A1%A8%E5%96%AE-6dc735c57bd6

const elForm = ref();
const testParams = ref({
  name: 'aa',
  email: 'bb@bb.bb',
  subject: 'cc',
  message: 'dd'
});

const rules = computed<any>(() => {
  return {
    name: [{ required: true, message: '請輸入姓名', trigger: 'change' }],
    email: [
      { required: true, message: '請輸入信箱', trigger: 'change' },
      {
        type: 'email',
        message: '信箱格式錯誤',
        trigger: ['blur', 'change']
      }
    ],
    subject: [{ required: true, message: '請輸入主旨', trigger: 'change' }]
  };
});
// -----------------------------------------------------------------------------------------------
const ClickSend = async () => {
  // 表單驗證
  if (!await FormValidate()) return;
  // 表單送出
  SendGoogleForm();
};
// -----------------------------------------------------------------------------------------------
// 表單驗證
const FormValidate = ():Promise<boolean> => elForm.value.validate((_isPass: Boolean) => _isPass);
// 送出表單
const SendGoogleForm = async () => { // 這裡要對應到自己的 javascript 名稱
  console.log('ss');
  const res = await $fetch('https://docs.google.com/forms/u/0/d/e/1FAIpQLSc7cjI3iB7AtQXPTv6q0_E8yXjY4YoJxW44CxmDduGBrQMKzw/formResponse', {
    method: 'post',
    body: {
      'entry.1445773366': testParams.value.name,
      'entry.618125831': testParams.value.email,
      'entry.635359047': testParams.value.subject,
      'entry.679531979': testParams.value.message
    },
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
  console.log('res', res);
  // 宣告欄位
  // $.ajax({
  //   url: 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSc7cjI3iB7AtQXPTv6q0_E8yXjY4YoJxW44CxmDduGBrQMKzw/formResponse', // Google Form 裡面的 form action 網址 ＊＊記得要填＊＊
  //   data: { // Google Form 裡面的欄位 name ＊＊記得要改＊＊
  //     'entry.000000': field1,
  //     'entry.000000': field2
  //   },
  //   type: 'POST',
  //   dataType: 'xml',
  //   statusCode: {
  //     0: function () {
  //       alert('已送出!'); // 完成送出表單的警告視窗
  //       window.location.assign('http://google.com'); // 送出表單後的導向
  //     },
  //     200: function () {
  //       alert('已送出!'); // 完成送出表單的警告視窗
  //       window.location.assign('http://google.com'); // 送出表單後的導向
  //     }
  //   }
  // });
};
// -----------------------------------------------------------------------------------------------
// useHead({
//   script: [
//     {
//       src: 'https://ajax.googleapis.com/ajax/libs/cesiumjs/1.78/Build/Cesium/Cesium.js',
//       async: true
//     }
//   ]
// });
</script>

<template lang="pug">
#GoogleForm
  p GoogleForm
  ElForm(
    ref="elForm"
    :model="testParams"
    :rules="rules"
    label-width="100px"
    @submit.prevent
  )
    ElFormItem(label="姓名" prop="name")
      ElInput(
        v-model.trim="testParams.name"
        style="width:300px"
        placeholder="Name"
        maxlength="100"
      )
    ElFormItem(label="信箱" prop="email")
      ElInput(
        v-model.trim="testParams.email"
        style="width:300px"
        placeholder="E-mail"
        maxlength="100"
      )
    ElFormItem(label="主旨" prop="subject")
      ElInput(
        v-model.trim="testParams.subject"
        style="width:300px"
        placeholder="Subject"
        maxlength="100"
      )
    ElFormItem(label="訊息" prop="message")
      ElInput(
        v-model="testParams.message"
        style="width:300px"
        placeholder="Message"
        maxlength="1000"
        :rows="10"
        type="textarea"
      )
    ElFormItem(label=" ")
      ElButton(type="primary" style="width:300px" @click="ClickSend") 送出
</template>

<style lang="scss" scoped>
// 佈局 ----
#GoogleForm {
  // TODO
}

// 組件 ----
</style>
