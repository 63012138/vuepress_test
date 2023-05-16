delete require.cache[require.resolve('./utils')];

const { tabs } = require('./utils');

module.exports = (opts, ctx) => {
  return {
    name: 'vuepress-tabs',
    enhanceAppFiles: `import {Tabs, TabPane} from 'element-ui'; export default ({Vue})=>{Vue.use(Tabs);Vue.use(TabPane)}`,
    extendMarkdown: (md) => {
      tabs(md);
    },
  };
};
