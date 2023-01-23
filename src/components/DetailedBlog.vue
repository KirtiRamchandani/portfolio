<template>
  <div v-html="getBlogContent()"></div>
</template>

<script>
import blog1 from "../assets/blogs/blog1.txt";

export default {
  data() {
    return {};
  },
  props: ["blogId"],
  methods: {
    getBlogContent: function () {
      return blog1;
    },
  },
};
</script>

<style src="../styles/DetailedBlog.scss" lang="scss"></style>
