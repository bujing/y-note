# Flexbox

弹性盒子为我们提供了更加灵活、方便和强大的布局能力，是当下主流的布局方式。

指定容器使用弹性盒子布局。

``` css
.flex { display: flex; }

.flex-inline { display: inline-flex; }
```

指定元素在主轴上的布局方向（正方向或反方向），包含 `row`、`row-reverse`、`column` 和 `column-reverse`，支持重写，但不支持扩展。

``` css
.flex-row { flex-direction: row; }
/* other */
```

指定元素在主轴上的排布，是收缩或溢出，还是在交叉轴上延伸，包含 `nowrap`、`wrap` 和 `wrap-reverse`，支持重写，但不支持扩展。

``` css
.flex-nowrap { flex-wrap: nowrap; }
/* other */
```

指定元素在主轴方向上的（元素之间及其周围的）空间分配，支持重写，但不支持扩展。

``` scss
// 默认集合
$main-content: (
  'stretch': stretch,
  'between': space-between,
  'around': space-around,
  'evenly': space-evenly,
  'start': flex-start,
  'end': flex-end,
  'center': center
) !default;
// 输出
.main-content-stretch { justify-content: stretch; }
// other
```

指定元素在交叉轴方向上的（元素之间及其周围的）空间分配，对单行弹性盒子无效，支持重写，但不支持扩展。

``` scss
// 默认集合
$cross-content: (
  'stretch': stretch,
  'between': space-between,
  'around': space-around,
  'evenly': space-evenly,
  'start': flex-start,
  'end': flex-end,
  'center': center
) !default;
// 输出
.cross-content-stretch { align-content: stretch; }
// other
```

指定元素在交叉轴方向上的对齐方式，支持重写，但不支持扩展。

``` scss
// 默认集合
$cross-items: (
  'stretch': stretch,
  'baseline': baseline,
  'start': flex-start,
  'end': flex-end,
  'center': center
) !default;
// 输出
.cross-items-stretch { align-items: stretch; }
// other
```
