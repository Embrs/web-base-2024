interface WsCtrlInfo {
  reConnectCount: number;
}
interface WsInfoOptions {
  isConnected?: boolean // 是否已連線

  useAutoConnect?: boolean // 是否啟用自動連線
  autoConnectCount?: number // 自動連線/次
  autoConnectMs?: number // 自動連線/毫秒

  useHeartbeat?: boolean // 是否啟用心跳
  heartbeatMs?: number // 心跳/毫秒
};

interface WsInfo extends WsInfoOptions {
  On: (event: string, callbackFn: any) => void; // 綁定接收事件
  Send: (event: string, data: any) => void; // 送出資料
  Close: () => void; // 關閉連線
  Reconnect: () => void; // 重新連線
}
