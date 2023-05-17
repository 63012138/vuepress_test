const container = require('markdown-it-container');

module.exports = {
  extendMarkdown: (md) => {
    md.use(container, 'tabpane', {
      validate(params) {
        return params.trim().match(/^tabpane\s+(.*)$/);
      },
      render(tokens, idx) {
        const token = tokens[idx];
        const match = token.info.trim().match(/^tabpane\s+(.*)$/);
        if (token.nesting === 1) {
          // 开始一个tabpane容器
          const label = match[1];
          return `<el-tab-pane class="tabpane" label="${label}">\n`;
        } else {
          // 结束一个tabpane容器
          return `</el-tab-pane>\n`;
        }
      },
    });

    md.use(container, 'tabs', {
      render(tokens, idx) {
        const token = tokens[idx];
        if (token.nesting === 1) {
          // 开始一个tabs容器
          return `<el-tabs class="tabs">\n`;
        } else {
          // 结束一个tabs容器
          return `</el-tabs>\n`;
        }
      },
    });
  },
};
