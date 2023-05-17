const fs = require('fs');
const Container = require('markdown-it-container');
function tabs(md) {
  // console.log(md);
  md.use(Container, 'tabs', {
    render: (tokens, idx) => {
      const token = tokens[idx];
      const content = token.info.trim().slice('tabs'.length).trim();

      // const reg = /\+\+\+ (?<label>.*?)\n*(?<content>.*?)\n\+\+\+/;
      // const greg = /\+\+\+ (?<label>.*?)\n*(?<content>.*?)\n\+\+\+/g;
      // const arr = content.match(greg);
      // const text = arr ? '' : content;
      // arr &&
      //   arr.forEach((i) => {
      //     const res = i.match(reg);
      //     console.log(res);
      //     text += tab({ label: res[1], content: res[2] });
      //   });
      if (token.nesting === 1) {
        return `<el-tabs>${content}`;
      } else {
        return `</el-tabs>`;
      }
    },
  });
}

function tab(md) {
  md.use(Container, 'tabpane', {
    // 这里添加了 label 属性的解析
    // 可以解析 label="xxx" 这样的语法
    validate: function (params) {
      return params.trim().match(/^tabpane\s*(.*)$/);
    },
    render: function (tokens, idx) {
      const token = tokens[idx];
      const info = token.info.trim().match(/^tabpane\s+(.*)$/)[1];
      const label = info.match(/label=["']([^'"]*)['"]/);
      const attrs = label ? `label="${label[1]}"` : '';
      if (token.nesting === 1) {
        // ...
        return `<el-tab-pane ${attrs}>`;
      } else {
        // ...
        return `</el-tab-pane>`;
      }
    },
  });
}

module.exports = {
  tabs,
  tab,
};
