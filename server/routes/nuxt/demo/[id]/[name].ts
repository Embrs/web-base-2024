// const res = await $fetch('/api/demo/123/222');

export default defineEventHandler((event: any) => {
  return `Hello ${event.context.params.name}, ${event.context.params.name}!`;
});
