import { methods } from '../../setting';
import * as mock from './mock';
const isMock = import.meta.env.VITE_TEST_MODE === 'T';
// -----------------------------------------------------------------------------------------------
const router = {
  GET_DEMO: '/api/announcementType',
  QUERY_DEMO: '/api/announcementRange',
  LOGIN: '/api/user/login',
  USER_INFO: '/api/user'
};
// -----------------------------------------------------------------------------------------------
export const GetDemo = (): Promise<GetDemoRes> => {
  if (isMock) return mock.GET_DEMO(); // Mock
  return methods.get(router.GET_DEMO) as Promise<GetDemoRes>;
};

/**
 * @description Demo
 * @param params
 * @returns
 */
export const QueryDemo = (params: QueryDemoParams): Promise<QueryDemoRes> => {
  // if (isMock) return GET_LOG(); // Mock
  return methods.get(router.QUERY_DEMO, params) as Promise<QueryDemoRes>;
};

export const PostDemo = (params: QueryDemoParams): Promise<any> =>
  methods.post(router.GET_DEMO, params);

export const Login = (params: any): Promise<any> =>
  methods.post(router.LOGIN, params);

export const UserInfo = (): Promise<any> =>
  methods.get(router.USER_INFO);
