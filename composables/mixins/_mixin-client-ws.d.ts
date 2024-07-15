interface WsCtrlInfo {
  reConnectCount: number // 目前重連次數，連線成功後重設為 0
  forceClose: boolean // 是否強制關閉
  waitPingCount: number // 等待 ping 回應次數
}
interface WsInfoOptions {
  isConnected?: boolean // 是否已連線

  useAutoConnect?: boolean // 是否啟用自動連線
  autoConnectCount?: number // 自動連線/次
  autoConnectMs?: number // 自動連線/毫秒

  useHeartbeat?: boolean // 是否啟用心跳
  heartbeatMs?: number // 心跳/毫秒
  heartbeatReconnectLimit?: number // 心跳未接收到幾次後重連
  pingText?: string // 心跳送出文字
  pongText?: string // 心跳回應文字
};

interface WsInfo extends WsInfoOptions {
  On: (event: string, callbackFn: any) => void; // 綁定接收事件
  Send: (event: string, data: any) => void; // 送出資料
  Close: () => void; // 關閉連線
  ForceClose: () => void; //強制關閉連線
  Reconnect: () => void; // 重新連線
}
