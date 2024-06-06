// meta 初始化
export const MixinInitMeta = () => {
  // 資料 --------------------------------------------------------------------------------------------
  const route = useRoute();
  const seoTitle = useState('seoTitle', () => '');
  const seoDesc = useState('seoDesc', () => '網站描述');

  useHead({
    titleTemplate: (title) => {
      return title
        ? `網站名稱-${title}`
        : '網站名稱';
    },
    // title: () => seoTitle.value,
    meta: () => [
      // { name: 'robots', content: 'index' }, // content: https://www.newscan.com.tw/all-seo/robots-meta-directives.htm
      { name: 'description', content: seoDesc.value },
      { name: 'keywords', content: 'aa,bb,cc' },
      { name: 'copyright', content: 'Copyright © 2024 Athenaads. All rights reserved.' },
      { name: 'revisit-after', content: '1 days' },
      { name: 'author', content: '網站名稱' },

      { property: 'og:title', content: seoTitle.value },
      // { property: 'og:type', content: '類型' },
      { property: 'og:description', content: seoDesc.value },
      { property: 'og:site_name', content: '網站名稱' },
      { property: 'og:locale', content: 'zh-Hant-TW' },
      { property: 'og:url', content: `${route.path}` },
      { property: 'og:image', content: '/img/share.jpg' },

      // { property: 'twitter:card', content: '類型' },
      { property: 'twitter:title', content: seoTitle.value },
      { property: 'twitter:description', content: seoDesc.value },
      // { property: 'twitter:site', content: '帳號' },
      { property: 'twitter:creator', content: '網站名稱' },
      { property: 'twitter:url', content: `${route.path}` },
      { property: 'twitter:image', content: '/img/share.jpg' }
    ]
  });

  // watch(
  //   () => route.path,
  //   async () => {
  //     await ApiGetSeoSetting();
  //   }
  // );
};
