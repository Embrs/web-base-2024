// import { HttpOption } from './setting';
// import cloneDeep from 'lodash/cloneDeep';

// type UrlType = string | Request | Ref<string | Request> | (() => string | Request)
// export type HttpOption<T> = UseFetchOptions<ResOptions<T>>

// TODO 異常處理
// const HandleError = (response: FetchResponse<ResOptions<T>> & FetchResponse<ResponseType>) => {
//   const err = (text: string) => {
//     // Message.error({
//     //   content: response?._data?.message ?? text,
//     //   icon: () => h(IconEmoticonDead),
//     // })
//   }
//   if (!response._data) {
//     err('請求超時，服務器無響應！')
//     return
//   }
//   // const userStore = useUserStore()
//   const handleMap: { [key: number]: () => void } = {
//     404: () => err('服務器資源不存在'),
//     500: () => err('服務器內部錯誤'),
//     403: () => err('沒有權限訪問該資源'),
//     401: () => {
//       err('登錄狀態已過期，需要重新登錄')
//       // userStore.clearUserInfo()
//       // TODO 跳轉實際登錄頁
//       navigateTo('/')
//     },
//   }

// if (_res.httpStatus === 401) {
//   console.log('11111');
//   // throw showError({ statusCode: 404, statusMessage: 'Page Not Found' });
//   throw createError({
//     statusCode: 404,
//     statusMessage: 'Page Not Found',
//     data: {
//       myCustomField: true
//     }
//   });
// }

//   handleMap[response.status] ? handleMap[response.status]() : err('未知錯誤！')
// }
/** 是物件 */
const IsObject = (obj: any) => {
  return Object.prototype.toString.call(obj) === '[object Object]';
};

const GetApiUrl = () => {
  if (process.server) {
    const { public: { apiUrl } } = useRuntimeConfig();
    console.log('api', apiUrl);
    return `${process.env.NUXT_PUBLIC_API_BASE}`;
  }
  return '';
};

const Fetch = (url: string, option: AnyObject) => {
  return $fetch(`${url}?t=${Date.now()}`, {
    // 合併參數
    ...option,
    // 請求攔截器
    onRequest ({ options }) {
      // 添加 apiUrl,nuxt3 環境變量要從useRuntimeConfig裡面取
      options.baseURL = GetApiUrl();
      options.headers = new Headers(options.headers);
      options.headers.set('Content-Type', 'application/json');
      // TODO Token 加入
      // 添加請求頭,沒登錄不攜帶 token
      // const userStore = useUserStore()
      // if (!userStore.isLogin)
      //   return
      // options.headers.set('Authorization', `Bearer ${userStore.getToken}`)
    },

    // 響應攔截
    onResponse ({ response }) {
      // TODO isLogin
      const _res = response._data;
      _res.httpStatus = response.status;
      return Promise.reject(_res);
    },

    // 錯誤處理
    onResponseError ({ response }) {
      // TODO 異常處理
      const _res = IsObject(response._data) ? response._data : { error: response._data };
      _res.is_success = false;
      _res.httpStatus = response.status;
      return Promise.reject(_res);
    }
  });
};

// 自動導出
export const methods = {
  get: (url: string, query: AnyObject = {}) => {
    return Fetch(url, { method: 'get', query }).catch((err) => err);
    // TODO Refresh token
  },

  post: (url: string, body: AnyObject = {}) => {
    return Fetch(url, { method: 'post', body }).catch((err) => err);
  },

  put: (url: string, body: AnyObject = {}) => {
    return Fetch(url, { method: 'put', body }).catch((err) => err);
  },

  delete: (url: string, query: AnyObject = {}) => {
    return Fetch(url, { method: 'delete', query }).catch((err) => err);
  }
};
