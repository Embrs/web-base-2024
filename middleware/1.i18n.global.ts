export default defineNuxtRouteMiddleware((to, from) => {
  const storeI18n = StoreI18n();
  // 不使用語系地區 離開
  if (!storeI18n.useLocale) return;

  // 提取語系地區
  console.log('to', to);
  const points = to.path.replace('/', '').split('/').filter((_p: string) => !!_p);

  const _urlLocale = String(to.params?.locale || 'tw');

  // 語系地區不存在
  if (!storeI18n.localeGroup.includes(_urlLocale)) {
    points.unshift(storeI18n.locale);
    const newPath = `/${points.join('/')}`;
    return navigateTo(newPath);
  }
  storeI18n.locale = _urlLocale as LocaleType;
});
