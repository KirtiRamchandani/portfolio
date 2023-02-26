<template>
  <v-app class="app">
    <v-main>
      <IndexScreen ref="IndexScreen" />
    </v-main>
  </v-app>
</template>

<script>
import IndexScreen from "./components/IndexScreen";
import ArtGalleryModal from "./components/ArtGalleryModal";
import { blogAndIdMapping } from "./assets/blogs/blogAndIdMapping";
import Vue from "vue";

export default {
  name: "App",
  components: {
    IndexScreen,
  },
  data() {
    return { isLoading: true };
  },
  methods: {
    redirectToBlogsModalIfUrlContainsBlogTitle: function () {
      const urlParams = new URLSearchParams(window.location.search);
      if (urlParams.has("blog")) {
        const blogTitle = urlParams.get("blog");
        const blogId = blogAndIdMapping[blogTitle];
        if (blogId) {
          this.$refs.IndexScreen.isHomeOpen = false;
          setTimeout(() => {
            this.$refs.IndexScreen.isBlogsOpen = true;
            this.$refs.IndexScreen.$refs.blogsModal.openedBlogId = blogId;
          }, 100);
        }
      }
    },
  },
  mounted() {
    // invokes art gallery modal
    const artGalleryModal = Vue.extend(ArtGalleryModal);
    new artGalleryModal();

    // redirect to blogs modal and open the specified blog in the URL.
    // this.redirectToBlogsModalIfUrlContainsBlogTitle();
  },
};
</script>

<style lang="scss">
.app {
  background-color: #3aafa9 !important;
  color: #31302c !important;
  font-family: Jost, sans-serif;
  font-size: 15px;
  margin: 0;
  height: 100%;
  background-size: 40px 40px !important;
  background-image: linear-gradient(90deg, #2b7a78 1px, transparent 0),
    linear-gradient(180deg, #2b7a78 1px, transparent 0) !important;
  overflow: hidden;
  background-repeat: repeat;
}
</style>
