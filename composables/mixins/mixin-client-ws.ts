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
    console.log('winit');
    const token = ''; // TODO token
    // 建立連線;
    const ws = token ? new WebSocket(wsUrl, [token]) : new WebSocket(wsUrl);
    let heartInterval: NodeJS.Timeout; // 心跳循環
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

      // 接收心跳
      if (
        _wsInfo.useHeartbeat &&
        response.data === _wsInfo.pongText
      ) { // 送出 ping 回應 pong
        ctrl.waitPingCount--;
        return;
      }

      // 資料結構確認
      const { event, data } = eventData;
      if (!eventData || !data || !event) return console.log('websocket 非事件訊息:', response.data);

      // 事件 function 綁定確認
      const callbackFn = eventListener[event];
      if (!callbackFn) return console.log('websocket 事件無對應 Function', event, data);

      // 事件觸發
      callbackFn(data);
    };

    // 連線成功事件
    ws.onopen = (e) => {
      console.log('websocket 已連線');
      ctrl.reConnectCount = 0; // 重設 目前重連次數
      ctrl.forceClose = false; // 重設 強制關閉
      ctrl.waitPingCount = 0; // 重設 等待 ping 回應次數
      _wsInfo.isConnected = true; // 已連線

      // 啟用心跳
      if (_wsInfo.useHeartbeat) {
        heartInterval = setInterval(() => {
          if (isUnmounted) return;
          if (ctrl.waitPingCount >= 3) return;
          ctrl.waitPingCount++;
          if (ctrl.waitPingCount >= 3) {
            console.log('websocket 心跳已停止');
            _wsInfo.Close();
            return;
          }
          ws.send(`${_wsInfo.pingText}`);
        }, _wsInfo.heartbeatMs);
      }
    };

    // 連線關閉事件
    ws.onclose = (e) => {
      _wsInfo.isConnected = false;
      console.log('websocket 已斷線:', e);

      // 存在心跳循環
      if (heartInterval) {
        clearInterval(heartInterval);
      }

      // 組件卸載時，不重連
      if (isUnmounted) return;

      // 是否強制關閉
      if (ctrl.forceClose) return;

      // 是否啟用自動連線
      if (_wsInfo.useAutoConnect) {
        setTimeout(() => {
          console.log('websocket 自動連線');
          if (_wsInfo.autoConnectCount && _wsInfo.autoConnectCount > 0) {
            ctrl.reConnectCount++; // 自動連線次數
            if (ctrl.reConnectCount >= (_wsInfo.autoConnectCount)) {
              console.log('websocket 自動連線次數已達上限，請手動重連');
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
        if (ws.readyState !== WebSocket.OPEN) {
          console.log('websocket 尚未連線，無法送出訊息');
          return;
        }
        // 轉字串
        const sendData = JSON.stringify({ event, data });
        // 送出資料
        ws.send(sendData);
      } catch (error) {
        console.log('websocket 送出資料異常', error);
      }
    };

    _wsInfo.Close = () => {
      _wsInfo.isConnected = false;
      try {
        if (ws.readyState !== WebSocket.CLOSED) {
          // 關閉連線
          ws.close();
        }
      } catch (error) {
        console.log('websocket 送出關閉異常', error);
      }
    };
    _wsInfo.ForceClose = () => {
      // 設定強制關閉
      ctrl.forceClose = true;
      _wsInfo.Close();
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

    try {
      // 事件區
      const eventListener: Record<string, any> = {};

      // 控制
      const ctrl: WsCtrlInfo = {
        reConnectCount: 0, // 目前重連次數，連線成功後重設為 0
        forceClose: false, // 是否強制關閉
        waitPingCount: 0 // 等待 ping 回應次數
      };

      // 定義基礎結構
      const _wsInfo = ref<WsInfo>({
        isConnected: false, // 是否已連線
        useAutoConnect: option?.useAutoConnect ?? true, // 是否啟用自動連線
        autoConnectCount: option?.autoConnectCount ?? 3, // 自動連線/次 設定為 0 代表不啟用
        autoConnectMs: option?.autoConnectMs ?? 1000, // 自動連線/毫秒
        useHeartbeat: false, // 是否啟用心跳
        heartbeatMs: option?.heartbeatMs ?? 1000, // 心跳/毫秒
        heartbeatReconnectLimit: option?.heartbeatReconnectLimit ?? 3, // 心跳未接收到幾次後重連
        pingText: option?.pingText ?? 'ping', // 心跳送出文字
        pongText: option?.pongText ?? 'ping', // 心跳回應文字 // TODO 與後端協議可以改為pong

        On: (event: string, callbackFn: any) => { eventListener[event] = callbackFn; }, // 綁定接收事件
        Send: (event: string, data: any) => { /* 送出資料 */ console.log(event, data); },
        Close: () => { /* 關閉連線 */ },
        ForceClose: () => { /* 強制關閉連線 */ },
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
