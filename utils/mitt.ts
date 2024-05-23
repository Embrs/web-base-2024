// 子父事件傳遞
// https://www.casper.tw/development/2020/12/15/vue-3-mitt/
import mitt from 'mitt';

type ApplicationEvents = {
  'open-com': OpenData,
  'refresh-page': any,
  'reload-page': any,
};

const emitter = mitt<ApplicationEvents>();

export default {
  emit: emitter.emit,
  on: emitter.on,
  off: emitter.off
};
