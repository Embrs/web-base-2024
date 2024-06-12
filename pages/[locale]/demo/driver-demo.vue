<script setup lang="ts">
// DriverDemo 請填寫功能描述👈
import { driver } from 'driver.js';
import 'driver.js/dist/driver.css';

const driverObj = driver({
  showProgress: true,
  nextBtnText: '下一步',
  prevBtnText: '上一步',
  doneBtnText: '完成',
  steps: [
    { element: '#a-box', popover: { title: 'TitleA', description: 'Description' } },
    { element: '#b-box', popover: { title: 'TitleB', description: 'Description' } },
    { element: '#c-box', popover: { title: 'TitleC', description: 'Description' } },
    {
      element: '#d-box',
      popover: {
        title: 'TitleD',
        description: '<img src=\'https://i.imgur.com/EAQhHu5.gif\' style=\'height: 202.5px; width: 270px;\' /><span style=\'font-size: 15px; display: block; margin-top: 10px; text-align: center;\'>Yet another highlight example.</span>'
      }
    }
  ]
});

const ClickStart = () => {
  driverObj.drive();
};
// -----------------------------------------------------------------------------------------------
const inputText = ref('');
const ShowNotice = (event: Event) => {
  const el = event.target.parentElement as HTMLInputElement;
  console.dir(el);
  driverObj.highlight({
    element: el,
    popover: {
      title: 'Name',
      description: 'Enter your name here'
    }
  });
};
</script>

<template lang="pug">
#DriverDemo
  p DriverDemo
  div
    NuxtLink(to="https://driverjs.com") 教學連結
  ElButton(@click="ClickStart") Start
  #a-box
  #b-box
  #c-box
  ElInput(v-model="inputText" placeholder="test" @click="ShowNotice")
</template>

<style lang="scss" scoped>
// 佈局 ----
#DriverDemo {
  // TODO
  padding: 20px;
}

// 組件 ----
#a-box {
  @include wh(50px);
  background-color: #aaa;
}
#b-box {
  @include wh(100px);
  background-color: #666;
}
#c-box {
  @include wh(200px);
  background-color: #333;
}
</style>
