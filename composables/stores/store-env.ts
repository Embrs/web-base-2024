export const StoreEnv = pinia.defineStore('StoreEnv', () => {
  const env = useCookie<{[key: string]: string}>('StoreEnv-envObj', {
    default: () => ({})
  });
  const Init = async () => {
    const res = await $fetch('/nuxt/env');
    const _env = JSON.parse(Decrypt(res));
    env.value = _env;
  };
  return { Init, env };
});
