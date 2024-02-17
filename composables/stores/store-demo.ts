// export const storeDemo = () => useState('storeDemo', () => {}); // 不可用，有 bug

export const StoreDemo = pinia.defineStore('StoreDemo', () => {
  const count = ref(0);
  const doubleCount = computed(() => count.value * 2);
  const Add = () => { count.value++; };
  return { count, doubleCount, Add };
});
