// service-worker 註冊
export const MixinServiceWorker = () => {
  if (import.meta.server) return;
  console.log(1, navigator);
  if ('serviceWorker' in navigator) {
    console.log(2);
    if ('serviceWorker' in navigator) {
      console.log(3);
      navigator.serviceWorker.register('/sw.js')
        .then((reg) => console.log('完成 SW 設定!', reg))
        .catch((err) => console.log('Error!', err));
    }
  }
};
