# Text

文本是页面中最基本的组成部分，而与文本关系最为密切的样式不外乎：字号、颜色和对齐方式。

在 `$text-size` 集合中声明文本的字号样式，支持扩展和重写。

``` scss
// 默认配置
$text-size: () !default;
$text-size: map-merge(
  (
    'xl': 20px,
    'lg': 18px,
    'md': 16px,
    'sm': 14px,
    'xs': 12px
  ),
  $text-size
);
// 指定集合
$text-size: (
  'xxl': 24px,
  'xl': 22px
);
// 输出
.text-xxl { font-size: 24px; } // 扩展
.text-xl { font-size: 22px; } // 重写
// other
```

也可以通过字号边界声明，来获取一个区间内的字号样式。

``` scss
// 指定变量
$font-size-min: 30;
$font-size-max: 32;
// 输出
.fs-30 { font-size: 30px; }
// ...
.fs-32 { font-size: 32px; }
```

在 `$text-color` 集合中声明文本的颜色样式，丰富文本的不同语义表示，支持扩展和重写。

``` scss
// 默认配置
$text-color: () !default;
$text-color: map-merge(
  (
    'black': $black,
    'gray': $gray,
    'white': $white
  ),
  $text-color
);
// 指定集合
$text-color: (
  red: #f00
);
// 输出
.text-red { color: #f00; } // 扩展
.text-black { color: #000; }
// other
```

在 `$text-align` 集合中声明文本的对齐样式，包含 `center`、`left`、`right` 和 `justify`，支持重写，但不支持扩展。

``` css
.text-center { text-align: center; }
/* other */
```
