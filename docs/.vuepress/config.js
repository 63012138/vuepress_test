delete require.cache[require.resolve('../../plugins/vuepress-comment')];

module.exports = {
  title: 'VUEPRESS',
  description: '初尝vuepress',
  // 注入到当前页面的 HTML <head> 中的标签
  head: [
    // ['script', { src: 'https://cdn.jsdelivr.net/npm/core-js/client/shim.min.js' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  base: '/vuepress_test/', // 这是部署到github相关的配置 下面会讲
  markdown: {
    lineNumbers: true, // 代码块显示行号
  },
  configureWebpack: {
    // devServer: {
    //   headers: {
    //     'Access-Control-Allow-Origin': '*',
    //   },
    // },
  },
  plugins: [
    'vuepress-plugin-cat',
    require('../../plugins/vuepress-tabs'),
    [
      require('../../plugins/vuepress-comment'),
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
    sidebarDepth: 2, // 将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
    lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
    smoothScroll: true, // 平滑滚动
    nav: [
      { text: '首页', link: '/' },
      { text: '笔记', link: '/pages/' },
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
        '',
        // { title: '初始化', sidebarDepth: 1, children: ['/pages/Config.md'] },
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
    },
  },
};
