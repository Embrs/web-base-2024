<script setup lang="ts">
// ElImagePlus 等比縮放，懶加載 圖片
import { Picture as IconPicture } from '@element-plus/icons-vue';

// 資料 --------------------------------------------------------------------------------------------
const props = defineProps({
  width: {
    type: [Number, String],
    default: 100 // 寬，100~0 為 %
  },
  height: {
    type: [Number, String],
    default: 100 // 高，100~0 為 %, useHeightScale = true 時為寬的比例
  },
  useScale: { // 使用比例縮放
    type: Boolean,
    default: false
  }
});

// 圖片限制樣式
const imgBoxStyle = computed(() => {
  const _style: any = {};
  _style.width = `${props.width}${Number(props.width) <= 100 ? '%' : 'px'} !important`;

  if (props.useScale) {
    _style['padding-top'] = `${props.height}% !important`;
  } else {
    _style.height = `${props.height}${Number(props.height) <= 100 ? '%' : 'px'} !important`;
  }
  return _style;
});

</script>

<template lang="pug">
#ElImagePlus(:style="imgBoxStyle")
  ElImage.img(
    loading="lazy"
    alt="我是圖片"
    fit="cover"
    v-bind="$attrs"
    preview-teleported
  )
    template(#error)
      .err-slot
        ElIcon
          IconPicture
</template>

<style lang="scss" scoped>
// 佈局 ----
#ElImagePlus {
  position: relative;
  overflow: hidden;
}
// 組件 ----
.img {
  @include wh;
  @include absolute;
  display: block;
  -webkit-user-drag: none; // 不可拖曳圖片
  -webkit-touch-callout: none; // ios禁用菜單
}
.err-slot {
  @include wh;
  @include center;
  font-size: 30px;
  color: var(--el-text-color-secondary);
  background: var(--el-fill-color-light);
}
</style>
