// 網頁寬度變化
export const MixinWindowResize = () => {
  const storeTool = StoreTool();
  onMounted(() => {
    storeTool.SetDevice();
    window.addEventListener('resize', storeTool.SetWindowWidth);
  });
  onBeforeUnmount(() => {
    window.removeEventListener('resize', storeTool.SetWindowWidth);
  });
  onMounted(() => {
    storeTool.SetWindowWidth();
  });
};
