<template lang="pug">
Transition(name="com" mode="out-in")
  Suspense
    slot
    template(#fallback)
      #Loading(v-loading="true")
</template>

<style lang="scss" scoped>
// 佈局 ----
#Loading {
  @include wh;
  @include center;
  font-size: 40px;
}
// 組件 ----

</style>
