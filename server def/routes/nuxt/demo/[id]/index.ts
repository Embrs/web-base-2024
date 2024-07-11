// const res = await $fetch('/api/demo/123');

export default defineEventHandler((event: any) => {
  return `Hello ${event.context.params.id}!`;
});
