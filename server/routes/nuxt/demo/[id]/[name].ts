// const res = await $fetch('/api/demo/123/222');

export default defineEventHandler((event: any) => {
  return {
    is_success: false,
    message: `Hello ${event.context.params.name}, ${event.context.params.name}!`
  };
});
