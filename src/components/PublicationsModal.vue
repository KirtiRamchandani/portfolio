<template>
  <div class="modal">
    <div class="modal-header">
      <span class="modal-icon close" @click="kclosePublicationModal()"></span>
      <span class="modal-icon"></span>
      <span class="modal-icon"></span>
    </div>
    <div class="modal-body">
      <h1>Publications</h1>
      <div class="publications">
        <div
          class="publication-card"
          v-for="(publication, index) in publications"
          :key="index"
        >
          <a v-if="publication.link" :href="publication.link" target="_blank">{{
            publication.name
          }}</a>
          <span v-else>{{ publication.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="../scripts/PublicationsModal.js"></script>

<style scoped src="../styles/Modal.scss" lang="scss"></style>
<style scoped src="../styles/PublicationsModal.scss" lang="scss"></style>
