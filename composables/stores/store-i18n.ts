// // 語系控制
import elZhTw from 'element-plus/es/locale/lang/zh-tw';
import elEn from 'element-plus/es/locale/lang/en';
import elJp from 'element-plus/es/locale/lang/ja';

// -----------------------------------------------------------------------------------------------
export type LocaleType = 'en' |'tw' | 'jp';
export const StoreI18n = pinia.defineStore('StoreI18n', () => {
  const useLocale = false; // 是否使用語系地區
  const $router = useRouter();
  const locale = useCookie<LocaleType>('i18nLoacle', { default: () => 'tw' });
  const localeGroup = ['tw', 'en', 'jp'];
  // 已使用過瀏覽器設定語系地區
  const alreadyUseBrowserLocale = useCookie<Boolean>('useI18nBrowserLoacle', { default: () => false });

  // element-plus 組件語系
  const elLocale = computed(() => {
    switch (locale.value) {
      case 'tw': return elZhTw;
      case 'en': return elEn;
      case 'jp': return elJp;
    }
    return elZhTw;
  });

  // 更改語系地區
  const ChangeLocale = (_locale: LocaleType) => {
    if (!localeGroup.includes(_locale)) return;
    $router.push({
      params: {
        locale: _locale
      }
    });
    locale.value = _locale;
  };

  // 偵測瀏覽器語系地區(只能在 client 使用)
  const GetBrowserLocale = () => {
    if (import.meta.server) return 'tw';
    const _browserLocale = navigator?.language?.toLowerCase()?.toLowerCase();
    if (_browserLocale.includes('zh')) return 'tw';
    if (_browserLocale.includes('tw')) return 'tw';
    if (_browserLocale.includes('en')) return 'en';
    if (_browserLocale.includes('ja')) return 'jp';
    if (_browserLocale.includes('jp')) return 'jp';
    return 'tw';
  };

  // 轉目前語系路徑
  const LocalePath = (_path: string) => {
    if (!useLocale) return _path;
    const points = _path.replace('/', '').split('/').filter((_p: string) => !!_p);
    const _local = points[0];
    if (localeGroup.includes(_local)) return _path;
    return `/${locale.value}/${points.join('/')}`;
  };

  const BrowserLocaleInit = () => {
    // 瀏覽器語系跳轉
    if (!alreadyUseBrowserLocale.value) {
      alreadyUseBrowserLocale.value = true;
      ChangeLocale(GetBrowserLocale());
    }
  };

  // -----------------------------------------------------------------------------------------------
  return {
    useLocale, // 是否使用語系地區
    locale,
    // alreadyUseBrowserLocale,
    localeGroup,
    elLocale,
    ChangeLocale,
    LocalePath,
    BrowserLocaleInit
    // GetBrowserLocale
  };
});
