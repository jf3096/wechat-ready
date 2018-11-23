declare global {
  interface Window {
    WeixinJSBridge: any;
  }
}

/**
 * 微信是否已经准备好
 * @return {boolean}
 */
export default function wechatReady(callback) {
  if (window.WeixinJSBridge) {
    window.WeixinJSBridge.invoke('getNetworkType', {}, callback, false);
  } else {
    document.addEventListener('WeixinJSBridgeReady', callback, false);
  }
}
