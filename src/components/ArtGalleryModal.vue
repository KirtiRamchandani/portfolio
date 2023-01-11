<template>
  <div class="modal">
    <div class="modal-header">
      <span class="modal-icon close" @click="kcloseArtGalleryModal()"></span>
      <span class="modal-icon"></span>
      <span class="modal-icon"></span>
    </div>
    <div class="modal-body" id="modalBody">
      <MainImage
        v-show="displayImgSrc !== null"
        :displayImgSrc="displayImgSrc"
      ></MainImage>
      <div v-show="displayImgSrc === null" id="gridContainer"></div>
    </div>
  </div>
</template>

<script src="../scripts/ArtGalleryModal.js"></script>

<style scoped src="../styles/Modal.scss" lang="scss"></style>
<style scoped src="../styles/ArtGalleryModal.scss" lang="scss"></style>
