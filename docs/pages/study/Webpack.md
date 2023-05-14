# webpack

## 单独提取 css 文件

要想 css 文件单独提取，而不是在 js 文件中，需要使用到一个插件

`npm i mini-css-extract-plugin -D`

**使用:**

```js
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          // 创建style标签，将样式放入
          // 'style-loader',
          // 这个loader取代style-loader 作用：提取js中的css成单独文件 (变成link标签引入，原本是style标签引入)
          MiniCssExtractPlugin.loader,
          // 将css文件整合到js文件中
          'css-loader'
        ]
      },
    ]
  },

   plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
      // 对输出的css进行重命名
      filename: 'css/built.css',
    })
  ],
```

## css 兼容处理

`npm i postcss-loader postcss-preset-env -D`
