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

export default {
  name: "App",
  components: {
    IndexScreen,
    SplashScreen,
  },
  data() {
    return { isLoading: true };
  },
  mounted() {
    this.$refs.IndexScreen.isArtGalleryOpen = true;
    setTimeout(() => {
      this.$refs.IndexScreen.isArtGalleryOpen = false;
      this.isLoading = false;
    }, 4000);
  },
};
</script>

<style lang="scss">
.app {
  background-color: #c1e4e0 !important;
  color: #31302c !important;
  font-family: Jost, sans-serif;
  font-size: 15px;
  margin: 0;
  height: 100%;
  background-size: 40px 40px !important;
  background-image: linear-gradient(90deg, #faf4e6 1px, transparent 0),
    linear-gradient(180deg, #faf4e6 1px, transparent 0) !important;
  overflow: hidden;
  background-repeat: repeat;
}
</style>
