<script setup lang="ts">
// FontDemo 請填寫功能描述👈
</script>

<template lang="pug">
#FontDemo
  p FontDemo
  h1 H1
  h2 H2
  h3 H3
  h4 H4
  h5 H5
  h6 H6
  hr
  p fs('footnote-description')
  p fs(12px)
  p default 16px
  hr
  p family: "Noto Sans", "Noto Sans TC"
  hr
  h4.title Display
  .display-large display-large
  .display-medium display-medium
  .display-small display-small
  hr
  h4.title Body
  .body-regular body-regular
  .body-small body-small
  .footnote-description footnote-description
  hr
  h4.title Label
  .label-large label-large
  .label-small label-small
  hr
  h4.title Default
  .size-12px size-12px
  .size-14px size-14px
  .size-16px size-16px
  .size-18px size-18px
</template>

<style lang="scss" scoped>
// 佈局 ----
#FontDemo {
  // TODO
}

// 組件 ----
.title {
  color: #4a95aa
}
.footnote-description {
  @include fs('footnote-description');
}
.body-small {
  @include fs('body-small');
}
.body-regular {
  @include fs('body-regular');
}
.display-small {
  @include fs('display-small');
}
.display-medium {
  @include fs('display-medium');
}
.display-large {
  @include fs('display-large');
}
.label-large {
  @include fs('label-large');
}
.label-small {
  @include fs('label-small');
}
.size-12px {
  @include fs(12px);
}
.size-14px {
  @include fs(14px);
}
.size-16px {
  @include fs(16px);
}
.size-18px {
  @include fs(18px);
}
</style>
