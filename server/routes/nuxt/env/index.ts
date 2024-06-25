// const res = await $fetch('/api/demo');
import { Encrypt } from '@/utils/tool';

export default defineEventHandler((_event) => {
  const runtimeConfig = useRuntimeConfig();
  const { googleRecaptchaSiteKey } = runtimeConfig;

  return Encrypt(JSON.stringify({
    googleRecaptchaSiteKey
  }));
});
