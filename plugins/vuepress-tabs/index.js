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
