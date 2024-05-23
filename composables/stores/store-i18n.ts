// // 語系控制
import elZhTw from 'element-plus/es/locale/lang/zh-tw';
import elEn from 'element-plus/es/locale/lang/en';

// -----------------------------------------------------------------------------------------------
export type LangType = 'en' |'tw';
export const StoreI18n = pinia.defineStore('StoreI18n', () => {
  // const { locale: i18nLocale } = useI18n();
  const $router = useRouter();

  const langGroup = ['tw', 'en', 'jp'];
  const lang = ref <LangType>('tw');

  // element-plus 組件語系
  const elLang = computed(() => {
    switch (lang.value) {
      case 'tw': return elZhTw;
      case 'en': return elEn;
    }
    return elZhTw;
  });

  // 更改語系
  const ChangeLocale = (_lang: LangType) => {
    if (!langGroup.includes(_lang)) return;
    $router.push({
      params: {
        lang: _lang
      }
    });
  };

  // 偵測瀏覽器語系(只能在 client 使用)
  const GetBrowserLang = () => {
    if (process.server) return '';
    const _browserLang = navigator?.language?.toLowerCase()?.toLowerCase();
    if (_browserLang.includes('zh')) return 'tw';
    if (_browserLang.includes('tw')) return 'tw';
    if (_browserLang.includes('en')) return 'en';
    if (_browserLang.includes('ja')) return 'jp';
    if (_browserLang.includes('jp')) return 'jp';
    return 'tw';
  };

  // 轉目前語系路徑
  const LocalePath = (_path: string) => {
    const points = _path.replace('/', '').split('/').filter((_p: string) => !!_p);
    const _lang = points[0];
    if (langGroup.includes(_lang)) return _path;
    return `/${lang.value}/${points.join('/')}`;
  };
  // -----------------------------------------------------------------------------------------------
  return {
    lang,
    langGroup,
    elLang,
    ChangeLocale,
    LocalePath,
    GetBrowserLang
  };
});
