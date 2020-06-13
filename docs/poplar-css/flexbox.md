# Flexbox

弹性盒子为我们提供了更加灵活、方便和强大的布局能力，是当下主流的布局方式。

指定容器使用弹性盒子布局。

``` scss
.flex {
  display: flex;

  &-inline {
    display: inline-flex;
  }
}
```

指定元素在主轴上的布局方向（正方向或反方向）。

``` scss
$flex-direction: row, row-reverse, column, column-reverse !default;

@each $direction in $flex-direction {
  .flex-#{$direction} {
    @extend .flex;
    flex-direction: $direction;
  }
}
```

指定元素在主轴上的排布，是收缩或溢出，还是在交叉轴上延伸。

``` scss
$flex-wrap: nowrap, wrap, wrap-reverse !default;

@each $wrap in $flex-wrap {
  .flex-#{$wrap} {
    flex-wrap: $wrap;
  }
}
```

指定元素在主轴方向上的（元素之间及其周围的）空间分配。

``` scss
$main-content: (
  'stretch': stretch,
  'between': space-between,
  'around': space-around,
  'evenly': space-evenly,
  'start': flex-start,
  'end': flex-end,
  'center': center
) !default;

@each $content, $value in $main-content {
  .main-content-#{$content} {
    justify-content: $value;
  }
}
```

指定元素在交叉轴方向上的（元素之间及其周围的）空间分配，对单行弹性盒子无效。

``` scss
$cross-content: (
  'stretch': stretch,
  'between': space-between,
  'around': space-around,
  'evenly': space-evenly,
  'start': flex-start,
  'end': flex-end,
  'center': center
) !default;

@each $content, $value in $cross-content {
  .cross-content-#{$content} {
    align-content: $value;
  }
}
```

指定元素在交叉轴方向上的对齐方式。

``` scss
$cross-items: (
  'stretch': stretch,
  'baseline': baseline,
  'start': flex-start,
  'end': flex-end,
  'center': center
) !default;

@each $item, $value in $cross-items {
  .cross-items-#{$item} {
    align-items: $value;
  }
}
```
