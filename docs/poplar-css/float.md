# Float

浮动和清除浮动，也是不能忽略的常用样式。

在 `$float-side` 集合中声明浮动的对齐样式，包含 `left`、`right` 和 `none`，支持重写，但不支持扩展。

``` css
.float-left { float: left; }
/* other */
```

`.clearfix` 用于清除容器内部元素的浮动影响；`.clear-both` 则是用于清除容器外部元素的浮动影响。

``` css
.clearfix::after {
  clear: both;
  content: '';
  display: block;
}

.clear-both { clear: both; }
```
