const path = require('path');

module.exports = (opts, ctx) => {
  return {
    name: 'vuepress-comment',
    define: {
      COMMENT_OPTIONS: opts.options || {},
      COMMENT_CONTAINER: opts.container || 'main.page',
    },
    enhanceAppFiles: path.resolve(__dirname, 'comment.js'),
    globalUIComponents: 'Comment',
  };
};
