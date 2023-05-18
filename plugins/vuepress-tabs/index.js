const { tabs, tabpane } = require('./utils');
module.exports = {
  extendMarkdown: (md) => {
    tabs(md);
    tabpane(md);
  },
};
