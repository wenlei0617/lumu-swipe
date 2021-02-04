# @lumu/swipe

> react lumu-swipe

[![NPM](https://img.shields.io/npm/v/@lumu/swipe.svg)](https://www.npmjs.com/package/@lumu/swipe) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

### 安装

> npm install @lumu/swipe

### API

|参数|说明|类型|默认值|
-|-|-|-
autoplay|可选，自动轮播间隔，单位ms|number|3000
duration|可选，动画时长,单位ms|number|500
initialSwipe|可选，默认位置|number|0
loop|可选，是否循环播放|boolean|true
vertical|可选，是否纵向滑动|boolean|false
touchable|可选，是否可手势滑动|boolean|true
showIndicators|可选，是否显示dot|boolean|true
style|可选，容器样式, 纵向时需要设置其高度|object|-
onSlideChange|可选，切换索引的回调|function(current)|-

### 方法
|名称|描述|
-|-
slideTo(to, swiping)|切换到指定索引，swiping = true时，不使用动画
next()|切换到下一个索引
prev()|切换到上一个索引

### 基础用法

```tsx
import React from 'react';
import LumuSwipe from '@lumu/swipe'

const App = () => {
    return (
        <React.Fragment>
            <div className="title">基础用法</div>
            <LumuSwipe>
                <LumuSwipe.Item key={1}>
                    <div className="block red">1</div>
                </LumuSwipe.Item>
                <LumuSwipe.Item key={2}>
                    <div className="block blue">2</div>
                </LumuSwipe.Item>
                <LumuSwipe.Item key={3}>
                    <div className="block green">3</div>
                </LumuSwipe.Item>
            </LumuSwipe>
        </React.Fragment>
    )
}
```
```css
.title {
  margin: 0;
  padding: 32px 16px 16px;
  color: rgba(69, 90, 100, 0.6);
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  box-sizing: border-box;
}
.block {
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 20px;
}

.red {
  background-color: coral;
}

.blue {
  background-color: cornflowerblue;
}

.green {
  background-color:darkcyan;
}
```

示例二维码

![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1b7f259ba7084f6cbb10ac83c719670d~tplv-k3u1fbpfcp-watermark.image)

[示例地址](http://49.235.254.79/lumu-swipe/)

[代码拆解](https://juejin.cn/post/6925239227999322119/)

## License

MTI © [wenlei0617](https://github.com/wenlei0617)
