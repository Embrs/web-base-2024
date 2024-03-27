// 網頁寬度變化
export const MixinWindowResize = () => {
  const storeTool = StoreTool();
  onMounted(() => {
    storeTool.SetDevice();
    storeTool.SetWindowWidth();
    window.addEventListener('resize', storeTool.SetWindowWidth);
  });
  onBeforeUnmount(() => {
    window.removeEventListener('resize', storeTool.SetWindowWidth);
  });
};
