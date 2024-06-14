// export const storeDemo = () => useState('storeDemo', () => {}); // 不可用，有 bug
const sevenDay = 604800;
export const StoreUser = pinia.defineStore('StoreUser', () => {
  // token -----------------------------------------------------------------------------------------------
  const token = useCookie<string>('token', { default: () => '', maxAge: sevenDay }); // 登入狀態
  /** 是否登入 */
  const isSignIn = computed(() => !!token.value);
  /** 設定 Token */
  const SetToken = (_token = '') => {
    token.value = _token;
  };

  // -----------------------------------------------------------------------------------------------
  return {
    isSignIn,
    token,
    SetToken
  };
});
