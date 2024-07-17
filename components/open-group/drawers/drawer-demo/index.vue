<script setup lang="ts">
// DrawerDemo
// 資料 --------------------------------------------------------------------------------------------
const storeTool = StoreTool();

const props = defineProps({
  params: {
    type: Object as () => DrawerDemo,
    required: true
  },
  index: {
    type: Number,
    default: 0
  }
});

const visible = ref(true);
const isChange = ref(false);
const isWaiting = ref(false);
const demoText = ref('');
// const elStaffForm = ref();

// 標題
const title = computed(() => {
  return 'demo';
});

const webDrawerWidth = computed(() => {
  return `${storeTool.windowWidth - 270 - (props.index * 10)}px`;
});

// 接收事件 -----------------------------------------------------------------------------------------
const OnHandleClose = (done: () => void) => {
  if (!isChange.value) return done();
  ElMessageBox.confirm(
    '有變動尚未完成，確定是否要關閉？',
    '關閉詢問',
    {
      confirmButtonText: '關閉',
      cancelButtonText: '取消',
      type: 'warning'
    }
  ).then(() => done());
};

// 參數變化
const OnChnage = () => {
  isChange.value = true;
};

const OnComplete = () => {
  ReloadPage();
  isChange.value = false;
  visible.value = false;
};

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
const ClickCreateBtn = lodash.debounce(async () => {
  // if (isWaiting.value) return;
  // isWaiting.value = true;
  // await elStaffForm.value.CreateFlow();
  // isWaiting.value = false;
}, 400, { leading: true, trailing: false });

// 流程 --------------------------------------------------------------------------------------------

// 函式 --------------------------------------------------------------------------------------------

// Api ---------------------------------------------------------------------------------------------

// 生命週期 -----------------------------------------------------------------------------------------
// onMounted(()=>{}); useAsnycData

// 對外事件 -----------------------------------------------------------------------------------------
const emit = defineEmits(['on-hide']);

// 重加載頁面
const ReloadPage = () => {
  mitt.emit('reload-page');
};

const EmitHideModal = () => {
  emit('on-hide');
};

</script>

<template lang="pug">
ElDrawer(
  v-model="visible"
  :title="title"
  :size="storeTool.isMobile ? '95%': webDrawerWidth"
  :before-close="OnHandleClose"
  :destroy-on-close="true"
  @closed="EmitHideModal"
)
  #DrawerDemo
    Loading
      div
        p {{ props.params.demoText }}
        p 嘗試輸入後關閉
        ElInput(v-model="demoText" aria-placeholder="輸入文字" @change="OnChnage")
        ElButton(@click="ClickDrawer") OpenDrawer
        ElButton(@click="ClickDialog") OpenDialog
      //- StaffForm(
      //-   ref="elStaffForm"
      //-   actionType="create"
      //-   :apiParams="createParams"
      //-   @on-change="OnChnage"
      //-   @on-complete="OnComplete"
      //- )
  template(#footer)
    #DrawerDemoFooter
      elButton(
        type="primary"
        :loading="isWaiting"
        @click="ClickCreateBtn"
      ) 新增
</template>

<style lang="scss" scoped>
// 佈局 ----
#DrawerDemo {
  height: 100%;
}
#DrawerDemoFooter {
  @include row-end;
  height: 100%;
}
// 組件 ----
</style>
