# Border

增加边框圆角样式，可以配合按钮或者其他带边框的元素使用，支持扩展和重写。

``` scss
// 默认配置
$radius: () !default;
$radius: map-merge(
  (
    'lg': 4px,
    'md': 3px,
    'sm': 2px
  ),
  $radius
);
// 输出
.radius-lg { border-radius: 4px; }
// other
```
