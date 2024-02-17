import xss from 'xss';
import type { IWhiteList } from 'xss';

const whiteList = () => {
  // @ts-ignore
  const whiteListMap = { ...xss.whiteList as IWhiteList };
  Object.keys(whiteListMap).forEach((keyName: string) => {
    whiteListMap[keyName] = ['style'];
  });
  return whiteListMap;
};

export default (str: string) => {
  return xss(str, {
    whiteList: whiteList(),
    stripIgnoreTag: true,
    stripIgnoreTagBody: ['script'] // 禁止
  });
};
