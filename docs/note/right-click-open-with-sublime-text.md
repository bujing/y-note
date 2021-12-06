# 设置 Sublime Text 的右键打开功能

## 打开注册表编辑器

使用 `Win + R` 快捷键打开“运行”对话框，输入 `regedit`，打开注册表编辑器。

## 新建项

### Sublime Text 3

在 `HKEY_CLASSES_ROOT\Directory\shell` 下新建一个项，命名为 `Sublime Text 3`，并将其默认数值的数据修改为 `用 Sublime Text 3 打开`，这就是显示在右键菜单上的文字。

### command

在 `Sublime Text 3` 下新建项 `command`，并将其默认数值的数据修改为 `C:\Program Files\Sublime Text 3\sublime_text.exe %1`，该值以实际安装路径为准。
