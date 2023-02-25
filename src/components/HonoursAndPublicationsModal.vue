<template>
  <div class="modal">
    <div class="modal-header">
      <span
        class="modal-icon close"
        @click="closeHonoursAndPublicationsModal()"
      ></span>
      <span class="modal-icon"></span>
      <span class="modal-icon"></span>
    </div>
    <div class="modal-body">
      <h1>Honours And Publications</h1>
      <div class="honours-and-rewards">
        <div
          class="honours-and-reward-card"
          v-for="(honoursAndReward, index) in honoursAndRewards"
          :key="index"
        >
          <a
            v-if="honoursAndReward.link"
            :href="honoursAndReward.link"
            target="_blank"
            >{{ honoursAndReward.name }}</a
          >
          <span v-else>{{ honoursAndReward.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="../scripts/HonoursAndPublicationsModal.js"></script>

<style scoped src="../styles/Modal.scss" lang="scss"></style>
<style
  scoped
  src="../styles/HonoursAndPublicationsModal.scss"
  lang="scss"
></style>
