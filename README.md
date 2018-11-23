## wechat-ready

> 用于在微信中特定事件监听或调用, 如用于微信视频自动播放, 音频自动播放等

### 安装

```bash
npm install wechat-ready -S
```

## 基本用例

```js
import wechatReady from 'wechat-ready';

wechatReady(()=> {
  document.getElementById('video').play();
});
```

## 作者
She Ailun