<template>
  <div style="position: relative" class="container">
    <div class="main-img-wrapper">
      <div id="primary-img">
        <img :src="displayImgSrc" v-drag />
      </div>
    </div>
    <!-- <div class="zoom-icons">
      <v-icon @click="zoomOut()" :class="{ disabled: zoom === 1 }"
        >mdi-magnify-minus</v-icon
      >
      <v-icon @click="zoomIn()">mdi-magnify-plus</v-icon>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      zoom: 1.0,
    };
  },
  props: ["displayImgSrc"],
  methods: {
    closeImage: function () {
      this.zoom = 1;
      this.setImageZoom(this.zoom);
      this.$parent.displayImgSrc = null;
    },
    zoomIn: function () {
      this.zoom += 0.1;
      this.setImageZoom(this.zoom);
    },
    zoomOut: function () {
      if (this.zoom > 1) {
        this.zoom -= 0.1;
        this.setImageZoom(this.zoom);
      }
    },
    setImageZoom(value) {
      const img = document.getElementById("primary-img");
      img.style.transform = `scale(${value})`;
    },
  },
};
</script>

<style scoped src="../styles/ArtGalleryModal.scss" lang="scss"></style>
