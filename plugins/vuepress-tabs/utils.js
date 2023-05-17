const fs = require('fs');
const container = require('markdown-it-container');
function tabs(md) {
  // console.log(md);
  md.use(container, 'tabs', {
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
  md.use(container, 'tabpane', {
    render: (tokens, idx) => {
      const token = tokens[idx];
      const content = token.info.trim().slice('tabpane'.length).trim();

      if (token.nesting === 1) {
        return `<el-tab-pane label="123">${content}`;
      } else {
        return `</el-tab-pane>`;
      }
    },
  });
}

module.exports = {
  tabs,
  tab,
};
