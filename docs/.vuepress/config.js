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
