// const res = await $fetch('/api/demo-query?param1=1&param2=2');

export default defineEventHandler((event: any) => {
  const query = getQuery(event);
  return { a: query.param1, b: query.param2 };
});
