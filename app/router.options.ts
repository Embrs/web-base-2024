import type { RouterConfig } from '@nuxt/schema';

// https://router.vuejs.org/api/interfaces/routeroptions.html
export default <RouterConfig>{
  // 注入頁面
  // routes: (_routes) => [
  //   ..._routes,
  //   {
  //     name: 'dd-dd-dd-demo',
  //     path: '/dd/dd/dd/demo',
  //     component: () => import('@/pages/demo.vue').then((r) => r.default || r)
  //   }
  // ],
  scrollBehavior (to, from, savedPosition) {
    // ex: <NuxtLink to="#top"> To Top </ NuxtLink>
    // 滾動到 ID 位置
    if (to.hash) {
      return new Promise((resolve) => {
        setTimeout(() => {
          // 去除 Header 高度
          // const headerHeight = document.querySelector('#Header')?.clientHeight || 0;
          const elScroll = document.querySelector(to.hash) as HTMLElement;
          if (!elScroll) resolve();
          const elScrollTop = elScroll?.offsetTop || 0;
          // const top = elScrollTop - headerHeight;
          resolve({
            top: elScrollTop,
            behavior: 'smooth'
          });
        }, 400);
      });
    }

    // 如果連結到同一頁面，則以平滑的行為捲動到頂部
    if (to === from) {
      return new Promise((resolve) => {
        resolve({
          left: 0,
          top: 0,
          behavior: 'smooth'
        });
      });
    }

    // 這將使用瀏覽器前進/後退導航中儲存的滾動位
    // if (to.path !== from.path) {
    return new Promise((resolve) => {
      resolve({
        left: savedPosition?.left || 0,
        top: savedPosition?.top || 0,
        behavior: 'smooth'
      });
    });
    // }
  }
};
