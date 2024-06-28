<script setup lang="ts">
// ContactInformation 聯絡資訊
// import connectInfo from '@/components/page/contact-us/data/connect-info';

// 資料 --------------------------------------------------------------------------------------------
const storeTool = StoreTool();

const visible = ref(false);

const direction = computed(() => {
  if (storeTool.isPc) return 'rtl';
  return 'btt';
});

const drawerSize = computed(() => {
  if (storeTool.isPc) return '972px';
  return '100%';
});

const elDrawer = ref();

// 接收事件 -----------------------------------------------------------------------------------------
const ClickClose = () => {
  visible.value = false;
  ToggleHtmlScrollbar(visible.value);
};

// 流程 --------------------------------------------------------------------------------------------

// 函式 --------------------------------------------------------------------------------------------
// 滾動條隱藏
const ToggleHtmlScrollbar = (canHide: boolean) => {
  const html = document.querySelector('html') as HTMLHtmlElement;
  if (canHide) {
    html.style.overflow = 'hidden';
  } else {
    html.style.removeProperty('overflow');
  }
};

const OpenDrawer = () => {
  visible.value = true;
  ToggleHtmlScrollbar(visible.value);
  setTimeout(() => {
    elDrawer.value.scrollTop = 0;
  }, 100);
};

// Ref 輸出 ----------------------------------------------------------------------------------------
defineExpose({ OpenDrawer });
</script>

<template lang="pug">
ElDrawer(
  v-model="visible"
  :direction="direction"
  :show-close="false"
  :size="drawerSize"
  :with-header="false"
  :append-to-body="true"
  @closed="ClickClose"
)
  #ContactInformation 聯絡資訊(ref="elDrawer")
    .close-area
      Icon.close-btn(name="IconRCClose" size="40px" @click="ClickClose")
    h2.title 聯繫方式
    //- .description {{ connectInfo.des }}
    .info-area
      .info-item
        Icon.info-icon(name="IconOLine")
        .info-text
          NuxtLink(:to="config.join.line" target="_blank" title="Athena line")
            .info-title LINE ID
            //- .info-content {{ connectInfo.lineId }}
      .info-item
        Icon.info-icon(name="IconOMail")
        .info-text
          //- NuxtLink(:to="`mailto:${connectInfo.eMail}`" title="Athena e-mail")
            .info-title 聯絡信箱
            //- .info-content {{ connectInfo.eMail }}
      .info-item
        Icon.info-icon(name="IconOPhone")
        .info-text
          //- NuxtLink(:to="`tel:=+886-${connectInfo.phone.substring(1)}`" title="Athena phone")
            .info-title 聯絡電話
            //- .info-content {{ connectInfo.phone }}
      .info-item
        Icon.info-icon(name="IconOAddr")
        .info-text
          NuxtLink(:to="config.link.googleMap" target="_blank" title="Athena address")
            .info-title 地址
            //- .info-content {{ connectInfo.address }}
    .img-area
      //- NuxtImg.addr-img(:src="connectInfo.addressImg" alt="address" title="address")
</template>

<style lang="scss" scoped>
// 佈局 ----
#ContactInformation 聯絡資訊 {
  height: 100%;
  position: relative;
  overflow-y: auto;
  @include column(40px);
  @include rwd-mobile {
    padding: 100px 16px 23px;
  }
  @include rwd-pc {
    padding: 40px 100px 40px 64px;
  }
  .info-area {
    @include column(24px);
  }
  .img-area {
    max-width: 554px;
    border-radius: 32px;
    @include rwd-mobile {
      margin: 0 auto;
    }
  }
}

// 組件 ----
.description {
  // TODO
}

.info-item {
  @include row(24px);
  .info-icon {
    color: $secondary-500;
    background-color: $tertiary-500;
    border-radius: 100%;
    @include rwd-mobile {
      padding: 6px;
      @include wh(40px);
    }
    @include rwd-pc {
      padding: 8px;
      @include wh(56px);
    }
  }
  .info-text {
    @include column(8px);
    .info-title {
      font-weight: 600;
      color: $primary-500;
    }
  }
}
.close-area {
  position: fixed;
  top: 10px;
  right: 21px;
  @include rwd-pc {
    display: none;
  }
  .close-btn {
    @include btn-click;
  }
}
.title {
  color: $primary-500;
  @include rwd-mobile {
    @include fs('h5');
  }
  @include rwd-pc {
    @include fs('h2');
  }
}
.addr-img {
  overflow: hidden;
  border-radius: 32px;
}
</style>
