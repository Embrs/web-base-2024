export default defineEventHandler(async (event) => {
  console.log('update');
  const body = await readBody(event);
  return { ...body };
});
