<script setup lang="ts">
// UnoCssDemo 請填寫功能描述👈
</script>

<template lang="pug">
#UnoCssDemo
  //- wh
  .title wh (預設 100%)
  .limit-area
    .box0(class="wh")
  .title wh-30px (widht-hgith)
  .limit-area
    .box0(class="wh-30px")
  .title wh-30px-50px (width, height)
  .limit-area
    .box0(class="wh-30px-50px")
  br
  //- row
  .title row (內建 align-items: center)
  .box-area(class="row")
    .box1
    .box2
  .title row-10px (flex, gap)
  .box-area(class="row-10px")
    .box1
    .box2
  .title row-10px-center (flex, gap, justify-content)
  .box-area(class="row-10px-center ")
    .box1
    .box2
  br
  //- col
  .title col
  .box-area(class="col")
    .box1
    .box2
  .title col-10px (column, gap)
  .box-area(class="col-10px")
    .box1
    .box2
  .title col-10px-center (column, gap, align-items)
  .box-area(class="col-10px-center bg-tertiary-300")
    .box1
    .box2
  br
  .title 錯誤寫法
  .row
    p 11
    p 22
  .row-20px
    p 11
    p 22
  //-

  br
  .title btn-click
  .demo-btn(class="btn-click")
  .demo-btn-2(class="btn-click")
</template>

<style lang="scss" scoped>
// 佈局 ----
#UnoCssDemo {
  // TODO
  padding: 20px;
}

// 組件 ----
.title {
  color: #4a95aa;
}
.box-area {
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
  // @include wh(100px, 50px);
  // background-color: #aaa;
}

.demo-1 {
  @apply wh-100px-50px bg-primary-100;
}
</style>
