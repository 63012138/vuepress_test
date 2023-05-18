const { tabs, tabpane } = require('./utils');

const importStr = `import {Tabs, TabPane} from 'element-ui';
                   export default({Vue}) => {
                      Vue.use(Tabs);
                      Vue.use(TabPane);
                   }`;

module.exports = {
  enhanceAppFiles: importStr,
  extendMarkdown: (md) => {
    tabs(md);
    tabpane(md);
  },
};
