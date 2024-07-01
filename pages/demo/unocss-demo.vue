<script setup lang="ts">
// UnoCssDemo 請填寫功能描述👈
</script>

<template lang="pug">
#UnoCssDemo
  div(class="row-20px-center")
    p aa
    p bb
  div(class="row-20px")
    p cc
    p dd
  div(class="row")
    p ee
    p ff
  //- div(class="row-10px")
  //-   p cc
  //-   p dd
  //- button(

  //-   class="row "
  //-   bg="blue-400 hover:blue-500 dark:blue-500 dark:hover:blue-600"
  //-   text="sm white"
  //-   font="mono light"
  //-   p="y-2 x-4"
  //-   border="2 rounded blue-200"
  //- )
  ul(class="m-4")
    li 11
    li 22
    li 33
      ul
        li aa
        li bb
</template>

<style lang="scss" scoped>
// 佈局 ----
#UnoCssDemo {
  // TODO
}
li {
  list-style-type: circle;
}
li li {
  list-style-type: square;
}
// 組件 ----
// .scale-button {
//   @apply uno-btn bg-blue-3 flex-center c-red-900;
// }
.pc-show {
  @include rwd-mobile {
    display: none;
  }
}
.mobile-show {

  @include rwd-pc {
    display: none;
  }
}
</style>
