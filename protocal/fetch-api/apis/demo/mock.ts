import cloneDeep from 'lodash/cloneDeep';

// TODO mock 回傳調整
const basic: any = {
  data: null,
  status: {
    isPass: true
  }
};
// const MockWait = (data: any, sec: number):any =>
//   new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(data);
//     }, sec);
//   });

// -------------------------------------------------------------------------------------------------
//  mock
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
