<script setup lang="ts">
// LeaveDemo 離開事件偵測

const ClickReload = () => {
  window.location.reload();
};

const ClickReplace = () => {
  window.location.replace(window.location.href);
};

const ClickFormReload = () => {
  const form = document.createElement('form');
  form.method = 'POST';
  form.action = location.href;
  document.body.appendChild(form);
  form.submit();
};
const ClickFetchReload = () => {
  console.log('aa');
  fetch(window.location.href, { cache: 'reload' })
    .then((response) => {
      if (response.ok) {
        window.location.reload();
      }
    })
    .catch((error) => console.error('Error:', error));
};

const LeaveAsk = () => {
  return ElMessageBox.confirm(
    '確定要離開此頁?',
    '離開詢問',
    {
      confirmButtonText: '確定',
      cancelButtonText: '取消',
      type: 'warning'
    }
  ).then(() => true).catch(() => false);
};

const OnBeforeunload = (e: BeforeUnloadEvent) => {
  // 網頁關閉提示
  e.preventDefault();
  e.returnValue = ''; // 一些瀏覽器依然需要這行代碼
};

onBeforeRouteLeave(async (to, from) => {
  if (!await LeaveAsk()) return false;
});

onMounted(() => {
  window.addEventListener('beforeunload', OnBeforeunload);
});

onBeforeUnmount(() => {
  window.removeEventListener('beforeunload', OnBeforeunload);
});

</script>

<template lang="pug">
#LeaveDemo
  p LeaveDemo
  NuxtLink(
    class="text-primary-400"
    to="https://router.vuejs.org/guide/advanced/composition-api#Navigation-Guards" target="_blank"
  ) 連結
  p 嘗試關閉網頁
  div(class="item-row-4px")
    div
      ElButton(@click="$router.go(-1)") 上一頁
    NuxtLink(to="/demo")
      ElButton To Demo
  div(class="wh-100px")
    ElImagePlus(
      src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*HKqipx0ig-0xeJVnw5BYbQ.png")
  div
    ElButton(@click="ClickReload") 重新整理（從緩存中重新加載）
    ElButton(@click="ClickReplace") 重新定位強制重整
    ElButton(@click="ClickFormReload") Form 強制重整
    ElButton(@click="ClickFetchReload") fetch 強制重整
</template>

<style lang="scss" scoped>
// 佈局 ----
#LeaveDemo {
  // TODO
  padding: 10px;
}

// 組件 ----
</style>
