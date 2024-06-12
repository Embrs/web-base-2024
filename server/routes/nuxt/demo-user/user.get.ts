export default defineEventHandler(async (event) => {
  console.log('get');
  const body = await readBody(event);
  return { ...body };
});
