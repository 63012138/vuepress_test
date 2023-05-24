# 2. 快速上手

## 安装

在介绍 VuePress 的上手流程前，我们需要先了解一些基本概念和术语：

- 页面：指的是 VuePress 中的一个单独的页面，通常对应于一个 Markdown 文件或者一个 Vue.js 单文件组件。
- 主题：指的是 VuePress 中的一个外观模板，可以用来改变 VuePress 文档站点的外观和风格。
- 配置文件：指的是 VuePress 中的一个 JavaScript 文件，用于配置 VuePress 的各种选项和参数。

了解了这些基本概念和术语后，我们就可以开始快速上手 VuePress 了。下面是一些快速上手的步骤：

::: warning 前提条件
VuePress 需要 [Node.js](https://nodejs.org/en/) >= 8.6
:::

本文会帮助你从头搭建一个简单的 VuePress 文档。如果你想在一个现有项目中使用 VuePress 管理文档，从步骤 3 开始。

1. 创建并进入一个新目录

   ```bash
   mkdir vuepress-starter && cd vuepress-starter
   ```

2. 使用你喜欢的包管理器进行初始化

   ```bash
   yarn init # npm init -y
   ```

3. 将 VuePress 安装为本地依赖

   我们已经不再推荐全局安装 VuePress

   ```bash
   yarn add -D vuepress # npm install -D vuepress
   ```

   ::: warning 注意
   如果你的现有项目依赖了 webpack 3.x，我们推荐使用 [Yarn](https://classic.yarnpkg.com/zh-Hans/) 而不是 npm 来安装 VuePress。因为在这种情形下，npm 会生成错误的依赖树。
   :::

4. 创建你的第一篇文档

   ```bash
   mkdir docs && echo '# Hello VuePress' > docs/README.md
   ```

5. 在 `package.json` 中添加一些 [scripts](https://classic.yarnpkg.com/zh-Hans/docs/package-json#toc-scripts)

   这一步骤是可选的，但我们推荐你完成它。在下文中，我们会默认这些 scripts 已经被添加。

   ```json
   {
     "scripts": {
       "docs:dev": "vuepress dev docs",
       "docs:build": "vuepress build docs"
     }
   }
   ```

6. 在本地启动服务器

   ```bash
   yarn docs:dev # npm run docs:dev
   ```

   VuePress 会在 [http://localhost:8080](http://localhost:8080) 启动一个热重载的开发服务器。

## 目录结构

VuePress 遵循 **“约定优于配置”** 的原则，推荐的目录结构如下：

```
.
├── docs
│   ├── .vuepress _(**可选的**)_ // 用于存放全局的配置、组件、静态资源等。
│   │   ├── `components` _(**可选的**)_ // 该目录中的 Vue 组件将会被自动注册为全局组件。
│   │   ├── `theme` _(**可选的**)_ // 用于存放本地主题
│   │   │ └── Layout.vue
│   │   ├── `public` _(**可选的**)_ // 静态资源目录
│   │   ├── `styles` _(**可选的**)_ // 用于存放样式相关的文件
│   │   │   ├── index.styl // 将会被自动应用的全局样式文件，会生成在最终的 CSS 文件结尾，优先级高于默认样式
│   │   │   └── palette.styl // 用于重写默认颜色常量，或者设置新的 stylus 颜色常量。
│   │   ├── `templates` _(**可选的, 谨慎配置**)_ // 存储 HTML 模板文件。
│   │   │   ├── dev.html // 用于开发环境的 HTML 模板文件。
│   │   │   └── ssr.html // 构建时基于 Vue SSR 的 HTML 模板文件。
│   │   ├── `config.js` _(**可选的**)_ // 配置文件的入口文件
│   │   └── `enhanceApp.js` _(**可选的**)_ // 客户端应用的增强
│   │ 
│   ├── README.md
│   ├── guide
│   │   └── README.md
│   └── config.md
│ 
└── package.json
```

::: warning 注意
请留意目录名的大写。
:::

### 默认的页面路由

此处我们把 `docs` 目录作为 `targetDir` （参考 [命令行接口](../api/cli.md#基本用法)），下面所有的“文件的相对路径”都是相对于 `docs` 目录的。在项目根目录下的 `package.json` 中添加 `scripts` ：

```json
{
  "scripts": {
    "dev": "vuepress dev docs",
    "build": "vuepress build docs"
  }
}
```

对于上述的目录结构，默认页面路由地址如下：

| 文件的相对路径     | 页面路由地址   |
| ------------------ | -------------- |
| `/README.md`       | `/`            |
| `/guide/README.md` | `/guide/`      |
| `/config.md`       | `/config.html` |

## 页面基础写法

在 VuePress 中，页面是由 Markdown 文件或 Vue.js 单文件组件构成的。Markdown 文件通常用于编写简单的文档内容，而 Vue.js 单文件组件则可以用于编写更加复杂的页面和组件。下面是一些页面基础写法的示例：

### 1. Markdown 文件的基础写法

Markdown 文件是 VuePress 中最常用的页面类型，它使用简单的文本格式来编写文档内容。以下是一个 Markdown 文件的基础写法示例：

```markdown
# Hello World

这是一个简单的 Markdown 文件，用于演示 VuePress 的基础用法。

## 二级标题

这是一个二级标题。

<h3>这是h3标签标题</h3>

这是一个三级标题。

- 列表项 1
- 列表项 2
- 列表项 3
```

在 VuePress 中，Markdown 文件会被解析为 HTML 文件，并使用 Vue.js 来渲染页面。在 Markdown 文件中，可以使用 Markdown 语法来编写文档内容，也可以使用 HTML 标签来实现更加复杂的页面效果。

### 2. Vue.js 单文件组件的基础写法

#### 作为页面

Vue.js 单文件组件是一种由 template、script 和 style 三部分组成的文件，可以用于编写更加复杂的页面和组件。以下是一个 Vue.js 单文件组件的基础写法示例：

```vue
<template>
  <div>
    <h1>Page页面</h1>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: '这是一个简单的Vue.js单文件组件，用于演示VuePress的基础用法。',
    };
  },
};
</script>

<style scoped>
div {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
  background: linear-gradient(to right, #ffdde1, #ee9ca7);
  color: white;
}
</style>
```

在 Vue.js 单文件组件中，template 部分用于编写页面结构，script 部分用于编写 JavaScript 逻辑，style 部分用于编写 CSS 样式。在 VuePress 中，Vue.js 单文件组件会被解析为 HTML 文件，并使用 Vue.js 来渲染页面。

#### 作为组件

同时，vue 单文件也可以作为组件，直接在 md 文件中使用

将 vue 组件放至`/docs/.vuepress/components` 下，vuepress 会全局注册组件，然后就可以在 md 文件中直接使用了

```vue
<template>
  <h1>MyComponent</h1>
</template>

<script>
export default {};
</script>

<style scoped>
h1 {
  color: plum;
  transition: 0.2s all ease;
}
h1:hover {
  font-size: 2.4rem;
}
</style>
```
