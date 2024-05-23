// // 語系控制
import elZhTw from 'element-plus/es/locale/lang/zh-tw';
import elEn from 'element-plus/es/locale/lang/en';

// -----------------------------------------------------------------------------------------------
export type localeType = 'en' |'tw';
export const StoreI18n = pinia.defineStore('StoreI18n', () => {
  // const { locale: i18nLocale } = useI18n();
  const $router = useRouter();

  const localGroup = ['tw', 'en'];
  const locale = ref<localeType>('tw');

  // element-plus 組件語系
  const elLocale = computed(() => {
    switch (locale.value) {
      case 'tw': return elZhTw;
      case 'en': return elEn;
    }
    return elZhTw;
  });

  // 更改語系
  const ChangeLocale = (_locale: localeType) => {
    if (!localGroup.includes(_locale)) return;
    $router.push({
      params: {
        lang: _locale
      }
    });
  };

  // 轉目前語系路徑
  const LocalePath = (_path: string) => {
    const points = _path.replace('/', '').split('/').filter((_p: string) => !!_p);
    const lang = points[0];
    if (localGroup.includes(lang)) return _path;
    return `/${locale.value}/${points.join('/')}`;
  };
  // -----------------------------------------------------------------------------------------------
  return {
    locale,
    localGroup,
    elLocale,
    ChangeLocale,
    LocalePath
  };
});
