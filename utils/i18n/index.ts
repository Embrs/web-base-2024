// import { StoreI18n } from './../../trash/store-i18n';
import localesData from './localses';
import { StoreI18n } from '@/composables/stores/store-i18n';

const localeIndex = {
  en: 0,
  tw: 1
};

export default (key: string): string => {
  const storeI18n = StoreI18n();
  const index = localeIndex[storeI18n.locale];
  return localesData?.[key]?.[index] || key;
};
