import User from '@/server/models/demo/user-model';
export default defineEventHandler(async (event) => {
  try {
    const { name, email } = await readBody(event);
    const newUser = await User.create({ name, email });
    console.log('new', newUser);
    return { data: { id: newUser._id }, status: { is_success: true, message: '' } };
  } catch (error: any) {
    if (error.code === 11000) {
      return { data: null, status: { is_success: false, message: '已存在' } };
    }
    console.log('err:', error);
    return { data: null, status: { is_success: false, message: '新增失敗' } };
  }
});
