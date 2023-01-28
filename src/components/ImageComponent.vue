<template>
  <div class="wrapper">
    <img :src="imgSrc" @click="open(imgSrc)" draggable="false" />
  </div>
</template>

<script>
export default {
  props: {
    imgSrc: String,
    openImage: {
      type: Function,
      default: () => {},
    },
  },
  methods: {
    open: function (s) {
      this.openImage(s);
    },
  },
};
</script>

<style scoped src="../styles/ArtGalleryModal.scss" lang="scss"></style>
