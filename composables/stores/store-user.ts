// export const storeDemo = () => useState('storeDemo', () => {}); // 不可用，有 bug

export const StoreUser = pinia.defineStore('StoreUser', () => {
  // token -----------------------------------------------------------------------------------------------
  const token = useCookie<string>('token', { default: () => '' }); // 登入狀態
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
