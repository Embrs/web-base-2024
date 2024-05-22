<script setup lang="ts">
// ThemeDemo 請填寫功能描述👈
// 資料 --------------------------------------------------------------------------------------------
const storeTheme = StoreTheme();
const colorList = [
  'primary-900',
  'primary-800',
  'primary-700',
  'primary-600',
  'primary-500',
  'primary-400',
  'primary-300',
  'primary-200',
  'primary-100',
  'primary',
  'secondary-900',
  'secondary-800',
  'secondary-700',
  'secondary-600',
  'secondary-500',
  'secondary-400',
  'secondary-300',
  'secondary-200',
  'secondary-100',
  'secondary',
  'tertiary-900',
  'tertiary-800',
  'tertiary-700',
  'tertiary-600',
  'tertiary-500',
  'tertiary-400',
  'tertiary-300',
  'tertiary-200',
  'tertiary-100',
  'tertiary',
  'error',
  't-dark',
  't-gray',
  't-white',
  'bg'
];

// 接收事件 -----------------------------------------------------------------------------------------
const ClickChangeTheme = (theme: ThemeType) => {
  storeTheme.ChangeTheme(theme);
};
</script>

<template lang="pug">
#ThemeDemo
  p ThemeDemo
  ElButton(type="primary" @click="ClickChangeTheme('system')") system
  ElButton(type="primary" @click="ClickChangeTheme('dark')") dark
  ElButton(type="primary" @click="ClickChangeTheme('light')") light
  ElButton(type="primary" @click="ClickChangeTheme('pink')") pink
  p(class="text-primary-100") 123
  p(class="text-error") Theme Type: {{ $colorMode.value }}
  .box-area
    .box(
      v-for="color of colorList" :key="color"
      :class="color"
    ) ${{ color }}
  .box-area
    el-color-picker(v-model="storeTheme.colors.primaryTest100" show-alpha)
    .primary-test-100 {{ storeTheme.colors.primaryTest100 }}
</template>

<style lang="scss" scoped>
// 佈局 ----
#ThemeDemo {
  background-color: #EAEFF2;
  @include wh;
  .box-area {
    @include row-wrap(10px);
    @include stroke(1, white);

    padding: 10px;
    font-weight: 700;
  }
}

// 組件 ----
.box {
  @include wh(200px, 50px);
  @include center;
}
.primary-900 {background-color: $primary-900}
.primary-800 {background-color: $primary-800}
.primary-700 {background-color: $primary-700}
.primary-600 {background-color: $primary-600}
.primary-500 {background-color: $primary-500}
.primary-400 {background-color: $primary-400}
.primary-300 {background-color: $primary-300}
.primary-200 {background-color: $primary-200}
.primary-100 {background-color: $primary-100}
.primary {background-color: $primary}
.secondary-900 {background-color: $secondary-900}
.secondary-800 {background-color: $secondary-800}
.secondary-700 {background-color: $secondary-700}
.secondary-600 {background-color: $secondary-600}
.secondary-500 {background-color: $secondary-500}
.secondary-400 {background-color: $secondary-400}
.secondary-300 {background-color: $secondary-300}
.secondary-200 {background-color: $secondary-200}
.secondary-100 {background-color: $secondary-100}
.secondary {background-color: $secondary}
.tertiary-900 {background-color: $tertiary-900}
.tertiary-800 {background-color: $tertiary-800}
.tertiary-700 {background-color: $tertiary-700}
.tertiary-600 {background-color: $tertiary-600}
.tertiary-500 {background-color: $tertiary-500}
.tertiary-400 {background-color: $tertiary-400}
.tertiary-300 {background-color: $tertiary-300}
.tertiary-200 {background-color: $tertiary-200}
.tertiary-100 {background-color: $tertiary-100}
.tertiary {background-color: $tertiary}
.error {background-color: $error}
.t-dark {background-color: $t-dark}
.t-gray {background-color: $t-gray}
.t-white {background-color: $t-white}
.bg {background-color: $bg}

.primary-test-100 {
  @include center;
  @include wh(200px, 50px);
  // color: #fff;
  background-color: v-bind('storeTheme.colors.primaryTest100');
  // mix-blend-mode: difference;
}
</style>
