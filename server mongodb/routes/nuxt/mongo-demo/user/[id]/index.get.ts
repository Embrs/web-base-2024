import user from '@/server/models/demo/user-model';

export default defineEventHandler(async (event: any) => {
  try {
    const findUser = await user.findOne({ _id: event.context.params.id });
    if (!findUser) {
      return { data: null, status: { is_success: false, message: '找不到資料' } };
    }
    return { data: findUser, status: { is_success: true, message: '' } };
  } catch (error) {
    return { data: null, status: { is_success: false, message: '取得失敗' } };
  }
});
