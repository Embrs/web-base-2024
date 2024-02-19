// // 語系控制
import elZhTw from 'element-plus/es/locale/lang/zh-tw';
import elEn from 'element-plus/es/locale/lang/en';

export type localeType = 'en' |'zhTw';
export const StoreI18n = pinia.defineStore('StoreI18n', () => {
  // const { locale: i18nLocale } = useI18n();
  const locale = ref<localeType>('zhTw');
  // const { locale } = useI18n();

  const elLocale = computed(() => {
    switch (locale.value) {
      case 'en': return elEn;
      case 'zhTw': return elZhTw;
    }
    return elZhTw;
  });

  // 更改語系
  const ChangeLocale = (_lcoale: localeType) => {
    // i18nLocale.value = _lcoale;
    locale.value = _lcoale;
  };
  // p {{ $t('demo') }}
  return { locale, elLocale, ChangeLocale };
});
