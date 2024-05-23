<script setup lang="ts">
// DrawerModalDemo 請填寫功能描述👈
const ClickDrawer = () => {
  const _params: DrawerDemo = {
    demoText: '123'
  };
  openCom('DrawerDemo', _params);
};

const ClickModal = () => {
  const _params: ModalDemo = {
    demoText: '123'
  };
  openCom('ModalDemo', _params);
};
</script>

<template lang="pug">
#DrawerModalDemo
  p DrawerModalDemo
  ElButton(@click="ClickDrawer") Drawer
  ElButton(@click="ClickModal") Modal
</template>

<style lang="scss" scoped>
// 佈局 ----
#DrawerModalDemo {
  // TODO
}

// 組件 ----
</style>
