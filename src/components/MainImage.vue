<template>
  <div style="position: relative" class="container">
    <div class="close-button">
      <v-icon @click="closeImage">mdi-arrow-left</v-icon>
    </div>

    <div class="main-img-wrapper">
      <img :src="displayImgSrc" id="primary-img" draggable="false" />
    </div>
    <div class="zoom-icons">
      <v-icon @click="zoomOut()" :class="{ disabled: zoom === 1 }"
        >mdi-magnify-minus</v-icon
      >
      <v-icon @click="zoomIn()" class="">mdi-magnify-plus</v-icon>
    </div>
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
