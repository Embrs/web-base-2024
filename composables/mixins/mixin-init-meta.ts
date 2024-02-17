// meta 初始化
export const MixinInitMeta = () => {
  const route = useRoute();
  // const runtimeConfig = useRuntimeConfig();
  useHead({
    // title,
    titleTemplate: (title) => {
      return title
        ? `雅典娜數位整合行銷-${title}`
        : '雅典娜數位整合行銷｜行銷企劃｜口碑行銷｜網頁製作｜廣告代操｜商模建置｜SEO搜尋引擎優化｜台中行銷公司｜行銷公司';
    },
    meta: [
      { name: 'robots', content: 'index' }, // content: https://www.newscan.com.tw/all-seo/robots-meta-directives.htm
      { name: 'description', content: '雅典娜數位整合行銷，擁有從行銷到網頁製作一條龍的完整服務，並且在商模建置與行銷企劃中，擁有比其他行銷公司更敏銳的嗅覺，在SEO搜尋引擎優化這個區塊，擁有過人的操作熟練度，在各個行銷佈局與口碑行銷的操作上別於市場的執行手法，並在廣告代操的漏斗上別於其他行銷公司上架構。' },
      { name: 'keywords', content: '' },
      { name: 'copyright', content: 'Copyright © 2024 Athenaads. All rights reserved.' },
      { name: 'revisit-after', content: '1 days' },
      { name: 'author', content: '雅典娜數位整合行銷' },

      { property: 'og:title', content: '雅典娜數位整合行銷｜行銷企劃｜口碑行銷｜網頁製作｜廣告代操｜商模建置｜SEO搜尋引擎優化｜台中行銷公司｜行銷公司' },
      // { property: 'og:type', content: '類型' },
      { property: 'og:description', content: '雅典娜數位整合行銷，擁有從行銷到網頁製作一條龍的完整服務，並且在商模建置與行銷企劃中，擁有比其他行銷公司更敏銳的嗅覺，在SEO搜尋引擎優化這個區塊，擁有過人的操作熟練度，在各個行銷佈局與口碑行銷的操作上別於市場的執行手法，並在廣告代操的漏斗上別於其他行銷公司上架構。' },
      { property: 'og:site_name', content: '雅典娜數位整合行銷' },
      { property: 'og:locale', content: 'zh-Hant-TW' },
      { property: 'og:url', content: `${route.path}` },
      { property: 'og:image', content: '/img/share.jpg' },

      // { property: 'twitter:card', content: '類型' },
      { property: 'twitter:title', content: '雅典娜數位整合行銷｜行銷企劃｜口碑行銷｜網頁製作｜廣告代操｜商模建置｜SEO搜尋引擎優化｜台中行銷公司｜行銷公司' },
      { property: 'twitter:description', content: '雅典娜數位整合行銷，擁有從行銷到網頁製作一條龍的完整服務，並且在商模建置與行銷企劃中，擁有比其他行銷公司更敏銳的嗅覺，在SEO搜尋引擎優化這個區塊，擁有過人的操作熟練度，在各個行銷佈局與口碑行銷的操作上別於市場的執行手法，並在廣告代操的漏斗上別於其他行銷公司上架構。' },
      // { property: 'twitter:site', content: '帳號' },
      { property: 'twitter:creator', content: '雅典娜數位整合行銷' },
      { property: 'twitter:url', content: `${route.path}` },
      { property: 'twitter:image', content: '/img/share.jpg' }

    ]
  });
};
