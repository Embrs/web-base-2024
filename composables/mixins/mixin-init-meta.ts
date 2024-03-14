// meta 初始化
export const MixinInitMeta = () => {
  // 資料 --------------------------------------------------------------------------------------------
  const route = useRoute();
  const defTitle = '雅典娜數位整合行銷-後台管理系統';
  const defDesc = '雅典娜數位整合行銷，擁有從行銷到網頁製作一條龍的完整服務，並且在商模建置與行銷企劃中，擁有比其他行銷公司更敏銳的嗅覺，在SEO搜尋引擎優化這個區塊，擁有過人的操作熟練度，在各個行銷佈局與口碑行銷的操作上別於市場的執行手法，並在廣告代操的漏斗上別於其他行銷公司上架構。';
  const seoTitle = useState('seoTitle', () => defTitle);
  const seoDesc = useState('seoDesc', () => defDesc);

  // api 模擬
  const defTitleDescMap:{[key:string]: {title: string, desc: string}} = {
    '/sign-in': {
      title: '登入',
      desc: 'AAAA'
    }
  };

  // Api ---------------------------------------------------------------------------------------------
  // Api 取得seo設定
  const ApiGetSeoSetting = async () => {
    // 模擬等待回傳
    seoTitle.value = defTitle;
    seoDesc.value = defDesc;
    await tool.Wait(100);
    // 設定 api 回傳值
    if (defTitleDescMap[route.path]) {
      seoTitle.value = defTitleDescMap[route.path].title;
      seoDesc.value = defTitleDescMap[route.path].desc;
      return true;
    }
    return false;
  };

  // 生命週期 -----------------------------------------------------------------------------------------
  useAsyncData(`init${route.path}`, async () => {
    await ApiGetSeoSetting();
    return true;
  });

  useHead({
    title: () => seoTitle.value,
    meta: () => [
      // { name: 'robots', content: 'index' }, // content: https://www.newscan.com.tw/all-seo/robots-meta-directives.htm
      { name: 'description', content: seoDesc.value },
      { name: 'keywords', content: '' },
      { name: 'copyright', content: 'Copyright © 2024 Athenaads. All rights reserved.' },
      { name: 'revisit-after', content: '1 days' },
      { name: 'author', content: '雅典娜數位整合行銷' },

      { property: 'og:title', content: seoTitle.value },
      // { property: 'og:type', content: '類型' },
      { property: 'og:description', content: seoDesc.value },
      { property: 'og:site_name', content: '雅典娜數位整合行銷' },
      { property: 'og:locale', content: 'zh-Hant-TW' },
      { property: 'og:url', content: `${route.path}` },
      { property: 'og:image', content: '/img/share.jpg' },

      // { property: 'twitter:card', content: '類型' },
      { property: 'twitter:title', content: seoTitle.value },
      { property: 'twitter:description', content: seoDesc.value },
      // { property: 'twitter:site', content: '帳號' },
      { property: 'twitter:creator', content: '雅典娜數位整合行銷' },
      { property: 'twitter:url', content: `${route.path}` },
      { property: 'twitter:image', content: '/img/share.jpg' }
    ]
  });

  watch(
    () => route.path,
    async () => {
      await ApiGetSeoSetting();
    }
  );
};
