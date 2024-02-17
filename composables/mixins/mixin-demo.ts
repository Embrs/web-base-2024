export const MixinDemo = () => {
  const count = ref(0);
  const doubleCount = computed(() => count.value * 2);
  const Add = () => { count.value++; };
  return { count, doubleCount, Add };
};
