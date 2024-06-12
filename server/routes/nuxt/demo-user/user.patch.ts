export default defineEventHandler(async (event) => {
  console.log('patch');
  const body = await readBody(event);
  return { ...body };
});
