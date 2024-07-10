import mongoose from 'mongoose';
// https://www.letswrite.tw/mongodb-mac-docker-install/
// https://www.mongodb.com/products/tools/compass
// https://clairechang.tw/2023/09/22/nuxt3/nuxt-v3-mongodb-integration/#Step4%EF%BC%9A%E5%BB%BA%E7%AB%8B-Model-%E8%88%87-Collection
// https://pjchender.dev/database/mongo-mongoose/
export default async () => {
  try {
    await mongoose.connect(process?.env?.MONGODB_URI || '');
    console.log('mongo connection established');
  } catch (err) {
    console.error('mongo connection failed', err);
  }
};
