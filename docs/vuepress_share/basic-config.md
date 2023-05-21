# 3. 基本配置

VuePress 的基本配置包括`config.js`、Front Matter、热更新等内容。

## 1. `config.js`配置文件

`config.js`是 VuePress 的配置文件，用于配置 VuePress 的各种选项和参数。该文件通常位于项目根目录下的`.vuepress`目录中，如果该目录不存在，则需要手动创建。以下是一个简单的`config.js`配置示例：

```javascript
module.exports = {
  title: 'VUEPRESS', // 站点标题
  description: '初尝vuepress', // 站点描述
  head: [
    // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/favicon.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  base: '/vuepress_test/', // 部署站点的基础路径，可将网站部署到子路径下
  markdown: {
    lineNumbers: true, // 代码块显示行号
  },
  configureWebpack: {
    // devServer: { // webpack proxy
    //   headers: {
    //     'Access-Control-Allow-Origin': '*',
    //   },
    // },
  },
  plugins: [
    'vuepress-plugin-cat', // cat
    '@vuepress/back-to-top', // 返回顶部
    require('../../plugins/vuepress-tabs'), // vuepress-tabs
    [
      require('../../plugins/vuepress-comment'), // gitalk
      {
        options: {
          clientID: '2918ebb51485022458dd',
          clientSecret: '0124316d849fe8dc7c0ad222831aec69e1c7626e',
          repo: 'vuepress_test',
          owner: '63012138',
          admin: ['63012138'],
          distractionFreeMode: false,
        },
      },
    ],
  ],
  themeConfig: {
    // 主题配置
    sidebarDepth: 2, // 将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
    lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
    smoothScroll: true, // 平滑滚动
    nav: [
      { text: '首页', link: '/' },
      { text: '笔记', link: '/pages/' },
      { text: '分享', link: '/vuepress_share/' },
      { text: '面试题', link: '/questions/' },
      // 下拉列表
      {
        text: 'Gitee',
        items: [
          { text: 'Gitee地址', link: 'https://gitee.com/PengGeee' },
          {
            text: 'cloud-music-vue',
            link: 'https://gitee.com/PengGeee/vue_cloud_music',
          },
          {
            text: 'socket-chat',
            link: 'https://gitee.com/PengGeee/socket-chat-web',
          },
        ],
      },
    ],
    sidebar: {
      '/pages/': [
        '', // pages默认页面
        {
          title: '学习笔记',
          //  sidebarDepth: 2,
          children: ['/pages/study/vue3/', '/pages/study/Webpack.md'],
        },
        {
          title: '开发笔记',
          children: ['/pages/dev/js/', '/pages/dev/css/'],
        },
      ],
      '/questions/': 'auto',
      '/vuepress_share/': ['', 'introduce', 'getting-started', 'basic-config', 'expand', 'deploy'],
    },
  },
};
```

## 2. Front Matter

Front Matter 是一种位于 Markdown 文件头部的元数据格式，用于设置该页面的一些属性。在 VuePress 中，可以使用 Front Matter 来设置页面的标题、描述、分类、标签等属性。以下是一个简单的 Front Matter 示例：

```css
---
title: MyTitle # 页面标题
lang: zh-CN # 默认en-US
description: null # 描述
# layout: Layout #页面布局
navbar: true #是否开启导航栏
sidebar: auto # 自动生成侧边栏
sidebarDepth: 2 # 侧边栏深度
search: true #是否开启搜索框
tags: #配置搜索tags
  - 问题
  - 测试
prev: true # 上一页 true为默认 false禁用 也可指定地址
next: false # 下一页
---
```

::: tip
front matter 的配置会覆盖`config.js`中的配置
:::
