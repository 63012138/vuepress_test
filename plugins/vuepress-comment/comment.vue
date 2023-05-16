<template>
  <div></div>
</template>

<script>
import { clear, render } from './utils';
export default {
  name: 'Comment',
  mounted() {
    // console.log(this.$frontmatter);
    setTimeout(() => {
      this.reRender();
    }, 1000);

    this.$router.afterEach((to, from) => {
      if (to && from && to.path === from.path) {
        return;
      }
      this.reRender(to, from);
    });
  },
  methods: {
    reRender(to = {}, from = {}) {
      const frontmatter = {
        to,
        from,
        ...this.$frontmatter,
      };
      this.$nextTick(() => {
        clear() && frontmatter.comment && render(frontmatter);
      });
    },
  },
};
</script>

<style>
</style>
