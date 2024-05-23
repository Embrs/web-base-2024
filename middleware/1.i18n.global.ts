export default defineNuxtRouteMiddleware((to, from) => {
  const storeI18n = StoreI18n();
  const points = to.path.replace('/', '').split('/').filter((_p: string) => !!_p);
  const _urlLocale = points?.[0];

  // 語系不存在
  if (!storeI18n.localeGroup.includes(_urlLocale)) {
    points.unshift(storeI18n.locale);
    const newPath = `/${points.join('/')}`;
    return navigateTo(newPath);
  }
  storeI18n.locale = _urlLocale as LocaleType;
});
