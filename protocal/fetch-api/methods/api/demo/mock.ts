import cloneDeep from 'lodash/cloneDeep';

// mock 回傳調整
const basic: any = {
  data: null,
  status: {
    is_success: true,
    message: '',
    detail: '',
    httpStatus: 200
  }
};

// 預設回傳 -------------------------------------------------------------------------------------------------
export const DEFAULT = (): Promise<DefaultRes> => {
  return new Promise((resolve) => {
    const res: DefaultRes = cloneDeep(basic);
    setTimeout(() => { resolve(res); }, 100);
  });
};

// 測試 -------------------------------------------------------------------------------------------------
export const GET_DEMO = (): Promise<GetDemoRes> => {
  return new Promise((resolve) => {
    const res: GetDemoRes = cloneDeep(basic);
    res.data = [{
      announcement_type_description: 'string',
      announcement_type_id: 123
    }];
    setTimeout(() => { resolve(res); }, 100);
  });
};
