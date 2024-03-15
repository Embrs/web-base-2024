// import cloneDeep from 'lodash/cloneDeep';

const GetApiUrl = () => {
  if (process.server) {
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
                message: '未知異常',
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
    return Fetch(url, { method: 'get', query }).catch((err) => err);
  },

  post: (url: string, body: AnyObject = {}) => {
    return Fetch(url, { method: 'post', body }).catch((err) => err);
  },

  patch: (url: string, body: AnyObject = {}) => {
    return Fetch(url, { method: 'patch', body }).catch((err) => err);
  },

  put: (url: string, body: AnyObject = {}) => {
    return Fetch(url, { method: 'put', body }).catch((err) => err);
  },

  delete: (url: string, query: AnyObject = {}) => {
    return Fetch(url, { method: 'delete', query }).catch((err) => err);
  }
};
