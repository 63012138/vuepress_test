# 4. 拓展

## 1. 引入 element-ui

1. 安装 element  
   `npm install element-ui`
2. 在`.vuepress`下创建`enhanceApp.js`

```js
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

export default ({ Vue }) => {
  Vue.use(ElementUI);
};
```

3. 将`core-js`的版本改为 2.x  
   `npm install core-js@2.6.11`

   core-js 是 js 标准库的 polyfill，是做兼容处理的。vuepress 1.x 版本下的`core-js`默认是 3.x，而 element 需要在`core-js 2.x`版本才能正常运行，故需要降低版本

## 2. 插件

VuePress 提供了多个官方插件和第三方插件，可以用于增强 VuePress 的功能和扩展 VuePress 的应用场景。

### 1. 自带插件

**VuePress 自带插件：**

- [@vuepress/plugin-last-updated](https://vuepress.vuejs.org/zh/plugin/official/plugin-last-updated.html) // md 最后更新时间展示
- [@vuepress/plugin-register-components](https://vuepress.vuejs.org/zh/plugin/official/plugin-register-components.html) // 注册组件的插件

**默认主题自带的插件：**

- [@vuepress/plugin-active-header-links](https://vuepress.vuejs.org/zh/plugin/official/plugin-active-header-links.html) // 页面滚动时自动激活侧边栏链接的插件
- [@vuepress/plugin-nprogress](https://vuepress.vuejs.org/zh/plugin/official/plugin-nprogress.html) // 进度条插件。
- [@vuepress/plugin-search](https://vuepress.vuejs.org/zh/plugin/official/plugin-search.html) // 搜索插件
- [vuepress-plugin-container](https://vuepress-community.netlify.app/zh/plugins/container/#vuepress-plugin-container) // 注册 md 容器的插件
- [vuepress-plugin-smooth-scroll](https://vuepress-community.netlify.app/zh/plugins/smooth-scroll/#vuepress-plugin-smooth-scroll) // 平滑滚动插件

### 2. 手动安装插件

非自带的插件也可以手动安装

#### 返回顶部插件

[@vuepress/plugin-back-to-top](https://github.com/vuejs/vuepress/tree/master/packages/@vuepress/plugin-back-to-top)

1. 安装

```bash
yarn add -D @vuepress/plugin-back-to-top
# OR npm install -D @vuepress/plugin-back-to-top
```

2. 使用

```js
module.exports = {
  plugins: ['@vuepress/back-to-top'],
};
```

#### 其他插件

1. [官方插件](https://vuepress.vuejs.org/zh/plugin/official/plugin-active-header-links.html#%E5%AE%89%E8%A3%85)
2. [Github 三方插件](https://github.com/search?q=vuepres+plugin&type=repositories&s=stars&o=desc)

## 3. 自定义插件

### [开发插件](https://vuepress.vuejs.org/zh/plugin/writing-a-plugin.html)

::: tip
一个 VuePress 插件应该是一个 `CommonJS 模块`，因为 VuePress 插件运行在 Node 端。
:::

```js
// #1
module.exports = {
  // ...
};
```

```js
// #2
module.exports = (options, ctx) => {
  return {
    // ...
  };
};
```

#### 生命周期

##### ready

- 类型: `AsyncFunction`
- 作用域：`dev|build`

::: tip 提示
`ready` 钩子在应用初始化之后，并在某些特定的函数式 API 执行之前执行。这些函数式 API 包括：

- [clientDynamicModules](./option-api.md#clientdynamicmodules)
- [enhanceAppFiles](./option-api.md#enhanceappfiles)
  :::

##### updated

- 类型: `Function`
- 作用域：`dev`

##### generated

- 类型: `AsyncFunction`
- 作用域：`build`

在生产环境的构建结束后被调用，生成的页面的路径数组将作为该函数的第一个参数。

```js
module.exports = {
  async ready() {
    // ...
  },
  updated() {
    // ...
  },
  async generated(pagePaths) {
    // ...
  },
};
```

#### 插件常用 API

1. extendMarkdown：用于扩展 Markdown 语法，可以添加自定义的语法或转换规则。
2. define：用于向 VuePress 应用程序中添加全局变量或常量，可以在 Markdown 文件或 Vue 组件中使用。
3. chainWebpack：用于修改 VuePress 应用程序的 Webpack 配置，可以添加自定义的 Webpack 插件或 Loader。
4. registerComponents：用于注册全局的 Vue 组件或指令，可以在 Markdown 文件或 Vue 组件中使用。
5. enhanceAppFiles：用于修改 VuePress 应用程序的入口文件，可以添加自定义的 Vue 组件、指令或混入。
6. beforeDevServer 和 afterDevServer：用于在 VuePress 开发服务器启动前或启动后执行自定义的操作，例如修改 Webpack 配置、启动代理服务器等。
7. alias：用于为 VuePress 应用程序设置别名，可以方便地引用其他模块或资源。

### tabs 插件

vuepress-tabs，基于 `element-ui` 和 `markdown-it-container` 的 tabs 栏插件

#### 使用方式

```markdown
<!-- options配置参考element-ui -->

:::: tabs options={}

::: tabpane label="tab1"
这里是 tab1
:::

::: tabpane label="tab2"
here is tab2
:::

::::
```

#### 效果

:::: tabs options={}
::: tabpane label="tab1"
这里是 tab1
:::
::: tabpane label="tab2"
here is tab2
:::
::::

#### 具体代码实现

:::: tabs options={'tab-position': 'left'}
::: tabpane label="index.js"

```js
const { tabs, tabpane } = require('./utils');
const path = require('path');

module.exports = {
  name: 'vuepress-tabs',
  enhanceAppFiles: path.resolve(__dirname, 'tabs.js'),
  extendMarkdown: (md) => {
    tabs(md);
    tabpane(md);
  },
};
```

:::

::: tabpane label="utils.js"

```js
const container = require('markdown-it-container');
function tabs(md) {
  md.use(container, 'tabs', {
    render(tokens, idx) {
      const token = tokens[idx];
      const reg = /^tabs\s+options=({[^"]*})/;
      const match = token.info.trim().match(reg);
      const opts = match ? tranStrToObj(match[1]) : {};
      const options = {
        type: 'border-card',
        ...opts,
      };
      const attr = tranObjToAttrs(options);
      if (token.nesting === 1) {
        return `<el-tabs ${attr} class="tabs">\n`;
      } else {
        return `</el-tabs>\n`;
      }
    },
  });
}

function tabpane(md) {
  md.use(container, 'tabpane', {
    // validate(params) {
    //   return params.trim().match(/^tabpane\s+label="([^"]+)"/);
    // },
    render(tokens, idx) {
      const reg = /^tabpane\s+label="([^"]+)"/;
      const token = tokens[idx];
      const match = token.info.trim().match(reg);
      const label = match ? match[1] : 'unnamed';
      if (token.nesting === 1) {
        return `<el-tab-pane class="tabpane" label="${label}">\n`;
      } else {
        return `</el-tab-pane>\n`;
      }
    },
  });
}

function tranStrToObj(str) {
  try {
    return new Function('return ' + str)();
  } catch (err) {
    console.log('str trans to obj failure!\n', err);
    return {};
  }
}

function tranObjToAttrs(obj) {
  let str = '';
  for (let k in obj) {
    str += `${k}=${obj[k]} `;
  }
  return str;
}

module.exports = {
  tabs,
  tabpane,
};
```

:::
::: tabpane label="tabs.js"

```js
import { Tabs, TabPane } from 'element-ui';
import './index.css';

export default ({ Vue }) => {
  Vue.use(Tabs);
  Vue.use(TabPane);
};
```

:::
::: tabpane label="index.css"

```css
.tabs {
  margin: 20px 0;
}
```

:::
::::

### gitalk 插件

...
