<template>
  <v-app class="app">
    <SplashScreen :isLoading="isLoading" />
    <v-main>
      <IndexScreen ref="IndexScreen" />
    </v-main>
  </v-app>
</template>

<script>
import IndexScreen from "./components/IndexScreen";
import SplashScreen from "./components/SplashScreen";
import { blogAndIdMapping } from "./assets/blogs/blogAndIdMapping";

export default {
  name: "App",
  components: {
    IndexScreen,
    SplashScreen,
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
          setTimeout(() => {
            this.$refs.IndexScreen.isHomeOpen = false;
            this.$refs.IndexScreen.isBlogsOpen = true;
            this.$refs.IndexScreen.$refs.blogsModal.openedBlogId = blogId;
          }, 4000);
        }
      }
    },
  },
  mounted() {
    this.$refs.IndexScreen.isArtGalleryOpen = true;
    setTimeout(() => {
      this.$refs.IndexScreen.isArtGalleryOpen = false;
      this.isLoading = false;
    }, 4000);

    // redirect to blogs modal and open the specified blog in the URL.
    this.redirectToBlogsModalIfUrlContainsBlogTitle();
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
