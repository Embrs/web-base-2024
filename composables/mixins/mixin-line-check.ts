// 顯示 header

export const MixinLineCheck = () => {
  const storeTool = StoreTool();
  const route = useRoute();

  const LineBrowserCheck = () => {
    if (storeTool.isMobileDevice && storeTool.isLineBrowserDevice) {
      const currentPath = route.fullPath;
      // 判斷目前路徑是否已經包含問號
      const hasQueryString = currentPath.includes('?');
      // 建立新的連結
      const externalLink = `${window.location.origin}${currentPath}${hasQueryString ? '&' : '?'}openExternalBrowser=1`;
      // 重定向到新的链接
      window.location.href = externalLink;
    }
  };

  onMounted(() => {
    storeTool.SetDevice();
    setTimeout(() => {
      LineBrowserCheck();
    }, 1);
  });
};
