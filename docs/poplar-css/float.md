# Float

浮动和清除浮动，也是不能忽略的常用样式。

``` scss
$float-side: left, right, none !default;

@each $side in $float-side {
  .float-#{$side} {
    float: $side;
  }
}
```

`.clearfix` 用于清除容器内部元素的浮动影响；`.clear-both` 则是用于清除容器外部元素的浮动影响。

``` scss
.clear {
  &fix::after {
    clear: both;
    content: '';
    display: block;
  }

  &-both {
    clear: both;
  }
}
```
