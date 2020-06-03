# Text

文本是页面中最基本的组成部分，而与文本关系最为密切的样式不外乎：字号、颜色和对齐方式。

在 `$text-size` 集合中声明文本的字号样式。扩展此集合，可以获取自定义的样式类。

``` scss
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

@each $size, $value in $text-size {
  .text-#{$size} {
    font-size: $value;
  }
}
```

``` html
<p class="text-md">这是一段示例文字。</p>
```

也可以通过字号边界声明，来获取一个区间内的字号样式。

``` scss
$text-size-min: 0 !default;
$text-size-max: 0 !default;

@if $text-size-max > $text-size-min {
  @for $size from $text-size-min through $text-size-max {
    .fs-#{$size} {
      font-size: #{$size}px;
    }
  }
}
```

``` html
<p class="fs-16">这是一段示例文字。</p>
```

在 `$text-color` 集合中声明文本的颜色样式，丰富文本的不同语义表示。同样支持扩展。

``` scss
$text-color: () !default;

@each $color, $value in $text-color {
  .text-#{$color} {
    color: $value;
  }
}
```

``` html
<p class="text-primary">这是一段示例文字。</p>
```

在 `$text-align` 集合中声明文本的对齐样式。

``` scss
$text-align: (
  'center': center,
  'left': left,
  'right': right,
  'justify': justify
) !default;

@each $align, $value in $text-align {
  .text-#{$align} {
    text-align: $value;
  }
}
```

``` html
<p class="text-center">这是一段示例文字。</p>
```
