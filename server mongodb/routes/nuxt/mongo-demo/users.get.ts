import User from '@/server/models/demo/user-model';

export default defineEventHandler(async (event: any) => {
  try {
    const { page, size } = getQuery(event);

    const limit = Number(size) ?? 5;
    const skip = limit * ((Number(page) ?? 1) - 1);
    const [userList, total] = await Promise.all([User.find().skip(skip).limit(limit), User.countDocuments()]);
    if (!userList) {
      return {
        data: { list: [], total: 0 },
        status: { is_success: false, message: '找不到資料' }
      };
    }
    return {
      data: { list: userList, total },
      status: { is_success: true, message: '' }
    };
  } catch (error) {
    return { data: null, status: { is_success: false, message: '取得失敗' } };
  }
});
