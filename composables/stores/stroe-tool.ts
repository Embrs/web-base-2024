export const StoreTool = pinia.defineStore('StoreTool', () => {
  // 寬度 RWD 資訊 --------------------------------
  const pcSize = 1024;
  const pcMidMax = 1440;
  const scrollTop = ref(0);
  const windowWidth = ref<number>(pcSize);
  const isMobileDevice = ref(true);
  const isLineBrowserDevice = ref(false);
  const isPc = computed(() => windowWidth.value >= pcSize);
  const isMidPc = computed(() => windowWidth.value >= pcSize && windowWidth.value <= pcMidMax);
  const isMobile = computed(() => windowWidth.value < pcSize);
  const scrollUpDown = ref(0); // -1 up, 0:no scroll, 1: down // 滾動方向(px)

  // 目前網址
  const currentUrl = computed(() => {
    if (process.server) return '';
    return window.location.href;
  });

  // 設定裝置
  const SetDevice = () => {
    if (process.client) {
      const userAgent = navigator.userAgent;

      isMobileDevice.value = !!(userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      ));

      isLineBrowserDevice.value = /line/i.test(userAgent);
    }
  };

  // 設定寬度
  const SetWindowWidth = () => {
    if (process.client) {
      const { innerWidth: width } = window;
      windowWidth.value = width;
    }
  };

  return {
    isPc,
    isMidPc,
    isMobile,
    isMobileDevice,
    isLineBrowserDevice,
    windowWidth,
    scrollTop,
    currentUrl,
    SetDevice,
    SetWindowWidth,
    scrollUpDown
  };
});
