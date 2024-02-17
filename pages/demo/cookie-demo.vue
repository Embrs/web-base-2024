<script setup lang="ts">
// CookieDemo 請填寫功能描述👈
const counter = useCookie<number>('counter');
const inputCookie = useCookie<string>('inputCookie', {
  maxAge: 10
});
/**
  * useCookie(name, options)
  * option: {
    maxAge: 指定 Max-Age 屬性的值，單位是秒。如果沒有設置，則這個 cookie 將會是 Session Only，意即網頁關閉後就會消失。
    expires: 指定一個 Date 物件來作為過期的時間，通常是要相容比較舊的瀏覽器做使用，如果 maxAge 與 expires 屬性都有設定，則過期時間應該要設定為一樣。
    httpOnly: 是一個布林值，預設為 false，當設置為 true 時，表示客戶端的 JavaScript 將無法使用 document.cookie 來查看這個 cookie。通常是比較敏感或機密的訊息，如 Token 或 Session Id 會設定為 true，只讓瀏覽器發出請求時自動夾帶。
    secure: 是一個布林值，預設為 false，當設置為 true 時瀏覽器得是 HTTPS 的加密傳輸協定的情境下，才會自動夾帶這個 cookie。
    domain: 指定 cookie 可以適用的 Domain，通常會保持預設，表是適用於自己的 Domain 之下。
    path: 指定 cookie 適用的路徑。
    sameSite: 為一個布林值或是字串，用於設定安全策略。
    encode: 由於 cookie 的值只能使用有限的字元集，所以這個設置可以將 cookie 編碼成合法的字串值，預設的編碼是使用 JSON.stringify + encodeURIComponent()。
    decode: cookie 會經過一個解碼的過程，預設的解碼是使用 decodeURIComponent + destr。
    default: 為一個函數，可以用於回傳 cookie 的預設值，也可以是回傳一個 Ref。
  }
*/

const inputVal = ref('');
counter.value = counter.value || Math.round(Math.random() * 1000);

const SetCookie = () => {
  inputCookie.value = inputVal.value;
};
</script>

<template lang="pug">
#CookieDemo
  h1 Counter: {{ counter || '-' }}
  ElButton(@click="counter = null") reset
  ElButton(@click="counter--") -
  ElButton(@click="counter++") +
  .row-item
    ElInput(v-model="inputVal" class="!w-[100px]")
    ElButton(@click="SetCookie") Set 10s Cookie
    p {{ inputCookie }}
</template>

<style lang="scss" scoped>
.row-item {
  display: flex;
  align-items: center;
  gap: 10px;
}

// 佈局 ----
// #CookieDemo {
// }

// 組件 ----
</style>
