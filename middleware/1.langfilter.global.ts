export default defineNuxtRouteMiddleware((to, from) => {
  const storeI18n = StoreI18n();
  const points = to.path.replace('/', '').split('/').filter((_p: string) => !!_p);
  const lang = points[0];
  // 語系不存在
  if (!storeI18n.localGroup.includes(lang)) {
    points.unshift(storeI18n.localGroup[0]);
    const newPath = `/${points.join('/')}`;
    return navigateTo(newPath);
  }
});
