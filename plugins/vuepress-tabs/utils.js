const container = require('markdown-it-container');
function tabs(md) {
  md.use(container, 'tabs', {
    render(tokens, idx) {
      const token = tokens[idx];
      const reg = /^tabs\s+type="([^"]+)"/;
      const match = token.info.trim().match(reg);
      const type = match ? match[1] : 'border-card';
      if (token.nesting === 1) {
        return `<el-tabs type="${type}" class="tabs">\n`;
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

module.exports = {
  tabs,
  tabpane,
};
