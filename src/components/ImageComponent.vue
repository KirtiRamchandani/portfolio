<template>
  <div class="wrapper">
    <img
      :class="`image${index}`"
      :src="imgSrc"
      alt="Enlarged image"
      @click="open(imgSrc, index)"
      draggable="false"
    />
  </div>
</template>

<script>
export default {
  props: {
    imgSrc: String,
    index: Number,
    openImage: {
      type: Function,
      default: () => {},
    },
  },
  methods: {
    open: function (s, i) {
      this.openImage(s, i);
    },
  },
};
</script>

<style scoped src="../styles/ArtGalleryModal.scss" lang="scss"></style>
