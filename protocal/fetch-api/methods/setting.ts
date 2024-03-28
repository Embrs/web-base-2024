// import cloneDeep from 'lodash/cloneDeep';
// import tool from '@/utils/tool';

const GetApiUrl = () => {
  if (process.server) {
    // 添加 apiUrl,nuxt3 環境變量要從useRuntimeConfig裡面取
    const { public: { apiBase } } = useRuntimeConfig();
    return apiBase;
    // return `${process.env.NUXT_PUBLIC_API_BASE}`;
  }
  return '';
};
const Fetch = (url: string, option: AnyObject) => {
  return $fetch(`${url}?t=${Date.now()}`, {
    // 合併參數
    ...option,
    // 請求攔截器
    onRequest ({ options }) {
      // const storeToken = StoreToken();
      options.baseURL = GetApiUrl();
      options.headers = new Headers(options.headers);
      // options.headers.set('Authorization', `Bearer ${storeToken.token}`);
    },

    // 響應攔截
    onResponse ({ response }) {
      // TODO isLogin
      const _res: DefaultRes = response._data;
      _res.status.httpStatus = response.status;
      return Promise.reject(_res);
    },

    // 錯誤處理
    onResponseError ({ response }) {
      // TODO 異常處理
      const _res: DefaultRes =
        response?._data?.status
          ? response._data
          : {
              data: null,
              status: {
                is_success: false,
                success: '未知異常',
                httpStatus: 999
              }
            };
      _res.status.is_success = false;
      _res.status.httpStatus = response.status;
      return Promise.reject(_res);
    }
  });
};

// 自動導出
export const methods = {
  get: (url: string, query: AnyObject = {}) => {
    return Fetch(url, { method: 'get', query, headers: { 'Content-Type': 'application/json' } }).catch((err) => err);
  },

  post: (url: string, body: AnyObject = {}) => {
    return Fetch(url, { method: 'post', body, headers: { 'Content-Type': 'application/json' } }).catch((err) => err);
  },

  patch: (url: string, body: AnyObject = {}) => {
    return Fetch(url, { method: 'patch', body, headers: { 'Content-Type': 'application/json' } }).catch((err) => err);
  },

  put: (url: string, body: AnyObject = {}) => {
    return Fetch(url, { method: 'put', body, headers: { 'Content-Type': 'application/json' } }).catch((err) => err);
  },

  delete: (url: string, query: AnyObject = {}) => {
    return Fetch(url, { method: 'delete', query, headers: { 'Content-Type': 'application/json' } }).catch((err) => err);
  },

  filePost: (url: string, body: AnyObject = {}) => {
    return Fetch(url, { method: 'post', body: tool.ToFormData(body), headers: {} }).catch((err) => err);
  }
};
