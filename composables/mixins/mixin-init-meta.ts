// meta 初始化
export const MixinInitMeta = () => {
  // 資料 --------------------------------------------------------------------------------------------
  const route = useRoute();
  const author = useState('author', () => 'Athenaads');
  const seoTitle = useState('seoTitle', () => '網站名稱');
  const seoDesc = useState('seoDesc', () => '網站描述');
  const seoKeywords = useState('seoKeywords', () => 'aa,bb,cc');
  // 生命週期 -----------------------------------------------------------------------------------------
  // useAsyncData(`init${route.path}`, async () => {
  //   // TODO set title desc keywords
  //   return true;
  // });

  useHead({
    // titleTemplate: (title) => {
    //   seoTitle.value = title ? `${defTitle}-${title}` : defTitle;
    //   return seoTitle.value;
    // },
    title: () => seoTitle.value,
    meta: () => [
      // { name: 'robots', content: 'index' }, // content: https://www.newscan.com.tw/all-seo/robots-meta-directives.htm
      { name: 'description', content: seoDesc.value },
      { name: 'keywords', content: seoKeywords.value },
      { name: 'copyright', content: `Copyright © 2024 ${author.value}. All rights reserved.` },
      { name: 'revisit-after', content: '1 days' },
      { name: 'author', content: author.value },

      { property: 'og:title', content: seoTitle.value },
      // { property: 'og:type', content: '類型' },
      { property: 'og:description', content: seoDesc.value },
      { property: 'og:site_name', content: seoTitle.value },
      { property: 'og:locale', content: 'zh-Hant-TW' },
      { property: 'og:url', content: `${route.path}` },
      { property: 'og:image', content: '/img/share.jpg' },

      // { property: 'twitter:card', content: '類型' },
      { property: 'twitter:title', content: seoTitle.value },
      { property: 'twitter:description', content: seoDesc.value },
      // { property: 'twitter:site', content: '帳號' },
      { property: 'twitter:creator', content: author.value },
      { property: 'twitter:url', content: `${route.path}` },
      { property: 'twitter:image', content: '/img/share.jpg' }
    ]
  });
};
