<script setup lang="ts">
// WebSocketDemo 請填寫功能描述👈
const mixinClientWs = MixinClientWs();
const ws = ref<WsInfo>();
const wsUrl = ref('wss://echo.websocket.org');
const demoText = ref('');
const memo = ref('');

const Create = () => {
  if (ws.value) {
    // 強制關閉已存在
    ws.value.ForceClose();
  }
  // 建立新連線
  const _ws = mixinClientWs?.CreateWs(wsUrl.value);
  if (!_ws) return;
  ws.value = _ws;

  // 設定監聽事件
  ws.value.On('test', (val: string) => {
    console.log(val);
    memo.value = val;
  });
};

const Send = () => {
  if (!ws.value) return;
  ws.value.Send('test', demoText.value);
};

const Close = () => {
  if (!ws.value) return;
  ws.value.Close();
};

const ForceClose = () => {
  if (!ws.value) return;
  ws.value.ForceClose();
};

const Reconnect = () => {
  ws.value?.Reconnect();
};
</script>

<template lang="pug">
#WebSocketDemo
  p WebSocketDemo
  p Test: https://websocketking.com/
  ElInput(v-model="wsUrl" type="text")
  ElButton(@click="Create") 建立WS連線
  ElInput(v-model="demoText" type="text")
  ElButton(@click="Send") 送出
  ElButton(@click="Close") 斷線
  ElButton(@click="ForceClose") 強制斷線
  ElButton(@click="Reconnect") 重連
  ElInput(
    v-model="memo"
    :rows="4"
    type="textarea"
  )
  pre {{ ws }}
  //- ElButton(@click="") AddEvent
</template>

<style lang="scss" scoped>
// 佈局 ----
#WebSocketDemo {
  // TODO
}

// 組件 ----
</style>
