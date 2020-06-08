# `node-sass` 的本地安装

`node-sass` 安装失败时，可以更换淘宝源重新安装，也可以尝试本地安装的方式。

## 查询 `node` 环境参数

```
node -p "[process.platform, process.arch, process.versions.modules].join('-')"

// 例如：win32-x64-72
```

## 下载 `binding.node` 文件

```
https://github.com/sass/node-sass/releases

// 例如：win32-x64-72_binding.node
```

## 本地引用

### `NPM`

放置在本地对应的缓存目录

```
C:\Users\{用户名}\AppData\Roaming\npm-cache\node-sass\{版本号}
```

### `YARN`

配置 `sass-binary-path`

```
yarn config set sass-binary-path {本地文件缓存路径}
```

删除 `sass-binary-path`

```
yarn config delete sass-binary-path
```

## 补全 `vendor` 目录

因为缺少 `vendor` 目录导致编译失败时，需要手动在 `node_modules/node-sass` 路径下创建 `vendor/{环境参数}` 目录，把下载的 `binding.node` 文件重命名为 `binding.node` 并放在新创建的目录下。

例如：`node_modules/node-sass/vendor/win32-x64-72/binding.node`。
