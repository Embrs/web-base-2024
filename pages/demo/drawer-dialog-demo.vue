<script setup lang="ts">
// DrawerDialogDemo 請填寫功能描述👈
const ClickDrawer = () => {
  const _params: DrawerDemo = {
    demoText: '123'
  };
  openCom('DrawerDemo', _params);
};

const ClickDialog = () => {
  const _params: DialogDemo = {
    demoText: '123'
  };
  openCom('DialogDemo', _params);
};
</script>

<template lang="pug">
#DrawerDialogDemo
  p DrawerDialogDemo
  ElButton(@click="ClickDrawer") Drawer
  ElButton(@click="ClickDialog") Dialog
</template>

<style lang="scss" scoped>
// 佈局 ----
#DrawerDialogDemo {
  padding: 10px;
}

// 組件 ----
</style>
