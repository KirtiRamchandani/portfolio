<template>
  <div v-html="getBlogContent()"></div>
</template>

<script>
// import blog1 from "../assets/blogs/blog1.txt";
import blogPlaceholder from "../assets/blogs/blogPlaceholder.txt";

export default {
  data() {
    return {};
  },
  props: ["blogId"],
  methods: {
    getBlogContent: function (id = null) {
      if (id === null) return blogPlaceholder
    },
  },
};
</script>

<style src="../styles/DetailedBlog.scss" lang="scss"></style>
