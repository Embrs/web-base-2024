interface KeyMap {
  [key: string]: string;
}

/** key 對應表 */
const keyMap = {
  demo: 'DEMO',
  account: 'ACCOUNT', // 帳號,
  password: 'PASSWORD', // 密碼,
  token: 'TOKEN' // TOKEN
};
// -------------------------------------------------------------------------------------------------

/** 設定項目 */
const Set = (key: string, anyValue: any, useHash = true) => {
  try {
    const _key = useHash ? tool.Encrypt(key) : key;
    const _data = JSON.stringify(anyValue);
    const _val = useHash ? tool.Encrypt(_data) : _data;
    if (_key && _val) {
      localStorage.setItem(_key, _val);
      return true;
    }
    return false;
  } catch (error) {
    return false;
  }
};

/** 提取項目 */
const Get = (key: string, useHash = true) => {
  try {
    const _key = useHash ? tool.Encrypt(key) : key;
    const _anyValue = localStorage.getItem(_key) || '';
    const _val = useHash ? tool.Decrypt(_anyValue) : _anyValue;
    if (_val) {
      return JSON.parse(_val);
    }
    return undefined;
  } catch (error) {
    return undefined;
  }
};

/** 清除項目 */
const Remove = (key: string, useHash = true) => {
  try {
    const _key = useHash ? tool.Encrypt(key) : key;
    if (_key) {
      localStorage.removeItem(_key);
      return true;
    }
    return false;
  } catch (error) {
    return false;
  }
};

/** 清除 All 項目 */
const RemoveAll = (keepKeys: string[] = [], useHash = true) => {
  try {
    const _keyMap: KeyMap = keyMap;
    for (const _i in _keyMap) {
      const key = _keyMap[_i];
      const _key = useHash ? tool.Encrypt(key) : key;
      if (!keepKeys.includes(_key)) {
        Remove(key);
      }
    }
  } catch (error) {
    return false;
  }
};

export default {
  keyMap,
  Get,
  Set,
  Remove,
  RemoveAll
};
