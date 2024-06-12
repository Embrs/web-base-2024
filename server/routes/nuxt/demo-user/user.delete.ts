export default defineEventHandler(async (event) => {
  console.log('delete');
  const body = await readBody(event);
  return { ...body };
});
