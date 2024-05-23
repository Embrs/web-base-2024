// import { StoreI18n } from './../../trash/store-i18n';
import localesData from './localses';
import { StoreI18n } from '@/composables/stores/store-i18n';

const localeIndex = {
  tw: 0,
  en: 1,
  jp: 2
};

export default (key: string): string => {
  const storeI18n = StoreI18n();
  const index = localeIndex[storeI18n.lang];
  return localesData?.[key]?.[index] || key;
};
