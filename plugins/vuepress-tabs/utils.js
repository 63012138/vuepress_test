const container = require('markdown-it-container');
function tabs(md) {
  md.use(container, 'tabs', {
    render(tokens, idx) {
      const token = tokens[idx];
      const reg = /^tabs\s+options=({[^"]*})/;
      const match = token.info.trim().match(reg);
      const opts = match ? tranStrToObj(match[1]) : {};
      const options = {
        type: 'border-card',
        ...opts,
      };
      const attr = tranObjToAttrs(options);
      if (token.nesting === 1) {
        return `<el-tabs ${attr} class="tabs">\n`;
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

function tranStrToObj(str) {
  try {
    return new Function('return ' + str)();
  } catch (err) {
    console.log('str trans to obj failure!\n', err);
    return {};
  }
}

function tranObjToAttrs(obj) {
  let str = '';
  for (let k in obj) {
    str += `${k}=${obj[k]} `;
  }
  return str;
}

module.exports = {
  tabs,
  tabpane,
};
