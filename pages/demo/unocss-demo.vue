<script setup lang="ts">
// UnoCssDemo 請填寫功能描述👈
</script>

<template lang="pug">
#UnoCssDemo
  //- wh
  p https://unocss-cn.pages.dev/guide/
  p https://www.may-notes.com/unocss-tricks/
  p https://juejin.cn/post/7348473946582646784
  p https://juejin.cn/post/7320528982386065471
  .title wh (預設 100%)
  .limit-area
    div(class="wh bg-green")
  .title wh-30px (widht-hgith)
  .limit-area
    div(class="wh-30px bg-green")
  .title wh-30px-50px (width, height)
  .limit-area
    div(class="wh-30px-50px bg-green")
  br
  //- item-row
  .title item-row (內建 align-items: center)
  .box-area(class="item-row")
    .box1
    .box2
  .title item-row-10px (flex, gap)
  .box-area(class="item-row-10px")
    .box1
    .box2
  .title item-row-10px-center (flex, gap, justify-content)
  .box-area(class="item-row-10px-center")
    .box1
    .box2
  .title .item-row
  .box-area.item-row
    .box1
    .box2
  .title .item-row-20px
  .box-area.item-row-20px
    .box1
    .box2
  br
  //- col
  .title item-col
  .box-area(class="item-col")
    .box1
    .box2
  .title item-col-10px (column, gap)
  .box-area(class="item-col-10px")
    .box1
    .box2
  .title item-col-10px-center (column, gap, align-items)
  .box-area(class="item-col-10px-center bg-tertiary-300")
    .box1
    .box2
  //-
  br
  .title center-row
  .limit-area(class="center-row")
    .box1
    .box2
  .title center-row-10px
  .limit-area(class="center-row-10px")
    .box1
    .box2
  br
  .title center-col
  .limit-area(class="center-col")
    .box1
    .box2
  .title center-col-10px
  .limit-area(class="center-col-10px")
    .box1
    .box2
  br
  .title btn-click
  div(class="demo-btn btn-click")
  div(class="demo-btn-2 btn-click") 在css設定檔
  br
  .title {{ 'group RWD (lt-md: Phone(0 ~ 768px), md: PC(>768px))' }}
  div(
    class="wh-100px transition-transform-200 transition-background-color-400"
    hover="translate-y-[-5px] scale-110 bg-primary-100"
    lt-md="text-3xl bg-secondary-100"
    md="text-3xl bg-secondary-300"
  ) ABC 123
  .title {{ 'group RWD (lt-md: Phone(0 ~ 768px), md: Pad(>768px), lg: PC(>1280px))' }}
  div(
    class="transition-transform-200 transition-background-color-400"
    hover="translate-y-[-5px] scale-110 bg-primary-100"
    lt-md="text-3xl bg-secondary-100"
    md="text-3xl bg-secondary-300"
    lg="text-4xl bg-secondary-600"
  ) ABC 123
  .title content-[url(/favicon.svg)]
  div(
    class="wh-100px content-[url(/img/share.jpg)]"
    hover="content-[url(/favicon.svg)]"
    alt="Unocss"
  )
</template>

<style lang="scss" scoped>

#UnoCssDemo {
  // TODO
  padding: 20px;
}

// 組件 ----
.title {
  color: #4a95aa;
}
.box-area {
  min-height: 100px;
  background-color: #eee;
}
.limit-area {
  background-color: #eee;
  @include wh(100px, 100px);
}
.box0 {
  background-color: green;
}
.box1 {
  @include wh(20px, 30px);
  background-color: red;
}
.box2 {
  @include wh(30px, 20px);
  background-color: blue;
}
.demo-btn {
  @apply wh-100px-50px bg-primary-100;
}

.demo-1 {
  @apply wh-100px-50px bg-primary-100;
}
</style>
