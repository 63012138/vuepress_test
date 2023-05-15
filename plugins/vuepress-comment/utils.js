import 'gitalk/dist/gitalk.css';
import Gitalk from 'gitalk';

const id = 'vuepress-plugin-comment';

export function render() {
  const commentDOM = document.createElement('div');
  commentDOM.id = id;
  const parentDOM = document.querySelector(COMMENT_CONTAINER);
  parentDOM.appendChild(commentDOM);
  const gitalk = new Gitalk({ id: location.pathname, ...COMMENT_OPTIONS });
  gitalk.render(id);
}

export function clear() {
  const last = document.querySelector(`#${id}`);
  last && last.remove();
  return true;
}
