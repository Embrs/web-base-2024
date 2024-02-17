/**  async await 等待 */
const Wait = () => (ms = 1000) => new Promise((resolve) => setTimeout(() => resolve(null), ms));

/** object has key */
const HasKey = (object: object, key: string) => object != null && Object.hasOwnProperty.call(object, key);

/** UUID 生成 */
const CreateUUID = () => {
  let d = Date.now();
  if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
    d += performance.now(); // use high-precision timer if available
  }
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
};

/** 1000 => 1,000 */
const NumToMoney = (num: number, isInt = true) => { // isInt: 整數化
  const _num = isInt ? `${num}`.split('.')[0] : num; //
  return `${_num}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

/** 1,000 => 1000 */
const MoneyToNum = (str: string) => {
  return Number(str.replace(/\$\s?|(,*)/g, ''));
};

/** 是 Array */
const IsArray = (value: any): boolean => {
  return Object.prototype.toString.call(value) === '[object Array]';
};

/** 是 Array */
const IsObject = (value: any): boolean => {
  return Object.prototype.toString.call(value) === '[object Object]';
};

/** 是 Array */
const IsString = (value: any): boolean => {
  return Object.prototype.toString.call(value) === '[object String]';
};

const IsNumber = (value: any): boolean => {
  return Object.prototype.toString.call(value) === '[object Number]';
};

/* array Object 深度空元素過濾器 */
const ArrayObjectFilter = <T>(data:T): T => {
  const removeValue = [null, undefined, '']; // 過濾的值
  if (IsArray(data)) {
    const newArray: any = [];
    // @ts-ignore
    for (const item of data) {
      let _item = item;
      if (IsArray(_item) || IsObject(_item)) _item = ArrayObjectFilter(_item);
      newArray.push(_item);
    }
    return newArray;
  }
  // ---------
  if (IsObject(data)) {
    const newObj: any = {};
    for (const key in data) {
      let _item = data[key];
      // @ts-ignore
      if (removeValue.includes(_item)) continue;
      if (IsArray(_item) || IsObject(_item)) _item = ArrayObjectFilter(_item);
      newObj[key] = _item;
    }
    return newObj;
  }
  return data;
};

/* hash 加密 */
export const Encrypt = (str: string) => {
  try {
    return btoa(
      encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (_match, p1) {
        return String.fromCharCode(Number('0x' + p1));
      })
    );
  } catch (error) {
    return '';
  }
};

/* hash 解密 */
export const Decrypt = (str: string) => {
  try {
    return decodeURIComponent(
      Array.prototype.map
        .call(
          atob(
            str.replace(/-| /g, '+').replace(/_/g, '/').replace(/%/g, '%25')
          ),
          function (c) {
            return '%' + c.charCodeAt(0).toString(16);
          }
        )
        .join('')
    );
  } catch (error) {
    return '';
  }
};

const ScrollToTag = (idOrClass: string) => {
  if (process.server) return;
  const elScroll = document.querySelector(idOrClass) as HTMLElement;
  if (!elScroll) return;
  const top = elScroll?.offsetTop || 0;
  window.scrollTo({
    top,
    left: 0,
    behavior: 'smooth'
  });
};

/** 補零 */
// '123'.padStart(5, '0') // '00123';
// '123'.padEnd(5, '0') // '12300';
export default {
  Wait,
  HasKey,
  CreateUUID,
  NumToMoney,
  MoneyToNum,
  IsArray,
  IsObject,
  IsString,
  IsNumber,
  ArrayObjectFilter, // array Object 深度空元素過濾器
  Encrypt,
  Decrypt,
  ScrollToTag
};
