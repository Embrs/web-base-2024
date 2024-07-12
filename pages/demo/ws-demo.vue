<script setup lang="ts">
import { ElButton, ElInput } from 'element-plus';

// WebSocketDemo 請填寫功能描述👈
const mixinClientWs = MixinClientWs();
const ws = ref<WsInfo>();
const wsUrl = ref('wss://echo.websocket.org');
const demoText = ref('');

const memo = ref('');
const Create = () => {
  const _ws = mixinClientWs?.CreateWs(wsUrl.value);
  if (!_ws) return;
  ws.value = _ws;
  ws.value.On('test', (val: string) => {
    console.log(val);
    memo.value = val;
  });
};

const Send = () => {
  if (!ws.value) return;
  ws.value.Send('test', demoText.value);
};

</script>

<template lang="pug">
#WebSocketDemo
  p WebSocketDemo
  p Test: https://websocketking.com/
  ElInput(v-model="wsUrl" type="text")
  ElButton(@click="Create") CreateConnect
  ElInput(v-model="demoText" type="text")
  ElButton(@click="Send") Send
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
