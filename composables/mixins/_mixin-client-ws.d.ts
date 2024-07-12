interface WsInfo {
  isConnected: boolean; // 是否已連線
  useAutoConnect: boolean; // 是否啟用自動連線
  autoConnectMs: number; // 自動連線/毫秒
  On: (event: string, callbackFn: any) => void; // 綁定接收事件
  Send: (event: string, data: any) => void; // 送出資料
  Close: () => void; // 關閉連線
  ReConnect: () => void; // 重新連線
}
