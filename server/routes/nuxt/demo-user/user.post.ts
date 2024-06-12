export default defineEventHandler(async (event) => {
  console.log('post');
  const body = await readBody(event);
  return { ...body };
});
