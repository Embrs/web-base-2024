export const MixinWebSocket = () => {
  if (import.meta.server) return;
  if (!('WebSocket' in window || 'MozWebSocket' in window)) return;

  const Parse = (str: string) => {
    try {
      return JSON.parse(str);
    } catch (err) {
      return false;
    }
  };

  const wsList: WebSocket[] = [];
  // -----------------------------------------------------------------------------------------------
  interface WsInfo {
    isConnected: boolean; // 是否已連線
    useAutoConnect: boolean; // 是否啟用自動連線
    autoConnectMs: number; // 自動連線/毫秒
    On: (event: string, callbackFn: any) => void; // 綁定接收事件
    Send: (event: string, data: any) => void; // 送出資料
    Close: () => void; // 關閉連線
    ReConnect: () => void; // 重新連線
  }

  // -----------------------------------------------------------------------------------------------
  // 連線綁定初始化
  const WsInit = (wsUrl: string, _wsInfo: WsInfo, eventListener: Record<string, any>) => {
    const token = ''; // TODO token
    // 建立連線
    const ws = token ? new WebSocket(wsUrl, [token]) : new WebSocket(wsUrl);
    wsList.push(ws);
    if (!ws) {
      console.log('websocket 連線不存在');
      return;
    }
    // websocket 事件 ---------------------------------------------
    ws.onmessage = (response) => {
      // 回傳資料檢查
      if (!response?.data) return console.log('message 無回傳資料');

      // 資料parse解析確認
      const eventData = Parse(response.data);
      if (!eventData) return console.log('message 資料解析異常');

      // 資料結構確認
      const { event, data } = eventData;
      if (!event) return console.log('message 無事件名稱');
      // 要注意有些事件可能不用資料解析，有不用處理的事件，這裡要改寫
      if (!data) return console.log('message 無資料');

      // 事件 function 綁定確認
      const callbackFn = eventListener[event];
      if (!callbackFn) return console.log('message 事件無對應 Function');
      // 事件觸發
      callbackFn(data);
    };

    // 連線成功事件
    ws.onopen = (e) => {
      console.log('websocket connected:', e);
      _wsInfo.isConnected = true;
    };

    // 連線關閉事件
    ws.onclose = (e) => {
      console.log('websocket close connection:', e);
      _wsInfo.isConnected = false;
      // 是否啟用自動連線
      if (_wsInfo.useAutoConnect) {
        setTimeout(() => {
          _wsInfo?.ReConnect();
        }, _wsInfo.autoConnectMs * 1000);
      }
    };

    // 自定義事件綁定 ---------------------------------------------
    _wsInfo.Send = (event: string, data: any) => {
      try {
        if (ws.readyState !== WebSocket.OPEN) return console.log('websocket 連線尚未開啟');
        // 轉字串
        const sendData = JSON.stringify({ event, data });
        // 送出資料
        ws.send(sendData);
      } catch (error) {
        console.log('websocket 送出資料異常', error);
      }
    };
    _wsInfo.Close = () => {
      try {
        if (ws.readyState !== WebSocket.CLOSED) {
          // 關閉連線
          ws.close();
        }
      } catch (error) {
        console.log('websocket 送出關閉異常', error);
      }
    };
    _wsInfo.ReConnect = () => {
      try {
        if (ws.readyState === WebSocket.CLOSED) {
          WsInit(wsUrl, _wsInfo, eventListener);
        }
      } catch (error) {
        console.log('websocket 重新連線異常', error);
      }
    };
  };

  // -----------------------------------------------------------------------------------------------
  // 建立連線
  const CreateWs = (
    wsUrl: string,
    option: { useAutoConnect?: boolean, autoConnectMs?: number } = {}
  ): WsInfo | undefined => {
    // 是否可用
    if (import.meta.server) return;
    if (!('WebSocket' in window || 'MozWebSocket' in window)) return;

    // option
    const _useAutoConnect = option?.useAutoConnect || false;
    const _autoConnectMs = option?.autoConnectMs || 1000;

    // 事件區
    const eventListener: Record<string, any> = {};

    try {
      const _wsInfo: WsInfo = {
        isConnected: false, // 是否已連線
        useAutoConnect: _useAutoConnect, // 是否啟用自動連線
        autoConnectMs: _autoConnectMs, // 自動連線/毫秒
        On: (event: string, callbackFn: any) => { eventListener[event] = callbackFn; }, // 綁定接收事件
        Send: (event: string, data: any) => { /* 送出資料 */ console.log(event, data); },
        Close: () => { /* 關閉連線 */ },
        ReConnect: () => { /* 重新連線 */ }
      };

      // 初始化
      WsInit(wsUrl, _wsInfo, eventListener);

      return _wsInfo;
    } catch {
      return undefined;
    }
  };

  onUnmounted(() => {
    for (const ws of wsList) {
      if (ws.readyState !== WebSocket.CLOSED) {
        // 關閉連線
        ws.close();
      }
    }
    wsList.splice(0, wsList.length);
  });

  return {
    CreateWs
  };
};
