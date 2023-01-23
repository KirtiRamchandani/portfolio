<template>
  <div class="modal">
    <div class="modal-header">
      <span class="modal-icon close" @click="kcloseArtGalleryModal()"></span>
      <span class="modal-icon"></span>
      <span class="modal-icon"></span>
      <input
        class="zoom-controller"
        type="range"
        step="0.1"
        min="1"
        max="2"
        value="1"
        v-if="displayImgSrc !== null"
        @change="updateImageZoom($event)"
        @mousemove="updateImageZoom($event)"
      />
    </div>
    <div class="modal-body" id="modalBody">
      <MainImage
        v-if="displayImgSrc !== null"
        :displayImgSrc="displayImgSrc"
        ref="mainImage"
      ></MainImage>
      <div v-show="displayImgSrc === null" id="gridContainer"></div>
    </div>
  </div>
</template>

<script src="../scripts/ArtGalleryModal.js"></script>

<style scoped src="../styles/Modal.scss" lang="scss"></style>
<style scoped src="../styles/ArtGalleryModal.scss" lang="scss"></style>
