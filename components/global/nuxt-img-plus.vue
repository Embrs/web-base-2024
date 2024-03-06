<script setup lang="ts">
// NuxtImgPlus 等比縮放，懶加載 圖片
// 資料 --------------------------------------------------------------------------------------------
const props = defineProps({
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    default: '我是圖片'
  },
  title: {
    type: String,
    default: '我是圖片'
  },
  width: {
    type: Number,
    default: 100 // 寬，100~0 為 %
  },
  height: {
    type: [Number, String],
    default: 100 // 高，100~0 為 %, useHeightScale = true 時為寬的比例
  },
  sizes: {
    type: String,
    default: '' // ex: sm:50vw md:70vw lg:800px,
    // def
    // 'xs': 320 以上,
    // 'sm': 640 以上,
    // 'md': 768 以上,
    // 'lg': 1024 以上,
    // 'xl': 1280 以上,
    // 'xxl': 1536 以上,
    // '2xl': 1536 以上,
  },
  useScale: { // 使用比例縮放
    type: Boolean,
    default: false
  },
  fit: { // 圖片放置
    type: String,
    default: 'cover' // contain cover scale-down fill none
  }
});

const isErr = ref(false); // 圖片加載失敗
const elImg = ref();

// 圖片限制樣式
const imgBoxStyle = computed(() => {
  const _style: any = {};
  _style.width = `${props.width}${props.width <= 100 ? '%' : 'px'} !important`;

  if (props.useScale) {
    _style['padding-top'] = `${props.height}% !important`;
  } else {
    _style.height = `${props.height}${Number(props.height) <= 100 ? '%' : 'px'} !important`;
  }
  return _style;
});
// 圖片樣式
const imgStyle = computed(() => {
  const _style = {
    'object-fit': `${props.fit} !important`
  };
  return _style;
});

const ImgLoadErr = () => {
  isErr.value = true;
};

</script>

<template lang="pug">
#NuxtImgPlus(
  :style="imgBoxStyle"
)
  NuxtImg.nuxt-img(
    v-show="!isErr"
    ref="elImg"
    format="webp"
    :src="props.src"
    :alt="props.alt"
    :title="props.title"
    :style="imgStyle"
    :sizes="props.sizes"
    @error="ImgLoadErr"
  )
  .not-find(v-if="isErr")
    p Not Found
</template>

<style lang="scss" scoped>
// 佈局 ----
#NuxtImgPlus {
  position: relative;
  overflow: hidden;
  transition: opacity .4s ease;
  img {
    @include wh;
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    -webkit-user-drag: none; // 不可拖曳圖片
    -webkit-touch-callout: none; // ios禁用菜單
    pointer-events: none; // 防止拖拉圖片
  }

  .not-find {
    @include wh;
    @include center;
    position: absolute;
    top: 0;
    left: 0;
    font-size: 30px;
    font-weight: 700;
    color: #FFF;
    background-color: #eee;

  }
}
// 組件 ----
</style>
