export default defineNuxtRouteMiddleware((to, from) => {
  const storeI18n = StoreI18n();
  const points = to.path.replace('/', '').split('/').filter((_p: string) => !!_p);
  const _urlLang = points?.[0];

  // 語系不存在
  if (!storeI18n.langGroup.includes(_urlLang)) {
    points.unshift(storeI18n.lang);
    const newPath = `/${points.join('/')}`;
    return navigateTo(newPath);
  }
  storeI18n.lang = _urlLang as LangType;
});
