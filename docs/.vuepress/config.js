module.exports = {
  title: 'Y 札记',
  description: '学习笔记和总结',
  themeConfig: {
    sidebar: {
      '/poplar-css/': [
        {
          title: 'Poplar CSS',
          collapsable: false,
          sidebarDepth: 2,
          children: [
            ['', '介绍'],
            ['base', '基础'],
            ['text', '文本'],
            ['float', '浮动'],
            ['flexbox', '弹性盒子'],
            ['how-to-write-css', '我们应该怎样编写样式']
          ]
        }
      ],
      '/note/': [
        {
          title: '笔记',
          path: '/note',
          collapsable: false,
          sidebarDepth: 2,
          children: [
            'node-sass-local-install'
          ]
        }
      ]
    }
  }
}
