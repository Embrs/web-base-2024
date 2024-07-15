// 客戶端 websocket
export const MixinClientWs = () => {
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
  let isUnmounted = false;
  // -----------------------------------------------------------------------------------------------

  // -----------------------------------------------------------------------------------------------
  // 連線綁定初始化
  const WsInit = (wsUrl: string, _wsInfo: WsInfo, eventListener: Record<string, any>, ctrl: WsCtrlInfo) => {
    const token = ''; // TODO token
    // 建立連線;
    const ws = token ? new WebSocket(wsUrl, [token]) : new WebSocket(wsUrl);

    if (!ws) {
      console.log('websocket 連線不存在');
      return;
    }

    // websocket 事件 ---------------------------------------------
    ws.onmessage = (response) => {
      // 回傳資料檢查
      if (!response?.data) return console.log('websocket 無回傳資料');

      // 資料parse解析確認
      const eventData = Parse(response.data);

      // 資料結構確認
      const { event, data } = eventData;
      if (!eventData || !data || !event) return console.log('websocket 非定義訊息:', response.data);

      // 事件 function 綁定確認
      const callbackFn = eventListener[event];
      if (!callbackFn) return console.log('websocket 事件無對應 Function', event, data);

      // 事件觸發
      callbackFn(data);
    };

    // 連線成功事件
    ws.onopen = (e) => {
      console.log('websocket connected:', e);
      ctrl.reConnectCount = 0;
      _wsInfo.isConnected = true;
    };

    // 連線關閉事件
    ws.onclose = (e) => {
      if (isUnmounted) return;
      console.log('websocket disconnection:', e);
      _wsInfo.isConnected = false;
      // 是否啟用自動連線
      if (_wsInfo.useAutoConnect) {
        setTimeout(() => {
          if (_wsInfo.autoConnectCount && _wsInfo.autoConnectCount > 0) {
            ctrl.reConnectCount++; // 自動連線次數
            if (ctrl.reConnectCount >= (_wsInfo.autoConnectCount)) {
              console.log('自動連線次數已達上限，請手動重連');
              return;
            }
          }
          _wsInfo?.Reconnect();
        }, _wsInfo.autoConnectMs);
      }
    };

    // 自定義事件綁定 ---------------------------------------------
    _wsInfo.Send = (event: string, data: any) => {
      try {
        if (ws.readyState !== WebSocket.OPEN) return console.log('websocket 尚未連線');
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

    _wsInfo.Reconnect = () => {
      try {
        if (ws.readyState === WebSocket.CLOSED) {
          return WsInit(wsUrl, _wsInfo, eventListener, ctrl);
        }
        console.log('websocket 連線已存在，請勿重複連線');
      } catch (error) {
        console.log('websocket 重新連線異常', error);
      }
    };
  };

  // -----------------------------------------------------------------------------------------------
  // 建立連線
  const CreateWs = (
    wsUrl: string,
    option: WsInfoOptions = {}
  ): WsInfo | undefined => {
    // 是否可用
    if (import.meta.server) return;
    if (!('WebSocket' in window || 'MozWebSocket' in window)) return;

    // 事件區
    const eventListener: Record<string, any> = {};
    const ctrl: WsCtrlInfo = {
      reConnectCount: 0
    };
    try {
      const _wsInfo = ref<WsInfo>({
        isConnected: false, // 是否已連線
        useAutoConnect: option?.useAutoConnect ?? true, // 是否啟用自動連線
        autoConnectCount: option?.autoConnectCount ?? 3, // 自動連線/次 設定為 0 代表不啟用
        autoConnectMs: option?.autoConnectMs ?? 2000, // 自動連線/毫秒
        useHeartbeat: true, // 是否啟用心跳
        heartbeatMs: option?.heartbeatMs ?? 2000, // 心跳/毫秒

        On: (event: string, callbackFn: any) => { eventListener[event] = callbackFn; }, // 綁定接收事件
        Send: (event: string, data: any) => { /* 送出資料 */ console.log(event, data); },
        Close: () => { /* 關閉連線 */ },
        Reconnect: () => { /* 重新連線 */ }
      });

      // 初始化
      WsInit(wsUrl, _wsInfo.value, eventListener, ctrl);

      return _wsInfo.value;
    } catch {
      return undefined;
    }
  };

  onUnmounted(() => {
    isUnmounted = true;
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
