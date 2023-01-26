<template>
  <div :class="{ modal: true, 'p-0': displayImgSrc !== null }">
    <div class="modal-header">
      <span class="modal-icon close" @click="kcloseArtGalleryModal()"></span>
      <span class="modal-icon"></span>
      <span class="modal-icon"></span>
      <button
        class="back-arrow"
        @click="kCloseMainImage()"
        v-if="displayImgSrc !== null"
      >
        <v-icon class="icon">mdi-arrow-left</v-icon>
      </button>
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
    <div
      :class="{ 'modal-body': true, 'p-0': displayImgSrc !== null }"
      id="modalBody"
    >
      <div v-show="displayImgSrc === null" id="gridContainer"></div>
      <MainImage
        v-if="displayImgSrc !== null"
        :displayImgSrc="displayImgSrc"
        ref="mainImage"
      ></MainImage>
    </div>
  </div>
</template>

<script src="../scripts/ArtGalleryModal.js"></script>

<style scoped src="../styles/Modal.scss" lang="scss"></style>
<style scoped src="../styles/ArtGalleryModal.scss" lang="scss"></style>
