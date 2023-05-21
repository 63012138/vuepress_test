# 5. 部署

## github page

可打包部署至 github page

1. 创建仓库并关联 vuepress 项目
2. 打包并推送至 github 仓库
3. 创建一个子仓库，只推送 dist 文件夹
   `git subtree push --prefix dist origin gh-pages`
4. 在 github 仓库中，`Settings -> Pages -> Branch ` 选择`gh-pages`分支，github 就会自动部署静态资源
5. 部署的地址默认为 `http://userName.github.io/repoName`
   [https://63012138.github.io/vuepress_test/](https://63012138.github.io/vuepress_test/)

可以写一个`deploy`脚本实现自动部署

```sh
# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

git init
git add -A
git commit -m 'deploy'

git push
git subtree push --prefix dist origin gh-pages
```

## 服务器

nginx 直接指向静态文件目录即可

```nginx
server {
  listen 443;
  server_name vuepress.codeman.ink;
  root /www/wwwroot/vuepress/dist/;

  location /vuepress_test/ { # 如果config.js中配置了base，需要将base映射到正确的目录，否则会访问不到资源
    alias /www/wwwroot/vuepress/dist/;
  }
}
```

[http://vuepress.codeman.ink/](http://vuepress.codeman.ink/)

## SEO

...
