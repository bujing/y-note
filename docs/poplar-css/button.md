# Button

按钮的样式稍微有些复杂，目前支持对其背景色、文字样式（颜色、字号、粗细）和边框样式（边框、圆角）进行独立配置。

设置灰度对比阀值，可以为不同的背景色匹配对应的文字颜色。

``` scss
$black: #000;
$white: #fff;

$yiq-contrasted-threshold: 192 !default;
$yiq-contrasted-dark: $black !default;
$yiq-contrasted-light: $white !default;

$button-style: () !default;
$button-style: map-merge(
  (
    'black': (
      'background': $black,
    ),
    'white': (
      'background': $white,
      'border-color': $black
    )
  ),
  $button-style
);

@function color-contrasted ($color) {
  $r: red($color);
  $g: green($color);
  $b: blue($color);
  $y: $r * 0.299 + $g * 0.587 + $b * 0.114;

  @if ($y > $yiq-contrasted-threshold) {
    @return $yiq-contrasted-dark;
  } @else {
    @return $yiq-contrasted-light;
  }
}

@mixin button ($style) {
  $background: map.get($style, 'background');
  $border-width: map.get($style, 'border-width');
  $border-style: map.get($style, 'border-style');
  $border-color: map.get($style, 'border-color');
  $border-radius: map.get($style, 'border-radius');
  $color: map.get($style, 'color');
  $font-size: map.get($style, 'font-size');
  $font-weight: map.get($style, 'font-weight');

  background-color: if($background, $background, transparent);
  border-width: if($border-width, $border-width, 1px);
  border-style: if($border-style, $border-style, solid);
  border-color: if($border-color, $border-color, transparent);
  @if ($border-radius) {
    border-radius: $border-radius;
  }
  color: if($color, $color, color-contrasted($background));
  @if ($font-size) {
    font-size: $font-size;
  }
  @if ($font-weight) {
    font-weight: $font-weight;
  }
}

@each $name, $style in $button-style {
  .button-#{$name} {
    @include button($style);
  }
}
```
