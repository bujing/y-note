# Button

按钮样式支持对其背景色、文字颜色和边框颜色进行配置。

设置灰度对比阀值，可以为不同的背景色匹配对应的文字颜色。

``` scss
// 默认配置
$button-style: () !default;
$button-style: map-merge(
  (
    'black': (
      'background-color': $black,
    ),
    'white': (
      'background-color': $white,
      'border-color': $black
    )
  ),
  $button-style
);
// 输出
.button-black {
  background-color: #000;
  border: 1px solid #000;
  color: #fff;
}
// other
```
